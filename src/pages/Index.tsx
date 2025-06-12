
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TeamMember from '@/components/TeamMember';
import Footer from '@/components/Footer';
import InteractivePaddles from '@/components/InteractivePaddles';
import ZelleDropdown from '@/components/ZelleDropdown';
import { teamMembersData, TeamMemberData } from '@/data/teamMembers';

const Index = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);

  const handleCashApp = () => {
    if (!selectedMember || !selectedMember.cashApp) return;
    window.open(selectedMember.cashApp, '_blank');
  };

  const handleVenmo = () => {
    if (!selectedMember || !selectedMember.venmo) return;
    window.open(selectedMember.venmo, '_blank');
  };

  const handlePayPal = () => {
    if (!selectedMember || !selectedMember.paypal) return;
    window.open(selectedMember.paypal, '_blank');
  };

  const handleTripAdvisor = () => {
    if (!selectedMember) {
      alert('Please select a team member first!');
      return;
    }
    const tripAdvisorUrl = selectedMember.tripadvisor || 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html';
    window.open(tripAdvisorUrl, '_blank');
  };

  const handleLogoClick = () => {
    window.open('https://getupandgokayaking.com/locations/texas/austin/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-water-deep via-water-primary to-water-light">
      {/* Header with Logo */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/aed684a8-b5d5-4277-80ea-16536387772e.png" 
              alt="Get Up And Go Kayaking Logo" 
              className="h-32 w-auto drop-shadow-xl cursor-pointer hover:scale-105 transition-transform"
              onClick={handleLogoClick}
            />
          </div>
          <p className="text-lg text-sunshine font-medium">
            Thank you for choosing Austin's premier water adventure experience! 🌊
          </p>
        </div>
      </div>

      {/* Interactive Paddles Mascot */}
      <InteractivePaddles />

      {/* Tipping Section */}
      <div className="bg-gradient-to-r from-forest to-water-deep py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="text-sunshine w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-xl md:text-3xl font-bold text-white">We Appreciate You!</h2>
              <Heart className="text-sunshine w-6 h-6 md:w-8 md:h-8" />
            </div>
            <p className="text-base md:text-lg text-sunshine mb-2">Had an Amazing Experience?</p>
            <p className="text-water-light text-sm md:text-base">Show appreciation to our incredible team!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Team Member Selection */}
            <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-water-light">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-forest text-lg md:text-xl">
                  <Users className="w-5 h-5 text-water-primary" />
                  Meet Our Amazing Team
                </CardTitle>
                <CardDescription className="text-forest text-sm md:text-base">
                  Choose the team member you'd like to tip or review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2 max-h-60 md:max-h-80 overflow-y-auto">
                  {teamMembersData.map((member, index) => (
                    <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-sunshine/20 transition-colors">
                      <img 
                        src={member.imageUrl || `https://images.unsplash.com/photo-${1500000000000 + index * 1000000}-woman-wearing-blue-jacket-sitting-on-chair?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                        alt={member.name}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-water-primary flex-shrink-0"
                      />
                      <TeamMember
                        name={member.name}
                        isSelected={selectedMember?.name === member.name}
                        onSelect={() => setSelectedMember(member)}
                      />
                    </div>
                  ))}
                </div>
                {selectedMember && (
                  <div className="mt-3 p-3 bg-sunshine/20 border border-sunshine rounded-lg">
                    <p className="text-forest font-bold text-sm md:text-base">
                      ✅ Selected: {selectedMember.name}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-4">
              <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-water-light">
                <CardHeader className="pb-3">
                  <CardTitle className="text-forest text-lg md:text-xl">Send a Tip 💝</CardTitle>
                  <CardDescription className="text-forest text-sm md:text-base">
                    {selectedMember 
                      ? `Choose payment method for ${selectedMember.name}`
                      : "Select a team member first"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {!selectedMember && (
                    <p className="text-forest text-center py-4 font-medium text-sm">
                      Please select a team member above.
                    </p>
                  )}

                  {selectedMember?.cashApp && (
                    <Button
                      onClick={handleCashApp}
                      className="w-full bg-water-primary hover:bg-water-deep text-white py-3 text-sm md:text-base font-bold border border-water-primary hover:border-water-deep rounded-lg"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Tip via CashApp
                    </Button>
                  )}

                  {selectedMember?.venmo && (
                    <Button
                      onClick={handleVenmo}
                      className="w-full bg-water-primary hover:bg-water-deep text-white py-3 text-sm md:text-base font-bold border border-water-primary hover:border-water-deep rounded-lg"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Tip via Venmo
                    </Button>
                  )}

                  {selectedMember?.paypal && (
                    <Button
                      onClick={handlePayPal}
                      className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white py-3 text-sm md:text-base font-bold border border-purple-accent rounded-lg"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Tip via PayPal
                    </Button>
                  )}

                  {selectedMember?.zelle && (
                    <ZelleDropdown 
                      memberName={selectedMember.name}
                      zelleNumber={selectedMember.zelle}
                    />
                  )}

                  {selectedMember && !selectedMember.cashApp && !selectedMember.venmo && !selectedMember.paypal && !selectedMember.zelle && (
                    <p className="text-forest text-center py-3 font-medium text-sm">
                      No payment options available for {selectedMember.name}.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* TripAdvisor Review */}
              <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-water-light">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-forest text-lg md:text-xl">
                    <Star className="w-5 h-5 text-sunshine" />
                    Share Your Experience
                  </CardTitle>
                  <CardDescription className="text-forest text-sm md:text-base">
                    Help others discover our amazing tours!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleTripAdvisor}
                    className="w-full bg-sunshine hover:bg-sunshine/80 text-forest py-3 text-sm md:text-base font-bold border border-sunshine rounded-lg"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Review us on TripAdvisor ⭐
                  </Button>
                  <p className="text-xs text-forest mt-2 text-center font-medium">
                    Your feedback helps promote sustainability! 🌟
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-6 p-4 md:p-6 bg-white/90 rounded-xl border border-water-light shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-forest mb-3">Thank You for Choosing Get Up And Go Kayaking! 🙏</h3>
            <p className="text-forest text-sm md:text-base">
              Your support helps us continue providing unforgettable water adventures while promoting environmental education and conservation in beautiful Austin! 💙
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
