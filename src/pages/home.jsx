import React from 'react';
import bgimg from '../images/bgimg.jpg';

export default function Home() {

  return (
    <div
      className={`bg-cover bg-no-repeat h-screen`}
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="flex items-center justify-center h-full">
        <h2 className="text-2xl font-bold">Hello</h2>
      </div>
    </div>
  );
}