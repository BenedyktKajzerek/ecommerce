import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div className="space-y-6">
      <h6 className="text-xl font-medium">{title}</h6>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};

export { FooterColumn };
