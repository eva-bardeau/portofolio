import React from 'react';

const WorkContent = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[#FDFDFD] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        WORK
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project cards will go here */}
        <div className="aspect-video bg-neutral-900 rounded-lg"></div>
        <div className="aspect-video bg-neutral-900 rounded-lg"></div>
        <div className="aspect-video bg-neutral-900 rounded-lg"></div>
      </div>
    </div>
  );
};

export default WorkContent; 