"use client";

import React from "react";

export default function Platforms() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          <span className="relative inline-block">
            Cross-Platform <span className="glowy-text">Support</span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80 glowy-border"></span>
            <span className="absolute -inset-1 blur-lg bg-blue-500/20 -z-10 rounded-lg"></span>
          </span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Office Pal works seamlessly across multiple platforms with a single codebase.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <PlatformLogo name="Android" icon={<AndroidIcon />} />
          <PlatformLogo name="iOS" icon={<AppleIcon />} />
          <PlatformLogo name="Web" icon={<WebIcon />} />
          <PlatformLogo name="Windows" icon={<WindowsIcon />} />
          <PlatformLogo name="macOS" icon={<MacOSIcon />} />
          <PlatformLogo name="Linux" icon={<LinuxIcon />} />
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">True Cross-Platform Experience</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Office Pal delivers a consistent experience across all platforms while adapting to platform-specific UI conventions and capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-800/70 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2 text-zinc-300">Mobile</div>
                <ul className="space-y-2 text-xs text-zinc-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Touch-optimized interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Responsive layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Offline capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Push notifications</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/70 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2 text-zinc-300">Desktop</div>
                <ul className="space-y-2 text-xs text-zinc-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Advanced keyboard shortcuts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Multi-window support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Enhanced data views</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>System tray integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-zinc-800/70 p-4 rounded-lg">
                <div className="text-sm font-medium mb-2 text-zinc-300">Web</div>
                <ul className="space-y-2 text-xs text-zinc-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Progressive Web App</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Cross-browser compatibility</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span>Native-like performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl -z-10" style={{filter: 'blur(40px)'}}></div>
        </div>
      </div>
    </section>
  );
}

function PlatformLogo({ name, icon }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:glowy-border relative overflow-hidden">
        <div className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-all duration-500 relative z-10">
          {icon}
        </div>
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>
      </div>
      <p className="text-xs text-center text-zinc-400 group-hover:text-white group-hover:glowy-text transition-all duration-300">{name}</p>
    </div>
  );
}

function AndroidIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M5 16V9h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z"></path>
      <path d="M12 4v5"></path>
      <path d="M18 8v1"></path>
      <path d="M6 8v1"></path>
      <path d="M15 17v3"></path>
      <path d="M9 17v3"></path>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
      <path d="M12 7c2.56-1 3-2.33 3-5 0 0-1 1-3 1s-3-1-3-1c0 2.67.44 4 3 5Z"></path>
    </svg>
  );
}

function WebIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      <path d="M3 12h18"></path>
      <path d="M12 3v18"></path>
    </svg>
  );
}

function MacOSIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M9 6.75V3.27a9.01 9.01 0 0 1 2.32.48"></path>
      <path d="M15 5a9 9 0 1 0-9.00 15.71"></path>
      <path d="M11.68 22A3.66 3.66 0 0 0 16 20.7l.4-.93.41.93a3.65 3.65 0 0 0 4.3 1.28"></path>
      <path d="M15.6 8.3a3.65 3.65 0 1 0 0 7.3 3.65 3.65 0 0 0 0-7.3"></path>
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 2a4 4 0 0 0-4 4v8"></path>
      <path d="M16 6a4 4 0 0 0-4-4v8"></path>
      <circle cx="8" cy="16" r="1"></circle>
      <circle cx="16" cy="16" r="1"></circle>
      <path d="M18 20c0-1.8-2.63-3.3-6-3.3S6 18.2 6 20"></path>
      <path d="M9 20v-1"></path>
      <path d="M15 20v-1"></path>
    </svg>
  );
} 