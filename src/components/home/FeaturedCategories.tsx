
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, CircleCheck, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredServices = [
  {
    id: 'cook',
    title: 'Professional Cooking',
    description: 'Experienced chefs to prepare delicious meals for your family',
    icon: <ShoppingBag className="h-12 w-12 text-primary" />,
  },
  {
    id: 'clean',
    title: 'Home Cleaning',
    description: 'Keep your home spotless with our expert cleaning services',
    icon: <Star className="h-12 w-12 text-primary" />,
  },
  {
    id: 'childcare',
    title: 'Childcare Services',
    description: 'Reliable and caring nannies for your children',
    icon: <CircleCheck className="h-12 w-12 text-primary" />,
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Categories</h2>
          <Link to="/search" className="text-primary flex items-center hover:underline">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Card key={service.id} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/search?serviceType=${service.id}`}>
                    Browse {service.title}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
