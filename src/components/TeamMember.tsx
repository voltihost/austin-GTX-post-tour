
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
          ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
          : "hover:bg-blue-50 border-blue-200 text-blue-900"
      }`}
      onClick={onSelect}
    >
      <User className="w-4 h-4 mr-3 flex-shrink-0" />
      <span className="font-semibold">{name}</span>
    </Button>
  );
};

export default TeamMember;
