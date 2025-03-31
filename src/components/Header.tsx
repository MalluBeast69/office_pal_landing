"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full ${ // Keep centering, start full width
        scrolled
          ? "top-4 max-w-3xl rounded-full py-2 bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/50 glowy-border" // Scrolled: pill shape, specific styles
          : "top-0 max-w-full rounded-none py-0 bg-black/20 backdrop-blur-xl border-b border-zinc-800/50" // Initial: full width, different styles
      }`}
    >
      <div className={`container flex items-center justify-between ${scrolled ? 'px-6 py-1' : 'p-4'}`}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <OfficePalLogo />
            <span className="ml-2 font-semibold text-lg">Office Pal</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/#features">Features</NavLink>
          <NavLink href="/#platforms">Platforms</NavLink>
          <NavLink href="/documentation">Documentation</NavLink>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild className="hover:glowy-text">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button variant="default" className="glowy-button rounded-xl" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </nav>
        <button className="md:hidden flex items-center justify-center p-2">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-zinc-400 hover:text-white hover:glowy-text transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
    </Link>
  );
}

function OfficePalLogo() {
  return (
    <div className="relative group">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 transition-all duration-300">
        <rect width="32" height="32" rx="6" fill="#3B82F6" className="transition-all duration-300" />
        <path d="M9 9h14v4H13v3h8v4H13v3h10v4H9V9z" fill="#000000" />
      </svg>
      <div className="absolute -inset-1 bg-blue-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" style={{filter: 'blur(8px)'}}></div>
      <div className="absolute -inset-2 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" style={{filter: 'blur(12px)'}}></div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
