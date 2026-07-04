// ============================================================
// portfolioData.js — Centralized configuration for Obulshetty Nikhil Kumar's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Obulshetty Nikhil Kumar",
  firstName: "Nikhil Kumar",
  brandName: "Nikhil Kumar",
  title: "Python Full Stack Developer & CSE Student",
  location: "Hyderabad, Telangana",
  phone: "+91 8328391049",
  emails: {
    primary: "obulshettynikhilkumar@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated Computer Science and Engineering (AI & ML) student seeking an entry-level software role to apply programming, problem-solving, and analytical skills while continuously learning, growing professionally, and contributing to organizational success.",
  resumeUrl: "/my_resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Nikhilkumar3065",
  linkedin: "https://www.linkedin.com/in/obulshetty-nikhil-kumar-55b11831b",
};

export const heroContent = {
  greeting: "Hi, I'm Obulshetty Nikhil Kumar",
  titleHighlight: "Python Full Stack Developer",
  subtitle:
    "Specializing in CSE (AI & ML), building web applications, machine learning systems, and robust backends.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=obulshettynikhilkumar@gmail.com&su=Hiring%20Inquiry%20%E2%80%93%20Portfolio&body=Hello%20Obulshetty%20Nikhil%20Kumar%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity%20with%20you.%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0ABest%20Regards%2C",
  },
  ctaResume: { text: "Download Resume", href: "/my_resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Obulshetty Nikhil Kumar</span>, a Computer Science and Engineering (AI & ML) student based in Hyderabad, India, dedicated to designing smart solutions and robust web applications.`,
  techStack: ["Python", "Flask", "Machine Learning", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding problem requirements, NLP keyword spaces, or dataset constraints to design optimal technical foundations.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structuring relational database schemas (SQLite/MySQL), API routing flows with Flask, and clean responsive interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building clean full-stack backends in Python/Flask and interactive frontends using modern CSS framework systems.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous debugging, API endpoint validation, version control tracking, and deployment to hosting environments.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 92 },
        { name: "CSS", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "Bootstrap", level: 90 }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Flask", level: 88 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL", level: 85 },
        { name: "RDBMS", level: 86 },
        { name: "MySQL", level: 88 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Machine Learning Fundamentals", level: 82 },
        { name: "Computer Vision", level: 78 },
        { name: "Generative AI", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 92 },
        { name: "AWS", level: 70 }
      ]
    }
  ]
};

// Projects Data
export const projects = [
  {
    id: "story-generation",
    number: "01",
    badge: "🚀 AI & NLP Project",
    title: "Multilingual Story Generation and Speech System",
    description:
      "Developed an AI-based system to generate stories using keywords and transformer models. Applied Natural Language Processing (NLP) techniques for keyword processing, structured story generation, and multilingual speech rendering, demonstrating AI applications in content generation.",
    techTags: ["Python", "TensorFlow", "Scikit-learn", "NLP", "Transformers"],
    links: {
      github: "https://github.com/Nikhilkumar3065",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "smartcart",
    number: "02",
    badge: "🛒 Full Stack E-Commerce",
    title: "SmartCart – E-Commerce Web Application",
    description:
      "Developed a full-stack e-commerce platform with user and admin modules. Implemented secure user authentication, shopping carts, product catalog management, and payment gateway simulation. Designed a fully responsive UI using HTML, CSS, JavaScript, and Bootstrap with MySQL database integration.",
    techTags: ["Python", "Flask", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    links: {
      github: "https://github.com/Nikhilkumar3065",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "notes-management",
    number: "03",
    badge: "📝 Web Application",
    title: "Notes Management System",
    description:
      "Built a web application for creating, updating, deleting, and managing personal notes. Implemented user registration, session management, and full CRUD database operations. Powered by a lightweight Flask backend and SQLite database for fast local performance.",
    techTags: ["Python", "Flask", "SQLite", "Bootstrap", "HTML", "CSS"],
    links: {
      github: "https://github.com/Nikhilkumar3065",
      demo: null,
    },
    isFlagship: false,
  },
];

// Certificates Data
export const certificates = {
  featured: [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      img: "/microsoft-cert.png",
      desc: "Validates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services."
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      icon: "💻",
      img: "/udemy-cert.jpg",
      desc: "Comprehensive training covering front-end and back-end web technologies including HTML, CSS, JavaScript, and modern database structures."
    },
  ]
};

// Education Data
export const educationList = [
  {
    institution: "Malla Reddy Engineering College",
    degree: "B.Tech in Computer Science (AI & ML)",
    duration: "2023 – 2026",
    location: "Hyderabad, Telangana",
    gpa: "CGPA: 7.1"
  },
  {
    institution: "TRR College of Technology",
    degree: "Diploma in Computer Science Engineering",
    duration: "2020 – 2023",
    location: "Hyderabad, Telangana",
    gpa: "CGPA: 6.59"
  },
  {
    institution: "Newgen School of Excellence",
    degree: "Secondary School Certificate (SSC)",
    duration: "2019 – 2020",
    location: "Hyderabad, Telangana",
    gpa: "CGPA: 9.5"
  }
];

// Experience Data
export const experienceList = [
  {
    organization: "Codegnan IT Solutions",
    role: "Python Full Stack Trainee",
    duration: "Jan 2026 – Present",
    location: "Hyderabad, Telangana",
    responsibilities: [
      "Undergoing intensive training in Python Full Stack Development with hands-on web application building.",
      "Practicing Data Structures and Algorithms to strengthen core problem-solving and software logic.",
      "Learning modern software development practices, git workflows, and Generative AI fundamentals."
    ],
    tech: ["Python", "Flask", "MySQL", "Git", "GitHub"]
  }
];

// Extracurricular/Leadership Activities Data
export const extracurricularList = [
  {
    title: "VISHESH-2023 Project Expo",
    description: "Participated in the MREC Vishesh project expo, presenting a Greenhouse Environment system simulation model.",
    role: "Project Exhbitior",
    badge: "Vishesh-2023"
  },
  {
    title: "TechTickle Hackathon",
    description: "Engaged in cooperative AI problem solving and coding challenges conducted by the AIML Community at MREC.",
    role: "Hackathon Participant",
    badge: "MREC AIML Community"
  }
];

export const footerContent = {
  taglines: [
    "Python Full Stack Development",
    "CSE (AI & ML) Student",
    "Machine Learning & Web Applications",
  ],
  credential: "B.Tech CSE (AI & ML) · CGPA 7.1",
  copyright: `© ${new Date().getFullYear()} Obulshetty Nikhil Kumar | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
