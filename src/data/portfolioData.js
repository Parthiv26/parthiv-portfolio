export const personalInfo = {
  name: "Parthiv Patel",
  title: "MSc Cybersecurity Management",
  specialization: "Cyber Security Analyst & Ethical Hacking",
  taglines: [
    "Cybersecurity Student",
    "Ethical Hacking Enthusiast",
    "Security Research Learner",
    "Vulnerability Assessor"
  ],
  bio: `MSc Cybersecurity Management graduate focused on cybersecurity strategy, offensive and defensive security, and secure software development. I enjoy identifying vulnerabilities before they can be exploited and apply practical skills in web application penetration testing, network analysis, and risk assessment.`,
  location: "UK / Remote",
  email: "parthivpatel2609@gmail.com",
  phone: "+44 7386218787",
  github: "https://github.com/Parthiv26",
  linkedin: "https://www.linkedin.com/in/parthiv-patel-223637227/",
  pgpKey: "4A89 2C1F 89E0 B789 D123 99AF 8762 1092 FE2A",
  status: "OPEN TO FULL-TIME SECURITY ROLES",
  stats: [
    { label: "Vulnerabilities Found", value: "28+" },
    { label: "TryHackMe Rank", value: "Top 4%" },
    { label: "Certifications", value: "4 Active" },
    { label: "Security Projects", value: "1 Major Project" }
  ]
};

export const aboutData = {
  headline: "Securing the Digital Frontier Through Research & Innovation",
  description: `As an MSc Cybersecurity Management graduate, I connect software development with offensive and defensive security. My academic background spans computer networks, cryptography, database architecture, and hands-on vulnerability assessment, with a strong focus on ethical hacking and secure system design.`,
  corePillars: [
    {
      title: "Ethical Hacking & Pentesting",
      icon: "ShieldAlert",
      description: "Identifying web application and network infrastructure vulnerabilities using standard methodologies like OWASP Testing Guide and PTES."
    },
    {
      title: "Network Security & Monitoring",
      icon: "Activity",
      description: "Analyzing packet captures, detecting intrusion vectors, and configuring firewall security policies using Wireshark, Snort, and Nmap."
    },
    {
      title: "Vulnerability Assessment",
      icon: "SearchCheck",
      description: "Performing systemic security audits, configuration checks, and automated compliance scans to minimize attack surfaces."
    },
    {
      title: "Secure SDLC & Code Audit",
      icon: "Code2",
      description: "Reviewing codebases for OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF, IDOR) and enforcing input sanitization and cryptographic practices."
    }
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    title: "Cyber Risk Assessment & Response | Deloitte",
    company: "Deloitte",
    period: "2026",
    location: "Forage Simulation",
    description: "Completed the Deloitte Australia Cyber Security Virtual Experience Program, gaining practical exposure to cyber risk analysis, governance, and security response decision-making in a consulting environment.",
    bullets: [
      "Worked through a simulated cyber engagement focused on identifying security risks and evaluating control effectiveness.",
      "Explored real-world challenges related to cyber governance, digital risk awareness, and response planning.",
      "Strengthened my understanding of how cybersecurity principles are applied in business and professional consultancy contexts."
    ],
    link: "https://www.theforage.com/simulations/deloitte-au/cyber-c1e3/completed"
  },
  {
    id: "exp-2",
    title: "Cybersecurity Risk & Defense | Mastercard",
    company: "Mastercard",
    period: "2026",
    location: "Forage Simulation",
    description: "Completed the Mastercard Cybersecurity virtual experience, focusing on practical security challenges, risk awareness, and the application of cyber defense principles in a digital-first business environment.",
    bullets: [
      "Engaged with simulated cybersecurity scenarios centered on evaluating digital risk and operational security considerations.",
      "Explored how cyber controls support business resilience and secure digital environments.",
      "Deepened my understanding of cyber defense concepts in a real-world technology and payments context."
    ],
    link: "https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye/completed"
  }
];

