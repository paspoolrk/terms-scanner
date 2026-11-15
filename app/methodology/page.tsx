import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Scale, 
  CheckCircle2, 
  AlertTriangle, 
  FileCode, 
  Sparkles, 
  ArrowRight,
  Calculator,
  Layers,
  Database
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://termsscanner.in'),
  title: 'Scoring & Audit Methodology | Terms Scanner',
  description: 'Learn how Terms Scanner computes risk scores, detects predatory clauses via local regex heuristics, and benchmarks contracts using Google Gemini 2.5 Flash.',
  keywords: [
    'legal tech methodology',
    'contract risk scoring algorithm',
    'privacy policy audit rubric',
    'TOS heuristic scanner rules',
    'AI legal prompt engineering'
  ],
  alternates: {
    canonical: 'https://termsscanner.in/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>Auditing Framework & Rigor</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Scoring & Auditing Methodology
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            A transparent disclosure of our mathematical risk weighting, local heuristic regex filters, and contextual AI verification pipelines.
          </p>
        </div>

        {/* Executive Summary Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900">Why Transparent Methodology Matters</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Legal risk scoring is traditionally a subjective black box. Consumer agreements are deliberately lengthy—averaging over 7,500 words and requiring a postgraduate reading comprehension level. At Terms Scanner, our mission requires total algorithmic transparency. We publish our scoring rubrics, heuristic weights, and model prompting guidelines openly so users, developers, and compliance officers understand exactly how risk assessments are generated.
          </p>
        </div>

        {/* Dual Engine Architecture */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
              <Layers className="w-6 h-6 text-blue-600" />
              <span>Dual-Engine Scanning Architecture</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Terms Scanner employs a two-tier evaluation mechanism balancing zero-retention privacy with deep semantic understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Engine 1 Card */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-2xl border border-emerald-200">
                  <Lock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Engine 1: Local Heuristic Regex</h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    100% Client-Side • Zero Latency
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Executed entirely within the user’s browser memory via Web Workers. Text is matched against over 120 compiled regular expression patterns targeting known predatory legal phrases.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero bytes transmitted across external networks.</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Sub-second deterministic pattern recognition.</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Instant identification of standard arbitration & waivers.</span>
                </div>
              </div>
            </div>

            {/* Engine 2 Card */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-indigo-100 text-indigo-800 rounded-2xl border border-indigo-200">
                  <Cpu className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Engine 2: Contextual AI Auditor</h3>
                  <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                    Gemini 2.5 Flash • Semantic Analysis
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Addresses nuanced legal phrasing, passive voice exceptions, cross-reference clauses, and stealth carve-outs that deterministic keyword scanners can misinterpret.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Ephemerally processed via stateless Edge APIs.</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Extracts quote citations directly from the text.</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>Detects indirect data monetization & subprocessor risks.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 1-10 Risk Score Mathematical Model */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              The 1–10 Risk Score Calculation Formula
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Every contract begins at a baseline score of <strong>1.0 (Clean / Consumer Friendly)</strong>. As clauses are identified and verified, weighted penalty coefficients are added. Mitigating provisions (such as clear opt-out windows and explicit deletion rights) subtract points. The final score is bounded between 1.0 and 10.0.
          </p>

          {/* Formula Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                  <th className="py-2.5 px-3">Clause Category</th>
                  <th className="py-2.5 px-3">Severity</th>
                  <th className="py-2.5 px-3">Impact Weight</th>
                  <th className="py-2.5 px-3">Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Mandatory Binding Arbitration</td>
                  <td className="py-2.5 px-3"><span className="text-rose-600 font-bold">High</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-rose-600">+2.00</td>
                  <td className="py-2.5 px-3">Strips 7th Amendment constitutional rights to public jury trial.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Class Action Lawsuit Waiver</td>
                  <td className="py-2.5 px-3"><span className="text-rose-600 font-bold">High</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-rose-600">+1.50</td>
                  <td className="py-2.5 px-3">Renders low-dollar consumer financial aggregation economically impossible.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Data Monetization / Sale to Brokers</td>
                  <td className="py-2.5 px-3"><span className="text-rose-600 font-bold">High</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-rose-600">+2.00</td>
                  <td className="py-2.5 px-3">Monetizes personal telemetry, browsing histories, and profile signals.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">AI Model Training On User Content</td>
                  <td className="py-2.5 px-3"><span className="text-rose-600 font-bold">High</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-rose-600">+1.75</td>
                  <td className="py-2.5 px-3">Permanent incorporation of user documents into machine learning weights.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Broad Intellectual Property Transfer</td>
                  <td className="py-2.5 px-3"><span className="text-amber-600 font-bold">Medium</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-amber-600">+1.50</td>
                  <td className="py-2.5 px-3">Perpetual, sublicensable, royalty-free commercial exploitation license.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Silent Unilateral Modifications</td>
                  <td className="py-2.5 px-3"><span className="text-amber-600 font-bold">Medium</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-amber-600">+1.00</td>
                  <td className="py-2.5 px-3">Allows company to alter pricing and liability terms without direct notice.</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-slate-900">Dark Pattern Auto-Renewal</td>
                  <td className="py-2.5 px-3"><span className="text-amber-600 font-bold">Medium</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-amber-600">+1.25</td>
                  <td className="py-2.5 px-3">Burdensome cancellation procedures and hidden subscription charges.</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="py-2.5 px-3 font-bold text-emerald-900">Verified 30-Day Arbitration Opt-Out</td>
                  <td className="py-2.5 px-3"><span className="text-emerald-700 font-bold">Mitigation</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">-1.00</td>
                  <td className="py-2.5 px-3">Preserves consumer rights if actionable written opt-out instructions exist.</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="py-2.5 px-3 font-bold text-emerald-900">Explicit GDPR / CCPA Deletion Guarantee</td>
                  <td className="py-2.5 px-3"><span className="text-emerald-700 font-bold">Mitigation</span></td>
                  <td className="py-2.5 px-3 font-mono font-bold text-emerald-700">-0.75</td>
                  <td className="py-2.5 px-3">Clear, self-service data erasure pipeline and specified retention windows.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Risk Band Categorization */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-1">
              <span className="text-xs font-black text-emerald-800">1.0 – 4.0 Score</span>
              <p className="text-xs font-bold text-emerald-900">Low Risk (Favorable)</p>
              <p className="text-[11px] text-emerald-700">Clear consumer protections, minimal tracking, fair remedies.</p>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-1">
              <span className="text-xs font-black text-amber-800">4.1 – 7.0 Score</span>
              <p className="text-xs font-bold text-amber-900">Moderate Risk (Standard)</p>
              <p className="text-[11px] text-amber-700">Standard commercial clauses, arbitration waivers, telemetry collection.</p>
            </div>
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-center space-y-1">
              <span className="text-xs font-black text-rose-800">7.1 – 10.0 Score</span>
              <p className="text-xs font-bold text-rose-900">High Risk (Predatory)</p>
              <p className="text-[11px] text-rose-700">Data selling, non-disparagement gag rules, sweeping IP appropriation.</p>
            </div>
          </div>
        </div>

        {/* AI Prompting & Temperature Constraints */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900">AI Prompting & Temperature Constraints</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To prevent hallucination and maintain strict deterministic reproducibility across identical text inputs, our Google Gemini 2.5 Flash API calls enforce tight runtime parameters:
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>Temperature set to 0.1:</strong> Minimizes generative variance, ensuring legal interpretations remain factual, grounded, and consistent across repeated scans.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>Verbatim Quote Grounding:</strong> Every identified red flag must return an exact quote snippet directly extracted from the submitted text. Findings lacking direct textual evidence are automatically discarded.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>Strict JSON Schema Output:</strong> Structured response output guarantees proper parsing and prevents formatting errors or conversational deviations.</span>
            </li>
          </ul>
        </div>

        {/* Ongoing Benchmarking and Updates */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900">Ongoing Benchmarking & Audit Cadence</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our popular service analyses (e.g., TikTok, OpenAI, Google, Microsoft, Meta) are re-evaluated monthly or whenever platforms announce revisions to their public legal terms. Our heuristic database is updated continuously to incorporate new judicial rulings regarding unconscionable contract language, FTC enforcement actions, and international privacy regulations.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-1 sm:max-w-xl">
            <h3 className="text-xl font-black">Audit Your Documents Against Our Methodology</h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Paste your contract or upload a PDF to receive an instant breakdown scored against our 1–10 rubric.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-2xl font-bold text-xs hover:bg-blue-50 transition-all shadow-md flex-shrink-0"
          >
            <span>Run Scanner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
  );
}