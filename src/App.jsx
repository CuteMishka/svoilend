import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Quote, Globe, Cpu, Zap, LayoutGrid, MousePointer2 } from 'lucide-react';

const phoneNumber = "77078434331";
const formattedPhone = "+7 707 843 43 31";

// --- ДАННЫЕ ---

const portfolioItems = [
  {
    id: 1,
    title: "Ocean Logic",
    category: "Логистика",
    description: "Корпоративная система управления морскими перевозками.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Azure Capital",
    category: "Инвестиции",
    description: "Личный кабинет инвестора с аналитикой в реальном времени.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  }
];

const testimonials = [
  {
    id: 1,
    text: "Искали подрядчика, который понимает специфику крупного бизнеса. CuteSquad сделали всё четко, в срок и с потрясающим дизайном.",
    author: "Александр В.",
    role: "Директор Ocean Logic"
  },
  {
    id: 2,
    text: "Очень понравился подход. Никакой воды, только рабочие решения. Сайт окупился за первый месяц работы.",
    author: "Марина Д.",
    role: "Azure Capital"
  },
  {
    id: 3,
    text: "Заказывал сложный лендинг. Ребята предложили концепцию, от которой я не смог отказаться. Рекомендую.",
    author: "Кайрат Н.",
    role: "Предприниматель"
  }
];

// --- КОМПОНЕНТ: ПЕЧАТАЮЩИЙ И СТИРАЮЩИЙ ТЕКСТ ---
const TypewriterEffect = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Логика мигания курсора
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  // Логика печати
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      // Слово напечатано полностью, ждем перед удалением
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2000); // Пауза 2 секунды, когда слово готово
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      // Слово стерто полностью, переключаем на следующее
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100); // Удаляем быстрее (50мс), чем печатаем (100мс)

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <span className="inline-block min-w-[300px] text-left">
      {phrases[index].substring(0, subIndex)}
      <span className={`inline-block w-[3px] h-[0.9em] bg-blue-400 ml-1 align-middle transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

// --- ОСНОВНОЙ КОМПОНЕНТ ---

export default function WebStudioLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // ПАЛИТРА: Navy Blue (#020617) + White
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* Декоративный фон */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#172554]" />
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        {/* Анимированные шары */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" 
        />
      </div>

      {/* Навигация (СТРОГО ПО ЦЕНТРУ) */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 backdrop-blur-md bg-[#020617]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Левая колонка (Пустышка для баланса) */}
          <div className="flex-1 hidden md:flex justify-start">
             {/* Можно сюда добавить иконку меню, если нужно, пока пусто */}
          </div>
          
          {/* Центральная колонка (Название) */}
          <div className="flex-1 text-center">
            <span className="text-xl font-bold tracking-[0.3em] uppercase text-white drop-shadow-lg cursor-default">
              Cutesquad
            </span>
          </div>
          
          {/* Правая колонка (Кнопка) */}
          <div className="flex-1 flex justify-end">
            <a 
              href={`https://wa.me/${phoneNumber}`} 
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-200 hover:text-white transition-all border border-blue-500/30 hover:bg-blue-500/20 px-6 py-3"
            >
              <MessageCircle size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Связаться</span>
            </a>
          </div>

        </div>
      </nav>

      {/* HERO секция */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 z-10">
        <div className="max-w-5xl relative">
          
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-8 flex justify-center"
          >
            <span className="flex items-center gap-2 px-4 py-1 bg-blue-900/20 border border-blue-500/20 rounded-full text-blue-300 text-xs uppercase tracking-widest font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Premium Web Design
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-center items-center">
             Создаем <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
               <TypewriterEffect phrases={["Цифровое Будущее", "Премиальный Стиль"]} />
             </span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Идеальный баланс эстетики и технологий. Сайты любой сложности с безупречной анимацией и продающей структурой.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-0 border border-white/20 rounded-none overflow-hidden max-w-md mx-auto shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            <a 
              href={`https://wa.me/${phoneNumber}`}
              className="flex-1 px-8 py-4 bg-white text-[#020617] font-bold text-lg hover:bg-blue-50 transition-colors flex justify-center items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            
            <a 
              href={`tel:${phoneNumber}`}
              className="flex-1 px-8 py-4 bg-white/5 backdrop-blur-md text-white font-medium hover:bg-white/10 transition-colors flex justify-center items-center gap-2 border-l border-white/20"
            >
              <Phone size={20} />
              Позвонить
            </a>
          </motion.div>
        </div>
        
        {/* Иконка скролла */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-white/30"
        >
          <MousePointer2 size={24} />
        </motion.div>
      </section>

      {/* Секция "Почему мы" */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#020617]/50 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 bg-[#0B1120]">
          {[
            { icon: <LayoutGrid />, title: "Структура", desc: "Продуманный UX/UI дизайн" },
            { icon: <Cpu />, title: "Технологии", desc: "React, Next.js, Framer Motion" },
            { icon: <Zap />, title: "Скорость", desc: "Моментальная загрузка страниц" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-10 group hover:bg-white/5 transition-colors duration-500"
            >
              <div className="mb-6 text-blue-400 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 origin-left">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Портфолио */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="flex items-end justify-between mb-16 border-b border-white/10 pb-6"
          >
            <h2 className="text-4xl font-bold text-white">Избранные проекты</h2>
            <div className="hidden md:block text-slate-400 text-sm font-mono">2023 — 2024</div>
          </motion.div>

          <div className="space-y-32">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}
              >
                {/* Изображение */}
                <div className="w-full md:w-3/5 relative perspective-1000">
                  <div className="absolute inset-0 bg-blue-500/20 translate-x-4 translate-y-4 border border-white/10 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                  <div className="aspect-[16/10] overflow-hidden border border-white/10 bg-slate-800 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#020617]/40 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Описание */}
                <div className="w-full md:w-2/5 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
                  >
                    <span className="w-8 h-[1px] bg-blue-400"></span>
                    {item.category}
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-6 group-hover:text-blue-200 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light">{item.description}</p>
                  
                  <button className="self-start flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:border-blue-400 hover:gap-5 transition-all duration-300">
                    <span>Подробнее</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 text-center"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/50">
              <Quote size={20} />
            </div>

            <div className="min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-2xl font-light text-white mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-blue-200 uppercase tracking-wider text-sm mb-1">
                      {testimonials[currentTestimonial].author}
                    </span>
                    <span className="text-slate-500 text-xs">
                      {testimonials[currentTestimonial].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-0 left-0 h-[2px] bg-blue-600 animate-[width_6s_linear_infinite]" style={{width: '100%'}} />
          </motion.div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-16 bg-[#01040f] border-t border-white/5 text-center relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center gap-8"
        >
          <h2 className="text-5xl font-bold tracking-tighter text-white/10 hover:text-white/30 transition-colors cursor-default select-none">
            CUTESQUAD
          </h2>
          
          <div className="flex gap-6">
            <a href={`https://wa.me/${phoneNumber}`} className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110">
               <MessageCircle size={20} />
            </a>
            <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110">
               <Globe size={20} />
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-4">
            © 2024. All rights reserved. <br/> Designed with precision.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}