"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Volume2,
  Camera,
  Send,
  Lightbulb,
  Sparkles,
  PenLine,
  ImagePlus,
} from "lucide-react";

export default function DictationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const topicTitle = searchParams.get("title") || "Цээж бичиг";

  const [userInput, setUserInput] = useState("");
  const [isCameraMode, setIsCameraMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F4FF] flex flex-col items-center  font-sans relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(93,49,145,0.08)_0%,transparent_50%)]" />
      <main className="w-full max-w-6xl flex-1 bg-white rounded-[60px] shadow-[0_50px_120px_-30px_rgba(93,49,145,0.18)] border-[12px] border-white flex flex-col relative z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-100/60 via-transparent to-transparent" />
        <div className="relative px-8 md:px-12 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-100">
          <div className="flex items-center gap-5">
            <button
              onClick={() => router.back()}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 hover:bg-purple-50 text-slate-400 hover:text-[#5D3191] transition-all shadow-sm"
            >
              <ChevronLeft size={26} />
            </button>

            <div>
              <span className="text-[10px] font-black text-amber-500 bg-amber-50 px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                Level 1
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-[#5D3191] italic tracking-[-1.5px] mt-2">
                {topicTitle}
              </h1>
              <p className="mt-3 text-slate-500 font-semibold">
                Сонсоод зөв бичээд, дараа нь илгээгээрэй ✨
              </p>
            </div>
          </div>

          {/* Voice Button - илүү гоё */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-4 px-8 py-5 rounded-[28px] shadow-xl transition-all font-medium ${
              isPlaying
                ? "bg-amber-400 shadow-amber-300 animate-pulse"
                : "bg-gradient-to-r from-[#FFD93D] to-[#FF9315] hover:brightness-110"
            }`}
          >
            <div className="w-11 h-11 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/30">
              <Volume2 size={26} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-white/80 font-black tracking-widest">
                АУДИО
              </p>
              <span className="font-black text-white text-xl tracking-tight">
                Сонсох
              </span>
            </div>
          </motion.button>
        </div>

        <div className="flex flex-1 min-h-[520px]">
          <div className="flex-1  md:p-12 lg:p-16 flex flex-col bg-gradient-to-br from-slate-50/70 to-white relative">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-3xl border border-purple-100 shadow-sm">
                <PenLine size={18} className="text-[#5D3191]" />
                <span className="text-sm font-black text-[#5D3191] tracking-wide">
                  Бичих хэсэг
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isCameraMode ? (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex-1 flex flex-col"
                >
                  <div className="relative flex-1 group">
                    <div className="absolute -inset-2 rounded-[44px] bg-gradient-to-br from-purple-200 via-sky-100 to-amber-100 opacity-60 blur-xl group-hover:opacity-80 transition-all duration-500" />

                    <div className="relative w-full h-full min-h-[360px] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-white">
                      <div
                        className="absolute inset-0 pointer-events-none opacity-40"
                        style={{
                          backgroundImage: `linear-gradient(#CBD5E1 1px, transparent 1px)`,
                          backgroundSize: "100% 42px",
                          backgroundPosition: "0 14px",
                        }}
                      />
                      <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-red-300/40 pointer-events-none" />

                      <textarea
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Энд бичээрэй..."
                        className="relative w-full h-full p-10 pl-16 bg-transparent text-2xl font-semibold text-slate-700 focus:outline-none resize-none placeholder:text-slate-300 leading-[42px] z-10"
                        style={{ lineHeight: "42px" }}
                      />
                    </div>

                    {/* Floating hint */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-2xl shadow-md border border-purple-100 flex items-center gap-2 z-20">
                      <Sparkles size={16} className="text-amber-400" />
                      <span className="text-xs font-black text-purple-500 tracking-widest">
                        Энд бичнэ үү ✨
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
     
                <motion.div
                  key="cam"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 to-black rounded-[40px] border-8 border-white shadow-inner relative overflow-hidden min-h-[360px]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0%,transparent_70%)]" />
                  <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center border-4 border-white/20 relative z-10">
                    <Camera size={52} className="text-white/80" />
                  </div>
                  <p className="text-white text-lg font-semibold mt-8 tracking-wide">
                    Цаасан бичвэр уншуулах
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Камераа тогтвортой бариарай
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons - илүү гоё */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsCameraMode(!isCameraMode)}
                className={`flex-1 py-6 rounded-3xl font-black text-base flex items-center justify-center gap-3 transition-all border-2 shadow-sm ${
                  isCameraMode
                    ? "bg-white border-slate-200 text-slate-500"
                    : "bg-white border-purple-200 text-[#5D3191] hover:border-purple-300"
                }`}
              >
                <ImagePlus size={24} />
                {isCameraMode ? "Буцах" : "Зураг авах"}
              </motion.button>

              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex-[1.6] bg-[#5D3191] hover:bg-[#6d3ea8] text-white py-6 rounded-3xl font-black text-xl shadow-[0_25px_50px_rgba(93,49,145,0.35)] flex items-center justify-center gap-4 transition-all"
              >
                <Send size={26} />
                ИЛГЭЭХ
              </motion.button>
            </div>

            {/* Зөвлөгөө хэсэг - илүү цэвэр */}
            <div className="mt-10 bg-gradient-to-r from-amber-50 to-white p-6 rounded-3xl border border-amber-100 shadow-sm flex gap-5">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb size={26} className="text-amber-500" />
              </div>
              <div>
                <p className="font-black text-amber-600 text-xs tracking-[0.12em] uppercase">
                  ЗӨВЛӨГӨӨ
                </p>
                <p className="text-amber-900 text-[15px] leading-tight mt-1 font-medium">
                  Алдаатай үг дээрээ дарж үсгийн тоглоомоор зөв бичих дүрмээ
                  бататгаарай. Зөв байрлуулсан үсэг ногоон болж харагдана.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .animate-scan {
          animation: scan 3.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
