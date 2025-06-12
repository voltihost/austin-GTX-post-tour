
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
    <div className="relative z-50">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-coral hover:bg-coral/80 text-white py-3 text-sm md:text-base font-bold border border-coral rounded-lg"
      >
        <Phone className="w-4 h-4 mr-2" />
        Tip via Zelle
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 md:p-6 bg-white border-2 border-coral rounded-lg shadow-2xl z-[100] min-w-[300px] md:min-w-[320px]">
          <div className="text-center">
            <p className="text-forest font-bold text-sm md:text-base mb-3">
              Send Zelle to {memberName}:
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
              <div className="bg-coral/10 px-3 py-2 md:px-4 md:py-3 rounded border border-coral text-forest font-mono text-sm md:text-lg flex-1 w-full break-all">
                {zelleNumber}
              </div>
              <Button
                onClick={handleCopy}
                size="sm"
                variant="outline"
                className="border-coral text-coral hover:bg-coral hover:text-white flex-shrink-0 w-full sm:w-auto"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span className="ml-2 sm:hidden">{copied ? 'Copied!' : 'Copy'}</span>
              </Button>
            </div>
            <p className="text-forest text-xs md:text-sm">
              Add note: "Tip for {memberName} - Get Up And Go Kayaking"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZelleDropdown;
