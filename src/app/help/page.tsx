import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex min-h-screen">
        <aside className="hidden md:block w-72 relative">
          <div className="h-screen sticky top-0 overflow-y-auto border-r border-zinc-800/50 bg-black/20 backdrop-blur-xl">
            <div className="flex flex-col h-full p-4">
              <div className="mb-6">
                <Link href="/">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="6" fill="#E1E07E" />
                    <path d="M8 12L12 8L24 20L20 24L8 12Z" fill="#000000" />
                  </svg>
                </Link>
              </div>

              <div className="flex-grow">
                <div className="space-y-6">
                  <div className="relative mb-6">
                    <button className="w-full flex items-center">
                      <input placeholder="Search documentation" className="w-full pl-8 sm:pl-9 pr-16 py-1.5 sm:py-2 bg-zinc-900/50 border border-zinc-800/50 rounded-lg sm:rounded-xl text-[13px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" readOnly type="text" />
                      <div className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 flex gap-1">
                        <span className="bg-zinc-800 px-1.5 py-1 rounded text-[9px] sm:text-[10px] leading-none text-zinc-400">⌘</span>
                        <span className="bg-zinc-800 px-1.5 py-1 rounded text-[9px] sm:text-[10px] leading-none text-zinc-400">K</span>
                      </div>
                    </button>
                  </div>

                  <div className="mb-6">
                    <Link href="/signin">
                      <Button className="w-full glowy-button rounded-xl">Sign in with Interview Coder</Button>
                    </Link>
                  </div>

                  <div className="space-y-6">
                    <SidebarCategory title="General">
                      <SidebarItem label="Getting Started" isActive />
                      <SidebarItem label="Language Configuration" />
                      <SidebarItem label="Undetectability" />
                    </SidebarCategory>

                    <SidebarCategory title="Account and Subscription">
                      <SidebarItem label="Cancel Subscription" />
                      <SidebarItem label="Refund Policy" />
                    </SidebarCategory>

                    <SidebarCategory title="Troubleshooting">
                      <SidebarItem label="Says out of credits" />
                      <SidebarItem label="Can't see screen" />
                      <SidebarItem label="Shows when I share screen" />
                    </SidebarCategory>

                    <SidebarCategory title="Support">
                      <div className="px-3 py-2 text-[13px] text-zinc-400 space-y-2">
                        <div>
                          <p className="text-zinc-300 font-medium">Support Team</p>
                          <p>support@interviewcoder.co</p>
                        </div>
                      </div>
                    </SidebarCategory>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="border-t border-zinc-800/50 pt-6">
                  <p className="text-xs text-zinc-500 text-center">© 2025 Interview Coder. All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 px-8 py-12 lg:px-12 lg:py-16 pt-24 md:pt-16">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-16">
              <div id="getting-started">
                <div className="border-b border-zinc-800 pb-8 mb-8">
                  <h1 className="text-2xl font-medium tracking-tight">Getting Started</h1>
                  <p className="mt-2 text-zinc-400 text-sm">Welcome to Interview Coder. This guide will help you get up and running quickly.</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <div className="rounded-xl border bg-gradient-to-r border-zinc-800/50 from-zinc-900/50 to-zinc-800/30 p-6">
                    <h2 className="text-base font-medium mt-0 text-zinc-200">Quick Start Steps</h2>
                    <ol className="mt-4 space-y-3 text-sm text-zinc-300">
                      <li>Install the Interview Coder app in the download link below (MacOS only)</li>
                      <li>Move the app into your Applications folder</li>
                      <li>Sign up for an account or log in on the InterviewCoder website and subscribe.</li>
                      <li>Open the app and log in with your account.</li>
                      <li>Configure your language preferences (Python, Java, Javascript, Golang, C#, Rust, Ruby, C++, SQL, R, and Swift) in the <Link href="/settings" className="underline">settings</Link> page, or in the app.</li>
                      <li>Start coding in your technical interviews!</li>
                    </ol>
                    <div className="mt-4">
                      <Button className="inline-flex items-center justify-center glowy-button px-4 py-2 text-black gap-2 text-sm font-medium h-10 w-[280px] md:w-[320px] rounded-xl">
                        <div className="flex items-center gap-2">
                          <AppleIcon />
                          Download for Mac
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-gradient-to-r border-zinc-800/50 from-zinc-900/50 to-zinc-800/30 p-6 mt-8">
                    <h2 className="text-base font-medium mt-0 text-zinc-200">Getting Started Tutorial</h2>
                    <div className="mt-6 aspect-video bg-zinc-900 rounded-lg">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-zinc-500">Tutorial Video Placeholder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function SidebarCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <h3 className="text-[13px] font-medium text-muted-foreground px-3 mb-2">{title}</h3>
      {children}
    </div>
  );
}

function SidebarItem({ label, isActive = false }: { label: string; isActive?: boolean }) {
  return (
    <button
      className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-colors ${
        isActive
          ? "bg-zinc-800/50 text-zinc-100 font-medium"
          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
      }`}
    >
      {label}
    </button>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4453 8.25C11.4453 10.3281 9.74219 12.0781 7.71094 12.0781C5.65625 12.0781 3.95312 10.3281 3.95312 8.25C3.95312 6.21875 5.65625 4.46875 7.71094 4.46875C9.74219 4.46875 11.4453 6.21875 11.4453 8.25ZM7.71094 5.71875C6.32812 5.71875 5.20312 6.84375 5.20312 8.25C5.20312 9.65625 6.32812 10.8281 7.71094 10.8281C9.09375 10.8281 10.1953 9.65625 10.1953 8.25C10.1953 6.84375 9.07031 5.71875 7.71094 5.71875Z" fill="currentColor" />
    </svg>
  );
}
