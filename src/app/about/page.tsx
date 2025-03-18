import React from 'react';
import AboutContent from './components/AboutContent';

export const metadata = {
  title: 'About | Eva Bardeau Portfolio',
  description: 'Learn more about Eva Bardeau and her work in design and development',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 px-[5.5%]">
      <AboutContent />
    </main>
  );
} 