import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const milestones = [
  {
    year: '1942',
    title: 'Foundation',
    description: 'The laying of the first stone, establishing a center for spiritual gathering and theological learning in the heart of the community.',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '1960',
    title: 'Grand Prayer Hall Expansion',
    description: 'Significant architectural expansion to accommodate the growing congregation, incorporating classical Islamic geometric motifs.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '1985',
    title: 'Establishment of Al-Jami Library',
    description: 'Opening of the library to house rare manuscripts and essential theological texts, serving scholars and students globally.',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2002',
    title: 'Civic Welfare Center',
    description: 'Inauguration of the dedicated welfare wing, expanding outreach through food drives, medical camps, and community support.',
    image: 'https://images.unsplash.com/photo-1519451243164-0255b0b60e65?auto=format&fit=crop&q=80&w=800'
  },
  {
    year: '2020',
    title: 'Modernization & Outreach',
    description: 'Digital transformation and global outreach initiatives, ensuring the preservation and accessibility of Islamic heritage for the digital age.',
    image: 'https://images.unsplash.com/photo-1577725917781-a3f7893a2eb6?auto=format&fit=crop&q=80&w=800'
  },
];

export function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="heritage" ref={containerRef} className="py-24 md:py-32 bg-parchment bg-pattern-islamic-light text-navy relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 md:mb-28 flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-4 justify-center">
            <span className="w-8 h-px bg-gold"></span>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gold">Our Heritage</h2>
            <span className="w-8 h-px bg-gold"></span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl tracking-normal text-navy leading-[1.2]" style={{ fontFamily: 'var(--font-calligraphy)' }}>
            A Legacy of <br className="hidden sm:block" />
            <span className="text-gold" style={{ fontFamily: 'var(--font-amiri)' }}>Faith & Progress</span>
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20 md:hidden" />

          {/* Animated Line Fill */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gold -translate-x-1/2 origin-top hidden md:block"
            style={{ height: lineHeight }}
          />
          <motion.div 
            className="absolute left-6 top-0 w-px bg-gold origin-top md:hidden"
            style={{ height: lineHeight }}
          />

          {/* Milestones */}
          <div className="space-y-24 md:space-y-32 relative">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-parchment border-4 border-gold -translate-x-1/2 mt-2 md:mt-0 z-10"
                  />

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 lg:pr-24 text-left md:text-right' : 'md:pl-16 lg:pl-24 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="group"
                    >
                      <div className="text-6xl md:text-7xl lg:text-[6rem] text-gold transition-colors duration-500 mb-2 md:mb-4 select-none" style={{ fontFamily: 'var(--font-calligraphy)' }}>
                        {milestone.year}
                      </div>
                      <h4 className="text-2xl md:text-3xl text-navy mb-4 font-medium" style={{ fontFamily: 'var(--font-cinzel)' }}>
                        {milestone.title}
                      </h4>
                      <p className="text-navy-light/70 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-0">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Image Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[4/3] shadow-lg border border-gold/10 group"
                    >
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-navy/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
