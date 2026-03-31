"use client";
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, X, Star, LogIn, Lock, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const avatars = [
  { id: 1, name: "", src: "/1.png" }, { id: 2, name: "", src: "/2.png" }, { id: 3, name: "", src: "/3.png" },
  { id: 4, name: "", src: "/4.png" }, { id: 5, name: "", src: "/5.png" }, { id: 6, name: "", src: "/6.png" },
  { id: 7, name: "", src: "/7.png" }, { id: 8, name: "", src: "/8.png" }, { id: 9, name: "", src: "/9.png" },
  { id: 10, name: "", src: "/10.png" }, { id: 11, name: "", src: "/11.png" }, { id: 12, name: "", src: "/12.png" },
  { id: 13, name: "", src: "/13.png" }, { id: 14, name: "", src: "/14.png" }, { id: 15, name: "", src: "/15.png" },
  { id: 16, name: "", src: "/16.png" }, { id: 17, name: "", src: "/17.png" }, { id: 18, name: "", src: "/18.png" },
  { id: 19, name: "", src: "/19.png" }, { id: 20, name: "", src: "/20.png" },
];

const HeaderContent = () => {
  const searchParams = useSearchParams();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showSelector, setShowSelector] = useState(false);
  const [userStars] = useState(999);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[2]);

  useEffect(() => {
    if (searchParams.get("loggedIn") === "true") setIsLoggedIn(true);
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 ${
      isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4 md:py-6"
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        
        <Link href="/">
          <div className="flex items-center gap-2 md:gap-3 shrink-0 group cursor-pointer">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8DC63F] to-[#76a835] rounded-xl md:rounded-2xl shadow-[0_5px_0_0_#5e852a] transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
              <motion.div whileHover={{ scale: 1.1 }} className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl bg-white/10">
                <div className="relative w-full h-full">
                  <Image src="/logo.png" alt="Hero Logo" fill className="object-cover scale-110" priority />
                </div>
              </motion.div>
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-1 -right-1 z-20">
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
            </div>
            <div className="flex flex-col ml-1">
              <h1 className="text-[#5D3191] font-black text-sm md:text-xl leading-none tracking-tighter uppercase">Зөв Бичгийн</h1>
              <h2 className="text-[#8DC63F] font-black text-[10px] md:text-sm leading-none uppercase tracking-[0.25em] mt-1">Баатар</h2>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {!isLoggedIn ? (
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 md:px-7 md:py-2.5 bg-[#5D3191] text-white font-black text-[10px] md:text-[12px] uppercase tracking-widest rounded-[16px] md:rounded-[18px] shadow-lg shadow-purple-100 transition-all"
              >
                <LogIn className="w-3.5 h-3.5 md:w-4 md:h-4" /> Нэвтрэх
              </motion.button>
            </Link>
          ) : (
            <div className="flex items-center gap-2 md:gap-4 relative">
         
              <Link href="/leaderboard"> 
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-center h-10 md:h-12 px-3 md:px-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-purple-100 transition-all"
                >
                  <Trophy className="w-5 h-5 text-yellow-500 md:mr-2 fill-yellow-100" />
                  <span className="text-[#5D3191] font-bold text-[10px] uppercase tracking-widest hidden md:block">Шилдэгүүд</span>
                </motion.div>
              </Link>

              <div className="flex items-center bg-white/90 border border-gray-100 rounded-[24px] p-1 shadow-sm">
                <div className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 bg-yellow-50/50 rounded-[20px] mr-1">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-yellow-400" />
                  <span className="text-[#5D3191] font-black text-sm md:text-lg leading-none">{userStars}</span>
                </div>

                <motion.div 
                  onClick={() => setShowSelector(!showSelector)}
                  whileTap={{ scale: 0.9 }}
                  className="relative group cursor-pointer"
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#5D3191] to-[#8DC63F] group-hover:rotate-6 transition-transform">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                      <Image src={selectedAvatar.src} alt="Avatar" width={44} height={44} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </motion.div>
              </div>
              <AnimatePresence>
                {showSelector && (
                  <>
                    <div className="fixed inset-0 z-[-1]" onClick={() => setShowSelector(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 10, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      className="absolute right-0 top-full mt-2 w-64 md:w-72 bg-white rounded-[28px] shadow-2xl border border-gray-50 p-6 z-[60]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#5D3191] font-black text-[10px] uppercase tracking-widest opacity-40">Баатар сонгох</span>
                        <X className="w-4 h-4 text-gray-300 cursor-pointer hover:text-red-400" onClick={() => setShowSelector(false)} />
                      </div>
                      <div className="grid grid-cols-4 gap-3 max-h-52 overflow-y-auto pr-1 no-scrollbar">
                        {avatars.map((av) => (
                          <div key={av.id} className="relative group">
                            <div
                              onClick={() => { setSelectedAvatar(av); setShowSelector(false); }}
                              className={`aspect-square rounded-xl p-0.5 cursor-pointer transition-all hover:scale-110 ${selectedAvatar.id === av.id ? "bg-[#5D3191]" : "bg-gray-50"}`}
                            >
                              <div className="w-full h-full rounded-lg overflow-hidden border-2 border-white bg-white">
                                <Image src={av.src} width={50} height={50} className="w-full h-full object-cover" alt="Hero" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => { setIsLoggedIn(false); setShowSelector(false); }}
                        className="w-full mt-4 py-3 bg-red-50 text-red-500 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 rounded-xl hover:bg-red-100 transition-colors"
                      >
                        <LogOut className="w-3 h-3" /> Гарах
                      </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const Header = () => (
  <Suspense fallback={<div className="h-20" />}>
    <HeaderContent />
  </Suspense>
);

export default Header;