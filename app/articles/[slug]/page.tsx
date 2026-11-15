import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { ARTICLES, getArticleBySlug } from '@/lib/articles';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight,
  Zap,
  Tag,
  UserCheck,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  HelpCircle,
  Share2
} from 'lucide-react';

export const dynamic = 'force-static';
export const dynamicParams = true;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Terms Scanner',
    };
  }

  return {
    metadataBase: new URL('https://termsscanner.in'),
    title: `${article.title} | Terms Scanner`,
    description: article.summary,
    keywords: [
      article.category.toLowerCase(),
      'terms scanner',
      'legal tech guide',
      'contract redlining',
      'privacy policy analysis',
      'contract compliance'
    ],
    authors: [{ name: article.author }],
    alternates: {
      canonical: `https://termsscanner.in/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://termsscanner.in/articles/${article.slug}`,
      siteName: 'Terms Scanner',
      locale: 'en_US',
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.lastUpdated,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Schema.org Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.date,
    "dateModified": article.lastUpdated,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "Terms Scanner",
      "url": "https://termsscanner.in"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://termsscanner.in/articles/${article.slug}`
    }
  };

  const faqSchema = article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://termsscanner.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Legal Guides",
        "item": "https://termsscanner.in/articles"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://termsscanner.in/articles/${article.slug}`
      }
    ]
  };

  // Other related articles
  const relatedArticles = ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Navbar Header */}
      <Header />

      <main className="mb-auto py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        
        {/* Back Link & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <Link 
            href="/articles"
            className="inline-flex items-center space-x-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to All Legal Guides</span>
          </Link>
          <div className="flex items-center space-x-1 text-[11px] font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:underline">Guides</Link>
            <span>/</span>
            <span className="font-bold text-slate-700 truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>

        {/* Article Container */}
        <article className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Article Header Meta */}
          <header className="border-b border-slate-100 pb-8 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full font-bold border border-blue-200 flex items-center space-x-1">
                <Tag className="w-3 h-3" />
                <span>{article.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Published {article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">
                Updated {article.lastUpdated}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {article.summary}
            </p>

            {/* Author Byline */}
            <div className="flex items-center space-x-3 pt-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{article.author}</p>
                <p className="text-[11px] text-slate-500">{article.authorRole}</p>
              </div>
            </div>
          </header>

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-3">
              <div className="flex items-center space-x-2 text-blue-900">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <h2 className="text-sm font-extrabold uppercase tracking-wider">Key Executive Takeaways</h2>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">In This Guide</p>
            <nav className="flex flex-col space-y-1.5 text-xs font-semibold text-blue-600">
              {article.sections.map((sec, idx) => (
                <a key={idx} href={`#section-${idx}`} className="hover:underline hover:text-blue-800">
                  {idx + 1}. {sec.heading}
                </a>
              ))}
              {article.faqs.length > 0 && (
                <a href="#faq-section" className="hover:underline hover:text-blue-800">
                  {article.sections.length + 1}. Frequently Asked Questions
                </a>
              )}
            </nav>
          </div>

          {/* Article Sections */}
          <div className="space-y-10 pt-2">
            {article.sections.map((section, idx) => (
              <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Callout Box */}
                {section.callout && (
                  <div className={`p-4 rounded-xl border flex items-start space-x-3 text-xs sm:text-sm font-medium ${
                    section.callout.type === 'warning'
                      ? 'bg-rose-50 border-rose-200 text-rose-900'
                      : section.callout.type === 'tip'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-900'
                  }`}>
                    {section.callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />}
                    {section.callout.type === 'tip' && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                    {section.callout.type === 'info' && <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />}
                    <div className="leading-relaxed">{section.callout.text}</div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQ Accordion Section */}
          {article.faqs && article.faqs.length > 0 && (
            <section id="faq-section" className="pt-8 border-t border-slate-200 space-y-4 scroll-mt-24">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Author Card & Editorial Note */}
          <footer className="pt-8 border-t border-slate-200 space-y-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-lg shadow">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{article.author}</h3>
                  <p className="text-xs text-slate-600">{article.authorRole}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Reviewed for legal accuracy and updated for 2026 compliance standards.</p>
                </div>
              </div>
              <Link
                href="/editorial-policy"
                className="text-xs font-bold text-blue-600 hover:underline shrink-0"
              >
                Editorial Standards →
              </Link>
            </div>
          </footer>

        </article>

        {/* Related Guides Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-slate-900">Recommended Legal Guides</h2>
            <Link href="/articles" className="text-xs font-bold text-blue-600 hover:underline">
              View All 16 Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/articles/${rel.slug}`}
                className="p-4 bg-white border border-slate-200 hover:border-blue-500 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                    {rel.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1 line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold text-blue-600 pt-2 border-t border-slate-100">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call-To-Action Card */}
        <section className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/20 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Free Automated Legal Auditor</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Scan Contracts Against Legal Traps
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Paste any agreement or privacy policy into Terms Scanner to instantly detect auto-renewals, arbitration clauses, and data tracking 100% offline.
            </p>
          </div>

          <Link
            href="/"
            className="px-6 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-black text-xs sm:text-sm rounded-2xl shadow-lg transition-all transform hover:scale-105 shrink-0 flex items-center space-x-2"
          >
            <span>Scan Contract Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

      </main>

    </div>
  );
}
