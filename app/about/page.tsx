import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Award, 
  Users, 
  MapPin, 
  Scale, 
  ArrowRight,
  BookOpen,
  Code2
} from 'lucide-react';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://termsscanner.in'),
  title: 'About Us | Terms Scanner',
  description: 'Learn about Terms Scanner’s mission, legal tech engineering team, zero-retention privacy architecture, and our commitment to contract transparency.',
  keywords: [
    'about terms scanner',
    'legal tech team',
    'zero retention privacy architecture',
    'consumer contract transparency',
    'Ramakanth Kulkarni'
  ],
  alternates: {
    canonical: 'https://termsscanner.in/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Mission & Technology</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About Terms Scanner
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Democratizing legal & privacy risk intelligence through local client-side privacy protection, deterministic heuristic scoring, and explainable AI.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Democratizing Contract Transparency
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every day, hundreds of millions of consumers and developers click "I Agree" on legal documents they have never read. The average modern Terms of Service agreement exceeds 7,500 words, requires post-graduate reading comprehension, and routinely hides binding arbitration clauses, class action waivers, sweeping biometric collection rights, and silent data monetization clauses.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Terms Scanner (termsscanner.in)</strong> was founded in 2024 to level the playing field. We build automated auditing tools and in-depth educational resources that extract hidden traps from SaaS contracts, consumer agreements, and privacy policies in seconds—without charging prohibitive legal consulting fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-2xl font-black text-blue-600">20+</span>
              <p className="text-xs font-bold text-slate-800">Platform Audits</p>
              <p className="text-[11px] text-slate-500">Deep editorial breakdowns of popular platforms.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-2xl font-black text-emerald-600">100%</span>
              <p className="text-xs font-bold text-slate-800">Offline Scan Capable</p>
              <p className="text-[11px] text-slate-500">Zero data retention on local heuristic regex runs.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-2xl font-black text-indigo-600">16+</span>
              <p className="text-xs font-bold text-slate-800">Legal Guides</p>
              <p className="text-[11px] text-slate-500">Comprehensive educational guides on digital rights.</p>
            </div>
          </div>
        </div>

        {/* Our Team & E-E-A-T Credentials */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Leadership & Editorial Team
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Founder Profile */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-black text-slate-900">Ramakanth Kulkarni</h3>
                  <p className="text-xs font-bold text-blue-600">Founder & Principal Systems Architect</p>
                </div>
                <span className="text-[11px] font-mono font-bold bg-white text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                  Bengaluru, India
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ramakanth is a systems engineer and privacy advocate specializing in high-performance web architecture, client-side WebAssembly/Web Workers, and legal tech natural language processing. He architected Terms Scanner’s zero-retention offline regex heuristic engine to ensure sensitive contracts never leave the user’s local browser environment.
              </p>
            </div>

            {/* Editorial & Research Staff */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
              <h3 className="text-base font-black text-slate-900">Editorial & Legal Research Contributors</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our content and heuristic patterns are authored and peer-reviewed by privacy analysts and legal tech researchers. We monitor emerging consumer protection enforcement actions from the US Federal Trade Commission (FTC), decisions from European Data Protection Authorities (DPAs), and evolving jurisprudence under GDPR, CCPA/CPRA, and India’s Digital Personal Data Protection Act (DPDPA).
              </p>
            </div>

          </div>
        </div>

        {/* Engineering Philosophy: Zero-Retention First */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Lock className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Our Core Engineering Philosophy: Privacy First
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>100% In-Browser Execution</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe privacy tools should not compromise your privacy. When using our <strong>Instant Offline Scanner</strong>, all text parsing and regex pattern matching happens locally within your browser sandbox. Your NDAs, employment agreements, and confidential vendor contracts are never uploaded to any remote server.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center space-x-2">
                <Scale className="w-4 h-4 text-indigo-600" />
                <span>Auditable Scoring Criteria</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We reject subjective, black-box ratings. Every score produced by Terms Scanner corresponds to our published 1–10 mathematical weighting formula. Users can inspect the exact clause excerpts triggering each risk indicator.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Contact Information */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <MapPin className="w-6 h-6 text-slate-700" />
            <h2 className="text-xl font-black text-slate-900">Operational Hub & Jurisdiction</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Terms Scanner is developed and operated out of <strong>Bengaluru, Karnataka, India</strong>. We serve global consumers, researchers, and enterprises across the United States, Europe, India, and worldwide.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
            <Link href="/contact" className="text-blue-600 hover:underline flex items-center space-x-1">
              <span>Contact Us Directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/editorial-policy" className="text-slate-600 hover:underline flex items-center space-x-1">
              <span>Read Our Editorial Standards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/methodology" className="text-slate-600 hover:underline flex items-center space-x-1">
              <span>Inspect Our Scoring Methodology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}