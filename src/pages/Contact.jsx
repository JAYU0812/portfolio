import { useState } from "react";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jay0812soni@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailtoSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:jay0812soni@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Jay, my name is ${formData.name || "a visitor"}. ${
      formData.message ? `Regarding: ${formData.message}` : "I'd like to discuss a project with you."
    }`;
    window.open(`https://wa.me/917990361109?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="py-8 sm:py-16 text-[#121316]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C27803]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#121316] tracking-tight mt-1 mb-3 sm:mb-4">
            Let’s Discuss Your Next Software Project
          </h1>
          <p className="text-sm sm:text-lg text-[#4A4E57] leading-relaxed">
            Interested in building an enterprise PropTech system, an Offline-First mobile app, or discussing an engineering role? Reach out directly via WhatsApp, email, or the inquiry form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
          
          {/* Left Column: Direct Channels & Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* WhatsApp Quick Card */}
            <div className="bg-[#121316] text-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#2B2E36] shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Direct WhatsApp Chat</h3>
                  <p className="text-xs text-[#A4ACB9]">Fastest response channel</p>
                </div>
              </div>
              <p className="text-xs text-[#A4ACB9] mb-4 sm:mb-5 leading-relaxed">
                Connect directly on WhatsApp for quick inquiries, project consultations, or contract discussions.
              </p>
              <a
                href="https://wa.me/917990361109"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-xs text-center"
              >
                <span>Open WhatsApp (+91 79903 61109)</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Email & Contact Details */}
            <div className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] shadow-xs space-y-4 sm:space-y-5">
              <h3 className="text-sm font-bold text-[#121316] pb-3 border-b border-[#F2EDE4]">
                Contact Information
              </h3>

              {/* Email with copy button */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF] gap-2">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-[#C27803] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-[#7A7E89]">Email Address</p>
                    <p className="text-xs font-semibold text-[#121316] truncate">jay0812soni@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-white text-[#4A4E57] hover:text-[#121316] transition cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                <Phone className="w-4 h-4 text-[#C27803] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-[#7A7E89]">Phone Number</p>
                  <a href="tel:917990361109" className="text-xs font-semibold text-[#121316] hover:text-[#C27803]">
                    +91 79903 61109
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF9F5] border border-[#E8E5DF]">
                <MapPin className="w-4 h-4 text-[#C27803] shrink-0" />
                <div>
                  <p className="text-[10px] font-mono text-[#7A7E89]">Location</p>
                  <p className="text-xs font-semibold text-[#121316]">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-1 sm:pt-2 flex gap-3">
                <a
                  href="https://github.com/JAYU0812"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E8E5DF] text-xs font-semibold hover:bg-[#F2EDE4] transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sonijay1908"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E8E5DF] text-xs font-semibold hover:bg-[#F2EDE4] transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#E8E5DF] shadow-xs">
              <div className="mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#121316] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#4A4E57]">
                  Fill in the fields below. You can send it directly via email or dispatch it through WhatsApp.
                </p>
              </div>

              <form onSubmit={handleMailtoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#121316] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-base sm:text-sm text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#121316] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-base sm:text-sm text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#121316] mb-1.5">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. PropTech Platform / Mobile App Development"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-base sm:text-sm text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-[#121316] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or requirement..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5DF] bg-[#FBF9F5] text-base sm:text-sm text-[#121316] focus:outline-none focus:border-[#C27803] focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#121316] text-white hover:bg-[#C27803] font-semibold text-xs transition shadow-xs cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F2EDE4] border border-[#E8E5DF] text-[#121316] hover:bg-[#E8E2D5] font-semibold text-xs transition cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}