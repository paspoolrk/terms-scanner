import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { 
  ShieldCheck, 
  FileCheck2, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  Scale,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://termsscanner.in'),
  title: 'Editorial & Fact-Checking Policy | Terms Scanner',
  description: 'Our editorial standards, research rigor, independence guarantees, and corrections process for all legal guides and platform privacy audits.',
  keywords: [
    'editorial standards',
    'fact-checking policy',
    'legal tech ethics',
    'terms scanner editorial guidelines',
    'conflict of interest disclosure'
  ],
  alternates: {
    canonical: 'https://termsscanner.in/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Integrity & Standards</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Editorial & Fact-Checking Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            How Terms Scanner researches, verifies, writes, and continuously updates our legal breakdowns and educational privacy resources.
          </p>
        </div>

        {/* Core Principles */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3">
            Core Editorial Commitments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Editorial Independence</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Terms Scanner does not accept sponsored reviews, paid risk score modifications, or corporate contributions intended to influence our platform audits. Every rating is determined strictly by our mathematical scoring rubric.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Verbatim Primary Source Grounding</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never speculate on company intentions. Every claim, red flag, and risk assessment must be grounded in verbatim text directly extracted from currently published, publicly accessible Terms of Service, Privacy Policies, or regulatory filings.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Accessible, Actionable Language</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legal drafting is deliberately dense. Our editorial mission is to translate multi-page legalese into plain, structured English with clear, practical steps consumers and engineering teams can take to safeguard their rights.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Continuous Revision & Version Tracking</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When tech companies revise their agreements, we update our breakdowns accordingly. Each service analysis prominently features a "Last Updated" timestamp to reflect recent policy shifts.
              </p>
            </div>
          </div>
        </div>

        {/* Fact-Checking Workflow */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Scale className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Our Multi-Stage Fact-Checking Workflow
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <span className="font-mono font-bold text-blue-600 text-xs uppercase tracking-wider">Stage 1: Primary Document Retrieval</span>
              <p>
                Our team monitors official corporate legal repositories, SEC disclosures, and regulatory enforcement databases. Only finalized, currently effective legal agreements are evaluated.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <span className="font-mono font-bold text-indigo-600 text-xs uppercase tracking-wider">Stage 2: Algorithmic Scrutiny</span>
              <p>
                Documents are parsed through our dual-engine architecture: local regex heuristics identify standard boilerplate, while Google Gemini 2.5 Flash extracts subtle contextual waivers, liability limits, and cross-reference dependencies.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
              <span className="font-mono font-bold text-emerald-600 text-xs uppercase tracking-wider">Stage 3: Editorial Verification & Review</span>
              <p>
                A human legal tech editor examines the algorithmic findings, verifies that quotes are accurate in context, confirms that statutory opt-out mechanisms are cited properly, and authors actionable consumer recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Corrections Policy */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <RefreshCw className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-black text-slate-900">Corrections & Dispute Procedure</h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We are committed to total factual accuracy. If you represent a platform whose terms have changed, or if you identify an outdated citation or factual discrepancy in any of our published guides or audits, we welcome your feedback.
          </p>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl space-y-2 text-xs text-blue-900">
            <p className="font-bold">How to submit a correction request:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Email us at <a href="mailto:editorial@termsscanner.in" className="font-mono font-bold underline">editorial@termsscanner.in</a> with the subject line <em>"Correction Request: [Platform/Article Name]"</em>.</li>
              <li>Provide a direct URL to the updated terms on the official corporate domain.</li>
              <li>Cite the specific paragraph and clause demonstrating the discrepancy.</li>
            </ul>
            <p className="pt-1 text-slate-600">
              Our editorial team investigates all submissions and issues verified corrections within 48 business hours.
            </p>
          </div>
        </div>

        {/* Conflict of Interest Disclosure */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl font-black text-slate-900">Conflict of Interest Disclosure</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Terms Scanner is supported through non-intrusive contextual advertising (such as Google AdSense). Advertisers have zero editorial influence over our research, scoring algorithms, or article conclusions. Our staff and contributors are strictly prohibited from holding equity stakes or receiving advisory compensation from companies currently under audit.
          </p>
        </div>

      </main>
    </div>
  );
}