import {
    Code2,
    Smartphone,
    BrainCircuit,
    Cloud,
    Palette,
    Database,
    Blocks,
    Rocket,
    Search,
    Layers,
    Code,
    CheckCircle,
    RefreshCcw
} from 'lucide-react';

export interface ServiceProcessStep {
    id: number;
    title: string;
    description: string;
    tasks: string[];
    icon?: any;
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDesc: string;
    icon: any;
    fullDesc: string;
    features: string[];
    sections: ProjectSection[];
    year?: string;
    process?: ServiceProcessStep[];
}

export const SERVICES: Service[] = [
    {
        id: "web-dev",
        slug: "web-application-development",
        title: "Web Development",
        year: "2024",
        shortDesc: "Build powerful, scalable web applications with modern frameworks.",
        icon: Code2,
        fullDesc: "We build powerful, scalable web applications with modern frameworks and best practices. From complex SaaS platforms to customer-facing portals, our engineering team utilizes the latest technologies to deliver robust solutions.",
        features: [
            "Custom Web App Development",
            "Progressive Web Apps (PWA)",
            "E-commerce Solutions",
            "API Development & Integration",
            "Performance Optimization",
            "Responsive Web Design"
        ],
        sections: [
            {
                title: "Our Tactical Approach",
                description: "We don't just build websites; we engineer digital performance. Our approach is rooted in technical precision, where every line of code serves a business goal. We prioritize modular architectures that allow for rapid scaling while maintaining absolute security and speed.",
                bgColor: "bg-muted/30",
                quote: "Engineering is not about building things; it's about solving problems with code."
            },
            {
                title: "Discovery & User-Centric Planning",
                description: "Every great application starts with understanding. We dive deep into your business objectives and user needs to build a solid technical roadmap.",
                image: "/images/services/web-arch.jpg",
                bgColor: "bg-background",
                quote: "How do we build a foundation that supports global scale from day one?",
                bullets: [
                    "In-depth requirement analysis & market positioning.",
                    "User persona development and journey mapping.",
                    "High-fidelity wireframing and interactive prototyping.",
                    "Technical feasibility studies and architecture design."
                ]
            },
            {
                title: "Engineering Excellence & Deployment",
                description: "We bring your vision to life using cutting-edge frameworks like Next.js and robust cloud architectures, ensuring high performance and security.",
                image: "/images/services/web-tech.jpg",
                bgColor: "bg-[#a3e635]",
                bullets: [
                    "Full-stack development with type-safe architectures.",
                    "Rigorous QA testing and automated CI/CD pipelines.",
                    "Zero-downtime deployment strategies.",
                    "Comprehensive documentation and team training."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Understanding Your Needs",
                description: "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
                tasks: ["Analysis", "Objectives", "Audience", "Requirements", "Planning"]
            },
            {
                id: 2,
                title: "Design and Prototyping",
                description: "We create visually appealing and user-friendly prototypes to present your vision and gather feedback.",
                tasks: ["Design", "Prototypes", "UI", "Feedback", "Concepts"]
            },
            {
                id: 3,
                title: "Development and Testing",
                description: "We develop and test the web application using the best practices and technologies.",
                tasks: ["Development", "Coding", "Testing", "QA", "Framework"]
            },
            {
                id: 4,
                title: "Deployment and Maintenance",
                description: "We deploy the web application to a production environment and provide ongoing maintenance and support.",
                tasks: ["Deployment", "Maintenance", "Support", "Monitoring", "Updates"]
            },
            {
                id: 5,
                title: "Documentation and Training",
                description: "We provide detailed documentation and training to help you use and maintain the web application.",
                tasks: ["Documentation", "Training", "Guides", "Instructions", "Support"]
            },
            {
                id: 6,
                title: "Post Launch Strategy",
                description: "We guide you through post launch strategies to optimize performance, security, and user experience.",
                tasks: ["Optimization", "Security", "Performance", "Monitoring", "Strategy"]
            }
        ]
    },
    {
        id: "ai-solutions",
        slug: "ai-solutions",
        title: "AI Solutions",
        year: "2024",
        shortDesc: "Leverage cutting-edge AI to automate workflows and unlock insights.",
        icon: BrainCircuit,
        fullDesc: "Leverage cutting-edge artificial intelligence to automate workflows, enhance user experiences, and unlock next-level business intelligence. We help you integrate AI seamlessly into your operations.",
        features: [
            "Custom AI Model Development",
            "Natural Language Processing (NLP)",
            "Generative AI Solutions",
            "Predictive Analytics",
            "Computer Vision"
        ],
        sections: [
            {
                title: "Solving the Unsolvable",
                description: "AI is more than just models; it's about unlocking human potential. We approach AI as a strategic partner to your business, identifying the high-impact gaps where automation and intelligence can create the most value. We build models that are transparent, ethical, and optimized for real-world reliability.",
                bgColor: "bg-blue-500/5",
                quote: "True AI intelligence is measured by the clarity of the insights it provides."
            },
            {
                title: "Intelligence Strategy & Data Prep",
                description: "AI excellence requires a rock-solid data foundation. We identify high-value use cases and prepare your data for intelligent automation.",
                image: "/images/services/ai-logic.jpg",
                bgColor: "bg-background",
                quote: "Where can AI make the biggest impact on our bottom line right now?",
                bullets: [
                    "Problem identification and ROI analysis.",
                    "Data cleaning, structuring, and validation.",
                    "Custom LLM fine-tuning and RAG system design.",
                    "Privacy-first AI deployment frameworks."
                ]
            },
            {
                title: "Continuous AI Improvement",
                description: "We don't just deploy and leave. Our AI solutions are built for growth, with continuous monitoring and iterative performance tuning.",
                image: "/images/services/ai-tech.jpg",
                bgColor: "bg-blue-500/10",
                bullets: [
                    "Seamless API integration with existing workflows.",
                    "Real-time performance monitoring and accuracy checks.",
                    "Automated model retraining pipelines.",
                    "Strategic post-launch optimization."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Problem Identification & Use-Case Analysis",
                description: "We analyze your business challenges and identify where AI can deliver real value through automation, prediction, or intelligence.",
                tasks: ["Analysis", "Challenges", "UseCases", "Automation", "Insights"]
            },
            {
                id: 2,
                title: "Data Assessment & Preparation",
                description: "We evaluate available data sources, clean and structure the data, and prepare it for training reliable AI models.",
                tasks: ["Data", "Cleaning", "Structuring", "Validation", "Preparation"]
            },
            {
                id: 3,
                title: "AI Model Selection & Architecture",
                description: "We choose the most suitable AI models, frameworks, and system architecture based on performance, scalability, and cost.",
                tasks: ["Selection", "Models", "Architecture", "Frameworks", "Scalability"]
            },
            {
                id: 4,
                title: "Model Development & Training",
                description: "We develop, train, and fine-tune AI models using real-world data to ensure accuracy and reliability.",
                tasks: ["Development", "Training", "Tuning", "Validation", "Optimization"]
            },
            {
                id: 5,
                title: "AI Integration & Automation",
                description: "We integrate AI models into your existing systems, APIs, or workflows to enable intelligent automation and decision-making.",
                tasks: ["Integration", "APIs", "Automation", "Workflows", "Deployment"]
            },
            {
                id: 6,
                title: "Testing, Validation & Performance Tuning",
                description: "We rigorously test AI outputs, validate results, and optimize models for speed, accuracy, and stability.",
                tasks: ["Testing", "Validation", "Optimization", "Performance", "Accuracy"]
            },
            {
                id: 7,
                title: "Deployment, Monitoring & Continuous Improvement",
                description: "We deploy AI solutions to production, monitor performance, retrain models when needed, and continuously improve results.",
                tasks: ["Deployment", "Monitoring", "Retraining", "Improvement", "Support"]
            }
        ]
    },
    {
        id: "ui-ux",
        slug: "ui-ux-design",
        title: "UI/UX Design",
        year: "2024",
        shortDesc: "Design beautiful, intuitive interfaces that users love.",
        icon: Palette,
        fullDesc: "Design beautiful, intuitive interfaces that users love and that drive conversions. Our user-centric approach ensures your product is not only visually stunning but also easy to navigate.",
        features: [
            "User Research & Personas",
            "Interaction Design",
            "Usability Testing",
            "Design Systems",
            "Accessibility (WCAG)"
        ],
        sections: [
            {
                title: "The Human-First Paradigm",
                description: "We believe that technology should be invisible. Our design philosophy stands at the intersection of psychology and aesthetics, ensuring that every user interaction is frictionless and meaningful. We don't just design interfaces; we design journeys that lead to growth.",
                bgColor: "bg-orange-500/5",
                quote: "Good design is obvious. Great design is transparent."
            },
            {
                title: "Research-Driven Ideation",
                description: "We don't design for ourselves; we design for your users. Our process is rooted in deep research and psychological insights that drive engagement.",
                image: "/images/services/design-process.jpg",
                bgColor: "bg-background",
                quote: "How can we make complex technology feel invisible and intuitive?",
                bullets: [
                    "Competitive analysis and user interviews.",
                    "Persona development and empathy mapping.",
                    "Strategic brainstorming and concept validation.",
                    "Information architecture and flow mapping."
                ]
            },
            {
                title: "High-Fidelity Interaction",
                description: "We transform abstract concepts into pixel-perfect, interactive experiences that communicate your brand's unique value proposition.",
                image: "/images/services/design-system.jpg",
                bgColor: "bg-orange-500/10",
                bullets: [
                    "Atomic design systems for cross-platform consistency.",
                    "Advanced interaction design and micro-animations.",
                    "Rigorous usability testing with real users.",
                    "Comprehensive hand-off documentation for developers."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Understanding Your Needs",
                description: "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
                tasks: ["Analysis", "Objectives", "Audience", "Positioning", "Requirements"]
            },
            {
                id: 2,
                title: "Research and Personas",
                description: "We conduct user research and create personas to understand your users and their needs.",
                tasks: ["Research", "Personas", "Users", "Insights", "Data"]
            },
            {
                id: 3,
                title: "Ideation & Strategy",
                description: "We brainstorm ideas and develop a design strategy that aligns with your business goals.",
                tasks: ["Ideation", "Strategy", "Planning", "Concepts", "Alignment"]
            },
            {
                id: 4,
                title: "Wireframing and Prototyping",
                description: "We create wireframes and prototypes to visualize the app's structure and user flow.",
                tasks: ["Wireframes", "Prototypes", "Structure", "Flow", "Visualization"]
            },
            {
                id: 5,
                title: "Visual Design and Branding",
                description: "We create visually appealing and user-friendly interfaces that align with your brand identity.",
                tasks: ["Design", "Branding", "UI", "Aesthetics", "Consistency"]
            },
            {
                id: 6,
                title: "Interaction Design",
                description: "We design interactive elements and interactions that enhance user experience and engagement.",
                tasks: ["Interactions", "Usability", "UX", "Engagement", "Feedback"]
            },
            {
                id: 7,
                title: "Usability Testing and Validation",
                description: "We conduct usability testing with real users to validate the design and identify areas for improvement.",
                tasks: ["Testing", "Validation", "Feedback", "Improvement", "Analysis"]
            }
        ]
    },
    {
        id: "mobile-dev",
        slug: "mobile-app-development",
        title: "Mobile App Development",
        year: "2023",
        shortDesc: "Create engaging native and cross-platform mobile applications.",
        icon: Smartphone,
        fullDesc: "Create engaging native and cross-platform mobile applications for iOS and Android. We ensure seamless performance and intuitive user experiences that keep your customers engaged.",
        features: [
            "Native iOS/Android Development",
            "React Native & Flutter",
            "Push Notification Systems",
            "Offline Functionality",
            "Monetization Strategies"
        ],
        sections: [
            {
                title: "Mobility Without Limits",
                description: "We don't just build apps; we build extensions of your brand. Our approach to mobile development is focused on native performance and uncompromising reliability. We ensure that your application feels right on every device, bridging the gap between hardware power and software elegance.",
                bgColor: "bg-green-500/5",
                quote: "The best mobile experience is the one that understands the user's context before they do."
            },
            {
                title: "Mobile Architecture & Launch",
                description: "Building for mobile requires a specialized approach to performance and environment-specific constraints. We handle the entire lifecycle from wireframes to App Store approval.",
                image: "/images/services/mobile-header.jpg",
                bgColor: "bg-background",
                quote: "How do we bridge the gap between web convenience and native performance?",
                bullets: [
                    "Cross-platform architecture for maximum reach.",
                    "Smooth UI flow and native-feel interactions.",
                    "App Store & Play Store deployment management.",
                    "Ongoing security updates and OS compatibility."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Understanding Your Needs",
                description: "We conduct in-depth analysis of your business objectives, target audience, market positioning, and technical requirements.",
                tasks: ["Analysis", "Objectives", "Audience", "Requirements", "Planning"]
            },
            {
                id: 2,
                title: "Design and Prototyping",
                description: "We create wireframes and prototypes to visualize the app's structure and user flow.",
                tasks: ["Wireframes", "Prototypes", "UI", "Flow", "Concepts"]
            },
            {
                id: 3,
                title: "Development and Testing",
                description: "We build the app using the chosen framework and tools, and perform quality assurance checks to ensure it meets your requirements.",
                tasks: ["Development", "Coding", "Framework", "Testing", "QA"]
            },
            {
                id: 4,
                title: "Deployment and Launch",
                description: "We deploy the app to the App Store or Play Store, and provide post-launch support and maintenance.",
                tasks: ["Deployment", "Launch", "Stores", "Verification", "Support"]
            },
            {
                id: 5,
                title: "Post Launch Strategy",
                description: "We guide you through marketing and growth strategies to help your app succeed in the market.",
                tasks: ["Marketing", "Growth", "Strategy", "Promotion", "Analysis"]
            },
            {
                id: 6,
                title: "Ongoing Support",
                description: "We offer ongoing support and maintenance to ensure your app remains up-to-date and secure.",
                tasks: ["Maintenance", "Updates", "Security", "Support", "Monitoring"]
            }
        ]
    },
    {
        id: "cloud-services",
        slug: "cloud-services",
        title: "Cloud Services",
        year: "2023",
        shortDesc: "Scalable, reliable, and cost-effective cloud infrastructure solutions.",
        icon: Cloud,
        fullDesc: "Leverage cloud infrastructure for scalable, reliable, and cost-effective solutions. We help you migrate, manage, and optimize your cloud environment for maximum performance.",
        features: [
            "AWS/Azure/GCP Migration",
            "Serverless Architectures",
            "DevOps & CI/CD Pipelines",
            "Infrastructure as Code",
            "Security & Compliance"
        ],
        sections: [
            {
                title: "The Invisible Foundation",
                description: "We believe the best infrastructure is the one you never have to think about. Our approach to cloud services is built on the pillars of automation, elastic scalability, and cost-efficiency. We don't just migrate; we modernize, ensuring your systems are ready for the demands of tomorrow.",
                bgColor: "bg-cyan-500/5",
                quote: "Complexity is the enemy of reliability; we build for simplicity at scale."
            },
            {
                title: "Cloud Readiness & Migration",
                description: "We design a detailed roadmap to move your workloads to the cloud safely and efficiently, minimizing downtime and maximizing scalability.",
                image: "/images/services/cloud-infra.jpg",
                bgColor: "bg-background",
                quote: "How can we eliminate downtime while reducing our monthly cloud spend?",
                bullets: [
                    "Comprehensive workload suitability assessments.",
                    "Secure data and application migration strategies.",
                    "Multi-cloud and hybrid infrastructure setup.",
                    "Proactive 24/7 monitoring and cost optimization."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Cloud Readiness Assessment",
                description: "We analyze your existing systems, workloads, and dependencies to evaluate cloud suitability and identify improvement opportunities.",
                tasks: ["Assessment", "Analysis", "Workloads", "Dependencies", "Evaluation"]
            },
            {
                id: 2,
                title: "Migration Planning & Strategy",
                description: "We design a detailed cloud migration roadmap including timelines, risk mitigation, and cost estimation.",
                tasks: ["Planning", "Strategy", "Roadmap", "Timeline", "Budgeting"]
            },
            {
                id: 3,
                title: "Secure Data & Application Migration",
                description: "We migrate data and applications with minimal downtime while ensuring data integrity and security.",
                tasks: ["Migration", "Data", "Applications", "Security", "Integrity"]
            },
            {
                id: 4,
                title: "Cloud Infrastructure Setup",
                description: "We deploy scalable and secure cloud infrastructure with proper networking, access control, and compliance best practices.",
                tasks: ["Deployment", "Infrastructure", "Networking", "Access", "Compliance"]
            },
            {
                id: 5,
                title: "Performance & Cost Optimization",
                description: "We optimize cloud resources, implement auto-scaling, and continuously improve performance while reducing costs.",
                tasks: ["Optimization", "Performance", "Resources", "Scaling", "Cost"]
            },
            {
                id: 6,
                title: "Monitoring & Managed Services",
                description: "We provide continuous monitoring, security updates, backups, and ongoing maintenance to ensure reliability.",
                tasks: ["Monitoring", "Security", "Backups", "Maintenance", "Support"]
            }
        ]
    },
    {
        id: "wordpress-dev",
        slug: "wordpress-development",
        title: "WordPress Development",
        year: "2023",
        shortDesc: "Fast, secure, and fully customized WordPress websites.",
        icon: Blocks,
        fullDesc: "Build fast, secure, and fully customized WordPress websites tailored to your business needs. We create custom themes and plugins to give you full control over your content.",
        features: [
            "Custom Theme Development",
            "Plugin Optimization",
            "WooCommerce Solutions",
            "SEO-Friendly Architecture",
            "Security Hardening"
        ],
        sections: [
            {
                title: "Beyond the CMS",
                description: "WordPress is a canvas, not just a tool. Our approach elevates the world's most popular platform with enterprise-grade engineering. We strip away the bloat and build custom, high-performance engines that empower your marketing team without compromising on security or speed.",
                bgColor: "bg-blue-600/5",
                quote: "Don't let your CMS dictate your content; let your content demand the best CMS."
            },
            {
                title: "Enterprise WordPress Design",
                description: "We elevate WordPress beyond the basics, building high-performance, pixel-perfect sites with clean code and specialized integrations.",
                image: "/images/services/wp-custom.jpg",
                bgColor: "bg-background",
                bullets: [
                    "Lightweight custom themes (zero bloat).",
                    "Advanced plugin configuration and tuning.",
                    "Core Web Vitals and speed optimization.",
                    "Reliable maintenance and security monitoring."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Discovery & Planning",
                description: "We understand your goals by analyzing requirements, user needs, and overall site structure.",
                tasks: ["Requirements", "Analysis", "Planning", "Structure", "Alignment"]
            },
            {
                id: 2,
                title: "Design Phase",
                description: "We create pixel-perfect UI layouts aligned with your brand identity and business objectives.",
                tasks: ["Layouts", "Branding", "UI", "Consistency", "Approval"]
            },
            {
                id: 3,
                title: "Theme Development",
                description: "We build custom themes with clean, scalable, and maintainable code.",
                tasks: ["Themes", "Coding", "Scalability", "Testing", "Optimization"]
            },
            {
                id: 4,
                title: "Plugin Integration",
                description: "We configure or develop plugins to add advanced functionality tailored to your needs.",
                tasks: ["Plugins", "Integration", "Customization", "Configuration", "Testing"]
            },
            {
                id: 5,
                title: "Optimization",
                description: "We improve performance, caching, and core web vitals to ensure speed and stability.",
                tasks: ["Performance", "Caching", "Vitals", "Speed", "Stability"]
            },
            {
                id: 6,
                title: "Launch & Deployment",
                description: "We perform final testing, migration, and deployment to go live smoothly with zero downtime.",
                tasks: ["Testing", "Migration", "Deployment", "Verification", "Release"]
            },
            {
                id: 7,
                title: "Maintenance",
                description: "We provide long-term support including updates, backups, and continuous security monitoring.",
                tasks: ["Updates", "Backups", "Monitoring", "Security", "Support"]
            }
        ]
    },
    {
        id: "website-maintenance",
        slug: "website-maintenance",
        title: "Website Maintenance",
        year: "2024",
        shortDesc: "Ongoing updates, security monitoring, and performance optimization.",
        icon: Database,
        fullDesc: "Keep your website running smoothly with ongoing updates, security monitoring, performance optimization, and technical support. We handle the technical details so you can focus on your business.",
        features: [
            "Uptime & Performance Monitoring",
            "Security Scanning & Recovery",
            "Automated Cloud Backups",
            "Bug Fixes & Tech Support",
            "Content & Design Tweaks"
        ],
        sections: [
            {
                title: "Proactive Vigilance",
                description: "We don't wait for fires; we prevent them. Our approach to maintenance is a continuous cycle of auditing, optimizing, and securing. We act as and addition to your team, ensuring your digital assets are always improved, not just maintained.",
                bgColor: "bg-red-500/5",
                quote: "The most expensive feature is the one that's currently offline."
            },
            {
                title: "Proactive Site Health",
                description: "Don't wait for things to break. Our maintenance framework ensures your site is always updated, secure, and performing at its peak.",
                image: "/images/services/maintenance-center.jpg",
                bgColor: "bg-background",
                bullets: [
                    "24/7 scanning for malware and vulnerabilities.",
                    "Regular core and plugin updates with testing.",
                    "Fast assistance and monthly health reports.",
                    "Guaranteed restoration from secure backups."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Initial Audit",
                description: "We assess overall site health by evaluating performance, security status, and update requirements.",
                tasks: ["Assessment", "Performance", "Security", "Updates", "Reporting"]
            },
            {
                id: 2,
                title: "Setup & Configuration",
                description: "We prepare the system by implementing monitoring tools, automated backups, and security layers.",
                tasks: ["Monitoring", "Backups", "Configuration", "Security", "Automation"]
            },
            {
                id: 3,
                title: "Regular Updates",
                description: "We keep your website up-to-date by safely applying core, theme, and plugin updates without downtime.",
                tasks: ["Core", "Themes", "Plugins", "Testing", "Deployment"]
            },
            {
                id: 4,
                title: "Performance Optimization",
                description: "We improve speed and stability through caching, image optimization, and database cleanup.",
                tasks: ["Caching", "Optimization", "Images", "Database", "Speed"]
            },
            {
                id: 5,
                title: "Security Monitoring",
                description: "We protect your website with continuous malware scanning, firewall tuning, and vulnerability checks.",
                tasks: ["Scanning", "Firewall", "Hardening", "Monitoring", "Alerts"]
            },
            {
                id: 6,
                title: "Continuous Support",
                description: "We provide fast assistance including bug fixes, debugging, and monthly maintenance reports.",
                tasks: ["Support", "Debugging", "Fixes", "Reports", "Assistance"]
            },
            {
                id: 7,
                title: "Backup & Restore",
                description: "We ensure peace of mind with scheduled backups and guaranteed restoration when needed.",
                tasks: ["Backups", "Scheduling", "Storage", "Recovery", "Verification"]
            }
        ]
    },
    {
        id: "project-management",
        slug: "project-management",
        title: "Project Management",
        year: "2024",
        shortDesc: "Expert execution balancing business and technical needs.",
        icon: Rocket,
        fullDesc: "Protect your time, budget, and peace of mind with expert project managers who understand both business and technical execution. We ensure your project stays on track and delivers value.",
        features: [
            "End-to-End Project Planning",
            "Vendor & Dev Coordination",
            "Milestone Tracking",
            "Quality Assurance Oversight",
            "Budget & Risk Control"
        ],
        sections: [
            {
                title: "Engineering the Workflow",
                description: "We don't just manage projects; we manage expectations and mitigate risks. Our approach is hands-on and technical, ensuring that every milestone is met with quality and that communication channels remain crystal clear. We are the bridge between your vision and the dev team's execution.",
                bgColor: "bg-zinc-500/5",
                quote: "A project without a roadmap is just a wish; we provide the engine and the map."
            },
            {
                title: "Scam-Proof Execution",
                description: "We act as your technical shield, ensuring developers and vendors deliver what they promised without overcharging or stalling.",
                image: "/images/services/pm-workflow.jpg",
                bgColor: "bg-background",
                bullets: [
                    "Clear, requirement-driven scope definition.",
                    "Proactive risk management and budget control.",
                    "Diligent milestone and delivery verification.",
                    "Stress-free handover with full documentation."
                ]
            }
        ],
        process: [
            {
                id: 1,
                title: "Discovery & Consultation",
                description: "We understand your goals by identifying project needs, challenges, and the ideal workflow.",
                tasks: ["Meetings", "Requirements", "Analysis", "Review", "Alignment"]
            },
            {
                id: 2,
                title: "Scope Definition",
                description: "We define clear, scam-proof requirements so no one can mislead or overcharge you.",
                tasks: ["Features", "Documentation", "Deliverables", "Boundaries", "Approval"]
            },
            {
                id: 3,
                title: "Strategy & Planning",
                description: "We build a realistic roadmap covering budget, timelines, milestones, and resources.",
                tasks: ["Roadmap", "Budgeting", "Timelines", "Milestones", "Risks"]
            },
            {
                id: 4,
                title: "Team Coordination",
                description: "We manage developers and vendors by verifying work, solving issues, and reducing confusion.",
                tasks: ["Communication", "Coordination", "Verification", "Clarification", "Resolution"]
            },
            {
                id: 5,
                title: "Progress Monitoring",
                description: "We ensure the project stays on track with regular updates and proactive issue handling.",
                tasks: ["Tracking", "Reporting", "Control", "Monitoring", "Adjustments"]
            },
            {
                id: 6,
                title: "Quality Check",
                description: "We validate all deliverables to ensure they meet agreed standards before acceptance.",
                tasks: ["Validation", "Testing", "Review", "Compliance", "Approval"]
            },
            {
                id: 7,
                title: "Launch & Handover",
                description: "We ensure stress-free completion with documentation, knowledge transfer, and support.",
                tasks: ["Deployment", "Documentation", "Transfer", "Support", "Closure"]
            },
            {
                id: 8,
                title: "Flexible Engagement",
                description: "We offer engagement models that work on your terms and budget.",
                tasks: ["Consulting", "Hourly", "OnDemand", "Management", "Customization"]
            }
        ]
    }
];

export interface ProjectSection {
    title: string;
    description: string;
    image?: string;
    bgColor?: string;
    bullets?: string[];
    quote?: string;
    gallery?: string[];
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    year: string;
    client: { name: string; url: string };
    timeline: string;
    image: string;
    summary: string;
    tags: string[];
    results: string[];
    resultsHighlight?: {
        title: string;
        description: string;
        metrics: { label: string; value: string }[];
    };
    sections: ProjectSection[];
}

export const PROJECTS: Project[] = [
    {
        id: "fintech-platform",
        slug: "neo-finance-platform",
        title: "Neo Finance Platform",
        category: "FinTech",
        year: "2024",
        client: { name: "NeoBank Corp", url: "https://neobank.example.com" },
        timeline: "6 Months",
        image: "/images/projects/fintech.jpg",
        summary: "Reimagining personal banking for the digital age with a secure, mobile-first platform.",
        tags: ["React Native", "Node.js", "AWS", "Security"],
        results: ["200% User Growth", "99.99% Uptime", "PCI DSS Compliant"],
        resultsHighlight: {
            title: "More Trust, More Deals",
            description: "With their new AI-focused site, the agency attracted higher-value clients and built credibility fast.",
            metrics: [
                { value: "40%", label: "INCREASE IN ROI" },
                { value: "3", label: "NEW RETAINER" },
                { value: "2x", label: "WEBSITE ENGAGEMENT" }
            ]
        },
        sections: [
            {
                title: "AI-Powered Campaign Optimization",
                description: "A marketing agency wanted to integrate AI into their workflow but lacked a clear strategy. With Devlyfi, we built an AI-focused site that explained their services, showcased case studies, and positioned them as innovators in their industry.",
                image: "/images/projects/fintech-challenge.jpg",
                bgColor: "bg-background",
                quote: "How can we show clients the real value of AI and win bigger deals?"
            },
            {
                title: "AI Storytelling with Case Studies & Clear Positioning",
                description: "We customized Devlyfi with:",
                image: "/images/projects/fintech-solution.jpg",
                bgColor: "bg-[#a3e635]",
                bullets: [
                    "Case studies showcasing AI-driven campaign results.",
                    "A \"How We Work\" section explaining AI processes simply.",
                    "Service pages built around AI automation and analytics.",
                    "Blog integration for thought leadership content."
                ],
                gallery: [
                    "/images/projects/gallery-1.jpg",
                    "/images/projects/gallery-2.jpg",
                    "/images/projects/gallery-3.jpg",
                    "/images/projects/gallery-4.jpg"
                ]
            }
        ]
    },
    {
        id: "health-ai",
        slug: "medtech-ai-diagnostics",
        title: "MedTech AI Diagnostics",
        category: "Healthcare",
        year: "2023",
        client: { name: "MediGlobal", url: "https://mediglobal.example.com" },
        timeline: "8 Months",
        image: "/images/projects/health.jpg",
        summary: "AI-powered diagnostic tool assisting radiologists in early detection of anomalies.",
        tags: ["Python", "TensorFlow", "React", "HIPAA"],
        results: ["30% Faster Diagnosis", "95% Accuracy", "Global Adoption"],
        resultsHighlight: {
            title: "Precision at Scale",
            description: "Our AI model processed millions of images, reducing clinician fatigue and significantly improving early detection rates across 50+ hospitals.",
            metrics: [
                { value: "30%", label: "FASTER DIAGNOSIS" },
                { value: "95%", label: "MODEL ACCURACY" },
                { value: "50+", label: "HOSPITALS DEPLOYED" }
            ]
        },
        sections: [
            {
                title: "Overwhelmed Specialists",
                description: "Radiologists are often overwhelmed by massive amounts of imaging data. The need for precise, automated anomaly detection was critical for improving patient outcomes.",
                image: "/images/projects/health-challenge.jpg",
                bgColor: "bg-background",
                quote: "How can we ensure every patient gets a second pair of expert eyes without doubling our staff?"
            },
            {
                title: "Deep Learning for Anomaly Detection",
                description: "We implemented a custom CNN architecture optimized for high-resolution medical imaging, featuring:",
                image: "/images/projects/health-solution.jpg",
                bgColor: "bg-blue-500/10",
                bullets: [
                    "Automated segmentation of potential anomalies.",
                    "Heatmap generation for immediate clinician focus.",
                    "Integration with existing PACS and DICOM workflows.",
                    "End-to-end encryption for HIPAA compliance."
                ]
            }
        ]
    },
    {
        id: "ecommerce-scale",
        slug: "global-retail-scale",
        title: "Global Retail Scale",
        category: "E-Commerce",
        year: "2024",
        client: { name: "Vogue Global", url: "https://vogue-global.example.com" },
        timeline: "4 Months",
        image: "/images/projects/retail.jpg",
        summary: "High-performance headless commerce solution for a multinational fashion retailer.",
        tags: ["Next.js", "Shopify Plus", "Redis", "Vercel"],
        results: ["2s Page Load", "45% Conversion Uplift", "Global Scale"],
        resultsHighlight: {
            title: "Performance Without Limits",
            description: "By moving to a headless edge-first architecture, we eliminated downtime and achieved sub-second time-to-interactive for global customers.",
            metrics: [
                { value: "2s", label: "PAGE LOAD TIME" },
                { value: "45%", label: "CONVERSION UPLIFT" },
                { value: "0", label: "BLACK FRIDAY DOWNTIME" }
            ]
        },
        sections: [
            {
                title: "The Legacy Monolith Bottleneck",
                description: "A legacy monolith was throttling growth and causing significant downtime during peak sales events like Black Friday. The customer experience was fragmented across regions.",
                image: "/images/projects/retail-challenge.jpg",
                bgColor: "bg-background",
                quote: "Our current system can't handle the traffic—we're losing millions every time the site crashes."
            },
            {
                title: "Edge-First Headless Architecture",
                description: "We transitioned to a headless architecture using Next.js on the frontend and Shopify Plus on the backend. This included:",
                image: "/images/projects/retail-solution.jpg",
                bgColor: "bg-orange-500/10",
                bullets: [
                    "Global edge caching with Vercel and Redis.",
                    "Localized content for 12+ international markets.",
                    "Highly optimized mobile-first checkout experience.",
                    "Real-time inventory sync across 500+ physical stores."
                ],
                gallery: [
                    "/images/projects/retail-gallery-1.jpg",
                    "/images/projects/retail-gallery-2.jpg"
                ]
            }
        ]
    }
];

export const PROCESS_STEPS = [
    {
        title: "Discovery & Planning",
        description:
            "We understand your business goals, technical requirements, and constraints to define a clear and realistic roadmap.",
        icon: Search
    },
    {
        title: "System Design",
        description:
            "Architecture, data models, and technology choices are designed with scalability, security, and maintainability in mind.",
        icon: Layers
    },
    {
        title: "Development",
        description:
            "Features are built iteratively with clean code, version control, and continuous feedback throughout the process.",
        icon: Code
    },
    {
        title: "Testing & Validation",
        description:
            "We test functionality, performance, and edge cases to ensure the system behaves reliably in real-world scenarios.",
        icon: CheckCircle
    },
    {
        title: "Deployment",
        description:
            "Applications are deployed using stable environments and repeatable processes to minimize risk and downtime.",
        icon: Rocket
    },
    {
        title: "Support & Improvement",
        description:
            "Post-launch support, monitoring, and continuous improvements help systems evolve as your business grows.",
        icon: RefreshCcw
    }
];


export const TESTIMONIALS = [
    {
        content: "Working with Devlyfi has transformed our digital infrastructure—unmatched reliability and speed.",
        author: "Rohan Mehta",
        role: "CTO, TechNova Solutions"
    },
    {
        content: "Their team delivered a seamless integration with zero downtime, exceeding all expectations.",
        author: "Elena Rodriguez",
        role: "VP of Engineering, CloudWave"
    },
    {
        content: "The Devlyfi engineers’ expertise in scalable systems is evident in every interaction.",
        author: "Samuel Lee",
        role: "Head of Product, FinEdge Corp"
    },
    {
        content: "They consistently provide actionable insights that make our systems more resilient and efficient.",
        author: "Priya Anand",
        role: "Operations Director, DataForge Labs"
    },
];


export const TEAM = [
    {
        id: "faisal-f",
        name: "Faisal F.",
        role: "Founder & CEO",
        bio: "Visionary leader with 10+ years in software architecture and agency growth.",
        image: "/images/team/faisal.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "sarah-smith",
        name: "Sarah Smith",
        role: "Head of Operations",
        bio: "Expert in project management and scaling remote engineering teams.",
        image: "/images/team/sarah.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "david-kim",
        name: "David Kim",
        role: "Lead UI/UX Designer",
        bio: "Award-winning designer focused on human-centric digital experiences.",
        image: "/images/team/david.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "alex-chen",
        name: "Alex Chen",
        role: "CTO",
        bio: "Full-stack wizard specializing in AI integrations and cloud infrastructure.",
        image: "/images/team/alex.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "jessica-wu",
        name: "Jessica Wu",
        role: "Head of Marketing",
        bio: "Strategic growth expert with a passion for creative storytelling and data-driven results.",
        image: "/images/team/jessica.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    },
    {
        id: "ryan-h",
        name: "Ryan H.",
        role: "Senior Dev Analyst",
        bio: "Specializing in technical feasibility and optimizing internal development workflows.",
        image: "/images/team/ryan.jpg",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#"
        }
    }
];
