import React from 'react';

interface Props {
  text: string;
}
export default function NavBtn({ text }: Props) {
  return (
    <button className=" p-2 rounded-full  transition-all hover:font-bold  ">
      {text}
    </button>
  );
}
