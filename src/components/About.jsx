import React from 'react';
import stackImage from '../assets/about/nikhil-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="python-a" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#387EB8"/>
        <stop offset="1" stopColor="#366994"/>
      </linearGradient>
      <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <linearGradient id="python-b" x1="209.474" x2="173.62" y1="1098.811" y2="1149.256" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFE052"/>
        <stop offset="1" stopColor="#FFC331"/>
      </linearGradient>
      <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

const FlaskIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      {/* Premium minimal Flask icon silhouette */}
      <path d="M78.6 30H49.4c-2.2 0-4 1.8-4 4v3.5c0 .7.2 1.4.6 1.9L60 56.6V94c0 2.2 1.8 4 4 4s4-1.8 4-4V56.6l14-17.2c.4-.5.6-1.2.6-1.9V34c0-2.2-1.8-4-4-4z" fill="#FFFFFF" opacity="0.9" />
      <path d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 96c-24.3 0-44-19.7-44-44s19.7-44 44-44 44 19.7 44 44-19.7 44-44 44z" fill="#000000" opacity="0.2" />
      <path d="M64 4c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm0 112c-28.7 0-52-23.3-52-52S35.3 12 64 12s52 23.3 52 52-23.3 52-52 52z" fill="#ffffff" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Flask</span>
  </div>
);

const MysqlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* MySQL dolphin themed silhouette path */}
      <path fill="#00758F" d="M12.3 80.2c5.6 2.3 11.5 3.1 17.5 2.1 2.3-.4 4.5-1.1 6.6-2.1l2.3-1.1c.9-.4 1.7-.9 2.5-1.4.8-.5 1.5-1.1 2.2-1.8 1.4-1.3 2.5-2.9 3.3-4.7.8-1.7 1.2-3.6 1.2-5.5v-1c0-.9-.1-1.7-.2-2.5 0 0-3.3 2.1-5.6 3.1-2.3 1.1-4.7 1.9-7.2 2.5-2.5.6-5.1.9-7.7.9-2.6 0-5.2-.2-7.7-.7-2.5-.5-4.9-1.2-7.2-2.2zM80.2 12.3C72.5 7.1 63.3 4.5 53.9 4.9c-9.4.4-18.3 4.4-25.1 11.1C22 22.8 18 31.7 17.6 41.1c-.4 9.4 2.2 18.6 7.4 26.3l.7.9 1.1 1.4c.4.5.8 1 1.2 1.4.4.4.9.8 1.4 1.2 1 .8 2.1 1.4 3.3 1.8 1.2.4 2.4.6 3.7.6h1.2c.8 0 1.7-.1 2.5-.2 0 0-2.1-3.3-3.1-5.6-1.1-2.3-1.9-4.7-2.5-7.2-.6-2.5-.9-5.1-.9-7.7 0-2.6.2-5.2.7-7.7.5-2.5 1.2-4.9 2.2-7.2C41.6 32 50.8 22.8 62.1 17.6c11.3-5.2 24.1-5.6 35.7-1.1z"/>
      <path fill="#F29111" d="M102.5 48.2c-.4-1.2-1-2.3-1.8-3.3s-1.8-1.8-2.9-2.5c-2.2-1.3-4.7-2-7.3-2s-5.1.7-7.3 2c-1.1.7-2.1 1.5-2.9 2.5s-1.4 2.1-1.8 3.3c-.4 1.2-.6 2.5-.6 3.8s.2 2.6.6 3.8l.2.6.3.6c.4.8.9 1.5 1.5 2.1.6.6 1.3 1.1 2.1 1.5.8.4 1.6.7 2.5.8s1.8.2 2.7.2c1.8 0 3.6-.3 5.3-1s3.2-1.7 4.5-3c1.3-1.3 2.3-2.8 3-4.5.7-1.7 1-3.5 1-5.3v-1.1z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">MySQL</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#f59e0b] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Obulshetty Nikhil Kumar — Python Full Stack Developer & CSE Student" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-amber-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FlaskIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MysqlIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
