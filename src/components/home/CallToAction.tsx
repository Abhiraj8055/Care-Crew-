
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your perfect service provider?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Browse our marketplace of qualified professionals and book services that match your requirements.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-white text-brand-600 hover:bg-white/90"
        >
          <Link to="/search">Shop Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
