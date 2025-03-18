import React from 'react';

const ContactContent = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-[#FDFDFD] text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        CONTACT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-[#FDFDFD] text-lg leading-relaxed">
            Let's work together to bring your ideas to life. Feel free to reach out for collaborations, questions, or just to say hello.
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:contact@evabardeau.com" 
              className="block text-[#FDFDFD] text-lg hover:text-gray-300 transition-colors"
            >
              contact@evabardeau.com
            </a>
            <div className="flex gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFDFD] hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FDFDFD] hover:text-gray-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#FDFDFD] mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full bg-neutral-900 text-[#FDFDFD] rounded-lg p-3 border border-neutral-800 focus:outline-none focus:border-neutral-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#FDFDFD] mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-neutral-900 text-[#FDFDFD] rounded-lg p-3 border border-neutral-800 focus:outline-none focus:border-neutral-700"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#FDFDFD] mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full bg-neutral-900 text-[#FDFDFD] rounded-lg p-3 border border-neutral-800 focus:outline-none focus:border-neutral-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-neutral-800 text-[#FDFDFD] px-8 py-3 rounded-lg hover:bg-neutral-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent; 