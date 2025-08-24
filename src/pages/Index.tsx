import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PopularProducts from '@/components/PopularProducts';
import CategoryCarousel from '@/components/CategoryCarousel';
import BrandStory from '@/components/BrandStory';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PopularProducts />
        <CategoryCarousel />
        <BrandStory />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollReveal />
    </div>
  );
};

export default Index;
