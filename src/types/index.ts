export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  achievements: string[];
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  url: string;
  imageUrl: string;
  featured: boolean;
}