import React from 'react';
import ContactContent from './components/ContactContent';

export const metadata = {
  title: 'Contact | Eva Bardeau Portfolio',
  description: 'Get in touch with Eva Bardeau for design and development projects',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 px-[5.5%]">
      <ContactContent />
    </main>
  );
} 