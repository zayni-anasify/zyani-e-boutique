import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import collectionImage from '@/assets/saree-collection.jpg';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  products: any[];
}

const CategoryCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: Category[] = [
    {
      id: 'cotton',
      title: 'Cotton Collection',
      description: 'Breathable and comfortable cotton sarees perfect for everyday elegance',
      image: collectionImage,
      products: [
        {
          id: 'c1',
          image: product2,
          title: 'Pure Cotton Handloom Saree with Traditional Border',
          price: 1899,
          originalPrice: 2599,
        },
        {
          id: 'c2',
          image: product1,
          title: 'Cotton Silk Blend with Geometric Patterns',
          price: 2299,
          originalPrice: 3199,
        },
        {
          id: 'c3',
          image: product2,
          title: 'Organic Cotton Saree with Natural Dyes',
          price: 1699,
          originalPrice: 2399,
        },
      ]
    },
    {
      id: 'silk',
      title: 'Silk Blend Collection',
      description: 'Luxurious silk blend sarees that shimmer with traditional beauty',
      image: collectionImage,
      products: [
        {
          id: 's1',
          image: product1,
          title: 'Chanderi Silk Saree with Gold Zari Work',
          price: 3499,
          originalPrice: 4999,
        },
        {
          id: 's2',
          image: product2,
          title: 'Silk Cotton Blend with Contemporary Design',
          price: 2899,
          originalPrice: 3799,
        },
        {
          id: 's3',
          image: product1,
          title: 'Premium Silk Handloom with Traditional Motifs',
          price: 4199,
          originalPrice: 5999,
        },
      ]
    },
    {
      id: 'limited',
      title: 'Limited Editions',
      description: 'Exclusive designs crafted in limited quantities for discerning customers',
      image: collectionImage,
      products: [
        {
          id: 'l1',
          image: product1,
          title: 'Designer Chanderi with Hand Embroidery',
          price: 5999,
          originalPrice: 7999,
        },
        {
          id: 'l2',
          image: product2,
          title: 'Vintage Inspired Handloom Masterpiece',
          price: 4799,
          originalPrice: 6499,
        },
        {
          id: 'l3',
          image: product1,
          title: 'Artisan Special Edition Saree',
          price: 6499,
          originalPrice: 8999,
        },
      ]
    },
  ];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section id="cotton" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections, each representing a unique 
            aspect of traditional Indian textile artistry.
          </p>
        </div>

        <div className="relative">
          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-primary text-primary-foreground shadow-[var(--shadow-card)]'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Display */}
          <div className="scroll-reveal">
            <div className="text-center mb-12">
              <img 
                src={categories[activeCategory].image} 
                alt={categories[activeCategory].title}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-[var(--shadow-card)]"
              />
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                {categories[activeCategory].title}
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                {categories[activeCategory].description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories[activeCategory].products.map((product, index) => (
                <div 
                  key={product.id}
                  className="scroll-reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevCategory}
              className="p-3 bg-card rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-muted"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            <button
              onClick={nextCategory}
              className="p-3 bg-card rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-muted"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;