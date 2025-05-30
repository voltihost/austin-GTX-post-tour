
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Users, Star, Phone, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TeamMember from '@/components/TeamMember';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedMember, setSelectedMember] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const teamMembers = [
    'Alex Johnson', 'Sarah Miller', 'Mike Davis', 'Emma Wilson',
    'Chris Brown', 'Jessica Taylor', 'Ryan Martinez', 'Ashley Garcia',
    'Kevin Rodriguez', 'Amanda Lee', 'Tyler Thompson', 'Megan Clark',
    'Jordan Lewis', 'Samantha White'
  ];

  const handleCashApp = () => {
    if (!selectedMember) {
      alert('Please select a team member first!');
      return;
    }
    alert(`To tip ${selectedMember} via CashApp:\n1. Open your CashApp\n2. Search for our team member\n3. Send your tip with a note mentioning "Get Up And Go Kayaking tip"`);
  };

  const handleVenmo = () => {
    if (!selectedMember) {
      alert('Please select a team member first!');
      return;
    }
    const venmoUrl = `venmo://paycharge?txn=pay&note=Tip for ${selectedMember} - Get Up And Go Kayaking`;
    window.open(venmoUrl, '_blank');
  };

  const handleZelle = () => {
    if (!selectedMember) {
      alert('Please select a team member first!');
      return;
    }
    if (!phoneNumber) {
      alert('Please enter a phone number for Zelle!');
      return;
    }
    alert(`To tip ${selectedMember} via Zelle:\n1. Open your banking app\n2. Go to Zelle\n3. Send to: ${phoneNumber}\n4. Add note: "Tip for ${selectedMember} - Get Up And Go Kayaking"`);
  };

  const handleTripAdvisor = () => {
    window.open('https://www.tripadvisor.com/Attraction_Review-g30196-d23509394-Reviews-Get_Up_and_Go_Kayaking-Austin_Texas.html', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-blue-300">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Get Up And Go Kayaking Logo" 
              className="w-16 h-16 rounded-full shadow-lg border-4 border-white"
            />
            <div>
              <h1 className="text-5xl font-bold text-white">Get Up And Go Kayaking</h1>
              <p className="text-xl text-blue-100 mt-2">Austin's Premier Water Adventure</p>
            </div>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            🌊 Dive into Austin's most breathtaking waterways with our expert team! Whether you're a first-time paddler 
            or a seasoned kayaker, we'll guide you through unforgettable adventures on Lady Bird Lake, the Colorado River, 
            and hidden gems only locals know about. 🚣‍♂️
          </p>
        </div>

        {/* Welcome Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl text-center border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-blue-900">14 Expert Guides</h3>
            <p className="text-blue-700 text-lg">Our passionate team of certified guides brings years of experience and infectious enthusiasm to every adventure!</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl text-center border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Secret Spots</h3>
            <p className="text-blue-700 text-lg">Discover Austin's hidden waterway treasures and Instagram-worthy locations that only we know about!</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl text-center border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
            <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Memories for Life</h3>
            <p className="text-blue-700 text-lg">Create magical moments with friends, family, or solo adventures that you'll treasure forever!</p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-blue-200 mb-16">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-8">Why Paddle With Us? 🎯</h2>
          <div className="grid md:grid-cols-2 gap-8 text-blue-800">
            <div>
              <h4 className="font-bold text-xl mb-3">🏆 Award-Winning Service</h4>
              <p className="mb-4">Consistently rated #1 kayaking experience in Austin</p>
              
              <h4 className="font-bold text-xl mb-3">🎯 All Skill Levels Welcome</h4>
              <p className="mb-4">From nervous beginners to expert paddlers - we've got you covered</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">📸 Photo Opportunities</h4>
              <p className="mb-4">Capture stunning shots of Austin's skyline and wildlife</p>
              
              <h4 className="font-bold text-xl mb-3">💯 Safety First</h4>
              <p>Top-quality equipment and comprehensive safety briefings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tipping Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="text-white w-10 h-10" />
              <h2 className="text-4xl font-bold text-white">We Appreciate You!</h2>
              <Heart className="text-white w-10 h-10" />
            </div>
            <p className="text-xl text-blue-100 mb-4">Had an Amazing Experience?</p>
            <p className="text-blue-200 text-lg">Show your appreciation to our incredible team members who made your adventure unforgettable!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Team Member Selection with Pictures */}
            <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900 text-2xl">
                  <Users className="w-6 h-6 text-blue-600" />
                  Meet Our Amazing Team
                </CardTitle>
                <CardDescription className="text-blue-700 text-lg">
                  Choose the team member you'd like to tip or review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                  {teamMembers.map((member, index) => (
                    <div key={member} className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + index * 1000000}-woman-wearing-blue-jacket-sitting-on-chair?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                        alt={member}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-300"
                      />
                      <TeamMember
                        name={member}
                        isSelected={selectedMember === member}
                        onSelect={() => setSelectedMember(member)}
                      />
                    </div>
                  ))}
                </div>
                {selectedMember && (
                  <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                    <p className="text-blue-800 font-bold text-lg">
                      ✅ Selected: {selectedMember}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-6">
              <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-2xl">Send a Tip 💝</CardTitle>
                  <CardDescription className="text-blue-700 text-lg">
                    Choose your preferred payment method
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleCashApp}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold border-2 border-blue-600 hover:border-blue-700 rounded-lg"
                    disabled={!selectedMember}
                  >
                    <DollarSign className="w-6 h-6 mr-3" />
                    Tip via CashApp
                  </Button>

                  <Button
                    onClick={handleVenmo}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold border-2 border-blue-600 hover:border-blue-700 rounded-lg"
                    disabled={!selectedMember}
                  >
                    <DollarSign className="w-6 h-6 mr-3" />
                    Tip via Venmo
                  </Button>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-bold text-blue-900">
                      Phone Number for Zelle
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full border-2 border-blue-200 focus:border-blue-500 rounded-lg"
                    />
                    <Button
                      onClick={handleZelle}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold border-2 border-blue-600 hover:border-blue-700 rounded-lg"
                      disabled={!selectedMember || !phoneNumber}
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Tip via Zelle
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* TripAdvisor Review */}
              <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-900 text-2xl">
                    <Star className="w-6 h-6 text-blue-600" />
                    Share Your Experience
                  </CardTitle>
                  <CardDescription className="text-blue-700 text-lg">
                    Help others discover our amazing tours!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleTripAdvisor}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-bold border-2 border-blue-600 hover:border-blue-700 rounded-lg"
                  >
                    <Star className="w-6 h-6 mr-3" />
                    Review us on TripAdvisor ⭐
                  </Button>
                  <p className="text-sm text-blue-600 mt-3 text-center font-medium">
                    Your feedback helps us improve and helps others discover the magic! 🌟
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-12 p-8 bg-white/90 rounded-xl border-2 border-blue-200 shadow-xl">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Thank You for Choosing Get Up And Go Kayaking! 🙏</h3>
            <p className="text-blue-700 text-lg">
              Your generosity and support mean the world to our passionate team. Every tip and review helps us continue 
              providing unforgettable water adventures in beautiful Austin! 💙
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
