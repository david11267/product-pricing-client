import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const Card = ({ children }: Props) => {
  return (
    <div className=" inline-flex contrast-200 bg-card/10  backdrop-filter backdrop-blur-md  rounded-3xl shadow-lg  p-1">
      {children}
    </div>
  );
};
