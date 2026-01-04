import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'profile', label: '講師' },
    { id: 'lessons', label: 'レッスン案内' },
    { id: 'news', label: 'お知らせ' },
    { id: 'contact', label: 'お問い合わせ' },
  ];

  const handleNavigateClick = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Delay scrolling slightly to allow the page to render
      setTimeout(() => {
        onNavigate(section);
      }, 0);
    } else {
      onNavigate(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="font-serif">大阪茨木ヴァイオリン教室</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigateClick(item.id)}
                className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigateClick(item.id)}
                className={`block w-full text-left py-3 transition-colors ${
                  activeSection === item.id
                    ? 'text-neutral-900'
                    : 'text-neutral-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
