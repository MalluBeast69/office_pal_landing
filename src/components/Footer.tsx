"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-zinc-800/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <OfficePalLogo />
              <span className="ml-2 font-semibold text-lg">Office Pal</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Office Pal is a comprehensive Flutter-based educational institution management system with multiple user roles and advanced features.
            </p>
            <p className="text-primary text-sm">MIT Licensed</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product</h3>
            <div className="space-y-2">
              <FooterLink href="/#features">Features</FooterLink>
              <FooterLink href="/#platforms">Platforms</FooterLink>
              <FooterLink href="/#security">Security</FooterLink>
              <FooterLink href="/roadmap">Roadmap</FooterLink>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <div className="space-y-2">
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/api">API Reference</FooterLink>
              <FooterLink href="/tutorials">Tutorials</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <div className="space-y-2">
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/licenses">Open Source Licenses</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm">
            © 2025 Office Pal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Twitter className="w-4 h-4" />} href="https://twitter.com/office_pal" />
            <SocialIcon icon={<Linkedin className="w-4 h-4" />} href="https://linkedin.com/company/office-pal" />
            <SocialIcon icon={<Github className="w-4 h-4" />} href="https://github.com/MalluBeast69/office_pal" />
            <SocialIcon icon={<Mail className="w-4 h-4" />} href="mailto:contact@officepal.edu" />
            <SocialIcon icon={<MessageCircle className="w-4 h-4" />} href="/contact" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-zinc-400 hover:text-white transition-colors text-sm">
      {children}
    </Link>
  );
}

function OfficePalLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#3B82F6" />
      <path d="M9 9h14v4H13v3h8v4H13v3h10v4H9V9z" fill="#000000" />
    </svg>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-primary hover:bg-blue-500/10 transition-colors"
    >
      <div className="text-zinc-400 hover:text-primary transition-colors">
        {icon}
      </div>
    </a>
  );
}
