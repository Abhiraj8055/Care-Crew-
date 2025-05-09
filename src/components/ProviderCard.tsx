
import React from 'react';
import { Link } from 'react-router-dom';
import { Provider } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <Card className="overflow-hidden hover-scale card-shadow">
      <CardContent className="p-0">
        <div className="relative">
          {!provider.isAvailable && (
            <div className="absolute inset-0 bg-gray-900/70 z-10 flex items-center justify-center">
              <Badge variant="destructive" className="text-md px-3 py-1">
                Currently Unavailable
              </Badge>
            </div>
          )}
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="w-20 h-20 border-2 border-brand-100">
                <AvatarImage src={provider.photoUrl} alt={provider.name} />
                <AvatarFallback className="text-xl">
                  {provider.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold">{provider.name}</h3>
                
                <div className="flex items-center justify-center sm:justify-start mt-1 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-brand-500" />
                  <span>{provider.location}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1 text-brand-500" />
                  <span>{provider.availability === 'full-time' ? 'Full-time' : 'Part-time'}</span>
                </div>
                
                <div className="flex items-center justify-center sm:justify-start mt-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">{provider.averageRating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">{provider.experience} years experience</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                  {provider.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="capitalize">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 sm:mt-0 text-center">
                <div className="text-2xl font-bold text-brand-600">
                  ₹{provider.salaryExpectation.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600">per month</div>
              </div>
            </div>
            
            <p className="mt-4 text-gray-600 line-clamp-2">{provider.about}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 bg-gray-50 flex flex-col sm:flex-row gap-2 items-center justify-between border-t">
        {provider.certifications && provider.certifications.length > 0 && (
          <div className="text-sm text-gray-600 flex items-center">
            <span className="font-medium mr-2">Certified in:</span>
            <span>{provider.certifications.join(', ')}</span>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link to={`/chat/${provider.id}`}>Message</Link>
          </Button>
          <Button asChild>
            <Link to={`/provider/${provider.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProviderCard;
