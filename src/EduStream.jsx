import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Clock, Star, Search, Bell, User, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Профессиональный UI/UX дизайн",
    author: "Алексей Иванов",
    duration: "24 часа",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Основы разработки на React",
    author: "Мария Смирнова",
    duration: "18 часов",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Маркетинг в эпоху AI",
    author: "Дмитрий Петров",
    duration: "12 часов",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
  }
];

export default function EduStreamInterface() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold tracking-tighter text-indigo-600 uppercase">EduStream</span>
        </div>
        <div className="flex items-center gap-5">
          <Search size={20} className="text-zinc-400" />
          <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden font-bold text-[10px]">EN</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <header className="mb-16 text-left">
          <h1 className="text-4xl font-semibold mb-2 text-zinc-900">С возвращением</h1>
          <p className="text-zinc-400">Ваш прогресс обучения за последнюю неделю.</p>
        </header>

        <section className="mb-20 text-left text-white">
          <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-100 border border-zinc-100 group">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end items-start">
              <h2 className="text-5xl font-bold mb-6 max-w-xl">Архитектура веб-приложений</h2>
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold">
                <Play size={18} fill="currentColor" /> Продолжить
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-[1.5rem] border border-zinc-100 overflow-hidden shadow-sm">
              <img src={course.image} className="h-48 w-full object-cover" alt={course.title} />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">{course.title}</h4>
                <p className="text-zinc-400 text-sm mb-6">{course.author}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}