
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="text-white w-8 h-8" />
            <h1 className="text-5xl font-bold text-white">Get Up And Go Kayaking</h1>
          </div>
          <p className="text-2xl text-blue-100 mb-4">Austin's Premier Kayaking Experience</p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Discover the beauty of Austin's waterways with our expert guides and top-quality equipment. 
            From beginners to experienced paddlers, we create unforgettable adventures for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center border border-blue-200">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Expert Guides</h3>
            <p className="text-blue-700">Our experienced team of 14 guides ensures a safe and memorable experience on the water.</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center border border-blue-200">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Prime Locations</h3>
            <p className="text-blue-700">Explore Austin's most beautiful waterways and hidden gems with our guided tours.</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg text-center border border-blue-200">
            <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Memorable Experiences</h3>
            <p className="text-blue-700">Create lasting memories with friends and family on our carefully crafted kayaking adventures.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Had an Amazing Experience?</h2>
          <p className="text-lg text-blue-700 mb-6">
            Show your appreciation to our incredible team members who made your adventure unforgettable!
          </p>
          <Link to="/tips">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700">
              <Heart className="w-5 h-5 mr-2" />
              Leave a Tip for Our Team
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
