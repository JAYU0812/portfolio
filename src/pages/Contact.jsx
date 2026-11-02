import { useState, useEffect, useRef, useCallback } from "react";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  UserCheck,
  ShieldCheck
} from "lucide-react";
import { GithubIcon, LinkedinIcon, GoogleIcon } from "../components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittingChannel, setSubmittingChannel] = useState(null); // 'email' | 'whatsapp' | 'google' | 'modal' | null
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [quickLead, setQuickLead] = useState({ name: "", email: "" });
  
  // Google One Tap / Identity States
  const [googleUser, setGoogleUser] = useState(null); // { name, email, picture }
  const [isGoogleSdkReady, setIsGoogleSdkReady] = useState(false);
  const googleBtnContainerRef = useRef(null);

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jay0812soni@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Helper to parse base64 JWT returned by Google Identity Services
  const parseGoogleJwt = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch {
      return null;
    }
  };

  // Google One Tap / Button Credential Callback
  const handleGoogleCredentialResponse = useCallback(async (response) => {
    if (!response?.credential) return;
    const profile = parseGoogleJwt(response.credential);
    if (!profile || !profile.email) return;

    const visitorName = profile.name || "Google User";
    const visitorEmail = profile.email;

    setGoogleUser({
      name: visitorName,
      email: visitorEmail,
      picture: profile.picture || null
    });

    setFormData((prev) => ({
      ...prev,
      name: visitorName,
      email: visitorEmail,
      subject: prev.subject || "1-Tap Google Account Visitor Connect"
    }));

    setSubmittingChannel("google");
    setSubmissionStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: visitorName,
          email: visitorEmail,
          subject: "1-Tap Google Account Visitor Connect",
          message: `Visitor connected their verified Google account (${visitorEmail}) directly from browser Google One Tap.`,
          channel: "google-one-tap"
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissionStatus("success");
        setFeedbackMessage(
          `Welcome, ${visitorName}! Verified with Google (${visitorEmail}). An automated portfolio confirmation has been sent to your inbox, and Jay Soni has been alerted.`
        );
      } else {
        throw new Error(data.error || "Email delivery failed");
      }
    } catch (err) {
      console.warn("Google auto-reply dispatch error:", err);
      setSubmissionStatus("error");
      setFeedbackMessage(
        `Signed in as ${visitorName}, but automated email dispatch encountered an error. You can still reach Jay directly below.`
      );
    } finally {
      setSubmittingChannel(null);
    }
  }, []);

  // Initialize Google One Tap & Render Button
  useEffect(() => {
    if (!googleClientId) return;

    const setupGoogle = () => {
      if (window.google?.accounts?.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: googleClientId,
            callback: handleGoogleCredentialResponse,
            auto_select: false,
            cancel_on_tap_outside: true
          });

          // Auto-prompt Google One Tap on landing
          window.google.accounts.id.prompt();

          // Also render official Google button in container if present
          if (googleBtnContainerRef.current) {
            window.google.accounts.id.renderButton(googleBtnContainerRef.current, {
              theme: "filled_blue",
              size: "large",
              text: "continue_with",
              shape: "pill",
              width: 240
            });
            setIsGoogleSdkReady(true);
          }
        } catch (e) {
          console.warn("Google One Tap error:", e);
        }
      }
    };

    if (window.google?.accounts?.id) {
      setupGoogle();
    } else {
      const interval = setInterval(() => {
        if (window.google?.accounts?.id) {
          clearInterval(interval);
          setupGoogle();
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [googleClientId, handleGoogleCredentialResponse]);

  // Click on Custom Google Button (Triggers live Google One Tap prompt)
  const handleGoogleButtonClick = () => {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
    }
  };

  // Main Email Form Submission Handler
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus("error");
      setFeedbackMessage("Please fill in your name, email address, and message.");
      return;
    }

    setSubmittingChannel("email");
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Project Inquiry via Portfolio",
          message: formData.message,
          channel: "email"
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionStatus("success");
        setFeedbackMessage(
          `Thank you, ${formData.name}! Your message was delivered to Jay Soni, and a confirmation auto-reply with project highlights has been sent to ${formData.email}.`
        );
        setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
      } else {
        throw new Error(data.error || "Failed to dispatch email");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmissionStatus("error");
      setFeedbackMessage(
        "Could not send email automatically. You can click below to launch your email client directly:"
      );
    } finally {
      setSubmittingChannel(null);
    }
  };

  // WhatsApp Button Submission Handler (Form)
  const handleWhatsAppSubmit = async () => {
    if (formData.name && formData.email) {
      setSubmittingChannel("whatsapp");
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "WhatsApp Inquiry",
            message: formData.message || "Contacted via WhatsApp button.",
            channel: "whatsapp"
          })
        });
        setSubmissionStatus("success");
        setFeedbackMessage(
          `Thank you, ${formData.name}! A confirmation auto-reply has been sent to ${formData.email}, and WhatsApp is opening now.`
        );
      } catch (err) {
        console.warn("Background auto-reply failed, proceeding to WhatsApp:", err);
      } finally {
        setSubmittingChannel(null);
      }
    }

    const text = `Hello Jay, my name is ${formData.name || "a visitor"}. ${
      formData.message ? `Regarding: ${formData.message}` : "I'd like to discuss a software project with you."
    }`;
    window.open(`https://wa.me/917990361109?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Quick Card WhatsApp Click (Left Column)
  const handleQuickWhatsAppCard = () => {
    if (formData.name && formData.email) {
      handleWhatsAppSubmit();
    } else {
      setQuickModalOpen(true);
    }
  };

  // Quick Modal Submit
  const handleQuickModalSubmit = async (e) => {
    e.preventDefault();
    setSubmittingChannel("modal");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quickLead.name || "WhatsApp Visitor",
          email: quickLead.email,
          subject: "Quick WhatsApp Inquiry",
          message: "Visitor initiated quick WhatsApp chat from portfolio.",
          channel: "whatsapp"
        })
      });
      setSubmissionStatus("success");
      setFeedbackMessage(
        `Thank you, ${quickLead.name || "there"}! A confirmation auto-reply was sent to ${quickLead.email}.`
      );
    } catch (err) {
      console.warn("Modal auto-reply error:", err);
    } finally {
      setSubmittingChannel(null);
      setQuickModalOpen(false);
      const text = `Hello Jay, my name is ${quickLead.name || "a visitor"}. I'd like to connect with you regarding a project.`;
      window.open(`https://wa.me/917990361109?text=${encodeURIComponent(text)}`, "_blank");
      setQuickLead({ name: "", email: "" });
    }
  };

  return (
    <div className="py-8 sm:py-16 text-[#121316] dark:text-[#F5F5F7] transition-colors duration-200">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2EDE4] dark:bg-[#1C202B] border border-[#E8E5DF] dark:border-[#262933] text-[#C27803] dark:text-[#E8C37D] font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inbound Gateway</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] dark:text-white tracking-tight mt-1 mb-3 sm:mb-4">
            Let’s Discuss Your Next Software Project
          </h1>
          <p className="text-sm sm:text-lg text-[#4A4E57] dark:text-[#A1A7B5] leading-relaxed">
            Interested in building an enterprise PropTech system, an Offline-First mobile app, or discussing an engineering role? Connect in 1-tap with your Google account, WhatsApp, or the inquiry form below.
          </p>
        </div>

        {/* ----------------- 1-TAP GOOGLE CONNECT HERO CARD ----------------- */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#232733] shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#262933] flex items-center justify-center shrink-0 shadow-xs">
                {googleUser?.picture ? (
                  <img
                    src={googleUser.picture}
                    alt={googleUser.name}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                ) : (
                  <GoogleIcon className="w-6 h-6" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-[#121316] dark:text-white">
                    {googleUser ? `Connected as ${googleUser.name}` : "1-Tap Google Connect"}
                  </h3>
                  {googleUser && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#656A76] dark:text-[#8E95A5] mt-0.5">
                  {googleUser
                    ? `Auto-reply sent to ${googleUser.email}. Form pre-filled below.`
                    : "Select your browser's active Google account to receive an instant portfolio receipt & notify Jay."}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
              {googleUser ? (
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Account Linked ({googleUser.email})</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <div ref={googleBtnContainerRef} className="min-h-[40px] empty:hidden"></div>
                  {!isGoogleSdkReady && (
                    <button
                      type="button"
                      onClick={handleGoogleButtonClick}
                      disabled={submittingChannel === "google"}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#121316] dark:bg-[#1E222D] dark:border dark:border-[#2E3342] hover:bg-[#2B2E36] dark:hover:bg-[#282D3C] text-white text-xs font-bold transition shadow-xs cursor-pointer active:scale-98 disabled:opacity-50"
                    >
                      {submittingChannel === "google" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                          <span>Sending Auto-Reply...</span>
                        </>
                      ) : (
                        <>
                          <GoogleIcon className="w-4 h-4" />
                          <span>Continue with Google</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
          
          {/* Left Column: Direct Channels & Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* WhatsApp Quick Card */}
            <div className="bg-[#121316] text-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#2B2E36] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Direct WhatsApp Chat</h3>
                  <p className="text-xs text-emerald-400 font-mono">Instant response channel</p>
                </div>
              </div>
              <p className="text-xs text-[#A4ACB9] mb-4 sm:mb-5 leading-relaxed">
                Connect directly on WhatsApp for quick inquiries, contract discussions, or architecture consultations.
              </p>
              <button
                type="button"
                onClick={handleQuickWhatsAppCard}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-xs text-center cursor-pointer active:scale-[0.99]"
              >
                <span>Open WhatsApp (+91 79903 61109)</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Email & Contact Details */}
            <div className="bg-white dark:bg-[#14161E] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs space-y-4 sm:space-y-5">
              <h3 className="text-sm font-bold text-[#121316] dark:text-white pb-3 border-b border-[#F2EDE4] dark:border-[#222530] flex items-center justify-between">
                <span>Contact Channels</span>
                <span className="text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5]">Direct Telemetry</span>
              </h3>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#232733] gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-[#F2EDE4] dark:bg-[#1C202B] text-[#C27803] dark:text-[#E8C37D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5]">Email Address</p>
                    <p className="text-xs font-semibold text-[#121316] dark:text-white truncate">jay0812soni@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-white dark:hover:bg-[#1C202B] text-[#4A4E57] dark:text-[#A1A7B5] hover:text-[#121316] dark:hover:text-white transition cursor-pointer shrink-0 border border-transparent hover:border-[#E8E5DF] dark:hover:border-[#2B303E]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#232733]">
                <div className="w-8 h-8 rounded-lg bg-[#F2EDE4] dark:bg-[#1C202B] text-[#C27803] dark:text-[#E8C37D] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5]">Phone Number</p>
                  <a href="tel:917990361109" className="text-xs font-semibold text-[#121316] dark:text-white hover:text-[#C27803] dark:hover:text-[#E8C37D]">
                    +91 79903 61109
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF9F5] dark:bg-[#101218] border border-[#E8E5DF] dark:border-[#232733]">
                <div className="w-8 h-8 rounded-lg bg-[#F2EDE4] dark:bg-[#1C202B] text-[#C27803] dark:text-[#E8C37D] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-[#7A7E89] dark:text-[#8E95A5]">Engineering Base</p>
                  <p className="text-xs font-semibold text-[#121316] dark:text-white">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-1 sm:pt-2 flex gap-3">
                <a
                  href="https://github.com/JAYU0812"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E8E5DF] dark:border-[#232733] text-xs font-semibold hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] text-[#121316] dark:text-white transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sonijay1908"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E8E5DF] dark:border-[#232733] text-xs font-semibold hover:bg-[#F2EDE4] dark:hover:bg-[#1C202B] text-[#121316] dark:text-white transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form with Auto-Reply Engine */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#14161E] p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] dark:border-[#232733] shadow-xs relative">
              
              <div className="mb-5 sm:mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#121316] dark:text-white">
                    Send a Direct Message
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    Auto-Reply Active
                  </span>
                </div>
                <p className="text-xs text-[#4A4E57] dark:text-[#A1A7B5]">
                  Submit below to notify Jay&apos;s personal inbox immediately and receive an automated portfolio confirmation reply.
                </p>
              </div>

              {/* Status Banner */}
              {submissionStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-bold text-emerald-950 dark:text-white mb-0.5">Inquiry Dispatched Successfully!</p>
                    <p>{feedbackMessage}</p>
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 flex items-start gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <p className="font-bold text-amber-950 dark:text-white mb-0.5">Notice</p>
                    <p className="mb-2">{feedbackMessage}</p>
                    <a
                      href={`mailto:jay0812soni@gmail.com?subject=${encodeURIComponent(
                        formData.subject || `Inquiry from ${formData.name}`
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#C27803] dark:text-[#E8C37D] underline"
                    >
                      <span>Open in default Mail Client &rarr;</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#121316] dark:text-[#E5E7EB] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] dark:border-[#282C38] bg-[#FBF9F5] dark:bg-[#101218] text-base sm:text-sm text-[#121316] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6B7280] focus:outline-none focus:border-[#C27803] dark:focus:border-[#E8C37D] focus:bg-white dark:focus:bg-[#141620] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#121316] dark:text-[#E5E7EB] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] dark:border-[#282C38] bg-[#FBF9F5] dark:bg-[#101218] text-base sm:text-sm text-[#121316] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6B7280] focus:outline-none focus:border-[#C27803] dark:focus:border-[#E8C37D] focus:bg-white dark:focus:bg-[#141620] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#121316] dark:text-[#E5E7EB] mb-1.5">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. PropTech Platform / Mobile App Development"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] dark:border-[#282C38] bg-[#FBF9F5] dark:bg-[#101218] text-base sm:text-sm text-[#121316] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6B7280] focus:outline-none focus:border-[#C27803] dark:focus:border-[#E8C37D] focus:bg-white dark:focus:bg-[#141620] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#121316] dark:text-[#E5E7EB] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or engineering requirement..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] dark:border-[#282C38] bg-[#FBF9F5] dark:bg-[#101218] text-base sm:text-sm text-[#121316] dark:text-white placeholder-[#9CA3AF] dark:placeholder-[#6B7280] focus:outline-none focus:border-[#C27803] dark:focus:border-[#E8C37D] focus:bg-white dark:focus:bg-[#141620] transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={submittingChannel !== null}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] dark:bg-[#C27803] dark:hover:bg-[#E58B0B] font-semibold text-xs transition shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submittingChannel === "email" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching Auto-Reply...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message &amp; Auto-Reply</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    disabled={submittingChannel !== null}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F2EDE4] dark:bg-[#1C202B] border border-[#E8E5DF] dark:border-[#262933] text-[#121316] dark:text-white hover:bg-[#E8E2D5] dark:hover:bg-[#252936] font-semibold text-xs transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submittingChannel === "whatsapp" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                        <span>Routing to WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Send via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] font-mono text-[#7A7E89] dark:text-[#8E95A5] text-center pt-2">
                  🔒 Zero spam. Powered by Nodemailer SMTP and delivered directly to jay0812soni@gmail.com.
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Quick WhatsApp Lead Capture Modal */}
      {quickModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E8E5DF] shadow-2xl relative">
            <button
              onClick={() => setQuickModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-[#7A7E89] hover:bg-[#F2EDE4] hover:text-[#121316] transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#121316]">Connect via WhatsApp</h3>
                <p className="text-xs text-[#7A7E89]">Instant response with project receipt</p>
              </div>
            </div>

            <p className="text-xs text-[#4A4E57] mb-5 leading-relaxed">
              Share your details below so Jay can send you an automated confirmation with project highlights, then continue directly to WhatsApp:
            </p>

            <form onSubmit={handleQuickModalSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-mono font-semibold text-[#121316] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={quickLead.name}
                  onChange={(e) => setQuickLead({ ...quickLead, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-xs text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-[#121316] mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={quickLead.email}
                  onChange={(e) => setQuickLead({ ...quickLead, email: e.target.value })}
                  placeholder="e.g. rahul@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-xs text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition"
                />
              </div>

              <div className="pt-3 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={submittingChannel !== null}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition cursor-pointer shadow-xs disabled:opacity-50"
                >
                  {submittingChannel === "modal" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Confirmation...</span>
                    </>
                  ) : (
                    <>
                      <span>Continue to WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setQuickModalOpen(false);
                    window.open("https://wa.me/917990361109", "_blank");
                  }}
                  className="w-full py-2 text-center text-xs text-[#7A7E89] hover:text-[#121316] transition cursor-pointer font-mono"
                >
                  Skip &amp; Open WhatsApp directly
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}