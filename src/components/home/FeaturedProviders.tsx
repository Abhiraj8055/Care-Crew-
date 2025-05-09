
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Provider } from '@/types';

interface FeaturedProvidersProps {
  providers: Provider[];
}

const FeaturedProviders: React.FC<FeaturedProvidersProps> = ({ providers }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Top Rated Providers</h2>
          <Link to="/search" className="text-primary flex items-center hover:underline">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <Card key={provider.id} className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-muted relative">
                <img 
                  src={provider.photoUrl || "/placeholder.svg"} 
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary text-white text-sm font-semibold py-1 px-2 rounded-full flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  {provider.averageRating || 4.5}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{provider.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {provider.availability}
                </div>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-muted-foreground">{provider.about || "Experienced domestic help professional ready to assist with your needs."}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {provider.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="bg-muted text-xs py-1 px-2 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {provider.skills.length > 3 && (
                    <span className="bg-muted text-xs py-1 px-2 rounded-full">
                      +{provider.skills.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={`/provider/${provider.id}`}>
                    View Details
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

export default FeaturedProviders;
