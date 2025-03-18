import React from 'react';
import WorkContent from './components/WorkContent';

export const metadata = {
  title: 'Work | Eva Bardeau Portfolio',
  description: 'Showcase of my design and development work',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 px-[5.5%]">
      <WorkContent />
    </main>
  );
} 