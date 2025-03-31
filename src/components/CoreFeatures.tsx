"use client";

import React from "react";
import { Key, FileText, Calendar, Search, BarChart4, Shield } from "lucide-react";

export default function CoreFeatures() {
  return (
    <section id="features" className="py-16 md:py-24 bg-zinc-950/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          <span className="relative inline-block">
            Core <span className="glowy-text">Features</span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80 glowy-border"></span>
            <span className="absolute -inset-1 blur-lg bg-blue-500/20 -z-10 rounded-lg"></span>
          </span>
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Office Pal provides a comprehensive set of features for educational institution management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Key className="w-6 h-6" />}
            title="Authentication System"
            description="Supabase authentication with role-based access control for Superintendent and Controller roles, ensuring secure login and authorization."
          />
          <FeatureCard 
            icon={<Calendar className="w-6 h-6" />}
            title="Exam Management"
            description="View and manage upcoming exams with filtering options for Today, Upcoming, and Past exams, plus search functionality."
          />
          <FeatureCard 
            icon={<FileText className="w-6 h-6" />}
            title="Course Management"
            description="Comprehensive course listing and administration tools for organizing educational content."
          />
          <FeatureCard 
            icon={<Search className="w-6 h-6" />}
            title="Seating Management"
            description="Tools for Superintendents to manage seating arrangements and classroom organization efficiently."
          />
          <FeatureCard 
            icon={<BarChart4 className="w-6 h-6" />}
            title="Administrative Dashboard"
            description="Get an overview of institution performance, upcoming events, and management tasks in one place."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6" />}
            title="Secure Architecture"
            description="Environment variable management, secure key storage, and proper authentication flow to protect sensitive data."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 hover:glowy-border transition-all duration-300 group">
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