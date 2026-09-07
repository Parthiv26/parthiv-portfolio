export const personalInfo = {
  name: "Parthiv Patel",
  title: "MSc Cybersecurity and Management Student",
  specialization: "Cyber Security Analyst & Ethical Hacking",
  taglines: [
    "Cyber Security Student",
    "Ethical Hacking Enthusiast",
    "Security Research Learner",
    "Vulnerability Assessor"
  ],
  bio: `MSc Cybersecurity and Management student with a deep focus on Cyber Security, Offensive & Defensive Security Strategies, and Secure Software Development. Passionate about uncovering security flaws before malicious actors do. Experienced in Web Application Penetration Testing, Network Traffic Analysis, and Vulnerability Assessment. Committed to building robust security architectures and advancing ethical hacking research.`,
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
    { label: "Security Projects", value: "8 Completed" }
  ]
};

export const aboutData = {
  headline: "Securing the Digital Frontier Through Research & Innovation",
  description: `As an MSc Cybersecurity and Management student, I bridge the gap between software development and offensive security. My academic journey combines deep theoretical knowledge of computer networks, cryptography, and database architecture with practical hands-on experience in vulnerability assessment and ethical hacking.`,
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
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google / Coursera",
    date: "Issued Dec 2024",
    credentialId: "GCC-8921-X902",
    verifyUrl: "https://coursera.org/verify/professional-cert",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    skills: ["SIEM Tools", "Python for Cyber", "Linux & SQL", "Intrusion Detection", "Packet Analysis"]
  },
  {
    id: "cert-2",
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Issued Aug 2024",
    credentialId: "CSCO-NET-7712",
    verifyUrl: "https://netacad.com/verify",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    skills: ["Network Protection", "Threat Detection", "Privacy & Data Confidentiality", "Firewall Fundamentals"]
  },
  {
    id: "cert-3",
    title: "Ethical Hacking Fundamentals",
    issuer: "EC-Council / Academic Partner",
    date: "Issued May 2024",
    credentialId: "EHF-2024-5541",
    verifyUrl: "https://eccouncil.org/verify",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    skills: ["Reconnaissance", "Vulnerability Scanning", "System Hacking", "Social Engineering Awareness"]
  },
  {
    id: "cert-4",
    title: "TryHackMe Learning Paths: Jr Penetration Tester",
    issuer: "TryHackMe",
    date: "Completed Jan 2025",
    credentialId: "THM-JR-PENTEST-991",
    verifyUrl: "https://tryhackme.com/p/ParthivPatel",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&auto=format&fit=crop&q=80",
    skills: ["Privilege Escalation", "Burp Suite Deep Dive", "Network Exploitation", "Metasploit Mastery"]
  }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Automated Vulnerability Scanner",
    category: "Security Tools",
    shortDesc: "Comprehensive Python vulnerability assessment engine integrating Nmap port diagnostics and OWASP ZAP automated REST scanner.",
    fullDesc: "Designed an automated Python vulnerability scanning CLI tool with an intuitive web dashboard interface. It scans target hosts for open ports, banner disclosure, outdated services, misconfigured HTTP headers, cross-site scripting (XSS), and basic SQL injection vulnerabilities. Generates executive PDF reports with risk scoring and mitigation guidance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
    technologies: ["Python", "Nmap API", "OWASP ZAP", "SQLite", "ReportLab", "React.js"],
    githubUrl: "https://github.com/parthiv-patel-cyber",
    liveDemoUrl: "https://demo.example.com",
    vulnerabilitiesDetected: ["OWASP A01: Broken Access Control", "OWASP A03: Injection", "Missing Security Headers (HSTS, CSP)"]
  },
  {
    id: "proj-2",
    title: "Secure Complaint Management System",
    category: "Web Security",
    shortDesc: "End-to-end encrypted grievance management platform built with strict RBAC, AES-256 payload protection, and sanitized data flows.",
    fullDesc: "Developed a full-stack security-focused complaint management web application for corporate environments. Features client-side payload encryption prior to database write, Argon2 password hashing, double-submit cookie CSRF tokens, strict Content Security Policy, and audited access controls to prevent IDOR and data leakage.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "AES-256 Crypto", "JWT"],
    githubUrl: "https://github.com/parthiv-patel-cyber",
    liveDemoUrl: "https://demo.example.com",
    vulnerabilitiesDetected: ["Prevented IDOR", "Mitigated Stored XSS", "Eliminated SQL/NoSQL Injection"]
  },
  {
    id: "proj-3",
    title: "Web Application Security Testing Suite",
    category: "Web Security",
    shortDesc: "Custom Burp Suite extension and automation framework for detecting CSRF token bypasses and subtle input reflection flaw points.",
    fullDesc: "Built a specialized Python payload injector and request interceptor tool that integrates with web security workflows. It automates testing for CORS misconfigurations, authorization bypasses across microservices, and hidden API parameter fuzzing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    technologies: ["Python", "Burp Suite API", "Jython", "Flask", "JSON Web Tokens"],
    githubUrl: "https://github.com/parthiv-patel-cyber",
    liveDemoUrl: "https://demo.example.com",
    vulnerabilitiesDetected: ["Wildcard CORS Misconfigurations", "JWT Signature Stripping", "Bypassable Auth Headers"]
  },
  {
    id: "proj-4",
    title: "Real-time Network Traffic & Intrusion Dashboard",
    category: "Network Security",
    shortDesc: "Packet analysis dashboard parsing PCAP telemetry in real-time to alert on SYN floods, ARP spoofing, and port scans.",
    fullDesc: "Created an interactive network telemetry visualizer that streams PCAP network activity. Utilizes PyShark and WebSocket streaming to display live protocol distributions, flag anomalous traffic bursts, detect ARP poisoning attempts, and send instant alerts to security admins.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&auto=format&fit=crop&q=80",
    technologies: ["Python", "PyShark", "Wireshark", "WebSockets", "React", "Chart.js"],
    githubUrl: "https://github.com/parthiv-patel-cyber",
    liveDemoUrl: "https://demo.example.com",
    vulnerabilitiesDetected: ["ARP Spoofing Attacks", "TCP SYN Flood Vectors", "Malicious Port Sweep Signals"]
  }
];

