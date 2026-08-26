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
  UserCheck
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
      'privacy policy analysis'
    ],
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      
      {/* Navbar Header */}
      <Header />

      <main className="mb-auto py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <Link 
            href="/articles"
            className="inline-flex items-center space-x-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Legal Guides</span>
          </Link>
          <div className="flex items-center space-x-1 text-[11px] font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:underline">Guides</Link>
            <span>/</span>
            <span className="font-bold text-slate-700 truncate max-w-[180px]">{article.title}</span>
          </div>
        </div>

        {/* Article Header Card */}
        <article className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full font-bold border border-blue-200 flex items-center space-x-1">
                <Tag className="w-3 h-3" />
                <span>{article.category}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1 text-slate-700 font-bold">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{article.author}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium pt-1">
              {article.summary}
            </p>
          </div>

          {/* Article Full Prose Content (~1,000 words crawlable SSG text) */}
          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal pt-2">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>

        {/* Call-To-Action Card */}
        <section className="p-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/20 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Automated Legal Auditor</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Scan Contracts Against Legal Traps
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Paste any agreement or privacy policy into Terms Scanner to instantly flag auto-renewals, arbitration clauses, and data risks.
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
