import { Project, Experience, Education, BlogPost } from '../types';

export const personalInfo = {
  name: "Mohith Gowda K",
  title: "Recent Computer Science Graduate",
  email: "mohithgowdak.kote@gmail.com",
  phone: "+91 8123118077",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/mohith-gowda-k",
  github: "https://github.com/mohithgowdak",
  medium: "https://medium.com/@wintersoldie",
  summary: "Computer Science graduate (BE, 2025) with a strong foundation in AI, Computer Vision, and behavior-aware systems. Seeking an AI/ML or Computer Vision Engineer role to apply deep learning, pose tracking, and real-time recognition to impactful products. Passionate about translating research into real-world systems."
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Micro-Expression Recognition based on TV-L1 based Hierarchical Transformer Network",
    description: "Developed a micro-expression recognition system by integrating (1) TV-L1 optical flow for capturing subtle facial motion, and (2) HTNet for deep spatial-temporal feature learning, achieving (3) a UF1 score of 0.9722 and ECE of 0.1131 on CASME II, SAMM, and SMIC datasets, enabling real-time, high-accuracy emotion detection for applications in security, mental health diagnostics, and human-computer interaction.",
    technologies: ["Python", "PyTorch", "OpenCV", "MediaPipe", "MTCNN", "NumPy", "Matplotlib", "TV-L1 Optical Flow Algorithm", "Hierarchical Transformer Network (HTNet)"],
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    //githubUrl: "https://github.com/Mohith johnson/ecommerce-platform",
    //liveUrl: "https://ecommerce-demo.vercel.app",
    featured: false
  },
  {
    id: "2",
    title: "SignLearn: A sign language learning platform",
    description: " Developed a full-stack web application using React, Redux, JavaScript, MediaPipe, and Firebase that converts real-time sign language gestures into text with 91% accuracy using a custom-built machine learning model trained on a self-curated dataset of 100K images; contributed to both frontend and backend, implemented Firebase Firestore for database and authentication, and enabled seamless, AI-powered gesture recognition for interactive learning.",
    technologies: [ "React - Redux", "JavaScript", "Media pipe", "Firebase" ],
    imageUrl: "/Images/signlearn.png",
    githubUrl: "https://github.com/mohithgowdak/SIGNLEARN-FRONTEND-BACKEND",
    liveUrl: "https://signlearn-frontend-backend.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "MindMend – Mental Health Support Platform",
    description: "A Flask-based mental health support platform with appointment booking, real-time chat via Socket.IO, email notifications using Flask-Mail, and emotion analysis with text2emotion for personalized content recommendations, built with a clean UI for both users and counselors.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Socket.IO", "Flask-Mail", "text2emotion"],
    imageUrl: "/Images/image.png",
    githubUrl: "https://github.com/mohithgowdak/MindMend_development_mode",
    //liveUrl: "https://mindmend-platform.netlify.app",
    featured: false
  },
  
  {
    id: "4",
    title: "Ninexta AI - AI Agent Explorer",
    description: "A React-based platform powered by Gemini 2.0 Flash that allows users to discover AI tools using natural language queries instead of rigid tags or filters. Features intelligent query mapping, responsive UI, and individual agent pages with mock capabilities, pricing, and examples.[Work Under Progress]",
    technologies: ["React", "JavaScript", "Gemini 2.0 Flash", "HTML", "CSS", "Vite", "TailwindCSS"],
    imageUrl: "/Images/pexels-thisisengineering-3913025.jpg",
    githubUrl: "https://github.com/mohithgowdak/Ninexta",
    liveUrl: "https://ninexta-ai.netlify.app",
    featured: true
  },
  {
    id: "5",
    title: "Digital Legacy Platform",
    description: "An in-progress secure platform to manage and transfer digital assets after death. Includes MetaMask wallet login, JWT authentication, categorized asset uploads, Ethereum-based wallet integration, and transfer instructions.",
    technologies: ["FastAPI", "Python", "MetaMask", "Ethereum", "JWT", "HTML", "CSS", "JavaScript"],
    imageUrl: "/Images/pexels-sevval-724207784-18334305.jpg",
    githubUrl: "https://github.com/mohithgowdak/Projectk",
    liveUrl: "", // Live demo coming soon
    featured: false
  },
  {
    id: "7",
    title: "DocuShare Hub",
    description: "A Django-based online notes-sharing platform with responsive design, admin-managed content, and streamlined interfaces for users and administrators. Built using Python, Django, SQLite3, HTML, and CSS to ensure accessibility and a smooth user experience across devices.",
    technologies: ["Python", "Django", "SQLite3", "HTML", "CSS"],
    imageUrl: "/Images/pexels-rdne-7821684.jpg", // Add or update with actual image path
    githubUrl: "https://github.com/mohithgowdak/NewNotesSharing", // Replace with your real GitHub link
    liveUrl: "", // Add live deployment link if available
    featured: false
  }
  
    
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "iXp Intern | Associate Solution Engineer",
    company: "SAP Labs India Pvt Ltd",
    duration: "Jan 2025 – Present",
    description: [
      "Provided support for SAP S/4 HANA Public Cloud Sourcing and Procurement modules, ensuring smooth system performance.",
      "Diagnosed and resolved complex technical issues, maintaining service continuity for enterprise clients.",
      "Collaborated with cross-functional teams to improve system stability and user experience.",
      "Delivered proactive client support by optimizing workflows and enhancing SAP S/4 HANA features."
    ],
    technologies: ["SAP S/4 HANA", "Public Cloud", "ERP","sourcing & procurement", "Communication", "Technical Support"]
  }
 , 
  {
    id: "2",
    title: "Apprenticeship | Backend Developer",
    company: "OpenText Corporation India Pvt Ltd",
    duration: "Oct 2024 – Dec 2024",
  
    description: [
      "Worked on the Identity Management Driver project as a backend developer.",
      "Developed drivers for IDM software using Java and SQL, enhancing system functionality.",
      "Gained hands-on experience with JDBC, REST APIs, backend server development, and networking.",
      "Contributed to the REST driver development for the GWS application.",
      "Analyzed and integrated external APIs from platforms like Box, GitLab, and GWS to enhance compatibility and connectivity.",
      "Collaborated with industry experts to ensure robust backend solutions and timely project delivery."
    ],
    technologies: ["Java", "SQL", "JDBC", "REST APIs", "Backend Development", "Networking"]
  },
  {
    id: "4",
    title: "Freelance Prompt Tester",
    company: "Soul AI",
    duration: "Aug 2024 – Oct 2024",
    
    description: [
      "Evaluated and optimized AI-generated prompts to enhance model performance and user engagement.",
      "Provided structured feedback to improve prompt clarity, contextual relevance, and adaptability across use cases.",
      "Tested AI systems rigorously to ensure response accuracy and alignment with product goals.",
      "Contributed to iterative refinement of prompt-engineering practices in real-world scenarios."
    ],
    technologies: ["Prompt Engineering", "AI Testing", "LLMs", "NLP", "Human-in-the-loop Evaluation"]
  }
  
  
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Sri Jayachamarajendra College of Engineering",
    duration: "2020 – 2024",
    gpa: "8.9/10.0",
    achievements: [
      "Completed specialized coursework in AI, Networks, and Cybersecurity",
      "Final year project on Facial Expression Recognition using Optical Flow and Deep Learning",
      "Active participant in coding contests and project exhibitions"
    ]
  }
  
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Swap Skills, Not Cash: The Future of Learning & Collaboration 🤝",
    excerpt: "Exploring Project Idea: Swap Skills, Not Cash — a skill exchange platform where talent meets opportunity without spending a single rupee. ",
    publishedDate: "2025-01-22",
    readTime: "4 min read",
    tags: ["Startup", "idea", "Project", "Technology"],
    url: "https://medium.com/@wintersoldie/swap-skills-not-cash-the-future-of-learning-collaboration-dd4987a34413",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "2",
    title: "Building AI Agent Explorer — A Student Project to Help You Discover the Right AI Tools",
    excerpt: "AI Agent Explorer is a platform that lets users explore the world of AI agents/tools ",
    publishedDate: "2024-04-19",
    readTime: "4 min read",
    tags: ["Python", "JavaScript", "Agentic AI", "Prototype"],
    url: "https://medium.com/@wintersoldie/building-ai-agent-explorer-a-student-project-to-help-you-discover-the-right-ai-tools-smarter-a04fca60a494",
    imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: "3",
    title: "Fresh Startup Ideas for 2025 That Could Change the Game",
    excerpt: "some exciting and fresh startup ideas to inspire you and help you tap into unique market opportunities.",
    publishedDate: "2025-01-18",
    readTime: "4 min read",
    tags: ["Career", "Startup", "Software Engineering", "Student Life"],
    url: "https://medium.com/@wintersoldie/fresh-startup-ideas-for-2025-that-could-change-the-game-4bdab11a9c6f",
    imageUrl: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: "4",
    title: "The Future of Remote Work: Is It a Dream or a Disaster? ",
    excerpt: "Let’s dive into the pros and cons of working from anywhere!",
    publishedDate: "2025-01-22",
    readTime: "3 min read",
    tags: ["Hybrid", "Work from home", "AI", "Work Life Balance"],
    url: "https://medium.com/@wintersoldie/the-future-of-remote-work-is-it-a-dream-or-a-disaster-7ab009408c95",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript", "C", "Java", "C++", "SQL"],
  "Web Technologies": ["React", "Firebase", "Django", "Flask", "FastAPI", "HTML/CSS", "REST APIs"],
  "Data & AI": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "MediaPipe",
    "PyTorch",
    "Transformers",
    "OpenCV",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "Linux",
    "Firebase Hosting",
    "MongoDB",
    "PostgreSQL",
    "Google Colab",
    "VS Code"
  ],
  "SAP & Enterprise Tech": [
    "SAP ABAP (basic)",
    "SAP S/4 HANA Public Cloud",
    "SAP Fiori",
    "SAP UI5",
    "Procurement & Sourcing",
    "Intercompany stock transfer process",
    "Enterprise Software Support",
    "SAP Launchpad"
  ],
  "Soft Skills": [
    "Problem Solving",
    "Self-Learning",
    "Analytical Thinking",
    "Project Ownership",
    "Team Collaboration",
    "Growth Mindset",
    "Technical Communication",
    "Adaptability",
    "Time Management"
  ]
};
