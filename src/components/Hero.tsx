import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
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
          <div className="inline-block mt-[max(8rem,min(12.5rem,20vh))]">
            <p 
              className="text-white font-bold tracking-tight leading-none"
              style={{
                fontSize: 'clamp(2.8rem, 10vw, 9rem)' // 45px to 176px
              }}
            >
              DESIGN TO
            </p>
            <p 
              className="text-white font-bold tracking-tight leading-none"
              style={{
                fontSize: 'clamp(2.8rem, 10vw, 9rem)', // 45px to 176px
                marginTop: 'clamp(0.5rem, 1vw, 0rem)' // Fluid margin that reduces as screen gets larger
              }}
            >
              DEVELOPMENT
            </p>
            <div>
              <p 
                className="text-white tracking-tight"
                style={{
                  fontSize: 'clamp(0.875rem, 1.2vw, 1.25rem)', // 14px to 20px
                  marginTop: 'clamp(1.5rem, 3vw, 3rem)' // Fluid margin
                }}
              >
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