
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
      className={`w-full justify-start text-left p-4 h-auto ${
        isSelected 
          ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
          : "hover:bg-blue-50 border-gray-200"
      }`}
      onClick={onSelect}
    >
      <User className="w-4 h-4 mr-3 flex-shrink-0" />
      <span className="font-medium">{name}</span>
    </Button>
  );
};

export default TeamMember;
