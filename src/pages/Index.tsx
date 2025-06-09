
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star, Phone, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TeamMember from '@/components/TeamMember';
import Footer from '@/components/Footer';
import InteractivePaddles from '@/components/InteractivePaddles';
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

  const handleZelle = () => {
    if (!selectedMember || !selectedMember.zelle) return;
    alert(`To tip ${selectedMember.name} via Zelle:\n1. Open your banking app\n2. Go to Zelle\n3. Send to: ${selectedMember.zelle}\n4. Add note: "Tip for ${selectedMember.name} - Get Up And Go Kayaking"`);
  };

  const handleTripAdvisor = () => {
    if (!selectedMember) {
      alert('Please select a team member first!');
      return;
    }
    const tripAdvisorUrl = selectedMember.tripadvisor || 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html';
    window.open(tripAdvisorUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-water-deep via-water-primary to-water-light">
      {/* Header with Logo */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-6 mb-4">
            <img 
              src="/lovable-uploads/737544bf-4d87-4a71-b68b-560db61ebffd.png" 
              alt="Get Up And Go Kayaking Primary Logo" 
              className="h-24 w-auto"
            />
            <img 
              src="/lovable-uploads/737544bf-4d87-4a71-b68b-560db61ebffd.png" 
              alt="Get Up And Go Kayaking Alternate Logo" 
              className="h-20 w-auto"
            />
          </div>
          <p className="text-xl text-sunshine font-medium">
            Thank you for choosing Austin's premier water adventure experience! 🌊
          </p>
        </div>
      </div>

      {/* Interactive Paddles Mascot */}
      <InteractivePaddles />

      {/* Tipping Section */}
      <div className="bg-gradient-to-r from-forest to-water-deep py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="text-sunshine w-10 h-10" />
              <h2 className="text-4xl font-bold text-white">We Appreciate You!</h2>
              <Heart className="text-sunshine w-10 h-10" />
            </div>
            <p className="text-xl text-sunshine mb-4">Had an Amazing Experience?</p>
            <p className="text-water-light text-lg">Show your appreciation to our incredible team members who made your adventure unforgettable!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Team Member Selection with Pictures */}
            <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-water-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-forest text-2xl">
                  <Users className="w-6 h-6 text-water-primary" />
                  Meet Our Amazing Team
                </CardTitle>
                <CardDescription className="text-forest text-lg">
                  Choose the team member you'd like to tip or review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                  {teamMembersData.map((member, index) => (
                    <div key={member.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-sunshine/20 transition-colors">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + index * 1000000}-woman-wearing-blue-jacket-sitting-on-chair?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-water-primary"
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
                  <div className="mt-6 p-4 bg-sunshine/20 border-2 border-sunshine rounded-lg">
                    <p className="text-forest font-bold text-lg">
                      ✅ Selected: {selectedMember.name}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-6">
              <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-water-light">
                <CardHeader>
                  <CardTitle className="text-forest text-2xl">Send a Tip 💝</CardTitle>
                  <CardDescription className="text-forest text-lg">
                    {selectedMember 
                      ? `Choose your preferred payment method for ${selectedMember.name}`
                      : "Select a team member first to see available payment options"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!selectedMember && (
                    <p className="text-forest text-center py-8 font-medium">
                      Please select a team member above to see their available payment options.
                    </p>
                  )}

                  {selectedMember?.cashApp && (
                    <Button
                      onClick={handleCashApp}
                      className="w-full bg-water-primary hover:bg-water-deep text-white py-6 text-lg font-bold border-2 border-water-primary hover:border-water-deep rounded-lg"
                    >
                      <DollarSign className="w-6 h-6 mr-3" />
                      Tip via CashApp
                    </Button>
                  )}

                  {selectedMember?.venmo && (
                    <Button
                      onClick={handleVenmo}
                      className="w-full bg-water-primary hover:bg-water-deep text-white py-6 text-lg font-bold border-2 border-water-primary hover:border-water-deep rounded-lg"
                    >
                      <DollarSign className="w-6 h-6 mr-3" />
                      Tip via Venmo
                    </Button>
                  )}

                  {selectedMember?.paypal && (
                    <Button
                      onClick={handlePayPal}
                      className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white py-6 text-lg font-bold border-2 border-purple-accent rounded-lg"
                    >
                      <DollarSign className="w-6 h-6 mr-3" />
                      Tip via PayPal
                    </Button>
                  )}

                  {selectedMember?.zelle && (
                    <Button
                      onClick={handleZelle}
                      className="w-full bg-coral hover:bg-coral/80 text-white py-6 text-lg font-bold border-2 border-coral rounded-lg"
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Tip via Zelle
                    </Button>
                  )}

                  {selectedMember && !selectedMember.cashApp && !selectedMember.venmo && !selectedMember.paypal && !selectedMember.zelle && (
                    <p className="text-forest text-center py-4 font-medium">
                      No payment options are currently available for {selectedMember.name}.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* TripAdvisor Review */}
              <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-2 border-water-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-forest text-2xl">
                    <Star className="w-6 h-6 text-sunshine" />
                    Share Your Experience
                  </CardTitle>
                  <CardDescription className="text-forest text-lg">
                    Help others discover our amazing tours through environmental education and outdoor adventure!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleTripAdvisor}
                    className="w-full bg-sunshine hover:bg-sunshine/80 text-forest py-6 text-lg font-bold border-2 border-sunshine rounded-lg"
                  >
                    <Star className="w-6 h-6 mr-3" />
                    Review us on TripAdvisor ⭐
                  </Button>
                  <p className="text-sm text-forest mt-3 text-center font-medium">
                    Your feedback helps us continue promoting sustainability and conservation efforts! 🌟
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="text-center mt-12 p-8 bg-white/90 rounded-xl border-2 border-water-light shadow-xl">
            <h3 className="text-2xl font-bold text-forest mb-4">Thank You for Choosing Get Up And Go Kayaking! 🙏</h3>
            <p className="text-forest text-lg">
              Your generosity and support mean the world to our passionate team. Every tip and review helps us continue 
              providing unforgettable water adventures while promoting environmental education and conservation in beautiful Austin! 💙
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
