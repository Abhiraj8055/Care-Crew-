
import React from 'react';
import Layout from '@/components/Layout';
import { mockProviders } from '@/data/mockData';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProviders from '@/components/home/FeaturedProviders';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction';

const HomePage = () => {
  const featuredProviders = mockProviders.slice(0, 3);

  return (
    <Layout>
      <HeroSection />
      <FeaturedCategories />
      <FeaturedProviders providers={featuredProviders} />
      <WhyChooseUs />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
