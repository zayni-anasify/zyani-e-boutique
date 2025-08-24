import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-saree.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('popular');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium Chanderi Handloom Sarees" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="heading-luxury text-white mb-6 animate-fade-in">
          Exquisite Chanderi
          <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Handloom Sarees
          </span>
        </h1>
        
        <p className="subtitle-luxury text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Discover the timeless elegance of authentic Chanderi handloom sarees, 
          crafted with love and tradition. Each piece tells a story of heritage and artistry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button 
            onClick={scrollToProducts}
            className="btn-luxury text-lg px-10 py-4"
          >
            Shop Now
          </button>
          <button className="btn-outline-luxury text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-primary">
            View Collection
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProducts}
          className="text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;