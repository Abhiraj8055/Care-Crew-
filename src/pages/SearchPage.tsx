
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import Layout from '@/components/Layout';
import ProviderCard from '@/components/ProviderCard';
import { mockProviders } from '@/data/mockData';
import { Provider } from '@/types';
import { Search, Filter, ChevronDown } from 'lucide-react';

type SearchFormValues = {
  location: string;
  serviceType: string[];
  minSalary: number;
  maxSalary: number;
  minExperience: number;
  availability: string;
  sortBy: string;
};

const SearchPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchResults, setSearchResults] = useState<Provider[]>(mockProviders);
  const [loading, setLoading] = useState(false);

  const form = useForm<SearchFormValues>({
    defaultValues: {
      location: '',
      serviceType: [],
      minSalary: 10000,
      maxSalary: 50000,
      minExperience: 0,
      availability: 'any',
      sortBy: 'rating',
    },
  });

  const serviceTypes = [
    { id: 'cooking', label: 'Cooking' },
    { id: 'cleaning', label: 'Cleaning' },
    { id: 'childcare', label: 'Childcare' },
    { id: 'elderlycare', label: 'Elderly Care' },
    { id: 'gardening', label: 'Gardening' },
    { id: 'driving', label: 'Driving' },
  ];

  const onSubmit = (data: SearchFormValues) => {
    setLoading(true);
    console.log('Search form submitted:', data);
    
    // Simulate API call with short delay
    setTimeout(() => {
      // Filter providers based on criteria (in a real app this would be a backend search)
      let filtered = [...mockProviders];
      
      // Filter by location if provided
      if (data.location) {
        filtered = filtered.filter(provider => 
          provider.location.toLowerCase().includes(data.location.toLowerCase())
        );
      }
      
      // Filter by service types if any selected
      if (data.serviceType.length > 0) {
        filtered = filtered.filter(provider => 
          data.serviceType.some(service => provider.skills.includes(service))
        );
      }
      
      // Filter by salary range
      filtered = filtered.filter(provider => 
        provider.salaryExpectation >= data.minSalary && 
        provider.salaryExpectation <= data.maxSalary
      );
      
      // Filter by experience
      if (data.minExperience > 0) {
        filtered = filtered.filter(provider => provider.experience >= data.minExperience);
      }
      
      // Filter by availability
      if (data.availability !== 'any') {
        filtered = filtered.filter(provider => provider.availability === data.availability);
      }
      
      // Sort results
      if (data.sortBy === 'rating') {
        filtered.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
      } else if (data.sortBy === 'experience') {
        filtered.sort((a, b) => b.experience - a.experience);
      } else if (data.sortBy === 'salary_low') {
        filtered.sort((a, b) => a.salaryExpectation - b.salaryExpectation);
      } else if (data.sortBy === 'salary_high') {
        filtered.sort((a, b) => b.salaryExpectation - a.salaryExpectation);
      }
      
      setSearchResults(filtered);
      setLoading(false);
    }, 600);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Find Domestic Help</h1>
          <p className="text-gray-600">
            Search for qualified maids and cooks in your area based on your requirements
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter city or area" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="w-full md:w-48">
                    <FormField
                      control={form.control}
                      name="sortBy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sort By</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sort by" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="rating">Top Rated</SelectItem>
                              <SelectItem value="experience">Experience</SelectItem>
                              <SelectItem value="salary_low">Salary: Low to High</SelectItem>
                              <SelectItem value="salary_high">Salary: High to Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="md:self-end">
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? 'Searching...' : 'Search'}
                      <Search className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t pt-4 mt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-brand-600"
                  >
                    <Filter className="mr-2 h-4 w-4" />
                    Advanced Filters
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </Button>
                </div>

                {showFilters && (
                  <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <FormLabel className="block mb-3">Service Type</FormLabel>
                      <div className="space-y-2">
                        {serviceTypes.map((type) => (
                          <div key={type.id} className="flex items-center">
                            <Checkbox
                              id={type.id}
                              checked={form.watch('serviceType').includes(type.id)}
                              onCheckedChange={(checked) => {
                                const currentValues = form.watch('serviceType');
                                const newValues = checked
                                  ? [...currentValues, type.id]
                                  : currentValues.filter((value) => value !== type.id);
                                form.setValue('serviceType', newValues);
                              }}
                            />
                            <label
                              htmlFor={type.id}
                              className="ml-2 text-sm font-medium text-gray-700"
                            >
                              {type.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <FormField
                        control={form.control}
                        name="availability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Availability</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select availability" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="any">Any</SelectItem>
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="part-time">Part-time</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="minExperience"
                        render={({ field }) => (
                          <FormItem className="mt-4">
                            <FormLabel>Minimum Experience (years)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                min="0"
                                max="20"
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <FormItem className="space-y-4">
                        <FormLabel>Salary Range (₹)</FormLabel>
                        <div className="flex items-center justify-between">
                          <Input
                            type="number"
                            value={form.watch('minSalary')}
                            onChange={(e) => 
                              form.setValue('minSalary', parseInt(e.target.value) || 0)
                            }
                            className="w-20"
                          />
                          <span className="mx-2">to</span>
                          <Input
                            type="number"
                            value={form.watch('maxSalary')}
                            onChange={(e) => 
                              form.setValue('maxSalary', parseInt(e.target.value) || 0)
                            }
                            className="w-20"
                          />
                        </div>
                        <Slider
                          min={5000}
                          max={100000}
                          step={1000}
                          value={[form.watch('minSalary'), form.watch('maxSalary')]}
                          onValueChange={(values) => {
                            form.setValue('minSalary', values[0]);
                            form.setValue('maxSalary', values[1]);
                          }}
                          className="mt-6"
                        />
                      </FormItem>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {loading ? 'Searching...' : `${searchResults.length} providers found`}
          </h2>
        </div>

        <div className="space-y-4">
          {searchResults.length > 0 ? (
            searchResults.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your filters or search for a different location
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
