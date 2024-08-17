import { LucideIcon } from "lucide-react";
import React from "react";

interface IconCardProps {
  IconComponent: LucideIcon;
  description: string;
};

const IconCard: React.FC<IconCardProps> = ({ IconComponent, description }) => {
  return (
    <div className="flex flex-col items-center text-center font-medium">
      <IconComponent className="size-20 lg:size-24" />
      <div className="mt-2">{ description }</div>
    </div>
  );
};

export { IconCard };
