import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function DepartmentShowcase() {
  return (
    <section className="py-20 md:py-32 bg-navy bg-pattern-islamic-light text-parchment overflow-hidden px-4 md:px-8 lg:px-12 border-t border-gold/10 relative">
      <div className="absolute inset-0 bg-navy/80"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8"
        >
          <div>
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 md:mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-gold"></span>
              Academic Departments
            </h2>
            <h3 className="text-5xl md:text-7xl leading-[1.2] mt-4" style={{ fontFamily: 'var(--font-calligraphy)' }}>
              Wings of<br className="hidden md:block"/>
              <span className="text-gold md:ml-4" style={{ fontFamily: 'var(--font-amiri)' }}>Excellence</span>
            </h3>
          </div>
          <p className="max-w-sm text-parchment/70 font-light text-base md:text-lg leading-relaxed">
            Housing modern classrooms, rare archival collections, and vast community resources within historic walls.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Main Large Card (Library) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="md:col-span-8 row-span-2 relative group overflow-hidden bg-navy-light rounded-[32px] border border-gold/10 hover:border-gold/30 transition-colors"
          >
            <img 
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-luminosity group-hover:mix-blend-normal" 
              alt="Library Archive" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-4xl md:text-5xl lg:text-6xl text-parchment mb-2 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-cinzel)' }}>Al-Jami<br/>Library</h4>
                  <p className="text-parchment/80 max-w-md text-sm md:text-lg font-light">
                    Over 4,500 historic manuscripts and volumes accessible to specialized researchers and students globally.
                  </p>
                </div>
                <div className="hidden md:flex p-4 rounded-full bg-parchment/10 backdrop-blur-md text-parchment border border-parchment/20 group-hover:bg-gold group-hover:text-navy group-hover:border-gold transition-colors duration-500">
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Card (Maktab/Stats) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="md:col-span-4 row-span-1 bg-gold text-navy p-6 md:p-10 rounded-[32px] flex flex-col justify-between group cursor-pointer hover:bg-gold-hover transition-colors"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Maktab School</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-light mb-2 md:mb-4" style={{ fontFamily: 'var(--font-cinzel)' }}>320+</div>
              <p className="text-sm md:text-base font-medium opacity-80 leading-relaxed">Active primary students enrolled in foundational theology.</p>
            </div>
          </motion.div>

          {/* Bottom Right Card (Welfare) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="md:col-span-4 row-span-1 relative group overflow-hidden rounded-[32px] border border-gold/10 hover:border-gold/30 transition-colors"
          >
            <img 
              src="https://images.unsplash.com/photo-1519451243164-0255b0b60e65?auto=format&fit=crop&q=80&w=800" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-luminosity group-hover:mix-blend-normal" 
              alt="Community Welfare" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full flex justify-between items-end">
              <div>
                <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold mb-2 block">Outreach</span>
                <h4 className="text-2xl md:text-3xl text-parchment leading-tight" style={{ fontFamily: 'var(--font-cinzel)' }}>Welfare Desk</h4>
              </div>
              <div className="p-3 rounded-full bg-parchment/10 text-parchment border border-parchment/20 group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
