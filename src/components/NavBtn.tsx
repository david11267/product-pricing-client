import React from 'react';

interface Props {
  text: string;
}
export default function NavBtn({ text }: Props) {
  return (
    <button className=" p-2 rounded-full underline-offset-8 decoration-accent  hover:underline">
      {text}
    </button>
  );
}
