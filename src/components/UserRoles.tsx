"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function UserRoles() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              <span className="relative inline-block">
                User <span className="glowy-text">Roles</span>
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80 glowy-border"></span>
                <span className="absolute -inset-1 blur-lg bg-blue-500/20 -z-10 rounded-lg"></span>
              </span>
            </h2>
            <p className="text-zinc-400 mb-8">
              Office Pal implements role-based access control to ensure users can access only the features they need.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4 glowy-text">Superintendent</h3>
                <div className="space-y-3">
                  <RoleFeatureItem
                    feature="Administrative Dashboard"
                    description="Complete overview of institutional performance"
                  />
                  <RoleFeatureItem
                    feature="Seating Management"
                    description="Manage classroom and exam seating arrangements"
                  />
                  <RoleFeatureItem
                    feature="Institution Management"
                    description="Configure and customize institutional settings"
                  />
                  <RoleFeatureItem
                    feature="Advanced Reporting"
                    description="Generate comprehensive reports and analytics"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4 glowy-text">Controller</h3>
                <div className="space-y-3">
                  <RoleFeatureItem
                    feature="Exam Management"
                    description="Schedule, track, and manage exams with filtering options"
                  />
                  <RoleFeatureItem
                    feature="Course Management"
                    description="Create and manage course listings and content"
                  />
                  <RoleFeatureItem
                    feature="Basic Reporting"
                    description="Access to essential reports and statistics"
                  />
                  <RoleFeatureItem
                    feature="Student Notifications"
                    description="Send exam and course notifications to students"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50 glowy-border">
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-4">Role-Based Interface</h3>
                <p className="text-zinc-400 text-sm">
                  Office Pal automatically adapts its interface based on the user's role, showing only relevant features and controls. This ensures a focused experience and maintains security.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-zinc-800/70 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center mr-3">
                      <span className="text-xs text-blue-300 font-medium">S</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Superintendent View</div>
                      <div className="text-xs text-zinc-400">Full administrative access</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500/30 mr-2"></div>
                      Institution-wide dashboard with performance metrics
                    </div>
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500/30 mr-2"></div>
                      Access to all management features and settings
                    </div>
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500/30 mr-2"></div>
                      Staff management and oversight capabilities
                    </div>
                  </div>
                </div>
                
                <div className="bg-zinc-800/70 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-600/30 flex items-center justify-center mr-3">
                      <span className="text-xs text-green-300 font-medium">C</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Controller View</div>
                      <div className="text-xs text-zinc-400">Operational management</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500/30 mr-2"></div>
                      Focused dashboard with exam and course statistics
                    </div>
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500/30 mr-2"></div>
                      Limited to exam and course management features
                    </div>
                    <div className="bg-zinc-800 rounded p-2 text-xs flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500/30 mr-2"></div>
                      Student notifications and communications
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-blue-500/5 rounded-2xl -z-10" style={{filter: 'blur(40px)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleFeatureItem({ feature, description }) {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 text-blue-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-medium">{feature}</h4>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
    </div>
  );
} 