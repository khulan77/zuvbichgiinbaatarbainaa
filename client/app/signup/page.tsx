"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Датагаа цуглуулах state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    grade: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Энд чиний API холболт орно: fetch("/api/auth/signup", { ... })
    console.log("Бүртгүүлэх өгөгдөл:", formData);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/login"); // Амжилттай болвол нэвтрэх рүү
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex items-center justify-center p-6 relative overflow-hidden">
      {/* 🏝️ Арын чимэглэл */}
      <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-[440px] z-10"
      >
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-[#5D3191] transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Буцах
        </button>

        <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_70px_rgba(93,49,145,0.08)] border border-slate-50">
          <h2 className="text-[#5D3191] font-black text-2xl mb-8 flex items-center gap-2">
            Бүртгүүлэх <Sparkles className="w-5 h-5 text-amber-400" />
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Нэвтрэх нэр */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">
                Нэвтрэх нэр
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <input
                  required
                  name="username"
                  type="text"
                  placeholder="Хулан"
                  className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-purple-200 font-bold text-[#5D3191] transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Имэйл хаяг (Шинээр нэмэгдсэн) */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">
                Имэйл хаяг
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="khulan@example.com"
                  className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-purple-200 font-bold text-[#5D3191] transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Анги сонгох */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">
                Анги
              </label>
              <div className="relative group">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <select
                  required
                  name="grade"
                  className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-12 pr-4 outline-none appearance-none font-bold text-[#5D3191] cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="">Сонгох</option>
                  <option value="1">1-р анги</option>
                  <option value="2">2-р анги</option>
                  <option value="3">3-р анги</option>
                  <option value="4">4-р анги</option>
                  <option value="5">5-р анги</option>
                </select>
                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 rotate-90 pointer-events-none" />
              </div>
            </div>

            {/* Нууц үг */}
            <div className="space-y-1">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">
                Нууц үг
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191] transition-colors" />
                <input
                  required
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:bg-white focus:border-purple-200 font-bold text-[#5D3191] transition-all"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Бүртгүүлэх товч */}
            <motion.button
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#5D3191] text-white font-black py-5 rounded-[22px] shadow-lg shadow-purple-100 flex items-center justify-center gap-2 mt-4 tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  БҮРТГҮҮЛЭХ <ChevronRight size={18} />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center text-gray-400 text-sm">
            Бүртгэлтэй юу?{" "}
            <Link
              href="/login"
              className="text-[#5D3191] font-black hover:underline ml-1"
            >
              Нэвтрэх
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default SignupPage;
