
import React, { useState } from 'react';
import { Heart, Star, Phone, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TeamMember from '@/components/TeamMember';
import Footer from '@/components/Footer';

const TipPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-white w-8 h-8" />
            <h1 className="text-4xl font-bold text-white">We Appreciate You!</h1>
            <Heart className="text-white w-8 h-8" />
          </div>
          <p className="text-xl text-blue-100 mb-2">Get Up And Go Kayaking - Austin</p>
          <p className="text-blue-200">Show your appreciation to our amazing team members</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Team Member Selection */}
          <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Select Team Member
              </CardTitle>
              <CardDescription className="text-blue-700">
                Choose the team member you'd like to tip
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto">
                {teamMembers.map((member) => (
                  <TeamMember
                    key={member}
                    name={member}
                    isSelected={selectedMember === member}
                    onSelect={() => setSelectedMember(member)}
                  />
                ))}
              </div>
              {selectedMember && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    Selected: {selectedMember}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <div className="space-y-6">
            {/* Payment Buttons */}
            <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Payment Methods</CardTitle>
                <CardDescription className="text-blue-700">
                  Choose your preferred way to send a tip
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleCashApp}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700"
                  disabled={!selectedMember}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Tip via CashApp
                </Button>

                <Button
                  onClick={handleVenmo}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700"
                  disabled={!selectedMember}
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Tip via Venmo
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-blue-900">
                    Phone Number for Zelle
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border-blue-200 focus:border-blue-500"
                  />
                  <Button
                    onClick={handleZelle}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700"
                    disabled={!selectedMember || !phoneNumber}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Tip via Zelle
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TripAdvisor Review */}
            <Card className="shadow-lg bg-white/95 backdrop-blur-sm border border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Star className="w-5 h-5 text-blue-600" />
                  Leave a Review
                </CardTitle>
                <CardDescription className="text-blue-700">
                  Share your experience with others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleTripAdvisor}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold border-2 border-blue-600 hover:border-blue-700"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Review us on TripAdvisor
                </Button>
                <p className="text-sm text-blue-600 mt-2 text-center">
                  Your feedback helps us improve and helps others discover our tours!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 p-6 bg-white/90 rounded-lg border border-blue-200">
          <p className="text-blue-800">
            Thank you for choosing Get Up And Go Kayaking! Your generosity means the world to our team.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TipPage;
