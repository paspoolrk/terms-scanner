import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { ARTICLES } from '@/lib/articles';
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  metadataBase: new URL('https://termsscanner.in'),
  title: 'Legal Tech & Consumer Privacy Guides | Terms Scanner',
  description: 'In-depth legal guides, consumer privacy analysis, SaaS contract security checklists, and AI data rights breakdowns written by legal tech experts.',
  keywords: [
    'legal tech articles',
    'privacy policy guides',
    'SaaS contract traps',
    'binding arbitration explained',
    'GDPR CCPA checklist',
    'AI data scraping legal rights'
  ],
  alternates: {
    canonical: 'https://termsscanner.in/articles',
  },
  openGraph: {
    title: 'Legal Tech & Consumer Privacy Guides | Terms Scanner',
    description: 'In-depth legal guides, consumer privacy analysis, SaaS contract security checklists, and AI data rights breakdowns.',
    url: 'https://termsscanner.in/articles',
    siteName: 'Terms Scanner',
    locale: 'en_US',
    type: 'website',
  },
};

export default function ArticlesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Tech & Privacy Knowledge Base</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Legal & Privacy Guides
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Expert educational analysis on contract security, regulatory compliance, predatory legalese, and digital data rights.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="p-6 bg-white border border-slate-200 hover:border-blue-500 rounded-3xl transition-all shadow-sm hover:shadow-md group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[11px] font-bold border border-slate-200">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-all">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
