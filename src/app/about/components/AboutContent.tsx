import React from 'react';

const AboutContent = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[#FDFDFD] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        ABOUT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-[#FDFDFD] text-lg leading-relaxed">
            I'm a designer and developer passionate about creating beautiful, functional digital experiences. With a focus on the intersection of design and technology, I bring ideas to life through clean code and thoughtful design.
          </p>
          <p className="text-[#FDFDFD] text-lg leading-relaxed">
            My approach combines aesthetic sensibility with technical expertise, ensuring that every project is both visually striking and technically sound.
          </p>
        </div>
        <div className="aspect-square bg-neutral-900 rounded-lg">
          {/* Profile image placeholder */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent; 