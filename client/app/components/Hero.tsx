"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Volume2, ArrowRight, Star, X, PlayCircle, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <section className="relative w-full min-h-[70vh] flex items-center pt-16 pb-12 md:pt-20 md:pb-10 overflow-hidden">

      <div className="absolute top-[-5%] right-[-10%] w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-[#F0E7FF] rounded-full blur-[80px] md:blur-[120px] -z-0 opacity-60 md:opacity-100" />
      
      <div className="container mx-auto px-4 pt-10 sm:px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-32 relative z-10">
        <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-[#5D3191] px-3 py-1.5 md:px-4 md:py-2 rounded-2xl shadow-sm"
          >
            <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#8DC63F]" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">Цээж бичгийн ухаалаг туслах</span>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#5D3191] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] leading-[1.2] lg:leading-[1.1] tracking-tighter"
            >
              Сонсоод <span className="text-[#8DC63F]">бичиж</span> <br className="hidden sm:block" /> 
              эхэлье!
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed font-bold mx-auto lg:mx-0 pt-1 px-4 lg:px-0"
            >
              Чиний доторх "Баатар" сэрэхэд бэлэн үү? <br className="hidden md:block" /> 
              Зөв Бичгийн Баатар чамд үг бүрийг зөв бичиж сурахад туслах болно.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 px-4 sm:px-0"
          >
          
<button 
  onClick={() => {
    document.getElementById('class-selection')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="relative group"
>
  <div className="absolute inset-0 bg-[#4a2775] rounded-[22px] translate-y-1.5" />
  <motion.div 
    whileHover={{ y: -2 }}
    whileTap={{ y: 4 }}
    className="relative bg-[#5D3191] text-white px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform shadow-lg"
  >
    Бичиж эхлэх 
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
   <motion.div 
                  className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
  </motion.div>
</button>

            <button 
              onClick={() => setShowTutorial(true)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gray-200 rounded-[22px] translate-y-1.5" />
              <motion.div 
                whileHover={{ y: -2 }}
                whileTap={{ y: 4 }}
                className="relative bg-white border-2 border-purple-50 text-[#5D3191] px-10 py-5 rounded-[22px] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-transform shadow-sm"
              >
                <Volume2 className="w-4 h-4 text-[#8DC63F]" />
                Заавар үзэх
              </motion.div>
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px] aspect-[4/3] rounded-[30px] md:rounded-[50px] overflow-hidden border-[6px] md:border-[12px] border-white shadow-[0_30px_60px_rgba(93,49,145,0.12)] bg-white group">
            <img 
              src="/huuhed.png" 
              alt="Dictation Practice"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white/95 backdrop-blur-md px-3 py-2 md:px-5 md:py-3.5 rounded-[18px] md:rounded-[24px] shadow-2xl border border-purple-50 flex items-center gap-2 md:gap-3"
            >
              <div className="w-7 h-7 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-200">
                <Star className="w-3.5 h-3.5 md:w-5 md:h-5 text-white fill-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#5D3191] font-[1000] text-[8px] md:text-[11px] uppercase tracking-tighter leading-none">Шинэ сорилт</span>
                <span className="text-gray-400 font-bold text-[7px] md:text-[9px] uppercase mt-0.5 md:mt-1">Бэлэн боллоо</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showTutorial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTutorial(false)}
              className="absolute inset-0 bg-[#5D3191]/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <div className="bg-[#5D3191] p-8 text-white relative">
                <button onClick={() => setShowTutorial(false)} className="absolute top-6 right-6 hover:rotate-90 transition-transform">
                  <X className="w-6 h-6" />
                </button>
                <PlayCircle className="w-12 h-12 text-[#8DC63F] mb-4" />
                <h3 className="text-2xl font-[1000] uppercase tracking-tighter italic">Хэрхэн тоглох вэ?</h3>
              </div>
              
              <div className="p-8 space-y-6">
                {[
                  { step: "1", text: "Зөв  анхааралтай сонсоорой.", color: "#8DC63F" },
                  { step: "2", text: "Сонссон үгээ алдаагүй зөв бичээрэй.", color: "#5D3191" },
                  { step: "3", text: "Баатар болж одоо цуглуулаарай!", color: "#FBBF24" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      style={{ backgroundColor: item.color }}
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg group-hover:scale-110 transition-transform"
                    >
                      {item.step}
                    </div>
                    <p className="text-[#5D3191] font-bold text-lg">{item.text}</p>
                  </motion.div>
                ))}
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowTutorial(false)}
                  className="w-full bg-[#8DC63F] text-white py-5 rounded-[22px] font-black uppercase tracking-widest shadow-[0_5px_0_0_#5e852a] active:shadow-none active:translate-y-1.5 transition-all mt-4"
                >
                   Эхэлье!
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;