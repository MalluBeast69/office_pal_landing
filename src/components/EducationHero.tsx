"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EducationHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="flex items-center justify-center mb-8">
          <div className="relative p-[3px] rounded-full overflow-hidden bg-[#121212] border-none 
                          shadow-[0_0_10px_rgba(59,130,246,0.3)] group hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                          transition-all duration-300">
            {/* Rotating gradient border */}
            <div 
              className="absolute inset-0 rounded-full z-0"
              style={{
                background: 'conic-gradient(#3b82f6, #60a5fa, #93c5fd, #3b82f6)',
                animation: 'rotate-hue 3s linear infinite',
                filter: 'blur(0.5px)'
              }}
            ></div>
            
            {/* Button content */}
            <a 
              href="#features" 
              className="relative flex items-center justify-center gap-2 px-4 py-2 text-sm rounded-full bg-[#121212] z-10"
            >
              <span>Built with Flutter 3.6.0+</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12">
          <h2 className="text-xl font-medium text-zinc-400">Educational Institution Management</h2>
          <h1 className="text-3xl md:text-5xl font-bold relative">
            Office Pal is a <span className="glowy-text relative inline-block px-1 z-10">
              <span className="relative z-10">comprehensive</span>
              <span className="absolute inset-0 bg-blue-500/20 rounded-lg" style={{filter: 'blur(15px)'}}></span>
              <span className="absolute -inset-1 bg-blue-500/10 rounded-lg animate-pulse" style={{filter: 'blur(8px)'}}></span>
            </span> education management system.
          </h1>
          <p className="text-zinc-400 text-lg mt-4">
            A cross-platform solution for educational institutions with multiple user roles, exam management, course management, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button className="glowy-button rounded-xl h-12 px-6 relative overflow-visible group z-10">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-blue-600/80 rounded-xl"></span>
              <span className="absolute -inset-1 bg-blue-500/30 rounded-xl z-0" style={{filter: 'blur(10px)'}}></span>
              <span className="absolute -inset-2 bg-blue-500/10 rounded-2xl z-0" style={{filter: 'blur(15px)'}}></span>
            </Button>
            <Button variant="outline" className="h-12 px-6 border-zinc-700 rounded-xl glowy-border">
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="relative mt-16 mx-auto max-w-5xl">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden flex flex-col">
              <div className="bg-zinc-800/70 p-4 rounded-t-lg border-b border-zinc-700">
                <div className="flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-sm text-zinc-400">Office Pal Dashboard</div>
                </div>
              </div>
              {/* Content replaced with image */}
              <div className="flex-1 relative overflow-hidden"> {/* Added relative positioning and overflow hidden */}
                <img
                  src="/images/image.png"
                  alt="Office Pal Dashboard Content"
                  className="absolute inset-0 w-full h-full object-cover" /* Use absolute positioning and cover */
                />
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl -z-10" style={{filter: 'blur(40px)'}}></div>
        </div>
      </div>
    </section>
  );
} 