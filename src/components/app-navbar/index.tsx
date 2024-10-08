"use client";

import Link from "next/link";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconPackage } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import AuthButton from "./auth-button";
import { ThemeSwitcher } from "./themeSwitcher";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { data, status } = useSession();

  const menuItems = [
    { label: "Home", href: "/", requiresAuth: false },
    { label: "Profile", href: "/profile", requiresAuth: true },
    { label: "Dashboard", href: "/dashboard", requiresAuth: true },
    { label: "Settings", href: "/settings", requiresAuth: true },
    { label: "About", href: "/about", requiresAuth: false },
  ];
  const visibleMenuItems = menuItems.filter(
    (item) => !item.requiresAuth || status === "authenticated"
  );

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IconPackage />
          <p className="font-bold text-inherit">Next.JS Starter</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {visibleMenuItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link href={item.href} className="w-full" size="lg">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher showLabel />
        </NavbarMenuItem>
        {visibleMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link href={item.href} className="w-full" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
