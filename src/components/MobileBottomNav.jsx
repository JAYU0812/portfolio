import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Layers, 
  User, 
  FileText, 
  Mail
} from "lucide-react";

export default function MobileBottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Layers },
    { name: "About", path: "/about", icon: User },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/contact", icon: Mail }
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#0E1015]/95 backdrop-blur-md border-t border-[#E8E5DF] dark:border-[#22252F] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)] px-2 py-1.5 transition-colors duration-200 print:hidden"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = 
            item.path === "/" 
              ? location.pathname === "/" 
              : location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? "text-[#C27803] dark:text-[#E8C37D]"
                  : "text-[#656A76] dark:text-[#8E95A5] hover:text-[#121316] dark:hover:text-white"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-110" : ""}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C27803] dark:bg-[#E8C37D]" />
                )}
              </div>
              <span className={`text-[10px] font-medium mt-0.5 ${isActive ? "font-bold text-[#121316] dark:text-white" : ""}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
