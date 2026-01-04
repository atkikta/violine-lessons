import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { ProfileSection } from "./components/ProfileSection";
import { NewsSection } from "./components/NewsSection";
import { LessonsSection } from "./components/LessonsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('profile');

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'lessons', 'news', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <main>
        <ProfileSection />
        <LessonsSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}