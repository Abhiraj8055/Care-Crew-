
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  User, 
  Calendar, 
  DollarSign, 
  Shield, 
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const BecomeProviderPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Become a Service Provider
            </h1>
            <p className="text-xl mb-10 text-white/90">
              Join our platform and connect with customers looking for quality domestic services
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-brand-600 hover:bg-white/90"
            >
              <Link to="/register?type=provider">
                Register as Provider <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Our Platform?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reach More Clients</h3>
              <p className="text-muted-foreground">
                Connect with households looking for quality service providers in your area
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-muted-foreground">
                Choose when you work and set your own availability to match your lifestyle
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Set Your Rates</h3>
              <p className="text-muted-foreground">
                You decide how much to charge for your services based on your skills and experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/20 z-0"></div>
              
              <div className="relative z-10 space-y-12">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 md:mt-1">
                    1
                  </div>
                  <div className="bg-background rounded-lg shadow-md p-6 md:ml-8 w-full">
                    <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                    <p className="text-muted-foreground mb-4">
                      Sign up as a provider and create a detailed profile showcasing your skills, experience, and the services you offer.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 md:mt-1">
                    2
                  </div>
                  <div className="bg-background rounded-lg shadow-md p-6 md:ml-8 w-full">
                    <h3 className="text-xl font-bold mb-2">Set Your Availability</h3>
                    <p className="text-muted-foreground mb-4">
                      Define when you're available to work and specify your service area. You can update this anytime as your schedule changes.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 md:mt-1">
                    3
                  </div>
                  <div className="bg-background rounded-lg shadow-md p-6 md:ml-8 w-full">
                    <h3 className="text-xl font-bold mb-2">Get Booking Requests</h3>
                    <p className="text-muted-foreground mb-4">
                      Clients will find your profile and send booking requests. You can review the details and accept jobs that fit your schedule.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 md:mt-1">
                    4
                  </div>
                  <div className="bg-background rounded-lg shadow-md p-6 md:ml-8 w-full">
                    <h3 className="text-xl font-bold mb-2">Provide Great Service</h3>
                    <p className="text-muted-foreground mb-4">
                      Deliver quality service to build your reputation. Satisfied clients will leave positive reviews, helping you attract more work.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 md:mt-1">
                    5
                  </div>
                  <div className="bg-background rounded-lg shadow-md p-6 md:ml-8 w-full">
                    <h3 className="text-xl font-bold mb-2">Get Paid Securely</h3>
                    <p className="text-muted-foreground mb-4">
                      Receive payments directly through our secure platform. We handle the transactions so you can focus on your work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Requirements to Join</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We maintain high standards to ensure quality service for our customers. To join as a provider, you'll need to meet these requirements:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Valid identification and proof of address</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Experience or qualifications in your service area</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Pass a background verification check</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Professional profile photo and complete profile</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Mobile phone for communication with clients</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/30 rounded-xl p-8">
              <div className="flex mb-6">
                <Shield className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Commitment to You</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                As a platform, we're committed to supporting our service providers with:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Secure and timely payments for all services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Insurance coverage for eligible services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>Dispute resolution assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span>24/7 customer support for urgent issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Hear From Our Providers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-6">
                "Joining this platform was the best decision for my business. I've increased my client base and income while maintaining control over my schedule."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Professional Cleaner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-6">
                "The platform makes it easy to find clients who need my cooking services. The payment system is secure, and I love the flexibility to choose my jobs."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Professional Chef</p>
                </div>
              </div>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-muted-foreground mb-6">
                "As a nanny, trust is everything. This platform helps me connect with families that value quality childcare, and the review system helps showcase my experience."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Emily Thompson</h4>
                  <p className="text-sm text-muted-foreground">Childcare Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of professional service providers and start growing your business today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-brand-600 hover:bg-white/90"
          >
            <Link to="/register?type=provider">
              Register as Provider <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BecomeProviderPage;
