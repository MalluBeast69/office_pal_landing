"use client";

import React from "react";
import { Code, Database, Layers, RefreshCw, Workflow, Settings } from "lucide-react";

export default function TechnicalFeatures() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          <span className="relative inline-block">
            Technical <span className="glowy-text">Features</span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80 glowy-border"></span>
            <span className="absolute -inset-1 blur-lg bg-blue-500/20 -z-10 rounded-lg"></span>
          </span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Office Pal is built with modern technologies to ensure scalability, security, and performance.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Flutter Framework</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-5">
                Built with Flutter 3.6.0 or higher, allowing for a consistent experience across all platforms with a single codebase.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Riverpod</div>
                  <div className="text-xs text-zinc-400">Advanced state management</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Material Design</div>
                  <div className="text-xs text-zinc-400">Modern UI components</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">SVG Support</div>
                  <div className="text-xs text-zinc-400">Crisp graphics at any scale</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Rive Animations</div>
                  <div className="text-xs text-zinc-400">Enhanced user experience</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{filter: 'blur(30px)'}}></div>
          </div>
          
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Supabase Backend</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-5">
                Leverages Supabase for authentication, database, and backend services with real-time capabilities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Authentication</div>
                  <div className="text-xs text-zinc-400">Secure user authentication</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">PostgreSQL</div>
                  <div className="text-xs text-zinc-400">Robust database backend</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Real-time</div>
                  <div className="text-xs text-zinc-400">Live updates across clients</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Storage</div>
                  <div className="text-xs text-zinc-400">Document and file storage</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{filter: 'blur(30px)'}}></div>
          </div>
          
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <Layers className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Clean Architecture</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-5">
                Follows a clean architecture pattern with proper separation of concerns for maintainability and scalability.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Feature-Based</div>
                  <div className="text-xs text-zinc-400">Organized folder structure</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Layered Design</div>
                  <div className="text-xs text-zinc-400">Data, domain, presentation</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Repository Pattern</div>
                  <div className="text-xs text-zinc-400">Clean data access layer</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Provider Pattern</div>
                  <div className="text-xs text-zinc-400">Dependency injection</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{filter: 'blur(30px)'}}></div>
          </div>
          
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                  <RefreshCw className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Development Features</h3>
              </div>
              <p className="text-zinc-400 text-sm mb-5">
                Includes tools and features to enhance the development experience and productivity.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Hot Reload</div>
                  <div className="text-xs text-zinc-400">Instant feedback cycle</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">Testing Support</div>
                  <div className="text-xs text-zinc-400">Comprehensive test setup</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">CI/CD Ready</div>
                  <div className="text-xs text-zinc-400">Integration with pipelines</div>
                </div>
                <div className="bg-zinc-800/80 p-3 rounded-lg">
                  <div className="text-sm font-medium mb-1">MIT License</div>
                  <div className="text-xs text-zinc-400">Open source collaboration</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" style={{filter: 'blur(30px)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
} 