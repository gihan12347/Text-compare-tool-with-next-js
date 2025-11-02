// components/SubNavbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BookOpen, Info, FileText, ChevronDown, Star, Sparkles, Upload, HelpCircle } from 'lucide-react';

export default function SubNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { 
      href: '/how-to-use-text-compare', 
      label: 'How to Use Text Compare', 
      icon: BookOpen,
      description: 'Learn how to use the text compare tool'
    },
    { 
      href: '/how-to-use-file-compare', 
      label: 'How to Use File Compare', 
      icon: Upload,
      description: 'Learn how to compare files'
    },
    { 
      href: '/key-features', 
      label: 'Key Features', 
      icon: Sparkles,
      description: 'Explore all the powerful features'
    },
    { 
      href: '/faq', 
      label: 'FAQ', 
      icon: HelpCircle,
      description: 'Frequently asked questions'
    },
    { 
      href: '/add-review', 
      label: 'Add Your Review', 
      icon: Star,
      description: 'Share your experience with us'
    }
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800/50 sticky top-16 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-3">
          <div className="flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              
              return (
                <div key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    title={link.description}
                    className={`
                      group relative flex items-center gap-2 px-5 py-2.5 rounded-lg
                      font-medium text-sm transition-all duration-300 ease-in-out
                      ${
                        active
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50'
                      }
                    `}
                  >
                    <Icon className={`w-4 h-4 transition-all duration-300 ${
                      active ? 'text-cyan-400' : 'text-gray-500 group-hover:text-cyan-400'
                    }`} />
                    <span>{link.label}</span>
                    
                    {/* Active indicator */}
                    {active && (
                      <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover glow effect */}
                    <span className={`
                      absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 to-blue-500/0
                      group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300
                      ${active ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </Link>
                  
                  {/* Separator */}
                  {index < navLinks.length - 1 && (
                    <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle sub navigation menu"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Information & Help
            </span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Mobile Dropdown Menu */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'max-h-64 opacity-100 mb-3' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                      transition-all duration-200
                      ${
                        active
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-l-4 border-cyan-400'
                          : 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 border-l-4 border-transparent'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <div className="flex-1">
                      <div>{link.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{link.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
}