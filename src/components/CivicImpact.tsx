import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export function CivicImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Inverse parallax for the right column to create a floating/scrolling effect
  const yRight = useTransform(smoothProgress, [0, 1], [150, -150]);

  const metrics = [
    { label: 'Hot Meals Served (2025)', value: '4,000+', desc: 'Providing daily sustenance through the community Langar specifically focusing on travelers and the local poor.' },
    { label: 'Student Scholarships', value: '45', desc: 'Securely funded, multi-year tuition grants for the intensive Hifz memorization boarding program.' },
    { label: 'Family Mediations', value: '112', desc: 'Private, dignified civic dispute resolutions managed by our Resident Senior Scholars.' },
  ];

  return (
    <section id="community" ref={containerRef} className="py-20 md:py-32 lg:py-40 bg-parchment-alt bg-pattern-islamic text-navy overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Sticky Left Column / Title */}
          <div className="lg:col-span-5 h-full relative">
            <div className="lg:sticky lg:top-48">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-6 md:mb-8 flex items-center gap-4">
                  <span className="text-gold tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase">Civic Impact</span>
                  <div className="h-px w-16 bg-navy/20" />
                </div>
                
                <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] mb-8 md:mb-10 tracking-normal" style={{ fontFamily: 'var(--font-calligraphy)' }}>
                  Faith in <br className="hidden sm:block" /> 
                  <span className="text-gold" style={{ fontFamily: 'var(--font-amiri)' }}>Action.</span>
                </h3>
                
                <p className="text-navy-light/80 text-base md:text-lg lg:text-xl mb-10 md:mb-12 max-w-sm leading-relaxed font-light">
                  The Mosque serves as the civic pulse of the region, ensuring rigorous community welfare initiatives parallel our standard of academic excellence.
                </p>
                
                <button className="px-6 md:px-8 py-3 md:py-4 bg-navy text-parchment text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-colors duration-300 shadow-xl shadow-navy/10">
                  Sponsor an Initiative
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Right Column / Metrics */}
          <motion.div style={{ y: yRight }} className="lg:col-span-7 space-y-12 md:space-y-16 mt-8 lg:mt-0 lg:pt-32">
            {metrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="border-t border-navy/10 pt-8 md:pt-12 group"
              >
                <div 
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-light text-navy mb-4 md:mb-6 transition-all duration-500 group-hover:text-gold group-hover:translate-x-4" 
                  style={{ fontFamily: 'var(--font-cinzel)' }}
                >
                  {metric.value}
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase tracking-[0.1em] text-navy/90">
                  {metric.label}
                </div>
                <div className="text-navy/70 text-base md:text-lg font-light max-w-md leading-relaxed">
                  {metric.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
