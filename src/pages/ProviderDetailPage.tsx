import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockProviders, mockReviews } from '@/data/mockData';
import { Provider } from '@/types';
import {
  Star,
  MapPin,
  Clock,
  Calendar,
  MessageSquare,
  Phone,
  Briefcase,
  Award,
  Heart,
  Check,
  X,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const ProviderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const [provider, setProvider] = useState<Provider | undefined>(
    mockProviders.find(p => p.id === id)
  );
  const [trialMessage, setTrialMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRequestingTrial, setIsRequestingTrial] = useState(false);
  const providerReviews = mockReviews.filter(review => review.providerId === id);

  if (!provider) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Provider not found</h1>
          <p className="mb-4">The provider you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/search">Back to Search</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleTrialRequest = () => {
    setIsRequestingTrial(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsRequestingTrial(false);
      setIsDialogOpen(false);
      
      toast({
        title: 'Trial Request Sent',
        description: `Your request has been sent to ${provider.name}. You'll be notified once they respond.`,
      });
    }, 1000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link to="/search" className="text-brand-600 hover:underline flex items-center">
            ← Back to Search Results
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 h-40 relative">
            {!provider.isAvailable && (
              <div className="absolute inset-0 bg-gray-900/70 flex items-center justify-center">
                <Badge variant="destructive" className="text-md px-3 py-1 text-lg">
                  Currently Unavailable
                </Badge>
              </div>
            )}
          </div>
          
          <div className="p-6 relative">
            <Avatar className="w-24 h-24 absolute -top-12 left-6 border-4 border-white shadow-lg">
              <AvatarImage src={provider.photoUrl} alt={provider.name} />
              <AvatarFallback className="text-2xl">
                {provider.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div className="ml-32 flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-3xl font-bold">{provider.name}</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  {provider.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="capitalize">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1 text-brand-500" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1 text-brand-500" />
                    <span>{provider.availability === 'full-time' ? 'Full-time' : 'Part-time'}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-1 text-brand-500" />
                    <span>{provider.experience} years experience</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 font-medium">{provider.averageRating}</span>
                    <span className="ml-1 text-gray-600">({providerReviews.length} reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <div className="text-2xl font-bold text-brand-600">
                  ₹{provider.salaryExpectation.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-3">per month</div>
                
                <div className="flex gap-2">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button disabled={!provider.isAvailable}>
                        Request Free Trial
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request a Free Trial</DialogTitle>
                        <DialogDescription>
                          Send a trial request to {provider.name}. Briefly describe your requirements 
                          and preferred date for the trial.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="py-4">
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">Message</label>
                          <Textarea
                            placeholder="Describe your requirements, expectations, and preferred date for the trial..."
                            value={trialMessage}
                            onChange={(e) => setTrialMessage(e.target.value)}
                            rows={5}
                          />
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleTrialRequest} disabled={isRequestingTrial}>
                          {isRequestingTrial ? 'Sending Request...' : 'Send Request'}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" asChild>
                    <Link to={`/chat/${provider.id}`}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="about" className="bg-white shadow-md rounded-lg overflow-hidden">
          <TabsList className="bg-gray-50 p-0 border-b w-full rounded-none justify-start">
            <TabsTrigger value="about" className="px-6 py-3 rounded-none data-[state=active]:bg-white">
              About
            </TabsTrigger>
            <TabsTrigger value="reviews" className="px-6 py-3 rounded-none data-[state=active]:bg-white">
              Reviews ({providerReviews.length})
            </TabsTrigger>
            <TabsTrigger value="experience" className="px-6 py-3 rounded-none data-[state=active]:bg-white">
              Experience
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">About {provider.name}</h2>
                <p className="text-gray-600 mb-6">
                  {provider.about || "No detailed information available for this provider."}
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {provider.skills.map((skill, index) => (
                    <Badge key={index} className="capitalize px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {provider.certifications && provider.certifications.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-6">
                      {provider.certifications.map((cert, index) => (
                        <li key={index} className="mb-1">{cert}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Age:</span>
                    <span>{provider.age} years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Gender:</span>
                    <span className="capitalize">{provider.gender}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Experience:</span>
                    <span>{provider.experience} years</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 w-32">Availability:</span>
                    <span>{provider.availability === 'full-time' ? 'Full-time' : 'Part-time'}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Service Overview</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Monthly Salary</h4>
                        <p className="text-xl font-bold text-brand-600">
                          ₹{provider.salaryExpectation.toLocaleString()}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Location</h4>
                        <p>{provider.location}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Services Offered</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {provider.skills.map((skill, index) => (
                            <li key={index} className="capitalize">{skill}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">What to expect:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>Free trial before hiring</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>Direct communication</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>Background verified</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(provider.averageRating || 0)
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{provider.averageRating}</span>
                <span className="text-gray-600 ml-1">({providerReviews.length} reviews)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              {providerReviews.length > 0 ? (
                providerReviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarFallback>
                          {review.householdId.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">
                            {review.householdId === 'household1' ? 'Smith Family' : 'Brown Residence'}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex my-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mt-2">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No reviews yet for this provider.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="p-6">
            <h2 className="text-xl font-semibold mb-6">Experience & Expertise</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-brand-500" />
                  Work Experience
                </h3>
                <div className="border-l-2 border-brand-200 pl-4 ml-2 space-y-6">
                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-brand-500"></div>
                    <h4 className="font-medium">Professional {provider.skills[0]} services</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      {2023 - provider.experience} - Present
                    </p>
                    <p className="text-gray-600">
                      {provider.experience} years of professional experience providing {provider.skills[0]} 
                      services to various households.
                    </p>
                  </div>
                  
                  {provider.experience > 3 && (
                    <div className="relative">
                      <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-brand-200"></div>
                      <h4 className="font-medium">Previous experience</h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {2023 - provider.experience - 3} - {2023 - provider.experience}
                      </p>
                      <p className="text-gray-600">
                        Worked with multiple households providing services in {provider.skills.slice(0, 2).join(' and ')}.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              {provider.certifications && provider.certifications.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-brand-500" />
                    Certifications
                  </h3>
                  <div className="border-l-2 border-brand-200 pl-4 ml-2 space-y-6">
                    {provider.certifications.map((cert, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-brand-500"></div>
                        <h4 className="font-medium">{cert}</h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {2023 - Math.floor(Math.random() * 5) - 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="h-5 w-5 mr-2 text-brand-500" />
                  Specializations
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {provider.skills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span className="capitalize">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProviderDetailPage;
