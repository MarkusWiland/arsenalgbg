"use client";

import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import useSystemTheme from "@/hooks/useSystemTheme";

export function ThemeSwitcher({ showLabel }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  console.log("theme", theme);
  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={() =>
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }
      defaultSelected
      size="lg"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
    >
      {showLabel && "Theme"}
    </Switch>
  );
}
