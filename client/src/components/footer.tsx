import { Link } from "wouter";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "./theme-provider";
import logoWhite from "@assets/temp_logo_white_nobg_1752180034399.png";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src={logoWhite} alt="Los Angeles AI Consulting" className="h-10 w-auto" />
            <span className="ml-3 text-xl font-bold">LA AI Consulting</span>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Los Angeles AI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
