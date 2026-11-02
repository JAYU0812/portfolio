import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle({ className = "" }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#E8E5DF] dark:border-[#262933] bg-white dark:bg-[#14161E] text-[#121316] dark:text-[#FBF9F5] hover:bg-[#F2EDE4] dark:hover:bg-[#1E222D] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-95 group ${className}`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Sun
        className={`w-4 h-4 text-[#C27803] transition-all duration-300 absolute ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`w-4 h-4 text-[#E8C37D] transition-all duration-300 absolute ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}

export function ThemeSegmentedControl() {
  const { theme, setTheme } = useTheme();

  const options = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor }
  ];

  return (
    <div className="flex items-center gap-1 p-1 bg-[#F2EDE4] dark:bg-[#14161E] border border-[#E8E5DF] dark:border-[#262933] rounded-xl w-full">
      {options.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#121316] text-white dark:bg-[#C27803] dark:text-white shadow-xs"
                : "text-[#656A76] dark:text-[#9CA3AF] hover:text-[#121316] dark:hover:text-white"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
