import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import NavButton from "./nav_button";

export default function DarkModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const toggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  }

  return (
    <NavButton onClick={toggle} className={className}>
      {isDarkMode ? <LuMoon /> : <LuSun />}
    </NavButton>
  )
}
