"use client";

import React from "react";
import { Shield, Lock, Eye, Key, FileJson, Server } from "lucide-react";

export default function SecurityFeatures() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          <span className="relative inline-block">
            Security <span className="glowy-text">Features</span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80 glowy-border"></span>
            <span className="absolute -inset-1 blur-lg bg-blue-500/20 -z-10 rounded-lg"></span>
          </span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Office Pal prioritizes security to protect your institution's sensitive data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SecurityCard 
            icon={<Lock className="w-6 h-6" />}
            title="Secure Authentication"
            description="Supabase authentication with JWT tokens, role-based access control, and secure password management."
          />
          <SecurityCard 
            icon={<Eye className="w-6 h-6" />}
            title="Data Privacy"
            description="Careful handling of personal and sensitive student information with proper access controls."
          />
          <SecurityCard 
            icon={<Key className="w-6 h-6" />}
            title="Secure Key Storage"
            description="Environment variables for storing sensitive keys and credentials safely outside of the codebase."
          />
          <SecurityCard 
            icon={<FileJson className="w-6 h-6" />}
            title="Gitignore Protection"
            description="Properly configured gitignore rules to prevent sensitive files from being committed to repositories."
          />
          <SecurityCard 
            icon={<Server className="w-6 h-6" />}
            title="Secure Data Storage"
            description="Data encryption at rest and in transit for maximum protection of institutional information."
          />
          <SecurityCard 
            icon={<Shield className="w-6 h-6" />}
            title="Compliance-Ready"
            description="Built with education-sector compliance requirements in mind, including data protection regulations."
          />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-zinc-900/80 px-6 py-3 rounded-lg border border-zinc-800 glowy-border">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm text-zinc-300">
                Office Pal is committed to maintaining the highest security standards for educational institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 hover:glowy-border transition-all duration-300 group h-full">
      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:glowy-text transition-colors duration-300">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  );
} 