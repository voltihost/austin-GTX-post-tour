
import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMemberProps {
  name: string;
  isSelected: boolean;
  onSelect: () => void;
}

const TeamMember = ({ name, isSelected, onSelect }: TeamMemberProps) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className={`flex-1 justify-start text-left p-3 h-auto ${
        isSelected 
          ? "bg-water-primary hover:bg-water-deep text-white border-water-primary" 
          : "hover:bg-sunshine/20 border-water-light text-forest"
      }`}
      onClick={onSelect}
    >
      <User className="w-4 h-4 mr-3 flex-shrink-0" />
      <span className="font-semibold">{name}</span>
    </Button>
  );
};

export default TeamMember;
