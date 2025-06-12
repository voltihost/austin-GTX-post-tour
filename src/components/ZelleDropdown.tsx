
import React, { useState } from 'react';
import { Phone, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ZelleDropdownProps {
  memberName: string;
  zelleNumber: string;
}

const ZelleDropdown = ({ memberName, zelleNumber }: ZelleDropdownProps) => {
  const [copied, setCopied] = useState(false);

  const handleZelleClick = async () => {
    try {
      await navigator.clipboard.writeText(zelleNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      
      // Show success message
      console.log(`Copied ${memberName}'s Zelle number: ${zelleNumber}`);
    } catch (err) {
      console.log('Failed to copy to clipboard');
      // Fallback - show the number in an alert
      alert(`${memberName}'s Zelle number: ${zelleNumber}`);
    }
  };

  return (
    <Button
      onClick={handleZelleClick}
      className={`w-full py-3 text-sm md:text-base font-bold border rounded-lg transition-all duration-200 ${
        copied 
          ? 'bg-green-500 hover:bg-green-600 text-white border-green-500' 
          : 'bg-coral hover:bg-coral/80 text-white border-coral'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Copied {zelleNumber}!
        </>
      ) : (
        <>
          <Phone className="w-4 h-4 mr-2" />
          Tip via Zelle: {zelleNumber}
        </>
      )}
    </Button>
  );
};

export default ZelleDropdown;
