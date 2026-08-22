import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const scholars = [
  {
    name: 'Shaykh Ahmad Sirhindi',
    title: 'Chief Scholar of Jurisprudence',
    description: 'Renowned for his mastery of classical texts and his dedication to contextualizing jurisprudence for the modern era. He leads the advanced Fiqh seminar.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Dr. Aisha Al-Farsi',
    title: 'Director of Islamic History',
    description: 'A distinguished historian specializing in the Golden Age of Islam. Dr. Al-Farsi has published extensively on the contributions of early scholars to science and philosophy.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Imam Malik Raza',
    title: 'Head of Qur’anic Studies',
    description: 'An expert in Tafsir (exegesis) and Qira’at (recitation). Imam Raza has spent decades teaching the nuanced linguistic miracles of the Qur’an to students worldwide.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Ustadh Tariq Jameel',
    title: 'Lecturer in Arabic Linguistics',
    description: 'Dedicated to preserving the classical Arabic language. Ustadh Tariq’s intensive courses empower students to access historical texts in their original form.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
  }
];

export function Scholars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  return (
    <section id="scholars" ref={containerRef} className="py-24 md:py-32 bg-navy text-parchment overflow-hidden px-4 md:px-8 lg:px-12 relative border-t border-gold/10">
      <div className="absolute inset-0 bg-pattern-islamic-light opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-4 justify-center">
            <span className="w-8 h-px bg-gold/50"></span>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gold">Our Mentors</h2>
            <span className="w-8 h-px bg-gold/50"></span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-parchment leading-[1.2]" style={{ fontFamily: 'var(--font-cinzel)' }}>
            Distinguished <br className="hidden sm:block" />
            <span className="text-gold italic font-light" style={{ fontFamily: 'var(--font-amiri)' }}>Scholars & Faculty</span>
          </h3>
        </motion.div>

        {/* Scholars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {scholars.map((scholar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Portrait Image */}
              <div className="w-full aspect-[3/4] relative overflow-hidden mb-6 rounded-t-full border border-gold/20">
                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={scholar.image} 
                  alt={scholar.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 group-hover:grayscale-0 grayscale transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scholar Info */}
              <div className="text-center">
                <h4 className="text-xl md:text-2xl text-gold mb-1" style={{ fontFamily: 'var(--font-cinzel)' }}>
                  {scholar.name}
                </h4>
                <div className="text-parchment/60 text-xs font-semibold tracking-[0.1em] uppercase mb-4">
                  {scholar.title}
                </div>
                <p className="text-parchment/70 text-sm font-light leading-relaxed group-hover:text-parchment transition-colors duration-500">
                  {scholar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
