import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { LuMoon, LuSun } from "react-icons/lu";

export default function DarkModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const toggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "py-4 h-full",
        className
      )}
    >
      {isDarkMode ? <LuMoon /> : <LuSun />}
    </button>
  )
}
