
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { Heart, Users, DollarSign, Star, ArrowRight, ArrowLeft, Camera } from 'lucide-react';
import { teamMembersData, TeamMemberData } from '@/data/teamMembers';
import ZelleDropdown from '@/components/ZelleDropdown';

const TippingCarousel = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingMember, setPendingMember] = useState<TeamMemberData | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    api.scrollTo(currentStep);
  }, [api, currentStep]);

  const handleMemberClick = (member: TeamMemberData) => {
    setPendingMember(member);
    setShowConfirmation(true);
  };

  const confirmMemberSelection = () => {
    if (pendingMember) {
      setSelectedMember(pendingMember);
      setCurrentStep(1);
      setShowConfirmation(false);
      setPendingMember(null);
    }
  };

  const cancelMemberSelection = () => {
    setShowConfirmation(false);
    setPendingMember(null);
  };

  const handlePaymentMethod = (method: string) => {
    if (!selectedMember) return;
    
    switch (method) {
      case 'cashapp':
        if (selectedMember.cashApp) window.open(selectedMember.cashApp, '_blank');
        break;
      case 'venmo':
        if (selectedMember.venmo) window.open(selectedMember.venmo, '_blank');
        break;
      case 'paypal':
        if (selectedMember.paypal) window.open(selectedMember.paypal, '_blank');
        break;
    }
    setCurrentStep(2);
  };

  const handleTripAdvisor = () => {
    const tripAdvisorUrl = selectedMember?.tripadvisor || 'https://www.tripadvisor.com/Attraction_Review-g30196-d27967059-Reviews-Get_Up_and_Go_Kayaking_Austin_Texas_ATX-Austin_Texas.html';
    window.open(tripAdvisorUrl, '_blank');
  };

  const handlePhotoUpload = () => {
    window.location.href = '/photo-upload';
  };

  const resetFlow = () => {
    setSelectedMember(null);
    setCurrentStep(0);
    setShowConfirmation(false);
    setPendingMember(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative">
      {/* Confirmation Dialog Overlay */}
      {showConfirmation && pendingMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
            <div className="text-center">
              <img 
                src={pendingMember.imageUrl || '/lovable-uploads/6fffa3da-e4e6-4a3f-b6e3-954ea03b8252.png'} 
                alt={pendingMember.name} 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-4 border-4 border-water-primary" 
              />
              <h3 className="text-xl md:text-2xl font-bold text-forest mb-2">Tip {pendingMember.name}?</h3>
              <p className="text-forest/70 mb-6 text-sm md:text-base">Continue to select your tipping method</p>
              <div className="flex gap-3 md:gap-4">
                <Button 
                  onClick={cancelMemberSelection} 
                  variant="outline" 
                  className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 py-2 md:py-3"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={confirmMemberSelection} 
                  className="flex-1 bg-water-primary hover:bg-water-deep text-white py-2 md:py-3 font-semibold"
                >
                  Yes, Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Carousel className="w-full relative" setApi={setApi}>
        <CarouselContent>
          {/* Step 1: Team Member Selection */}
          <CarouselItem>
            <div className="min-h-[600px] flex flex-col">
              <Card className="shadow-xl bg-white border-0 flex-1">
                <CardHeader className="text-center pb-4 md:pb-6 px-4 md:px-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Heart className="text-water-primary w-6 h-6 md:w-8 md:h-8" />
                    <CardTitle className="text-xl md:text-2xl text-forest">Choose Your Guide</CardTitle>
                  </div>
                  <CardDescription className="text-base md:text-lg text-forest/70 px-2">
                    Select the team member who made your experience amazing
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 md:px-6 flex-1 flex items-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 w-full">
                    {teamMembersData.map(member => (
                      <button key={member.name} onClick={() => handleMemberClick(member)} className="group p-3 md:p-4 rounded-xl border-2 border-gray-100 hover:border-water-primary hover:bg-water-primary/5 transition-all duration-200 text-center cursor-pointer active:scale-95">
                        <img src={member.imageUrl || '/lovable-uploads/6fffa3da-e4e6-4a3f-b6e3-954ea03b8252.png'} alt={member.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mx-auto mb-2 md:mb-3 border-2 border-water-light group-hover:border-water-primary transition-colors" />
                        <p className="font-semibold text-forest group-hover:text-water-primary transition-colors text-xs md:text-sm leading-tight">
                          {member.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Step 2: Payment Method Selection */}
          <CarouselItem>
            <div className="min-h-[600px] flex flex-col">
              <Card className="shadow-xl bg-white border-0 flex-1">
                <CardHeader className="text-center pb-4 md:pb-6 px-4 md:px-6">
                  <button onClick={resetFlow} className="flex items-center gap-2 text-water-primary hover:text-water-deep mb-3 md:mb-4 mx-auto text-sm md:text-base">
                    <ArrowLeft className="w-4 h-4" />
                    Back to team selection
                  </button>
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <DollarSign className="text-water-primary w-6 h-6 md:w-8 md:h-8" />
                    <CardTitle className="text-xl md:text-2xl text-forest">Send a Tip</CardTitle>
                  </div>
                  <CardDescription className="text-base md:text-lg text-forest/70 px-2">
                    {selectedMember ? `Choose how to tip ${selectedMember.name}` : "Select a payment method"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-4 md:px-6 flex-1 flex flex-col justify-center">
                  {selectedMember && (
                    <div className="text-center mb-4 md:mb-6 p-4 bg-water-primary/10 rounded-xl">
                      <img src={selectedMember.imageUrl || '/lovable-uploads/6fffa3da-e4e6-4a3f-b6e3-954ea03b8252.png'} alt={selectedMember.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto mb-3 border-2 border-water-primary" />
                      <p className="font-bold text-forest text-lg">Tipping {selectedMember.name}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    {selectedMember?.cashApp && (
                      <Button onClick={() => handlePaymentMethod('cashapp')} className="w-full bg-water-primary hover:bg-water-deep text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                        Tip via CashApp
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto" />
                      </Button>
                    )}

                    {selectedMember?.venmo && (
                      <Button onClick={() => handlePaymentMethod('venmo')} className="w-full bg-water-primary hover:bg-water-deep text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                        Tip via Venmo
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto" />
                      </Button>
                    )}

                    {selectedMember?.paypal && (
                      <Button onClick={() => handlePaymentMethod('paypal')} className="w-full bg-purple-accent hover:bg-purple-accent/80 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <DollarSign className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                        Tip via PayPal
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto" />
                      </Button>
                    )}

                    {selectedMember?.zelle && (
                      <div className="w-full">
                        <ZelleDropdown memberName={selectedMember.name} zelleNumber={selectedMember.zelle} />
                      </div>
                    )}

                    {selectedMember && !selectedMember.cashApp && !selectedMember.venmo && !selectedMember.paypal && !selectedMember.zelle && (
                      <div className="text-center py-6 md:py-8">
                        <p className="text-forest/70 mb-4 text-sm md:text-base">No payment options available for {selectedMember.name}</p>
                        <Button onClick={() => setCurrentStep(2)} variant="outline" className="border-water-primary text-water-primary hover:bg-water-primary hover:text-white py-2 md:py-3">
                          Continue to Reviews
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Step 3: Member Profile & Confirmation */}
          <CarouselItem>
            <div className="min-h-[600px] flex flex-col">
              <Card className="shadow-xl bg-white border-0 flex-1">
                <CardHeader className="text-center pb-4 md:pb-6 px-4 md:px-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Heart className="text-sunshine w-6 h-6 md:w-8 md:h-8" />
                    <CardTitle className="text-xl md:text-2xl text-forest">Thank You!</CardTitle>
                  </div>
                  <CardDescription className="text-base md:text-lg text-forest/70 px-2">
                    Your tip helps support our amazing team
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center px-4 md:px-6 flex-1 flex flex-col justify-center">
                  {selectedMember && (
                    <div className="mb-6 md:mb-8">
                      <img src={selectedMember.imageUrl || '/lovable-uploads/6fffa3da-e4e6-4a3f-b6e3-954ea03b8252.png'} alt={selectedMember.name} className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 border-4 border-water-primary shadow-lg" />
                      <h3 className="text-xl md:text-2xl font-bold text-forest mb-2">{selectedMember.name}</h3>
                      <p className="text-forest/70 text-base md:text-lg">Austin's Premier Kayaking Guide</p>
                    </div>
                  )}
                  
                  <div className="bg-sunshine/20 p-4 md:p-6 rounded-xl mb-4 md:mb-6">
                    <p className="text-forest font-semibold text-base md:text-lg">
                      🙏 Your generosity makes a difference!
                    </p>
                    <p className="text-forest/70 mt-2 text-sm md:text-base">
                      Tips help our guides continue providing exceptional water adventures while promoting environmental conservation.
                    </p>
                  </div>

                  <Button onClick={() => setCurrentStep(3)} className="w-full bg-water-primary hover:bg-water-deep text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Continue to Share Your Experience
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-3" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Step 4: Reviews & Photo Upload */}
          <CarouselItem>
            <div className="min-h-[600px] flex flex-col">
              <Card className="shadow-xl bg-white border-0 flex-1">
                <CardHeader className="text-center pb-4 md:pb-6 px-4 md:px-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Star className="text-sunshine w-6 h-6 md:w-8 md:h-8" />
                    <CardTitle className="text-xl md:text-2xl text-forest">Share Your Adventure</CardTitle>
                  </div>
                  <CardDescription className="text-base md:text-lg text-forest/70 px-2">
                    Help others discover Austin's best kayaking experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 px-4 md:px-6 flex-1 flex flex-col justify-center">
                  <Button onClick={handleTripAdvisor} className="w-full bg-sunshine hover:bg-sunshine/80 text-forest py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <Star className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                    Review us on TripAdvisor
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto" />
                  </Button>
                  
                  <Button onClick={handlePhotoUpload} className="w-full bg-coral hover:bg-coral/80 text-white py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <Camera className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                    Upload Photo for Instagram
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-auto" />
                  </Button>

                  <div className="bg-water-primary/10 p-4 md:p-6 rounded-xl text-center">
                    <p className="text-forest font-medium mb-2 text-sm md:text-base">
                      🌟 Your feedback promotes sustainability!
                    </p>
                    <p className="text-forest/70 text-xs md:text-sm">
                      Reviews help us continue our environmental education mission and attract eco-conscious adventurers to Austin's waterways.
                    </p>
                  </div>

                  <Button onClick={resetFlow} variant="outline" className="w-full border-water-primary text-water-primary hover:bg-water-primary hover:text-white py-2 md:py-3 rounded-xl">
                    Tip Another Team Member
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        {/* Navigation arrows - fixed positioning and visibility */}
        <CarouselPrevious className="-left-10 bg-zinc-800 hover:bg-zinc-700 text-slate-100 border-0 shadow-lg z-10" />
        <CarouselNext className="-right-10 bg-zinc-800 hover:bg-zinc-700 text-slate-100 border-0 shadow-lg z-10" />
        
        {/* Step indicators for mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((step) => (
              <div 
                key={step} 
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentStep === step ? 'bg-water-primary' : 'bg-gray-300'
                }`} 
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default TippingCarousel;
