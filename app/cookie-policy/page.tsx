import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { 
  Cookie, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Settings, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://termsscanner.in'),
  title: 'Cookie & Advertising Policy | Terms Scanner',
  description: 'Detailed disclosures regarding our use of cookies, local device storage, Google AdSense, DoubleClick cookies, and third-party advertising opt-out options.',
  keywords: [
    'cookie policy',
    'Google AdSense disclosures',
    'DoubleClick DART cookie',
    'advertising opt-out',
    'local storage privacy'
  ],
  alternates: {
    canonical: 'https://termsscanner.in/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <Cookie className="w-3.5 h-3.5 text-blue-600" />
            <span>Privacy Disclosures</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Cookie & Advertising Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Last Updated: November 2026 • Transparent disclosures regarding cookies, web beacons, local browser storage, and Google AdSense partner networks.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900">1. What Are Cookies and Web Technologies?</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Cookies are small text files placed on your computer or mobile device when you visit websites. They are widely used to make websites work efficiently, remember user preferences, deliver relevant advertising, and provide aggregated analytics to site operators.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Terms Scanner (<strong>termsscanner.in</strong>), we prioritize user privacy. We minimize our use of tracking technologies, and we explicitly disclose how third-party services (including Google AdSense) operate on our domain.
          </p>
        </div>

        {/* How Terms Scanner Uses Storage */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900">2. How Terms Scanner Uses Local Storage</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            When you run our <strong>Instant Offline Scanner</strong>, contract text, extracted clauses, and calculated risk scores are processed in your browser memory and optionally preserved in your browser’s local client-side storage (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">localStorage</code>).
          </p>
          
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start space-x-3 text-xs text-emerald-900">
            <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Zero Server Transmission: </strong>
              <span>Your locally stored contract history never leaves your device. We do not transmit or synchronize your scanned documents to our servers or any cloud database. You can clear this data at any time by clearing your browser cache.</span>
            </div>
          </div>
        </div>

        {/* Google AdSense & DoubleClick Disclosure */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              3. Google AdSense & Third-Party Advertising Vendors
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Terms Scanner uses <strong>Google AdSense</strong> to display commercial advertisements across select pages to finance the development, hosting, and free public availability of our consumer privacy tools.
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Google Cookie Disclosures:</h3>
              <ul className="list-disc list-inside space-y-1.5 pl-1">
                <li>Google, as a third-party vendor, uses cookies to serve ads on <strong>termsscanner.in</strong>.</li>
                <li>Google’s use of advertising cookies (including the DoubleClick cookie) enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.</li>
                <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 underline">Google Ads Settings</a>.</li>
                <li>Alternatively, you can opt out of a third-party vendor’s use of cookies for personalized advertising by visiting <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 underline">www.aboutads.info</a>.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Opt-Out Links & Tools */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              4. How to Control and Opt Out of Cookies
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            You have full control over the cookies and tracking technologies active on your device. Below are official industry opt-out portals:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-2xl transition-all block space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                  Google Ad Personalization
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-[11px] text-slate-500">
                Disable personalized ads across all Google Display Network partner websites.
              </p>
            </a>

            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-2xl transition-all block space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                  Network Advertising Initiative (NAI)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-[11px] text-slate-500">
                Opt out of interest-based ads from multiple third-party advertising companies.
              </p>
            </a>

            <a
              href="https://optout.aboutads.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-2xl transition-all block space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                  Digital Advertising Alliance (DAA)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-[11px] text-slate-500">
                Consumer choice tool for WebChoices participating ad companies.
              </p>
            </a>

            <a
              href="https://www.youronlinechoices.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-2xl transition-all block space-y-1 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">
                  European Interactive Digital Advertising (EDAA)
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </div>
              <p className="text-[11px] text-slate-500">
                Opt-out portal specifically designated for residents of the European Economic Area (EEA).
              </p>
            </a>

          </div>
        </div>

        {/* Browser Settings Instructions */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl font-black text-slate-900">5. Managing Cookies in Your Browser</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Most modern web browsers allow you to manage cookie preferences directly in their settings. You can set your browser to refuse all cookies, reject third-party cookies, or alert you when a cookie is being sent. Consult your browser’s official help documentation for specific steps (e.g., Google Chrome Settings &gt; Privacy and Security; Mozilla Firefox Settings &gt; Privacy & Security; Apple Safari Preferences &gt; Privacy).
          </p>
        </div>

        {/* Contact info for cookie inquiries */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xl font-black text-slate-900">6. Questions Regarding Our Cookie Policy</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            If you have questions or concerns about our use of cookies or third-party advertising partners, please contact our Data Protection team at <a href="mailto:privacy@termsscanner.in" className="font-mono font-bold text-blue-600 underline">privacy@termsscanner.in</a>.
          </p>
        </div>

      </main>
    </div>
  );
}