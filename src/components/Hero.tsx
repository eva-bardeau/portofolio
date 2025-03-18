import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/background2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/70" />
      
      {/* Hero Content */}
      <main className="px-[5.5%] max-w-[1440px] mx-auto relative z-10 h-[100svh]">
        <div className="relative h-full">
          <div className="inline-block mt-[12.5rem]">
            <p className="text-white text-[140px] font-bold tracking-tight leading-none">
              DESIGN TO
            </p>
            <p className="text-white text-9xl font-bold tracking-tight leading-none">
              DEVELOPMENT
            </p>
            <div>
              <p className="text-white text-xl tracking-tight mt-12">
                EVA BARDEAU PORTFOLIO SITE
              </p>
            </div>
          </div>
          
        </div>
      </main>
    </section>
  );
};

export default Hero; 