import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { personalInfo, projects, experience, education, skills, blogPosts } from '../data/portfolio';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: `Hi! I'm Mohith Gowda's AI assistant. I can answer questions about his background, skills, projects, experience, blog posts, and more. What would you like to know?`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Blog and writing questions
    if (message.includes('blog') || message.includes('article') || message.includes('writing') || message.includes('medium')) {
      const featuredPosts = blogPosts.filter(post => post.featured);
      const postList = featuredPosts.map(post => 
        `• "${post.title}" - ${post.excerpt.substring(0, 80)}...`
      ).join('\n');
      return `Mohith  regularly writes on Medium (@wintersoldie) about technology and software development. Here are some of his featured articles:\n\n${postList}\n\nYou can read all his articles at: ${personalInfo.medium}`;
    }
    
    // Skills and technical questions
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      const skillCategories = Object.entries(skills).map(([category, skillList]) => 
        `${category}: ${skillList.join(', ')}`
      ).join('\n\n');
      return `Mohith  has expertise in various technologies:\n\n${skillCategories}\n\nHe's particularly strong in full-stack development and machine learning!`;
    }
    
    // Projects
    if (message.includes('project')) {
      const projectList = projects.map(p => 
        `• ${p.title}: ${p.description.substring(0, 100)}...`
      ).join('\n');
      return `Here are Mohith 's key projects:\n\n${projectList}\n\n`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      const expList = experience.map(exp => 
        `• ${exp.title} at ${exp.company} (${exp.duration})`
      ).join('\n');
      return `Mohith 's professional experience includes:\n\n${expList}\n\nHe has hands-on experience in software development and research.`;
    }
    
    // Education
    if (message.includes('education') || message.includes('university') || message.includes('degree')) {
      const edu = education[0];
      return `Mohith  graduated ${edu.degree} from ${edu.institution} (${edu.duration}) with a ${edu.gpa} GPA. His achievements include: ${edu.achievements.join(', ')}.`;
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
      return `You can reach Mohith  at:\n• Email: ${personalInfo.email}\n• Phone: ${personalInfo.phone}\n• Location: ${personalInfo.location}\n• LinkedIn: ${personalInfo.linkedin}\n• GitHub: ${personalInfo.github}\n• Medium: ${personalInfo.medium}`;
    }
    
    // Background/About
    if (message.includes('about') || message.includes('background') || message.includes('who')) {
      return `${personalInfo.summary}\n\nMohith  is a ${personalInfo.title} based in ${personalInfo.location}. He's passionate about technology and always eager to take on new challenges!`;
    }
    
    // Graduate school/MS applications
    if (message.includes('graduate') || message.includes('masters') || message.includes('ms ') || message.includes('phd')) {
      return `Mohith  is actively seeking opportunities for graduate studies in Machine Learning and AI. He's particularly interested in natural language processing and computer vision. His strong academic background  and research experience make him a great candidate for advanced studies.`;
    }
    
    // Availability/hiring
    if (message.includes('available') || message.includes('hire') || message.includes('position')) {
      return `Yes! Mohith  is actively seeking new opportunities in software development, particularly roles involving full-stack development, AI/ML, or research positions. He's also open to graduate school opportunities. Feel free to reach out to discuss potential collaborations!`;
    }
    
    // Default responses for common greetings
    if (message.includes('hello') || message.includes('hi ') || message.includes('hey')) {
      return `Hello! I'm here to help you learn more about Mohith. You can ask me about his skills, projects, experience, education, blog posts, or how to contact him. What interests you most?`;
    }
    
    // Default fallback
    return `I'd be happy to help you learn more about Mohith ! You can ask me about:\n\n• His technical skills and programming languages\n• His projects and portfolio\n• His work experience and internships\n• His education and achievements\n• His blog posts and articles on Medium\n• How to contact him\n• His availability for new opportunities\n\nWhat would you like to know?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Mohith 's AI Assistant</h3>
                <p className="text-sm text-blue-100">Ask me anything about Mohith !</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`p-2 rounded-lg ${message.isUser ? 'bg-blue-600' : 'bg-gray-200'}`}>
                    {message.isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-lg bg-gray-200">
                    <Bot size={16} className="text-gray-600" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Mohith 's skills, projects, blog posts..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!inputValue.trim()}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;