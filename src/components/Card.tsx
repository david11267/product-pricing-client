import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const Card = ({ children }: Props) => {
  return (
    <div className="inline-flex flex-wrap bg-card/10 backdrop-filter backdrop-blur-xs  rounded-3xl shadow-lg  p-1">
      {children}
    </div>
  );
};
