export interface CourseModule {
  title: string;
  duration: string;
  tools: string[];
  projects: string[];
  description: string;
}

export interface CourseCurriculum {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  overview: string;
  modules: CourseModule[];
}

export interface StatItem {
  number: string;
  label: string;
  icon: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  originalPrice: string;
  duration: string;
  popular: boolean;
  tagline: string;
  features: string[];
  certifications: string[];
  internship: string;
  placement: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  beforeRole?: string;
  afterRole?: string;
  packageIncrease?: string;
  text: string;
  rating: number;
  image: string;
  videoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PartnerLogo {
  name: string;
  logoUrl: string;
}

export interface PlacementCard {
  name: string;
  photo: string;
  companyLogo: string;
  companyName: string;
  beforeSalary: string;
  afterSalary: string;
  hike: string;
  role: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: 'classroom' | 'event' | 'workshop';
  imageUrl: string;
}

export const STATS_DATA: StatItem[] = [
  { number: "10,000+", label: "Students Trained", icon: "GraduationCap" },
  { number: "500+", label: "Hiring Partners", icon: "Handshake" },
  { number: "4.9/5", label: "Google Rating", icon: "Star" },
  { number: "100%", label: "Placement Support", icon: "Briefcase" },
];

export const BRANDS_DATA: PartnerLogo[] = [
  { name: "Google", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Amazon", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Flipkart", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Flipkart_logo.png" },
  { name: "Zomato", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg" },
  { name: "Infosys", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Adobe", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Adobe_Corporate_Logo.svg" }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    title: "AI-Powered Curriculum",
    description: "Learn advanced digital marketing integrated with ChatGPT, Midjourney, and AI automation tools for 10x productivity.",
    icon: "Cpu",
    color: "from-red-500 to-rose-700"
  },
  {
    title: "Live Client Projects",
    description: "Work on real-world advertising campaigns with real budgets. No theoretical learning, only actual execution.",
    icon: "TrendingUp",
    color: "from-rose-600 to-red-800"
  },
  {
    title: "100% Placement Assistance",
    description: "Access our exclusive job portal, direct interview line-ups, and resume reviews with industry veterans.",
    icon: "CheckCircle",
    color: "from-red-600 to-rose-900"
  },
  {
    title: "Global Certifications",
    description: "Get certified by Google, Meta, Hubspot, Semrush, and our own government-recognized industry credential.",
    icon: "Award",
    color: "from-rose-500 to-red-600"
  },
  {
    title: "Paid Internships",
    description: "Top performers get guaranteed 3-month agency internships at Gurgaon’s top performance marketing firms.",
    icon: "Users",
    color: "from-red-700 to-rose-700"
  },
  {
    title: "Resume & Portfolio",
    description: "Build an outstanding live campaign portfolio and a video resume that gets you noticed instantly by HR recruiters.",
    icon: "FileText",
    color: "from-rose-800 to-red-900"
  },
  {
    title: "Interview Prep",
    description: "Mock interviews, communication coaching, and negotiation strategies to help you land high-paying roles.",
    icon: "Video",
    color: "from-red-600 to-red-900"
  },
  {
    title: "Lifetime Access",
    description: "Enjoy lifetime access to curriculum updates, slack networking groups, and periodic masterclasses.",
    icon: "Infinity",
    color: "from-rose-600 to-rose-800"
  }
];

export const WHY_CHOOSE_US_DATA: HighlightItem[] = [
  {
    title: "Expert Agency Trainers",
    description: "Learn from marketing practitioners managing ₹50L+ monthly ad spends, not college lecturers with outdated slideshows.",
    icon: "Users",
    color: "red"
  },
  {
    title: "Real Client Projects",
    description: "Work with real local and global clients. Gain hands-on exposure to brand strategy, budgeting, and conversion optimization.",
    icon: "Target",
    color: "red"
  },
  {
    title: "AI Marketing Training",
    description: "Stay ahead of the curve with cutting-edge modules on AI prompt engineering, automated copy, and AI image design.",
    icon: "Zap",
    color: "red"
  },
  {
    title: "Hybrid Classes (Online + Offline)",
    description: "Attend high-tech offline classes at our premium Gurgaon campus or join live online sessions with HD recordings.",
    icon: "Laptop",
    color: "red"
  },
  {
    title: "Flexible Batches",
    description: "Choose weekday morning batches or weekend special sessions designed for students, working professionals, and founders.",
    icon: "Calendar",
    color: "red"
  },
  {
    title: "1-on-1 Doubt Clearing",
    description: "Daily dedicated doubt-clearing sessions and hands-on lab practice with mentors to ensure zero learning gaps.",
    icon: "MessageSquareCode",
    color: "red"
  }
];

export const CURRICULUM_DATA: CourseCurriculum[] = [
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    icon: "Search",
    tagline: "Master the art of organic traffic generation and rank #1 on Google.",
    overview: "Learn keyword research, technical audits, on-page optimization, and white-hat backlink acquisition strategies built for search algorithms.",
    modules: [
      {
        title: "SEO Foundations & Keyword Research",
        duration: "2 Weeks",
        tools: ["Ahrefs", "SEMrush", "Google Keyword Planner", "Google Trends"],
        projects: ["Niche Keyword Opportunity Analysis", "Competitor Content Mapping"],
        description: "Understanding search intent, search volumes, and identifying low-hanging opportunities to drive instant traffic."
      },
      {
        title: "On-Page & Technical SEO",
        duration: "3 Weeks",
        tools: ["Screaming Frog", "Google Search Console", "Yoast SEO", "RankMath"],
        projects: ["Full Audit of an e-commerce website", "Core Web Vitals Speed Optimization"],
        description: "Optimizing site structure, speed, meta tags, schema markup, and fixing crawl errors for optimal indexability."
      },
      {
        title: "Off-Page SEO & Link Building",
        duration: "2 Weeks",
        tools: ["Hunter.io", "Buzzstream", "Moz Link Explorer"],
        projects: ["Skyscraper Link Outreach Campaign", "Local SEO Google Business Profile Optimization"],
        description: "Earning premium authority backlinks, executing blogger outreach, and claiming Local 3-Pack rankings in Gurgaon search queries."
      }
    ]
  },
  {
    id: "google-ads",
    name: "Google PPC Search & Display",
    icon: "TrendingUp",
    tagline: "Drive high-intent commercial traffic and maximize ROI with paid ads.",
    overview: "Learn to design, write, test, and optimize Search, Display, Shopping, and Performance Max Google campaigns with high conversion rates.",
    modules: [
      {
        title: "Search Campaigns & Bidding Strategy",
        duration: "2 Weeks",
        tools: ["Google Ads Manager", "Keyword Planner", "Google Editor"],
        projects: ["High-intent Search Campaign Setup for Local Client", "A/B Testing Ad Copy"],
        description: "Master quality score optimization, match types, ad copy creation, and bidding algorithms (tCPA, tROAS)."
      },
      {
        title: "Performance Max & Shopping Ads",
        duration: "2 Weeks",
        tools: ["Google Merchant Center", "PMax Campaigns", "Remarketing Lists"],
        projects: ["E-Commerce Shopping Catalog setup", "Smart Display Retargeting Setup"],
        description: "Set up and manage e-commerce marketing systems, sync product feeds, and run automated machine-learning driven campaigns."
      }
    ]
  },
  {
    id: "meta-ads",
    name: "Meta Ads (Facebook & Instagram)",
    icon: "Facebook",
    tagline: "Master interruption marketing, visual storytelling, and laser targeting.",
    overview: "Harness the power of social media feeds. Build custom audiences, retargeting funnels, and high-impact visual creative frameworks that scale.",
    modules: [
      {
        title: "Meta Pixel & Custom Audiences",
        duration: "2 Weeks",
        tools: ["Meta Business Manager", "Facebook Pixel Helper", "Events Manager"],
        projects: ["Pixel Setup & Custom Conversion Events", "Lookalike Audience Modeling"],
        description: "Configure tracking, Conversions API (CAPI), and define laser-focused target personas based on interest, behavior, and demographics."
      },
      {
        title: "Ad Creative Strategy & Copywriting",
        duration: "2 Weeks",
        tools: ["Canva Pro", "Ad Library", "ChatGPT Prompting"],
        projects: ["High-Converting Video Script Writing", "Creating 5 Hook Templates"],
        description: "Develop scrolling-stopping hooks, write high-converting body copies, and coordinate visual designs for direct-response marketing."
      },
      {
        title: "Campaign Scaling & Optimization",
        duration: "2 Weeks",
        tools: ["Meta Ads Reports", "Revealbot", "Excel Analytics"],
        projects: ["Scaling a budget from $100/day to $1000/day", "CBO vs ABO Analysis"],
        description: "Learn vertical and horizontal scaling, attribution models, and diagnostic rules to prevent ad fatigue."
      }
    ]
  },
  {
    id: "smm",
    name: "Social Media Marketing & Brand",
    icon: "Instagram",
    tagline: "Build a loyal community and design viral content strategies.",
    overview: "Craft brand stories across Instagram, LinkedIn, YouTube, and TikTok. Understand organic algorithm behaviors and engagement growth hacks.",
    modules: [
      {
        title: "Social Media Platform Algorithms",
        duration: "2 Weeks",
        tools: ["Buffer", "Hootsuite", "Loomly"],
        projects: ["Content Calendar for a 30-Day Campaign", "LinkedIn Professional Branding Portfolio"],
        description: "Analyze how Instagram Reels, YouTube Shorts, and LinkedIn posts rank and distribute organically."
      },
      {
        title: "Influencer Marketing & PR",
        duration: "2 Weeks",
        tools: ["Modash", "Upfluence", "Google Sheets templates"],
        projects: ["Nano-influencer Collaboration Campaign Setup", "Media Outreach Toolkit"],
        description: "Identify key creators, negotiate sponsored posts, write collaboration contracts, and measure campaign effectiveness."
      }
    ]
  },
  {
    id: "content-marketing",
    name: "Content & Copywriting Mastery",
    icon: "FileText",
    tagline: "Write words that sell and build organic content engines.",
    overview: "Develop conversion-focused copywriting skills alongside blogging, email marketing, and lead-magnet creation.",
    modules: [
      {
        title: "Direct Response Copywriting",
        duration: "2 Weeks",
        tools: ["Grammarly", "Hemingway App", "CoSchedule Headline Analyzer"],
        projects: ["High-Converting Landing Page Copy", "Lead Magnet Ebook Structure"],
        description: "Study AIDA, PAS, and BAB frameworks to write high-converting copies for sales pages, emails, and social ads."
      },
      {
        title: "Email Marketing & Newsletters",
        duration: "2 Weeks",
        tools: ["Klaviyo", "Mailchimp", "ActiveCampaign"],
        projects: ["3-part Welcome Email Automation Sequence", "Lead Nurture Drip Setup"],
        description: "Learn list segmentation, deliverability secrets, automation triggers, and creating engaging newsletters."
      }
    ]
  },
  {
    id: "ai-tools",
    name: "AI & Automation in Marketing",
    icon: "Cpu",
    tagline: "Multiply your marketing output by 10x using artificial intelligence.",
    overview: "Learn to command LLMs and AI generators. Prompt engineering for marketing assets, content production pipelines, and design assets.",
    modules: [
      {
        title: "AI Writing & Strategy Prompts",
        duration: "1 Week",
        tools: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Perplexity AI"],
        projects: ["Create an AI Brand Voice Guide", "Write a 5000-word marketing plan with AI"],
        description: "Construct advanced role-based prompts, context windows, and instructions to generate production-quality articles and ads."
      },
      {
        title: "AI Image & Video Generation",
        duration: "1 Week",
        tools: ["Midjourney v6", "DALL-E 3", "Runway Gen-2", "HeyGen"],
        projects: ["Generating Premium Ad Assets without photoshoots", "Create a digital avatar video"],
        description: "Design high-fidelity product images, commercial graphics, and talking avatar videos in minutes."
      }
    ]
  },
  {
    id: "automation",
    name: "Marketing Automation & Web",
    icon: "Zap",
    tagline: "Build automated funnels that work and generate leads while you sleep.",
    overview: "Tie marketing operations together. Learn web analytics, landing page design, and CRM database integrations without writing code.",
    modules: [
      {
        title: "No-Code Landing Pages & Funnels",
        duration: "2 Weeks",
        tools: ["WordPress", "Elementor Pro", "Instapage", "Unbounce"],
        projects: ["High-Converting Squeeze Page Design", "Lead Magnet Integration"],
        description: "Design mobile-first sales pages, create multi-step funnels, and configure custom domain DNS."
      },
      {
        title: "Web Analytics & Integration Automations",
        duration: "2 Weeks",
        tools: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Make.com", "Zapier"],
        projects: ["Syncing Lead Forms to Google Sheets and CRM", "GTM Custom Event Trigger Setup"],
        description: "Configure GA4 custom dashboards, track cross-domain traffic, and automate workflows with Zapier triggers."
      }
    ]
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    name: "Basic Certification",
    price: "₹18,000",
    originalPrice: "₹25,000",
    duration: "2 Months Program",
    popular: false,
    tagline: "Perfect for beginners and freelancers seeking basic skills.",
    features: [
      "Core SEO & SEM modules",
      "Social Media Basics",
      "5+ Industry Certifications",
      "Weekly Live Projects",
      "Classroom / Live Online batches",
      "Resume review support"
    ],
    certifications: ["Google Search Certification", "HubSpot Content Marketing"],
    internship: "Optional (Unpaid, 1 month)",
    placement: "Job Portal Access Only"
  },
  {
    name: "Professional Diploma",
    price: "₹32,000",
    originalPrice: "₹45,000",
    duration: "4 Months Program",
    popular: true,
    tagline: "Best value program. Turn zero skills into professional career.",
    features: [
      "Advanced SEO, Google Ads & Meta Ads",
      "Social Media Strategy & Influencer marketing",
      "AI & Automation tools integration",
      "12+ Industry Certifications",
      "2 Live Client Campaigns (Real Budget)",
      "Daily doubt classes + Discord community",
      "100% Placement Support & Placement Portal",
      "Mock interviews & video resume setup"
    ],
    certifications: ["Google Ads Suite", "Meta Ads Certified Associate", "Semrush SEO Toolkit"],
    internship: "Guaranteed 2-Month Paid Agency Internship",
    placement: "100% Direct Interview Line-ups"
  },
  {
    name: "Master Program in Growth Marketing",
    price: "₹48,000",
    originalPrice: "₹65,000",
    duration: "6 Months Program",
    popular: false,
    tagline: "Advanced mastery for managers, business owners, and agency growth leaders.",
    features: [
      "Complete curriculum (Basic + Professional)",
      "Advanced Growth Hacking & CRO",
      "GTM & GA4 Technical Web Analytics",
      "Zapier & Make.com complex automations",
      "25+ Global & Agency Certifications",
      "₹10,000 Ads Budget sponsored by Institute",
      "1-on-1 career coaching & startup mentorship",
      "Agency incubation support (Build your own firm)",
      "Lifetime premium updates & placement support"
    ],
    certifications: ["All Google/Meta/Hubspot/Semrush credentials", "Institute Master Growth Marketer Award"],
    internship: "Guaranteed 3-Month Paid Agency Internship / Executive Project",
    placement: "Premium Job Guarantee (Min ₹5 LPA package)"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Rohit Sharma",
    role: "Performance Marketing Executive",
    company: "Dentsu Aegis Network, Gurgaon",
    beforeRole: "Unemployed Graduate",
    afterRole: "Paid Campaign Lead",
    packageIncrease: "3.2 LPA → 7.5 LPA",
    text: "Joining this institute was the turning point in my life. The practical hands-on budget campaigns on Meta and Google gave me the confidence to ace my interview at Dentsu. The instructors actually work in digital agencies and it shows in their knowledge.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Pooja Verma",
    role: "SEO Consultant",
    company: "Tech Mahindra, Gurgaon",
    beforeRole: "Content Writer",
    afterRole: "Senior SEO Analyst",
    packageIncrease: "2.8 LPA → 6.2 LPA",
    text: "I was just a basic content writer and wanted to upgrade. The SEO technical modules, Screaming Frog audits, and schema markup sessions were incredibly thorough. Within 3 weeks of finishing the course, I got hired by Tech Mahindra with a 120% raise!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Amit Patel",
    role: "E-commerce Founder",
    company: "The Glow Store, Gurgaon",
    beforeRole: "Local Retailer",
    afterRole: "D2C Brand Owner",
    packageIncrease: "₹50k/mo Sales → ₹8L/mo Online",
    text: "As a local business owner, I was paying marketing agencies ₹30,000 every month with zero results. I decided to learn myself. This institute taught me the exact funnels to scale my online store. Now we are doing ₹8 Lakhs a month in revenue, thanks to their Meta Ads tactics!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Shruti Sen",
    role: "Social Media Manager",
    company: "Zomato partner agency",
    beforeRole: "College Student",
    afterRole: "Content Strategist",
    packageIncrease: "Intern → 5.2 LPA Package",
    text: "The AI tools training here is outstanding. While other places teach basic post creation, we learned how to design complex images on Midjourney, automate content generation with ChatGPT, and analyze data in GA4. Truly future-proof curriculum!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  }
];

export const PLACEMENTS_DATA: PlacementCard[] = [
  {
    name: "Vikram Chaudhary",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google Partner Agency",
    beforeSalary: "₹2.4 LPA",
    afterSalary: "₹6.8 LPA",
    hike: "183% Hike",
    role: "Associate AdWords Specialist"
  },
  {
    name: "Sneha Goel",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    companyName: "Social Beat (Meta Agency)",
    beforeSalary: "₹1.8 LPA",
    afterSalary: "₹5.5 LPA",
    hike: "205% Hike",
    role: "Paid Social Media Strategist"
  },
  {
    name: "Rohan Kapoor",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon Gurgaon Campus",
    beforeSalary: "₹3.0 LPA",
    afterSalary: "₹8.2 LPA",
    hike: "173% Hike",
    role: "Senior Program Specialist - Marketing"
  },
  {
    name: "Nisha Singhal",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.svg",
    companyName: "Zomato Direct Placement",
    beforeSalary: "Unemployed",
    afterSalary: "₹5.0 LPA",
    hike: "First Job Success",
    role: "Brand Growth Specialist"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 1, title: "Modern High-Tech Classroom", category: "classroom", imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" },
  { id: 2, title: "Google Ads Certification Workshop", category: "workshop", imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" },
  { id: 3, title: "Monthly Student Graduation Ceremony", category: "event", imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224b94?auto=format&fit=crop&q=80&w=600" },
  { id: 4, title: "Interactive Doubt Solving Lab", category: "classroom", imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" },
  { id: 5, title: "Corporate Panel on AI in Marketing", category: "event", imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600" },
  { id: 6, title: "Live SEO Audit Campaign Hackathon", category: "workshop", imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600" }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Where is DIDM located in Gurgaon?",
    answer: "The Delhi Institute of Digital Marketing (DIDM) Gurgaon is located at M-41, 2nd Floor, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007. The nearest metro station from DIDM's Digital Marketing Institute in Gurgaon is Sector-14 / MG Road Metro Station."
  },
  {
    question: "What are the benefits of doing digital marketing training in Gurgaon?",
    answer: "After completing your digital marketing training in Gurgaon, you will find lots of opportunities in the field of digital marketing. Trained experts with skills such as SEO, SMO, Google Ads, Email Marketing, etc. are in high demand by many multinational companies in Gurgaon. Job portals like Naukri.com and Monster.com are flooded with job openings in the field of Digital Marketing in the Gurgaon Region."
  },
  {
    question: "What is the duration of the digital marketing course in Gurgaon?",
    answer: "The course length of DIDM's digital marketing course in Gurgaon is 3 to 6 months, depending on which batch you enrol in (regular or weekend). We also provide assignments and have you work on live projects."
  },
  {
    question: "What is the cost of digital marketing training in Gurgaon?",
    answer: "The Delhi Institute of Digital Marketing (DIDM) offers three different training programs at its digital marketing institute in Gurgaon: Master in Digital Marketing Training Program, Advanced Digital Marketing Training Program, and Professional Digital Marketing Training Program. The fee will be determined by which training program you decide to choose. For more information on the fee, kindly contact us at +91 9310076503 or visit our digital marketing training center in Gurgaon."
  },
  {
    question: "Will the digital marketing training in Gurgaon be conducted Online or offline?",
    answer: "Our digital marketing training in Gurgaon is available in both online and offline formats. You can choose the one that best suits your needs. Our online digital marketing training in Gurgaon is conducted through a Learning Management System (LMS)."
  },
  {
    question: "What are the salary packages for digital marketing jobs in Gurgaon?",
    answer: "According to Ambition Box, the average annual salary of a digital marketer in Gurgaon is 4.8 lakhs. This figure increases with experience and expertise."
  },
  {
    question: "Is Digital Marketing a good career choice?",
    answer: "Digital Marketing is a fantastic career choice. The rise of digital marketing has resulted in an increased demand for skilled digital marketers, and this demand is only growing. Anyone who wants to pursue a career in digital marketing has a bright future. Our digital marketing institute in Gurgaon is dedicated to bridging the gap between the demand and supply of skilled digital marketers in Gurgaon."
  },
  {
    question: "Should I take the entire course, or should I opt for modules that I want to specialize in?",
    answer: "Our Master in Digital Marketing and Advanced Digital Marketing Course in Gurgaon provides you with a complete and in-depth knowledge of digital marketing. However, if you are only interested in learning about one or two specific aspects of digital marketing, you can choose to enrol in our Professional in Digital Marketing Course. This course allows you to choose the modules that you are most interested in and specialize in them."
  },
  {
    question: "Which is the best digital marketing institute in Gurgaon?",
    answer: "The best digital marketing institute in Gurgaon is the one that puts its trainees' success first. DIDM Gurgaon is the best digital marketing institute in Gurgaon for a lot of reasons. Here are some of the benefits that DIDM provides to its trainees that make it the best digital marketing institute in Gurgaon: 50+ Advanced and Updated Modules, 100% Practical Training Sessions, Tools and Software Support, Industry Expert Trainers, 100% Placement Assistance, Training Supported with LMS, Excellent Student Career Support, 30+ Globally Recognized Certifications, and Add-on Training on Content Writing and Graphic Designing."
  },
  {
    question: "What career opportunities will I have after I complete my digital marketing course in Gurgaon?",
    answer: "After completing DIDM's best digital marketing course in Gurgaon, you will have access to a variety of career opportunities. These include: Search engine optimization (SEO) specialist, Pay-per-click (PPC) advertising specialist, Social media marketing specialist, Content marketing specialist, Email marketing specialist, Web analytics specialist, Digital marketing executive / manager, Performance marketing executive / manager, Digital Marketing Coordinator, Customer Success Manager, and so on."
  }
];

export const CENTERS = [
  "Gurgaon"
];

