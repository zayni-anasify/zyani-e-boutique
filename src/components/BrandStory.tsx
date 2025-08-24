import brandStoryImage from '@/assets/brand-story.jpg';

const BrandStory = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <img 
              src={brandStoryImage} 
              alt="Traditional weaver crafting handloom sarees"
              className="w-full rounded-xl shadow-[var(--shadow-luxury)]"
            />
          </div>
          
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Heritage Story
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Zyani Sarees, we celebrate the timeless art of Chanderi handloom weaving, 
                a tradition that has been passed down through generations of skilled artisans 
                in the heart of Madhya Pradesh.
              </p>
              
              <p>
                Each saree in our collection is a testament to the dedication and craftsmanship 
                of our partner weavers who pour their soul into every thread, creating masterpieces 
                that blend traditional techniques with contemporary aesthetics.
              </p>
              
              <p>
                We believe in preserving this ancient craft while empowering the artisan 
                communities who are the true guardians of this heritage. Every purchase 
                supports these talented weavers and helps sustain their traditional livelihood.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-2">500+</h3>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Artisan Partners</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-luxury">
                Learn More About Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;