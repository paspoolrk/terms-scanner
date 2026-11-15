'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { 
  BookOpen, 
  Search, 
  ShieldAlert, 
  HelpCircle, 
  FileText, 
  Scale, 
  ChevronRight, 
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface GlossaryTerm {
  term: string;
  category: 'Contract Clauses' | 'Data Privacy' | 'Dispute Resolution' | 'Compliance & IP';
  riskLevel: 'High' | 'Medium' | 'Low' | 'Neutral';
  shortDefinition: string;
  inDepthExplanation: string;
  realWorldExample: string;
  consumerAction: string;
}

const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Binding Arbitration',
    category: 'Dispute Resolution',
    riskLevel: 'High',
    shortDefinition: 'A dispute settlement procedure where an independent arbitrator replaces a public judge and jury.',
    inDepthExplanation: 'Binding arbitration clauses prevent consumers and employees from suing a corporation in a public courtroom. Instead, disputes are resolved through private, confidential arbitration hearings where the arbitrator’s decision is final with virtually no right to appeal. The corporation often selects the arbitration provider, and proceedings remain sealed from public record.',
    realWorldExample: 'A rideshare or streaming app requires users to resolve overbilling disputes via the American Arbitration Association (AAA) rather than filing a small claims lawsuit.',
    consumerAction: 'Check for an "opt-out" window (typically 30 days from account creation) where you can mail or email a formal opt-out notice to retain your constitutional right to sue.'
  },
  {
    term: 'Class Action Waiver',
    category: 'Dispute Resolution',
    riskLevel: 'High',
    shortDefinition: 'A contractual term that relinquishes your legal right to join or initiate a class-action lawsuit against the company.',
    inDepthExplanation: 'When a corporation causes minor financial injury across millions of users (such as an illegal $2/month recurring fee), no individual consumer will hire a lawyer to recover $24. Class actions aggregate millions of claims. Class action waivers force each customer to arbitrate individually, making legal enforcement economically impossible.',
    realWorldExample: 'Telecom contracts and fintech apps state: "You agree that any arbitration or proceeding shall be conducted solely on an individual basis and not in a class, consolidated, or representative action."',
    consumerAction: 'Pair this with our arbitration scanner to detect if an opt-out procedure exists. Regulatory bodies in several jurisdictions are actively examining their unconscionability.'
  },
  {
    term: 'Unilateral Modification',
    category: 'Contract Clauses',
    riskLevel: 'High',
    shortDefinition: 'A clause giving the service provider the authority to change contract terms at any time without obtaining your express consent.',
    inDepthExplanation: 'These provisions declare that continuing to use the service after a silent update constitutes full acceptance of new fees, privacy changes, or liability limits. In modern contract jurisprudence, "browsewrap" unilateral changes without conspicuous notice often fail enforceability standards, but companies continue to include them to discourage disputes.',
    realWorldExample: '"We reserve the right to modify these Terms at our sole discretion. Your continued use of the platform after updates are posted constitutes binding agreement to the modifications."',
    consumerAction: 'Look for terms requiring active email notification of material changes rather than silent website postings.'
  },
  {
    term: 'Evergreen Clause (Auto-Renewal)',
    category: 'Contract Clauses',
    riskLevel: 'Medium',
    shortDefinition: 'A provision that automatically renews a subscription and charges the customer unless canceled before a strict notice deadline.',
    inDepthExplanation: 'Also known as automatic contract extension, evergreen clauses shift the burden of renewal to the user. Many companies enforce strict cancellation windows (e.g., must notify in writing at least 30 days prior to annual renewal) and deny refund requests if canceled one day late.',
    realWorldExample: 'Annual software licenses that automatically bill $299 on day 366 without an advance reminder email or a single-click online cancellation option.',
    consumerAction: 'Review the cancellation notice period upon signup. In California, New York, and the EU, automatic renewal statutes (like California ARL) require proactive reminder notices and simple online cancellation.'
  },
  {
    term: 'Liquidated Damages',
    category: 'Contract Clauses',
    riskLevel: 'Medium',
    shortDefinition: 'A predetermined sum of money agreed upon in advance that one party must pay if they breach specific terms.',
    inDepthExplanation: 'Liquidated damages clauses are legitimate when estimating actual damages is difficult. However, predatory terms sometimes disguise illegal punitive penalties as liquidated damages, charging exorbitant fees for minor platform infractions or early subscription termination.',
    realWorldExample: 'A cloud hosting provider imposing a fixed $5,000 "administrative recovery fee" if your account triggers an unintended API rate limit or bandwidth spike.',
    consumerAction: 'Ensure damages are reasonably proportional to anticipated loss. Disproportionately high figures can be challenged in court as unenforceable penalties.'
  },
  {
    term: 'Indemnification (Hold Harmless)',
    category: 'Contract Clauses',
    riskLevel: 'High',
    shortDefinition: 'An agreement where you promise to pay the company’s legal defense fees and damages if a third party sues them because of your actions.',
    inDepthExplanation: 'Broad indemnification clauses can obligate an individual user or small business to hire lawyers and cover massive settlement checks for a multi-billion dollar tech company if user-uploaded content triggers a copyright, privacy, or defamation claim.',
    realWorldExample: '"You agree to defend, indemnify, and hold harmless the Company, its directors, and affiliates from all claims, damages, liabilities, and legal expenses arising from your use of the Services."',
    consumerAction: 'Seek mutual indemnification in B2B agreements, or ensure indemnity is restricted solely to your willful misconduct or gross negligence, excluding normal usage.'
  },
  {
    term: 'Limitation of Liability',
    category: 'Contract Clauses',
    riskLevel: 'Medium',
    shortDefinition: 'A contractual cap on the maximum monetary damages a company must pay you if their product causes you financial or operational loss.',
    inDepthExplanation: 'Almost all tech terms cap the company’s total liability to either $50–$100 or the total fees you paid them in the preceding 6 to 12 months. They also disclaim liability for "consequential, indirect, special, or punitive damages," leaving users with zero recourse if data loss destroys their business operations.',
    realWorldExample: '"In no event shall the Company be liable for loss of profits, data corruption, or business interruption, and our total aggregate liability shall not exceed the amount paid by you in the last 30 days."',
    consumerAction: 'For mission-critical enterprise tools, negotiate a liability carve-out for data breaches, gross negligence, and confidentiality violations.'
  },
  {
    term: 'Governing Law & Forum Selection',
    category: 'Dispute Resolution',
    riskLevel: 'Medium',
    shortDefinition: 'A provision designating which jurisdiction’s laws apply and where any lawsuit or hearing must physically take place.',
    inDepthExplanation: 'Forum selection clauses force users to travel across countries or continents to litigate disputes. For example, a consumer in Mumbai or London might be forced to hire counsel and travel to Delaware or Santa Clara County, California to contest a dispute.',
    realWorldExample: '"These terms are governed by the laws of the State of Delaware, and any formal proceeding shall be filed exclusively in the state or federal courts located in New Castle County, Delaware."',
    consumerAction: 'Consumer protection laws in the EU and India often deem cross-border forum selection clauses unenforceable against individual consumers residing locally.'
  },
  {
    term: 'Severability',
    category: 'Contract Clauses',
    riskLevel: 'Low',
    shortDefinition: 'A clause stating that if any single provision is ruled illegal or unenforceable, the remaining terms remain in full legal effect.',
    inDepthExplanation: 'Without a severability clause, an invalid provision (such as an illegal arbitration rule or unconscionable liability waiver) could potentially nullify the entire contract. Severability acts as a structural safety net for the drafter.',
    realWorldExample: '"If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect."',
    consumerAction: 'Standard boilerplate. Often coupled with "blue-pencil" rules allowing judges to narrow an overly broad clause rather than voiding it.'
  },
  {
    term: 'Integration (Merger) Clause',
    category: 'Contract Clauses',
    riskLevel: 'Medium',
    shortDefinition: 'A statement confirming that the written contract represents the final, complete agreement and supersedes all prior oral or written promises.',
    inDepthExplanation: 'Also known as the entire agreement clause, this renders oral sales promises, marketing email assurances, and demo statements legally meaningless unless they are explicitly incorporated into the final signed document.',
    realWorldExample: '"This Agreement constitutes the entire understanding between the parties and supersedes all prior negotiations, representations, or oral warranties concerning the subject matter."',
    consumerAction: 'Never rely on a sales rep’s verbal assurance or email confirmation regarding uptime or refund guarantees. If it is not in the contract, it legally does not exist.'
  },
  {
    term: 'Force Majeure',
    category: 'Contract Clauses',
    riskLevel: 'Low',
    shortDefinition: 'Relieves a party from performing their contractual duties when unforeseeable catastrophic events make performance impossible.',
    inDepthExplanation: 'Covers "Acts of God" such as hurricanes, earthquakes, civil unrest, war, cyber warfare, global pandemics, and government embargoes. Modern clauses frequently list cloud hosting outages and third-party ISP failures.',
    realWorldExample: '"Neither party shall be liable for delayed delivery or system downtime caused by events beyond reasonable control, including natural disasters, warfare, strikes, and global telecommunication failure."',
    consumerAction: 'Verify whether payment obligations are also excused during prolonged force majeure events, or whether you have the right to terminate without penalty after 30 days.'
  },
  {
    term: 'Personally Identifiable Information (PII)',
    category: 'Data Privacy',
    riskLevel: 'High',
    shortDefinition: 'Any piece of data or combination of factors that can identify a specific living individual.',
    inDepthExplanation: 'Includes direct identifiers (Full name, Social Security Number, National Identity ID, Passport, biometric scans) and indirect identifiers (IP address, device fingerprints, geolocation trails, behavioral cookie IDs). Data protection laws regulate the collection, storage, and processing of PII.',
    realWorldExample: 'A smartphone app collecting your home Wi-Fi BSSID and GPS coordinates every 15 minutes and linking them to your email address.',
    consumerAction: 'Inspect privacy policies for clear retention schedules specifying when your PII is permanently deleted from backup servers.'
  },
  {
    term: 'Third-Party Data Sharing / Sale',
    category: 'Data Privacy',
    riskLevel: 'High',
    shortDefinition: 'Disclosing, renting, releasing, or transferring consumer personal information to external companies for monetary or commercial consideration.',
    inDepthExplanation: 'Under California’s CCPA/CPRA, "selling" data is defined broadly to include exchanging tracking cookies and browsing history for targeted programmatic advertising value, even if cash does not directly change hands.',
    realWorldExample: '"We may share your browsing behavior, purchased goods, and device attributes with select advertising and analytics partners to serve customized commercial offers."',
    consumerAction: 'Look for a prominent "Do Not Sell or Share My Personal Information" link in the footer or configure a Global Privacy Control (GPC) signal in your browser.'
  },
  {
    term: 'Data Controller vs. Data Processor',
    category: 'Compliance & IP',
    riskLevel: 'Medium',
    shortDefinition: 'The entity determining why and how personal data is processed (Controller) versus the entity processing data on their instructions (Processor).',
    inDepthExplanation: 'Under GDPR, the Data Controller bears primary legal accountability for lawful consent and user rights requests. The Data Processor (e.g., an AWS cloud host or email deliverability API) processes data strictly as contracted under a Data Processing Agreement (DPA).',
    realWorldExample: 'A SaaS project management software is the Controller for its customers’ billing information, but a Processor for the project tasks uploaded by corporate employees.',
    consumerAction: 'When exercising GDPR deletion or access rights, always direct your formal request to the Data Controller.'
  },
  {
    term: 'Subprocessor',
    category: 'Compliance & IP',
    riskLevel: 'Medium',
    shortDefinition: 'A third-party vendor contracted by a primary data processor to deliver specialized computing or hosting functions.',
    inDepthExplanation: 'SaaS platforms rarely operate their own physical servers; they rely on subprocessors like AWS, Cloudflare, Stripe, OpenAI, and Twilio. Regulated contracts require companies to publish a public subprocessor directory and notify customers prior to onboarding new vendors.',
    realWorldExample: 'A note-taking app routing customer text to an AI subprocessor for summarization without disclosing the vendor in its privacy policy.',
    consumerAction: 'Enterprise procurement teams must verify that subprocessors hold SOC 2 Type II or ISO 27001 certifications and sign equivalent DPA obligations.'
  },
  {
    term: 'Telemetry & Diagnostic Logging',
    category: 'Data Privacy',
    riskLevel: 'Medium',
    shortDefinition: 'Automated background collection of application performance metrics, crash logs, and user interaction signals.',
    inDepthExplanation: 'While often justified as technical diagnostics, telemetry systems routinely ingest clipboard contents, URLs visited, hardware specs, and keystroke timing. In extreme cases, telemetry data can be de-anonymized to track user identity across disjointed apps.',
    realWorldExample: 'A desktop text editor transmitting every command menu click, error log, and file extension name back to central analytics servers every 60 seconds.',
    consumerAction: 'Look for in-app toggle switches to disable optional telemetry and anonymous usage reporting.'
  },
  {
    term: 'Dark Patterns',
    category: 'Data Privacy',
    riskLevel: 'High',
    shortDefinition: 'User interface designs deliberately engineered to deceive, coerce, or manipulate consumers into making choices against their best interest.',
    inDepthExplanation: 'Examples include pre-ticked subscription add-ons, obscured cancellation buttons, "confirmshaming" (e.g., clicking "No thanks, I hate saving money"), and burying privacy opt-out settings behind multi-tiered confusing menus. Dark patterns are increasingly penalized by the US FTC and EU regulators.',
    realWorldExample: 'Making subscription signup instant via one click, but requiring cancellation to happen by calling a toll-free number during limited business hours.',
    consumerAction: 'Document coercive UI flows with screenshots. Regulatory bodies like the FTC accept consumer complaints regarding deceptive cancellation hurdles.'
  },
  {
    term: 'Intellectual Property (IP) Transfer & Grant',
    category: 'Compliance & IP',
    riskLevel: 'High',
    shortDefinition: 'Contractual terms specifying whether you retain ownership of content you upload, or whether you grant the platform broad commercial exploitation rights.',
    inDepthExplanation: 'Many platforms do not take outright copyright ownership, but instead demand a "worldwide, perpetual, royalty-free, transferable, sublicensable license to use, display, reproduce, and create derivative works from your content." This language can allow the platform to train generative AI models or license your creative work to advertisers.',
    realWorldExample: '"By submitting content, you grant us an irrevocable, perpetual license to use, commercialize, and adapt your material across all media formats now known or hereafter developed."',
    consumerAction: 'Verify whether the license expires upon account deletion, and ensure terms explicitly prohibit commercial sub-licensing or AI training without explicit consent.'
  },
  {
    term: 'Artificial Intelligence Training License',
    category: 'Compliance & IP',
    riskLevel: 'High',
    shortDefinition: 'A clause permitting the provider to ingest your proprietary documents, communications, and media into machine learning models.',
    inDepthExplanation: 'Generative AI systems require petabytes of training data. Tech platforms are quietly updating terms to treat customer prompts, meeting transcripts, and uploaded documents as training material. Once data is baked into neural network weights, it cannot be deleted via a standard GDPR erasure request.',
    realWorldExample: '"We may use Customer Content, including text prompts, files, and generated outputs, to train, refine, and improve our machine learning and artificial intelligence algorithms."',
    consumerAction: 'Enterprise users should verify that their tier guarantees "Zero Data Retention (ZDR)" and explicit non-training guarantees for foundational models.'
  },
  {
    term: 'Right of Erasure (Right to Be Forgotten)',
    category: 'Compliance & IP',
    riskLevel: 'Low',
    shortDefinition: 'The statutory right under GDPR Article 17 permitting individuals to demand that organizations permanently delete their personal data.',
    inDepthExplanation: 'Mandates that controllers erase personal data without undue delay when data is no longer necessary for its original purpose, consent is withdrawn, or data was unlawfully processed. Organizations must also notify third-party processors to scrub cached copies.',
    realWorldExample: 'A consumer submitting a formal GDPR deletion request to an e-commerce platform demanding the removal of account credentials, search history, and marketing profiles.',
    consumerAction: 'Exercise this right when closing online accounts. Companies typically have 30 days to confirm full data erasure across production databases and backup archives.'
  },
  {
    term: 'Data Portability',
    category: 'Compliance & IP',
    riskLevel: 'Low',
    shortDefinition: 'The legal entitlement to receive your personal data in a structured, commonly used, machine-readable format.',
    inDepthExplanation: 'Codified under GDPR Article 20, data portability enables users to download their photos, documents, and messages and transfer them directly to a competing service without vendor lock-in hurdles.',
    realWorldExample: 'Using Google Takeout or Apple Data & Privacy to download all historical emails, photos, and calendar records as a clean JSON or ZIP export.',
    consumerAction: 'Test data export functionality early in a SaaS relationship to ensure vendor lock-in does not prevent smooth migration in the future.'
  },
  {
    term: 'Non-Compete Clause',
    category: 'Contract Clauses',
    riskLevel: 'High',
    shortDefinition: 'A covenant restricting an employee or contractor from working with or establishing a competing business for a specified duration and territory.',
    inDepthExplanation: 'Traditionally used for senior executives with trade secrets, non-competes proliferated across entry-level workers and developers. In 2024, the US Federal Trade Commission (FTC) issued a comprehensive rule curbing most non-compete agreements as unfair competition, though litigation remains active.',
    realWorldExample: 'An employment agreement barring a software developer from accepting any programming role in North America for 18 months following departure.',
    consumerAction: 'Consult state and local employment statutes. Jurisdictions like California, North Dakota, Oklahoma, and India legally ban non-compete enforcement against employees.'
  },
  {
    term: 'Non-Disparagement Provision',
    category: 'Contract Clauses',
    riskLevel: 'High',
    shortDefinition: 'A gag clause barring a customer or employee from making negative statements, reviews, or public criticisms about the company.',
    inDepthExplanation: 'Used by aggressive companies to threaten users who post negative Google Reviews, Yelp evaluations, or critical blog posts. In the United States, the Consumer Review Fairness Act (CRFA) makes it illegal for companies to include non-disparagement gag clauses in standard consumer form contracts.',
    realWorldExample: '"Customer agrees not to publish any negative, disparaging, or derogatory remarks, reviews, or comments concerning the Vendor on social media or review portals."',
    consumerAction: 'If a consumer contract threatens fines for honest negative reviews, it is likely unlawful under the CRFA. File a complaint with the FTC.'
  },
  {
    term: 'Evergreen Consent (Omnibus Consent)',
    category: 'Data Privacy',
    riskLevel: 'High',
    shortDefinition: 'Bundling broad, unrelated consent permissions into a single mandatory agreement checkbox during onboarding.',
    inDepthExplanation: 'Under GDPR and modern privacy doctrine, consent must be freely given, specific, informed, and unambiguous. Omnibus agreements that condition basic software use on consenting to unrelated ad tracking and marketing calls violate granular consent requirements.',
    realWorldExample: 'A fitness tracker app stating: "By creating an account, you agree to our Terms, Privacy Policy, automated SMS promotional texts, and third-party data broker sharing."',
    consumerAction: 'Look for granular opt-in checkboxes where marketing communications and analytics tracking can be accepted or declined independently.'
  },
  {
    term: 'Business Associate Agreement (BAA)',
    category: 'Compliance & IP',
    riskLevel: 'Medium',
    shortDefinition: 'A federally mandated HIPAA contract between a covered healthcare entity and a vendor handling protected health information (PHI).',
    inDepthExplanation: 'Under HIPAA, any cloud service provider, database vendor, or transcription tool that handles PHI must execute a signed BAA establishing physical, administrative, and technical safeguards. Without an executed BAA, deploying healthcare workflows violates US federal law.',
    realWorldExample: 'A hospital executing a BAA with an encrypted cloud database provider to store patient medical records securely.',
    consumerAction: 'If you handle patient data, never upload PHI to consumer-tier software that refuses to execute a formal BAA.'
  }
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');

  const categories = ['All', 'Contract Clauses', 'Data Privacy', 'Dispute Resolution', 'Compliance & IP'];
  const riskLevels = ['All', 'High', 'Medium', 'Low'];

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      const matchesSearch = 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.inDepthExplanation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesRisk = selectedRisk === 'All' || item.riskLevel === selectedRisk;

      return matchesSearch && matchesCategory && matchesRisk;
    });
  }, [searchQuery, selectedCategory, selectedRisk]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Header />

      <main className="mb-auto py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
        
        {/* Header Hero */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-blue-800 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Tech Reference Library</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Terms of Service & Privacy Glossary
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Comprehensive reference definitions, practical impact breakdowns, and consumer defense guidelines for 25+ essential contract and privacy terms.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search legal terms (e.g., arbitration, indemnification, PII, dark patterns)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-bold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Risk Level Filter */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-500 mr-1">Risk:</span>
              {riskLevels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedRisk(lvl)}
                  className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                    selectedRisk === lvl
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredTerms.length}</strong> legal terms
          </span>
          {(searchQuery || selectedCategory !== 'All' || selectedRisk !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedRisk('All');
              }}
              className="text-blue-600 font-bold hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Glossary Terms List */}
        <div className="space-y-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => {
              const riskColors = {
                High: 'bg-rose-50 text-rose-700 border-rose-200',
                Medium: 'bg-amber-50 text-amber-700 border-amber-200',
                Low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                Neutral: 'bg-slate-50 text-slate-700 border-slate-200'
              };

              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {item.term}
                      </h2>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold border border-slate-200">
                        {item.category}
                      </span>
                    </div>

                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black border ${riskColors[item.riskLevel]}`}>
                      {item.riskLevel} Risk Factor
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 leading-relaxed bg-blue-50/50 p-3 rounded-2xl border border-blue-100/60">
                    {item.shortDefinition}
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>{item.inDepthExplanation}</p>
                  </div>

                  {/* Real world clause example */}
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs">
                    <span className="font-mono font-bold text-slate-500 uppercase tracking-wider text-[10px] block">
                      Common Clause Formulation:
                    </span>
                    <p className="font-mono text-slate-700 italic bg-white p-2.5 rounded-xl border border-slate-200/60">
                      {item.realWorldExample}
                    </p>
                  </div>

                  {/* Consumer takeaway action */}
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-start space-x-2 text-xs text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">What You Should Do: </strong>
                      <span>{item.consumerAction}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-3xl space-y-3">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">No matching legal terms found</h3>
              <p className="text-xs text-slate-500">
                Try searching for different keywords or reset your category and risk filters.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA to Scanner */}
        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-white shadow-xl space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-1 sm:max-w-xl">
            <h3 className="text-xl font-black">Scan Any Contract Against This Glossary Instantly</h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Run our free offline scanner to identify arbitration traps, auto-renewals, and IP transfers in your documents in seconds.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-2xl font-bold text-xs hover:bg-blue-50 transition-all shadow-md flex-shrink-0"
          >
            <span>Scan A Document Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
  );
}