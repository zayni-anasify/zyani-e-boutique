import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
}

const ProductCard = ({ id, image, title, price, originalPrice, isPopular }: ProductCardProps) => {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ${title} - ₹${price.toLocaleString()}. Please share more details.`;
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isPopular && (
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Popular
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              {discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
          <Heart size={16} className="text-muted-foreground hover:text-red-500 transition-colors" />
        </button>

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleWhatsAppOrder}
            className="btn-luxury"
          >
            <ShoppingCart size={16} className="mr-2" />
            Order via WhatsApp
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-playfair font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <button 
            onClick={handleWhatsAppOrder}
            className="text-green-600 hover:text-green-700 transition-colors font-medium text-sm"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;