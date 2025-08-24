import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';

const PopularProducts = () => {
  const products = [
    {
      id: '1',
      image: product1,
      title: 'Golden Chanderi Silk Saree with Traditional Handloom Patterns',
      price: 3499,
      originalPrice: 4999,
      isPopular: true,
    },
    {
      id: '2',
      image: product2,
      title: 'Coral Pink Cotton Handloom Saree with Elegant Border',
      price: 2299,
      originalPrice: 3299,
      isPopular: true,
    },
    {
      id: '3',
      image: product1,
      title: 'Royal Blue Chanderi Cotton Blend with Gold Zari Work',
      price: 2899,
      originalPrice: 3999,
      isPopular: true,
    },
    {
      id: '4',
      image: product2,
      title: 'Mint Green Pure Cotton Saree with Block Print Design',
      price: 1999,
      originalPrice: 2799,
      isPopular: true,
    },
    {
      id: '5',
      image: product1,
      title: 'Burgundy Silk Cotton Saree with Traditional Motifs',
      price: 3199,
      originalPrice: 4499,
      isPopular: true,
    },
    {
      id: '6',
      image: product2,
      title: 'Ivory Chanderi Saree with Delicate Gold Thread Work',
      price: 2799,
      originalPrice: 3899,
      isPopular: true,
    },
  ];

  return (
    <section id="popular" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Popular Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites loved by our customers. Each saree represents 
            the finest in traditional craftsmanship and contemporary elegance.
          </p>
          <div className="elegant-divider">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="scroll-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-outline-luxury">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;