export const achievementsData = [
  {
    id: "ach-1",
    title: "TryHackMe Top 4% Global Ranking",
    category: "CTF & Lab Achievement",
    date: "2024 - Present",
    description: "Successfully compromised 120+ vulnerable virtual machines, covering active directory exploitation, privilege escalation, web application security, and network pivot labs.",
    icon: "Trophy"
  },
  {
    id: "ach-2",
    title: "2nd Runner Up - National Cyber Defence CTF",
    category: "Competition",
    date: "Nov 2024",
    description: "Competed against 80+ university teams in a 24-hour jeopardy-style CTF challenge focusing on Reverse Engineering, Cryptography, Forensic PCAP Analysis, and Web Exploitation.",
    icon: "Award"
  },
  {
    id: "ach-3",
    title: "Lead Student Speaker - Ethical Hacking Workshop",
    category: "Security Workshops",
    date: "Sep 2024",
    description: "Organized and delivered a hands-on cybersecurity workshop on 'OWASP Top 10 & Practical Burp Suite Exploitation' for over 150 undergraduate computer science students.",
    icon: "Users"
  },
  {
    id: "ach-4",
    title: "Responsible Vulnerability Disclosure",
    category: "Security Research",
    date: "2024",
    description: "Identified and responsibly disclosed an IDOR and Broken Authentication vulnerability in an online academic testing platform, receiving official hall of fame recognition.",
    icon: "ShieldCheck"
  }
];

export const educationData = [
  {
    id: "edu-1",
    degree: "MSc Cybersecurity and Management",
    specialization: "Specialization in Cyber Security & Information Assurance",
    institution: "University of Law (Manchester)",
    duration: "2025 - 2026 (Final Year)",
    score: "CGPA: 8.9 / 10.0",
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
  {
    id: "edu-3",
    degree: "Relevant Industry Certifications & Specialized Badges",
    specialization: "Self-Driven Hands-On Learning",
    institution: "Coursera, Cisco NetAcad, TryHackMe, PortSwigger Web Security Academy",
    duration: "2023 - Present",
    score: "Completed 200+ Lab Hours",
    details: [
      "PortSwigger Web Security Academy: Completed Practitioner labs in SQL Injection, Cross-Site Scripting, and Authentication bypasses.",
      "Linux System & Shell Scripting Proficiency."
    ]
  },
];
