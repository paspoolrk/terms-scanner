export interface KeyRedFlag {
  title: string;
  detail: string;
}

export interface ServiceAnalysis {
  slug: string;
  name: string;
  category: string;
  riskScore: number; // out of 10
  lastUpdated: string;
  summary: string;
  editorialBreakdown: string[]; // multi-paragraph rich text breakdown
  keyRedFlags: KeyRedFlag[];
  dataCollected: string[];
  arbitrationDetails: string;
  userPrivacyTips: string[];
}

export const POPULAR_SERVICES: ServiceAnalysis[] = [
  {
    slug: 'tiktok',
    name: 'TikTok',
    category: 'Social Media & Short-Form Video',
    riskScore: 8.7,
    lastUpdated: '2026-08-15',
    summary: 'TikTok’s Privacy Policy grants extensive permissions to collect device identifiers, keystroke dynamics, biometric data (faceprints and voiceprints), and cross-site browsing activity for targeted ad profiling.',
    editorialBreakdown: [
      'TikTok (owned by ByteDance) operates under one of the most comprehensive user-data collection frameworks among global social media networks. By installing and interacting with the mobile application, users grant explicit permission for automated background telemetry collection, real-time location tracking, and cross-platform advertising profiling.',
      'A primary concern identified in independent privacy audits revolves around TikTok’s explicit claim of rights over biometric identifiers. In section 3 of their US Privacy Disclosures, TikTok outlines permissions to collect biometric faceprints and voiceprints from user-generated content without separate explicit opt-in prompts where allowed by local laws. This data can be utilized for content recommendation algorithms, ad targeting, and internal AI training.',
      'Additionally, TikTok utilizes an in-app web browser that loads whenever users click external links within the application. Security researchers have highlighted that in-app browsers are capable of monitoring JavaScript events, including keystroke timing and input fields, enabling granular user behavioral monitoring unless links are forced to open in external native browsers like Safari or Chrome.',
      'From an IP and licensing perspective, uploading content to TikTok grants the platform an irrevocable, worldwide, royalty-free, and sub-licensable license to distribute, modify, execute, and monetize user content across affiliated networks and advertising placements without compensation to the creator.'
    ],
    keyRedFlags: [
      {
        title: 'Biometric Identifier Collection',
        detail: 'Permits harvesting faceprints and voiceprints from uploaded audio/video without explicit per-instance consent where allowed by local law.'
      },
      {
        title: 'In-App Webview & Keystroke Monitoring',
        detail: 'In-app browser can monitor web interaction events, touch patterns, and external URL browsing activity.'
      },
      {
        title: 'Perpetual Commercial Content Licensing',
        detail: 'Grants TikTok a worldwide, royalty-free, transferable sub-license to reuse and monetize user videos in commercial campaigns.'
      },
      {
        title: 'Off-Platform Ad Pixel Synchronization',
        detail: 'Aggregates browsing habits from third-party merchant websites using TikTok Pixel integration.'
      }
    ],
    dataCollected: [
      'Biometric Faceprints & Voiceprints',
      'Keystroke Dynamics & Touch Timing',
      'System Clipboard Content',
      'Precise GPS & Wi-Fi Triangulation',
      'Device Model, Serial Number & SIM Data',
      'External Link In-App Web Browsing History'
    ],
    arbitrationDetails: 'Requires individual binding arbitration under AAA rules in Santa Clara County, California. Includes explicit class-action bans and jury trial waivers.',
    userPrivacyTips: [
      'Disable "Sync Contacts & Facebook Friends" in Account Settings.',
      'Turn off "Personalized Ads" in Security & Privacy preferences.',
      'Always open external web links in your native browser instead of the TikTok in-app webview.',
      'Opt out of location tracking permissions at the mobile operating system level.'
    ]
  },
  {
    slug: 'discord',
    name: 'Discord',
    category: 'VoIP & Gaming Communities',
    riskScore: 7.1,
    lastUpdated: '2026-08-10',
    summary: 'Discord monitors text channels, voice chat metrics, and running software applications. Messages are not end-to-end encrypted and are analyzed for ad targeting and moderation.',
    editorialBreakdown: [
      'Discord has transformed from a dedicated gaming voice application into a universal community platform hosting over 200 million active users. However, users frequently operate under the misconception that private servers and direct messages offer private communications. In reality, Discord does not utilize end-to-end encryption (E2EE) for text messages or voice communications.',
      'Because message transmissions are decrypted at Discord server endpoints, all text content, uploaded files, and voice room metadata are subject to automated moderation algorithms, keywords filtering, and manual inspection by Trust & Safety teams. Furthermore, Discord’s terms explicitly grant permission to analyze user communication patterns for interest-based ad targeting.',
      'Discord also inspects local device process lists when the application desktop client is running. Known as "Rich Presence" and background activity detection, Discord reads active process execution names to display current game titles, music playback, or coding environments to server members and third-party integrations.',
      'Regarding data retention, deleting a Discord account or deleting individual messages does not guarantee instant removal from analytical datastores or backup logs, which may be preserved for regulatory compliance and fraud prevention.'
    ],
    keyRedFlags: [
      {
        title: 'Absence of End-to-End Encryption',
        detail: 'All direct messages, server channels, and voice transmissions are decrypted on Discord servers and readable by moderation bots.'
      },
      {
        title: 'Running System Process Inspection',
        detail: 'Scans active desktop applications and game executables to broadcast user presence and feed internal telemetry.'
      },
      {
        title: 'Indefinite Data Retention in Backups',
        detail: 'Deleted text messages and account telemetry remain stored in analytical datasets and backup archives.'
      }
    ],
    dataCollected: [
      'Text Messages, Audio Streams & Files',
      'Running Desktop Applications & Executables',
      'Third-Party Connected Accounts (Steam, Twitch, Spotify)',
      'IP Addresses & Hardware Telemetry',
      'Friend Graph & Server Participation Logs'
    ],
    arbitrationDetails: 'Mandatory individual binding arbitration under JAMS rules, waiving the right to participate in class actions or consolidated lawsuits.',
    userPrivacyTips: [
      'Disable "Use data to customize my Discord experience" in Privacy Settings.',
      'Turn off "Display currently running application as a status message".',
      'Refrain from sharing sensitive financial, credentials, or PII over Discord DMs.'
    ]
  },
  {
    slug: 'openai-chatgpt',
    name: 'OpenAI / ChatGPT',
    category: 'Artificial Intelligence & Productivity',
    riskScore: 6.8,
    lastUpdated: '2026-08-12',
    summary: 'OpenAI processes user prompts and uploaded documents to train foundation models by default. Prompts may be reviewed by human moderators and exposed via unexpected model outputs.',
    editorialBreakdown: [
      'OpenAI’s ChatGPT is used globally for drafting code, summarizing internal corporate documentation, and analyzing data. However, using consumer tiers (Free and Plus) without enabling privacy controls exposes user inputs to model training pipelines.',
      'Under OpenAI’s default Data Usage Policies, conversational text, uploaded PDFs, image inputs, and code snippets are stored on cloud infrastructure and ingested into dataset pipelines to train future GPT foundation models. This creates potential data leakage risks if confidential corporate data, trade secrets, or PII are entered into the prompt field.',
      'Furthermore, OpenAI utilizes third-party human annotators and internal safety teams to evaluate flagged prompts for content policy enforcement. Human moderators may inspect prompt histories, voice recordings, and uploaded file attachments.',
      'While OpenAI Enterprise and API endpoints operate under strict zero-data-retention and no-training agreements, standard consumer accounts require manual opt-out action in settings to prevent prompt data usage.'
    ],
    keyRedFlags: [
      {
        title: 'Default Foundation Model Training',
        detail: 'Conversations and uploaded files are utilized to train future GPT models unless user explicitly disables data controls.'
      },
      {
        title: 'Human Reviewer Prompt Access',
        detail: 'Human annotators and safety moderators review flagged prompts and file uploads for safety compliance.'
      },
      {
        title: 'No Output Exclusivity Guarantees',
        detail: 'Generated responses are not exclusive; identical or similar prompts by other users may yield near-identical output.'
      }
    ],
    dataCollected: [
      'Prompt Inputs & Conversation History',
      'Uploaded Files, Images & Document Code',
      'IP Address & Geolocation Metadata',
      'Browser Metrics & OS Identifiers',
      'Voice Recording Audio Streams'
    ],
    arbitrationDetails: 'Governed by California law; disputes settled via individual binding arbitration under AAA rules in San Francisco, CA.',
    userPrivacyTips: [
      'Navigate to Settings > Data Controls and turn OFF "Improve the model for everyone".',
      'Never input proprietary source code, trade secrets, passwords, or personal PII into consumer ChatGPT windows.',
      'Use ChatGPT Team, Enterprise, or API endpoints when processing commercial data.'
    ]
  },
  {
    slug: 'zoom',
    name: 'Zoom',
    category: 'Video Conferencing & Enterprise Communication',
    riskScore: 5.9,
    lastUpdated: '2026-08-08',
    summary: 'Zoom records teleconferencing metadata, automated meeting transcripts, and chat logs. Standard cloud recordings process raw audio and video on cloud servers.',
    editorialBreakdown: [
      'Zoom Video Communications became the global standard for business, education, and personal remote interaction. Following early public scrutiny regarding security and privacy disclosures, Zoom revised its terms and architecture, but key data gathering practices remain active.',
      'While Zoom offers optional End-to-End Encryption (E2EE) for meetings, standard cloud recordings, live transcription services, and automated meeting summary features require raw audio and video feeds to be decoded and processed in Zoom’s cloud environment.',
      'Zoom collects extensive teleconference metadata, including participant IP addresses, MAC addresses, hardware device models, network connection quality, and meeting duration logs. Meeting hosts also receive granular attendance reports and polling metrics.',
      'Under Zoom’s updated AI data usage policies, Zoom guarantees that customer audio, video, and chat content will not be used to train AI models without explicit customer consent, though system telemetry and operational metadata continue to support platform analytics.'
    ],
    keyRedFlags: [
      {
        title: 'Cloud Decryption for AI Summaries & Transcripts',
        detail: 'Live transcription and AI summary tools require unencrypted cloud decoding of meeting streams.'
      },
      {
        title: 'Detailed Telemetry & Attendance Reports',
        detail: 'Hosts receive detailed logs of participant join/leave times, network metrics, and poll responses.'
      },
      {
        title: 'Indefinite Metadata Storage',
        detail: 'Hardware specs, IP logs, and session metadata are stored long-term for platform optimization.'
      }
    ],
    dataCollected: [
      'Video Streams, Audio Transcripts & In-Meeting Chats',
      'Participant IP Addresses & MAC Addresses',
      'Hardware Specs, Camera/Microphone Model & OS Version',
      'Meeting Attendance Timestamps & Duration',
      'Calendar Integration & Contact Book Details'
    ],
    arbitrationDetails: 'Disputes resolved via binding individual arbitration under AAA rules in San Jose, California.',
    userPrivacyTips: [
      'Enable End-to-End Encryption (E2EE) in Zoom account settings for sensitive meetings.',
      'Disable automated cloud recording and AI summary generation when discussing confidential topics.',
      'Use virtual background features to prevent visual scanning of personal physical environments.'
    ]
  },
  {
    slug: 'instagram',
    name: 'Instagram (Meta)',
    category: 'Social Media & Media Sharing',
    riskScore: 8.2,
    lastUpdated: '2026-08-14',
    summary: 'As part of Meta, Instagram aggregates user photo interactions, location data, and off-site shopping activity across Meta platforms to build targeted behavioral profiles.',
    editorialBreakdown: [
      'Instagram (operated by Meta Platforms, Inc.) utilizes a unified privacy framework connecting user profiles across Instagram, Facebook, Messenger, Threads, and WhatsApp. This integrated architecture allows Meta to aggregate behavior across multiple applications and millions of third-party websites.',
      'When users upload photos, Reels, or Stories, Instagram processes the media using computer vision algorithms. These automated systems index facial features, visual objects, background environments, and location metadata embedded in EXIF photo headers to enhance ad targeting profiles.',
      'Instagram monitors off-platform user browsing using Meta Pixel and Meta Business Tools embedded on merchant websites. If you view a product on an e-commerce website using Meta tracking, that activity is matched to your Instagram profile to trigger retargeting campaigns.',
      'Under Instagram’s Terms of Use, users retain ownership of their content but grant Meta a non-exclusive, royalty-free, transferable, sub-licensable worldwide license to host, distribute, modify, and display uploaded photos and videos in connection with the service.'
    ],
    keyRedFlags: [
      {
        title: 'Cross-Platform Meta Data Aggregation',
        detail: 'Combines Instagram activity with Facebook, Threads, and off-site merchant tracking pixels.'
      },
      {
        title: 'Computer Vision & EXIF Data Extraction',
        detail: 'Scans image content, facial landmarks, and EXIF location metadata for ad profiling.'
      },
      {
        title: 'Broad Royalty-Free Sub-Licensing Rights',
        detail: 'Grants Meta worldwide sub-licensable rights to distribute and feature user-uploaded media.'
      }
    ],
    dataCollected: [
      'Photos, Videos, Reels & Story Content',
      'EXIF Camera Metadata & Geolocation Tags',
      'Off-Site Shopping & Browsing Habits via Meta Pixel',
      'Direct Message Content & Contact Lists',
      'Device Battery Level, Signal Strength & Installed Apps'
    ],
    arbitrationDetails: 'Individual binding arbitration under AAA rules for US users, waiving class actions. European users retain local court rights under GDPR.',
    userPrivacyTips: [
      'Strip EXIF location metadata from photos prior to uploading.',
      'Turn off "Activity Status" to hide online visibility from other users.',
      'Manage off-Meta activity preferences in Meta Accounts Center.'
    ]
  },
  {
    slug: 'whatsapp',
    name: 'WhatsApp (Meta)',
    category: 'Encrypted Instant Messaging',
    riskScore: 6.4,
    lastUpdated: '2026-08-11',
    summary: 'WhatsApp provides end-to-end encryption for message content, but collects and shares extensive account metadata, phone numbers, and usage frequency with parent Meta.',
    editorialBreakdown: [
      'WhatsApp is renowned for employing the Signal Protocol to deliver end-to-end encryption (E2EE) for text messages, voice calls, video calls, and media sharing. This ensures that the content of private communications cannot be read or intercepted by WhatsApp or Meta servers in transit.',
      'However, privacy concerns center heavily around telemetry and metadata collection. WhatsApp collects extensive non-content telemetry, including user phone numbers, profile names, interaction frequencies, online timestamps, group membership lists, and device hardware profiles.',
      'Following Meta’s privacy policy consolidation, WhatsApp shares account metadata with Meta companies to support infrastructure reliability, security enforcement, and cross-platform business messaging services.',
      'Additionally, when communicating with WhatsApp Business accounts, message streams may be processed using third-party enterprise cloud solutions, where different privacy disclosures apply.'
    ],
    keyRedFlags: [
      {
        title: 'Account Telemetry Sharing with Meta',
        detail: 'Shares phone numbers, usage timestamps, and device metrics with parent company Meta.'
      },
      {
        title: 'Address Book Contact Ingestion',
        detail: 'Requires continuous sync access to your device contact list to identify registered contacts.'
      },
      {
        title: 'Business Account Cloud Exposure',
        detail: 'Messages sent to WhatsApp Business accounts may be stored on third-party cloud servers.'
      }
    ],
    dataCollected: [
      'Phone Numbers & Device Address Book Contacts',
      'Message Timestamps, Frequency & Session Duration',
      'Device Hardware Specs, Battery & Mobile Carrier',
      'IP Address & Approximate Location',
      'WhatsApp Business Transaction Records'
    ],
    arbitrationDetails: 'Governed by Meta terms; requires individual binding arbitration for US residents, barring class actions.',
    userPrivacyTips: [
      'Enable "Two-Step Verification" with a PIN for account security.',
      'Turn off "Read Receipts" and "Last Seen" in Privacy Settings.',
      'Enable Disappearing Messages for sensitive chat conversations.'
    ]
  },
  {
    slug: 'slack',
    name: 'Slack (Salesforce)',
    category: 'Enterprise Workplace Collaboration',
    riskScore: 6.2,
    lastUpdated: '2026-08-05',
    summary: 'Slack indexes workspace messages, private channels, and file attachments. Enterprise administrators can export chat histories, and AI tools process messages unless opted out.',
    editorialBreakdown: [
      'Slack (a subsidiary of Salesforce) serves as the digital headquarters for thousands of businesses worldwide. While Slack provides robust corporate security controls, user privacy is determined primarily by workspace administrator configurations rather than individual user choices.',
      'Under Slack’s Enterprise Grid and compliance frameworks, workspace administrators have access to legal compliance export tools (Corporate Exports). These tools allow authorized admins to export all workspace communications—including private channels and 1-on-1 direct messages—without notifying individual employees.',
      'In 2024, Slack sparked public discussion regarding its platform search and AI capabilities. Slack uses machine learning models to power search recommendations, channel suggestions, and automated summaries. While Salesforce clarified that customer workspace content is not used to train generative AI without enterprise authorization, workspace telemetry and message structures support platform ML algorithms.',
      'Data retention policies on Slack are set at the workspace owner level. Free tier workspaces retain message history for 90 days, while paid tiers can configure custom retention rules to preserve messages indefinitely or enforce automatic deletion.'
    ],
    keyRedFlags: [
      {
        title: 'Administrator Access to Private DMs',
        detail: 'Workspace admins can export private channel histories and 1-on-1 direct message logs using compliance tools.'
      },
      {
        title: 'Workspace Owner Data Ownership',
        detail: 'All communication data created on a company Slack belongs legally to the employer workspace owner.'
      },
      {
        title: 'ML Recommendations & Search Indexing',
        detail: 'Message contents and interaction graphs are indexed for internal search algorithms and channel suggestions.'
      }
    ],
    dataCollected: [
      'Public & Private Channel Text Messages',
      'Direct Messages & File Attachments',
      'Workspace Admin Access Logs & Audit Trails',
      'IP Address, Device Specs & SSO Identifiers',
      'App Integrations & Bot Usage Telemetry'
    ],
    arbitrationDetails: 'B2B Customer Agreements are governed by Delaware law with disputes settled via binding commercial arbitration in San Francisco, CA.',
    userPrivacyTips: [
      'Assume all workspace communication—including private DMs—can be reviewed by company workspace administrators.',
      'Avoid sharing personal financial data, medical records, or non-work PII on company Slack channels.',
      'Check your workspace’s custom retention policy under "About This Workspace".'
    ]
  },
  {
    slug: 'spotify',
    name: 'Spotify',
    category: 'Audio & Music Streaming Platform',
    riskScore: 5.7,
    lastUpdated: '2026-08-02',
    summary: 'Spotify tracks listening habits, mood preferences, voice commands, and location data to deliver targeted audio ads and personalized recommendations.',
    editorialBreakdown: [
      'Spotify is the world’s leading music and podcast streaming service with over 600 million active users. Beyond streaming audio, Spotify functions as a sophisticated algorithmic behavioral profiling engine.',
      'Spotify tracks every user interaction: songs skipped, listening times, playlist creations, search queries, podcast subscriptions, and volume levels. This behavioral dataset is compiled to infer user mood, daily routines, commuting habits, and cultural interests for hyper-targeted programmatic audio advertising.',
      'For users on Spotify Free, advertising partners receive access to demographic profiles, real-time location metrics, and listening context (e.g., "workout playlist" or "focus music") to serve targeted commercial spots.',
      'Spotify also supports voice search features on mobile devices and smart speakers. Voice input audio clips are processed to execute search commands and improve acoustic recognition algorithms.'
    ],
    keyRedFlags: [
      {
        title: 'Behavioral & Emotional Profiling',
        detail: 'Analyzes music habits, listening times, and playlist themes to infer user mood for ad targeting.'
      },
      {
        title: 'Audio Ad Targeting Data Sharing',
        detail: 'Shares listening context and demographic metadata with third-party programmatic ad exchanges.'
      },
      {
        title: 'Voice Input Processing',
        detail: 'Voice search commands are recorded and processed for acoustic algorithm training.'
      }
    ],
    dataCollected: [
      'Detailed Listening History & Song Skip Counts',
      'Playlist Titles, Followed Artists & Podcast Subscriptions',
      'Approximate Location & IP Address',
      'Device Specs, Connected Speakers & Bluetooth Accessories',
      'Voice Search Commands & Audio Input'
    ],
    arbitrationDetails: 'US users are subject to mandatory binding arbitration under AAA rules with class action waivers.',
    userPrivacyTips: [
      'Turn on "Private Session" in Listening Preferences to prevent followers from viewing current listening activity.',
      'Opt out of "Tailored Ads" in Spotify Account Privacy Settings.',
      'Disconnect Spotify integrations with social media accounts like Facebook if cross-platform sharing is unwanted.'
    ]
  },
  {
    slug: 'netflix',
    name: 'Netflix',
    category: 'Video Streaming & Entertainment',
    riskScore: 5.4,
    lastUpdated: '2026-07-29',
    summary: 'Netflix monitors viewing habits, watch durations, device hardware, and household network locations to enforce account sharing rules and power recommendation algorithms.',
    editorialBreakdown: [
      'Netflix processes vast quantities of viewing telemetry across hundreds of millions of global subscriber profiles. Every title clicked, pause duration, episode binge length, and playback quality metric is logged to refine recommendation engines.',
      'In recent years, Netflix introduced household location enforcement mechanisms. Netflix tracks IP addresses, device IDs, and Wi-Fi network IDs to determine a primary subscriber household, restricting account sharing outside designated geographic access points.',
      'For subscribers on "Standard with Ads" tiers, Netflix collects viewing preferences and demographic data to serve personalized video advertisements in partnership with global ad sales networks.',
      'Netflix stores account metadata, payment histories, and profile interaction logs indefinitely while accounts remain active, maintaining compliance backups after subscription cancellation.'
    ],
    keyRedFlags: [
      {
        title: 'Household IP & Network Tracking',
        detail: 'Tracks IP addresses, Wi-Fi network IDs, and device metrics to restrict out-of-household access.'
      },
      {
        title: 'Ad-Supported Tier Data Sharing',
        detail: 'Subscribers on ad tiers have viewing habits shared with advertising partners for targeted video ads.'
      },
      {
        title: 'Granular Viewing Telemetry Indexing',
        detail: 'Logs pause events, playback speeds, and title completion rates to train algorithmic models.'
      }
    ],
    dataCollected: [
      'Complete Watch History, Pause Events & Search Queries',
      'Household IP Address, Wi-Fi SSID & Network IDs',
      'Device Hardware Specs, TV Models & Streaming Sticks',
      'Payment Information & Billing Zip Codes',
      'Ad Impression Interaction Metrics'
    ],
    arbitrationDetails: 'US subscriber agreements require binding individual arbitration under AAA rules, barring class litigation.',
    userPrivacyTips: [
      'Clear watch history items from "Viewing Activity" in Account Settings to reset recommendations.',
      'Opt out of behavioral ad targeting if subscribed to an ad-supported Netflix tier.',
      'Download viewing activity archives under Privacy Controls to audit stored data.'
    ]
  },
  {
    slug: 'reddit',
    name: 'Reddit',
    category: 'Discussion Communities & Social News',
    riskScore: 7.4,
    lastUpdated: '2026-08-16',
    summary: 'Reddit logs community visits, vote activity, subreddits read, and IP addresses. Reddit sells licensing access to historical post archives for commercial AI training datasets.',
    editorialBreakdown: [
      'Reddit (the "front page of the internet") hosts over 100,000 active communities. While Reddit allows pseudonymous username registration without requiring legal names, public activity creates comprehensive digital footprints.',
      'In 2024, Reddit updated its corporate licensing strategy by signing multi-million dollar data licensing agreements with major AI companies (including Google and OpenAI). Under these agreements, Reddit’s vast historical archive of public posts, comments, and discussion threads is licensed for commercial AI model training.',
      'Reddit tracks logged-in and logged-out users across subreddits. Telemetry includes subreddits viewed, post upvotes/downvotes, search queries, external link clicks, and IP address locations. This data is used to construct interest profiles for targeted advertising.',
      'Even if a user deletes their Reddit account, public posts and comments remain visible on subreddits unless manually edited or deleted prior to account closure.'
    ],
    keyRedFlags: [
      {
        title: 'AI Training Dataset Licensing',
        detail: 'Licenses public posts, comments, and discussion threads to third-party tech companies for AI model training.'
      },
      {
        title: 'Account Closure Does Not Delete Posts',
        detail: 'Deleting a Reddit account disassociates your username but leaves comment bodies visible on subreddits.'
      },
      {
        title: 'Logged-Out User Tracking',
        detail: 'Uses browser cookies and IP tracking to monitor subreddit viewing habits for unauthenticated users.'
      }
    ],
    dataCollected: [
      'Public Posts, Comments & Upvote/Downvote History',
      'Subreddit Visits, Search Queries & Link Clicks',
      'IP Address, Geolocation & ISP Details',
      'Device Specifications & Browser User-Agent',
      'Third-Party Ad Tracking Pixels'
    ],
    arbitrationDetails: 'US User Agreement mandates binding individual arbitration under AAA rules with class action waivers.',
    userPrivacyTips: [
      'Manually overwrite and delete sensitive posts/comments using script tools before closing an account.',
      'Disable "Allow Reddit to use your activity to personalize ads" in Safety & Privacy settings.',
      'Turn off "Allow search engines to index your user profile".'
    ]
  },
  {
    slug: 'github',
    name: 'GitHub (Microsoft)',
    category: 'Developer Platform & Code Hosting',
    riskScore: 5.6,
    lastUpdated: '2026-08-04',
    summary: 'GitHub hosts public and private repositories. Public code repositories are indexed to power GitHub Copilot AI assistance. Telemetry tracks developer workflow activity.',
    editorialBreakdown: [
      'GitHub (owned by Microsoft) is the premiere cloud hosting service for software development and open-source collaboration, storing over 400 million repositories.',
      'Privacy and IP considerations on GitHub focus heavily on GitHub Copilot. Public code repositories hosted on GitHub are utilized as training data for Copilot code completion models. While private repositories are excluded from Copilot training models by default under GitHub Enterprise terms, developer prompt interactions and code completions send telemetry back to cloud servers.',
      'GitHub logs detailed developer activity, including git commits, pull request discussions, issue comments, SSH key connections, and IP addresses. For organization accounts, corporate administrators receive security audit logs detailing developer access events.',
      'GitHub adheres to strict developer security standards, offering mandatory two-factor authentication (2FA) and secret scanning tools that detect exposed API keys committed to repositories.'
    ],
    keyRedFlags: [
      {
        title: 'Public Repository AI Training Ingestion',
        detail: 'Publicly uploaded source code is ingested to train GitHub Copilot code suggestion models.'
      },
      {
        title: 'Copilot Telemetry & Prompt Logging',
        detail: 'Code completion suggestions and telemetry are transmitted to cloud infrastructure for optimization.'
      },
      {
        title: 'Organization Audit Logs',
        detail: 'Enterprise owners receive granular audit logs of all developer commit, clone, and SSH access events.'
      }
    ],
    dataCollected: [
      'Source Code, Commit Logs & Pull Request Discussions',
      'GitHub Copilot Code Prompts & Telemetry',
      'IP Addresses, SSH Keys & OAuth Access Tokens',
      'Billing Information & Organization Membership',
      'Developer Workflow Telemetry & Extension Usage'
    ],
    arbitrationDetails: 'Governed by Microsoft terms; commercial disputes resolved under Washington state law with AAA arbitration.',
    userPrivacyTips: [
      'Never commit sensitive API keys, database credentials, or `.env` files to public or private repos.',
      'Disable "Allow GitHub to use my code snippets for product updates" in Copilot settings.',
      'Enable mandatory 2-Factor Authentication (2FA) via hardware security key.'
    ]
  },
  {
    slug: 'notion',
    name: 'Notion',
    category: 'Productivity & Knowledge Workspace',
    riskScore: 6.1,
    lastUpdated: '2026-08-09',
    summary: 'Notion stores workspace documents, databases, and meeting notes in cloud infrastructure. Notion AI processes page text for search and automated summaries.',
    editorialBreakdown: [
      'Notion combines notes, wikis, project management databases, and AI features into a single workspace application used by individuals and enterprise teams.',
      'Notion stores workspace data in cloud servers (Amazon Web Services). Because Notion does not offer end-to-end client-side encryption (E2EE) for page content, workspace databases and documents are accessible to cloud infrastructure software for search indexing, workspace permissions management, and automated backups.',
      'With the integration of Notion AI, users can generate summaries, edit text, and query workspace databases. Notion states that customer page content is processed securely by AI sub-processors (such as OpenAI and Anthropic) without using customer workspace data to train base AI models.',
      'Workspace administrators on Notion Team and Enterprise plans have oversight rights, allowing them to manage member access, view workspace audit logs, and export workspace content.'
    ],
    keyRedFlags: [
      {
        title: 'Absence of Client-Side End-to-End Encryption',
        detail: 'Page contents and database entries are stored unencrypted on cloud servers to enable search and collaboration.'
      },
      {
        title: 'AI Sub-Processor Data Transmission',
        detail: 'Notion AI queries transmit page text to AI providers (OpenAI/Anthropic) for real-time processing.'
      },
      {
        title: 'Workspace Admin Export Oversight',
        detail: 'Team administrators can export workspace databases and view access audit logs for all members.'
      }
    ],
    dataCollected: [
      'Page Content, Database Records & Embedded Files',
      'Notion AI Search Prompts & Text Summaries',
      'User IP Address, Device Type & OS Metadata',
      'Workspace Member Collaboration Graphs',
      'Integration API Tokens (Slack, Google Drive, Figma)'
    ],
    arbitrationDetails: 'Governed by California law; disputes settled via individual binding arbitration under AAA rules in San Francisco, CA.',
    userPrivacyTips: [
      'Avoid storing unencrypted medical records, credit card numbers, or root passwords on Notion pages.',
      'Audit page sharing settings to ensure private pages are not accidentally set to "Share to Web".',
      'Review third-party integration permissions under Workspace Settings > Connections.'
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceAnalysis | undefined {
  return POPULAR_SERVICES.find(service => service.slug === slug);
}
