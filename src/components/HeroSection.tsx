import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ProceduralArchway } from './ProceduralArchway';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax mappings (disabled on mobile to prevent layout breakage)
  const yText = useTransform(smoothProgress, [0, 1], [0, 200]);
  const yImage = useTransform(smoothProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] pt-32 pb-24 px-4 md:px-8 xl:px-12 flex items-center bg-parchment bg-pattern-islamic-light overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Typography Column */}
        <motion.div style={isMobile ? {} : { y: yText }} className="lg:col-span-5 flex flex-col z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} 
            className="mb-6 md:mb-8 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold tracking-[0.3em] text-[10px] md:text-xs font-semibold uppercase">Established 1942</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} 
            className="mb-2 md:mb-4 opacity-40 select-none text-gold text-2xl md:text-3xl lg:text-4xl"
            style={{ fontFamily: 'var(--font-amiri)' }}
          >
            بسم الله الرحمن الرحيم
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} 
            className="text-5xl sm:text-6xl md:text-7xl xl:text-[6rem] text-navy mb-4 md:mb-8 leading-[1.1] tracking-normal" 
            style={{ fontFamily: 'var(--font-calligraphy)' }}
          >
            Sacred Spaces & <br className="hidden sm:block lg:hidden xl:block" />
            <span className="text-gold" style={{ fontFamily: 'var(--font-amiri)' }}>Scholars.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }} 
            className="text-base md:text-lg text-navy-light/70 font-light max-w-sm lg:max-w-md mb-8 md:mb-12 leading-relaxed"
          >
            A modern institutional portal preserving centuries of classical Islamic architecture, theological education, and robust community welfare.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }} 
            className="flex items-start"
          >
            <button className="flex items-center gap-4 border-b border-navy pb-3 text-navy hover:text-gold hover:border-gold transition-all group">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Explore Archives</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Image / 3D Layout Column */}
        <motion.div style={isMobile ? {} : { y: yImage }} className="lg:col-span-7 relative h-[45svh] sm:h-[55svh] md:h-[60svh] lg:h-[75vh] w-full z-10 flex justify-center lg:justify-end mt-8 lg:-mt-12 xl:-mt-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1.5, ease: "easeOut" }} 
            className="w-full lg:w-5/6 h-full relative overflow-hidden rounded-[2rem] lg:rounded-[4rem] xl:rounded-t-full xl:rounded-b-[2rem] shadow-2xl bg-navy"
          >
            <img 
              src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=1200" 
              alt="Mosque Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000" 
            />
            
            {/* The archway sits atop the image to create a spatial illusion */}
            <ProceduralArchway />
          </motion.div>

          {/* Floating Stat Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 50, x: -20 }} 
            animate={{ opacity: 1, y: 0, x: 0 }} 
            transition={{ duration: 1, delay: 1, ease: "easeOut" }} 
            className="absolute -bottom-6 left-2 sm:left-8 lg:left-0 xl:left-12 bg-parchment p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl border border-gold/20 max-w-[180px] sm:max-w-[220px] lg:max-w-none rounded-xl lg:rounded-none"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gold mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-cinzel)' }}>4.5k</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-navy">Library Volumes</div>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
}