export const skillsData = {
  security: [
    { name: "Ethical Hacking", level: 90, icon: "Shield" },
    { name: "Penetration Testing", level: 85, icon: "Target" },
    { name: "Vulnerability Assessment", level: 88, icon: "FileSearch" },
    { name: "Network Security", level: 85, icon: "Network" },
    { name: "Web Security (OWASP)", level: 92, icon: "Globe" },
    { name: "Security Auditing", level: 80, icon: "ClipboardCheck" }
  ],
  programming: [
    { name: "Python", level: 90, icon: "Code" },
    { name: "JavaScript / ES6", level: 85, icon: "FileCode" },
    { name: "PHP", level: 75, icon: "Server" },
    { name: "SQL", level: 88, icon: "Database" },
    { name: "React.js", level: 85, icon: "Atom" },
    { name: "Node.js", level: 80, icon: "Cpu" }
  ],
  tools: [
    { name: "Kali Linux", level: 92, icon: "Terminal" },
    { name: "Burp Suite", level: 88, icon: "Radio" },
    { name: "Wireshark", level: 85, icon: "Activity" },
    { name: "Nmap", level: 90, icon: "Radar" },
    { name: "Metasploit", level: 82, icon: "Zap" },
    { name: "OWASP ZAP", level: 85, icon: "Bug" },
    { name: "Git & GitHub", level: 90, icon: "GitBranch" }
  ]
};

export const certificationsData = [
  {
    id: "cert-1",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Issued Aug 2026",
    credentialId: "e72a0c13-3267-4ddd-b52f-b80cc020ab4a",
    verifyUrl: "/images/certificate.jpg",
    image: "/images/certificate.jpg",
    skills: ["Network Protection", "Threat Detection", "Privacy & Data Confidentiality", "Firewall Fundamentals"]
  }
];

export const projectsData = [
  {
    id: "msc-project",
    title: "Port Scanner & Network Enumeration Tool",
    category: "Network Security",
    shortDesc: "A Python-based network reconnaissance utility for identifying live hosts, open ports, and exposed services in a controlled cybersecurity assessment environment.",
    fullDesc: "This project was developed to strengthen my practical understanding of network reconnaissance and service enumeration. The tool scans target systems, identifies open ports, detects active services, and supports initial risk assessment for potential exposure points. It reflects my hands-on experience with ethical hacking principles, offensive security fundamentals, and the importance of proactive network defence.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    technologies: ["Python", "Socket Programming", "Network Scanning", "Service Enumeration", "Ethical Hacking", "Cybersecurity"],
    githubUrl: "https://github.com/Parthiv26/Port_Scannner",
    liveDemoUrl: "https://github.com/Parthiv26/Port_Scannner",
    vulnerabilitiesDetected: ["Live host detection", "Open port enumeration", "Exposed service discovery", "Threat surface mapping"]
  }
];

export const achievementsData = [];

export const educationData = [
  {
    id: "edu-1",
    degree: "MSc Cybersecurity Management",
    specialization: "Specialization in Cyber Security & Information Assurance",
    institution: "University of Law (Manchester)",
    duration: "2025 - (Expected-Graduation Oct 2026)",
    score: "CGPA: - ",
    details: [
      "Key Coursework: Cryptography & Network Security, Advanced Web Security, Cyber Forensics, Cloud Security Architecture, Mobile Security.",
      "Final Year Dissertation: 'Automated AI-assisted Threat Surface Detection & Vulnerability Prioritization Matrix'."
    ]
  },
  {
    id: "edu-2",
    degree: "Bachelor of computer application",
    specialization: "Computer Science & Networking",
    institution: "Veer Narmad South Gujarat University",
    duration: "2021 - 2024",
    score: "CGPA: 7.18 / 10.0",
    details: [
      "Key Coursework: Data Structures, Operating Systems, Computer Networks, Database Management Systems, Linux System Administration.",
      "Graduation Capstone: 'Encrypted Multi-Node File Sync Tool using Python'."
    ]
  },
];
