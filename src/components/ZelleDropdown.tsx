
import React, { useState } from 'react';
import { Phone, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ZelleDropdownProps {
  memberName: string;
  zelleNumber: string;
}

const ZelleDropdown = ({ memberName, zelleNumber }: ZelleDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(zelleNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy');
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-coral hover:bg-coral/80 text-white py-3 text-sm md:text-base font-bold border border-coral rounded-lg"
      >
        <Phone className="w-4 h-4 mr-2" />
        Tip via Zelle
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white border-2 border-coral rounded-lg shadow-lg z-10">
          <div className="text-center">
            <p className="text-forest font-bold text-sm mb-2">
              Send Zelle to {memberName}:
            </p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-coral/10 px-3 py-2 rounded border border-coral text-forest font-mono text-lg">
                {zelleNumber}
              </span>
              <Button
                onClick={handleCopy}
                size="sm"
                variant="outline"
                className="border-coral text-coral hover:bg-coral hover:text-white"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <p className="text-forest text-xs">
              Add note: "Tip for {memberName} - Get Up And Go Kayaking"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZelleDropdown;
