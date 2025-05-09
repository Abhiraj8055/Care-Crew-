
import React from 'react';
import { CircleCheck, Star, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Marketplace</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CircleCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Providers</h3>
            <p className="text-muted-foreground">All our service providers undergo thorough background checks</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">We maintain high standards with regular quality checks</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
            <p className="text-muted-foreground">Choose from various service packages to suit your needs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
