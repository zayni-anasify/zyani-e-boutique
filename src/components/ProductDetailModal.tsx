import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Share2, Star, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price: number;
  category: string;
  image_urls: string[];
  is_popular: boolean;
  is_featured: boolean;
}

interface ProductDetailModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: ProductDetailModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const discountPercentage = product.original_price 
    ? Math.round(((product.original_price - product.price) / product.original_price) * 100) 
    : 0;

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in *${product.name}* - ₹${product.price.toLocaleString()}
    
*Product Details:*
Category: ${product.category}
Original Price: ₹${product.original_price?.toLocaleString()}
Discount: ${discountPercentage}% OFF

Please share more details and availability.`;

    const phoneNumber = "919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your order via WhatsApp chat",
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: isWishlisted ? 
        "Product removed from your wishlist" : 
        "Product added to your wishlist",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this beautiful saree from Zyani Sarees`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Product link copied to clipboard",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image_urls[selectedImageIndex] || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Image Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.is_popular && (
                  <Badge className="bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                {product.is_featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge className="bg-red-500 text-white">
                    {discountPercentage}% OFF
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 w-10 p-0 bg-white/90 hover:bg-white"
                  onClick={handleWishlist}
                >
                  <Heart 
                    size={16} 
                    className={isWishlisted ? "text-red-500 fill-red-500" : "text-muted-foreground"} 
                  />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-10 w-10 p-0 bg-white/90 hover:bg-white"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="text-muted-foreground" />
                </Button>
              </div>
            </div>

            {/* Image Thumbnails */}
            {product.image_urls.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.image_urls.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-muted'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">4.8 (124 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.original_price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.original_price.toLocaleString()}
                    </span>
                    <Badge className="bg-green-100 text-green-800">
                      Save ₹{(product.original_price - product.price).toLocaleString()}
                    </Badge>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || "This exquisite handloom saree showcases traditional craftsmanship with contemporary elegance. Perfect for special occasions and celebrations."}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Premium handloom quality
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Traditional weaving techniques
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Comes with matching blouse piece
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Easy to maintain and long-lasting
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button 
                onClick={handleWhatsAppOrder}
                className="w-full btn-luxury text-lg py-6"
                size="lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </Button>
              
              <Button 
                onClick={handleWhatsAppOrder}
                variant="outline"
                className="w-full text-green-600 border-green-600 hover:bg-green-50"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat for Custom Requirements
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Free</div>
                <div className="text-sm text-muted-foreground">Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">7 Days</div>
                <div className="text-sm text-muted-foreground">Return</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Authentic</div>
                <div className="text-sm text-muted-foreground">Handloom</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;