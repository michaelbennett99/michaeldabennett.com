import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon, LuSunMoon } from "react-icons/lu";
import NavButton from "./nav_button";

export default function DarkModeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isSystem = theme === "system";
  const isDarkMode = theme === "dark";
  const isLightMode = theme === "light";
  const toggle = () => {
    if (isSystem) {
      setTheme("light");
    } else if (isLightMode) {
      setTheme("dark");
    } else if (isDarkMode) {
      setTheme("system");
    } else {
      setTheme("system");
    }
  }

  const icon = isLightMode
    ? <LuSun />
    : isDarkMode
      ? <LuMoon />
      : <LuSunMoon />;

  return (
    <NavButton onClick={toggle} className={className}>
      {icon}
    </NavButton>
  )
}
