'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BookOpen, ChevronDown, Star, Sparkles, Upload, HelpCircle, Key, Image } from 'lucide-react';

export default function SubNavbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { 
      href: '/how-to-use-text-compare', 
      label: 'Text Compare', 
      icon: BookOpen,
      description: 'Learn how to use the text compare tool'
    },
    { 
      href: '/how-to-use-file-compare', 
      label: 'File Compare', 
      icon: Upload,
      description: 'Learn how to compare files'
    },
    { 
      href: '/how-to-use-jwt-decoder', 
      label: 'JWT Decoder', 
      icon: Key,
      description: 'Learn how to decode JWT tokens'
    },
    { 
      href: '/how-to-use-image-compare', 
      label: 'Image Compare', 
      icon: Image,
      description: 'Learn how to compare images'
    },
    { 
      href: '/key-features', 
      label: 'Features', 
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
      label: 'Reviews', 
      icon: Star,
      description: 'Share your experience with us'
    }
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800/50 sticky top-16 z-40 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-4">
          <nav className="flex items-center gap-1" role="navigation" aria-label="Sub navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    group relative flex items-center gap-2.5 px-4 py-3 rounded-xl
                    font-medium text-sm transition-all duration-300 ease-out
                    hover:scale-105 active:scale-95
                    ${
                      active
                        ? 'bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-cyan-500/25 text-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                    }
                  `}
                >
                  {/* Icon with updated styling */}
                  <div className={`
                    p-1.5 rounded-lg transition-all duration-300
                    ${active 
                      ? 'bg-cyan-500/20 shadow-inner' 
                      : 'bg-gray-800/50 group-hover:bg-cyan-500/10'
                    }
                  `}>
                    <Icon className={`w-4 h-4 transition-all duration-300 ${
                      active 
                        ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                        : 'text-gray-500 group-hover:text-cyan-400'
                    }`} />
                  </div>
                  
                  <span className="relative">
                    {link.label}
                    {/* Underline effect on hover */}
                    <span className={`
                      absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 
                      transition-all duration-300 rounded-full
                      ${active ? 'w-full' : 'w-0 group-hover:w-full'}
                    `} />
                  </span>
                  
                  {/* Active indicator dot */}
                  {active && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  )}
                  
                  {/* Tooltip on hover */}
                  <span className={`
                    absolute -bottom-12 left-1/2 transform -translate-x-1/2 
                    px-3 py-1.5 bg-gray-900 text-gray-300 text-xs rounded-lg
                    border border-gray-700 shadow-xl whitespace-nowrap
                    opacity-0 group-hover:opacity-100 pointer-events-none
                    transition-all duration-300 z-50
                    before:content-[''] before:absolute before:-top-1 before:left-1/2 
                    before:transform before:-translate-x-1/2 before:border-4 
                    before:border-transparent before:border-b-gray-900
                  `}>
                    {link.description}
                  </span>
                  
                  {/* Glow effect */}
                  <span className={`
                    absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0
                    group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 
                    transition-all duration-500 blur-sm
                    ${active ? 'opacity-100' : 'opacity-0'}
                  `} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle sub navigation menu"
            aria-expanded={isMenuOpen}
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
              ${isMenuOpen ? 'max-h-[500px] opacity-100 mb-3' : 'max-h-0 opacity-0'}
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

      {/* Bottom gradient line with animation */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent">
        <div className="h-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
      </div>
    </div>
  );
}