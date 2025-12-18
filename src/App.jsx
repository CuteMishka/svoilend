import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Quote, Globe, Gamepad2, Sparkles, ExternalLink, Brush, Gift, Grid3X3, Dices } from 'lucide-react';
import projectOneImg from './assets/posmagic-screen.png';
import projectTwoImg from './assets/edustream-screen.png';

const phoneNumber = "77078434331";
const formattedPhone = "+7 707 843 43 31"; // <-- Добавил пропущенную переменную

// --- ДАННЫЕ ПРОЕКТОВ ---
const commercialProjects = [
  {
    id: 1,
    title: "POSMagic",
    category: "Retail / B2B",
    description: "Цифровая витрина для поставщика POS-материалов. Строгая каталогизация и презентация бренда.",
    link: "https://cutemishka.github.io/posmagic.kz/",
    image: projectOneImg,
  },
  {
    id: 2,
    title: "KOI",
    category: "Medicine",
    description: "Новостной корпоративный сайт. Целая экосистема созданная для сотрудников.",
    link: "https://koi-inky.vercel.app/",
    image: projectTwoImg,
  }
];

// --- ИГРЫ ---
const gamesProjects = [
  {
    id: 1,
    title: "Pixel World",
    desc: "Онлайн-вайтборд для совместного творчества.",
    link: "https://cutemishkapixels.onrender.com/",
    icon: <Brush size={24} />,
  },
  {
    id: 2,
    title: "Card Battle",
    desc: "Карточная стратегия в браузере.",
    link: "https://cutemishka.github.io/cardgame/",
    icon: <Dices size={24} />,
  },
  {
    id: 3,
    title: "Secret Santa",
    desc: "Сервис для организации обмена подарками.",
    link: "https://santa-cool.vercel.app/",
    icon: <Gift size={24} />,
  },
  {
    id: 4,
    title: "Sudoku 1vs1",
    desc: "Логическая игра с режимом дуэли.",
    link: "https://cutemishka-sudoku.hf.space/",
    icon: <Grid3X3 size={24} />,
  }
];

// --- ОТЗЫВЫ ---
const testimonials = [
  {
    id: 1,
    text: "Чистота кода и дизайна. POSMagic стал эталоном в нашей нише. Спасибо за профессионализм.",
    author: "Аноним",
    role: "CEO POSMagic"
  },
  {
    id: 2,
    text: "Минимализм, который продает. Платформа получилась легкой и интуитивной.",
    author: "Аноним",
    role: "EduStream Founder"
  },
  {
    id: 3,
    text: "Идеальный баланс между креативом и технической частью. Игры работают безупречно.",
    author: "Аноним",
    role: "Product Manager"
  }
];

// --- ЭФФЕКТ ПЕЧАТИ ---
const TypewriterEffect = ({ phrases }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout2);
  }, []);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]);

  return (
    <span className="inline-block min-w-[300px] text-left">
      {phrases[index].substring(0, subIndex)}
      <span className={`inline-block w-[2px] h-[0.9em] bg-slate-400 ml-1 align-middle transition-opacity ${blink ? "opacity-100" : "opacity-0"}`} />
    </span>
  );
};

// --- ГЛАВНЫЙ КОМПОНЕНТ ---
export default function WebStudioLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    // ФОН: Очень светлый, почти белый (zinc-50), текст темно-серый (zinc-900)
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      
      {/* Тонкая фоновая сетка для строгости */}
      <div className="fixed inset-0 z-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)', 
            backgroundSize: '80px 80px' 
        }} 
      />

      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-[#fafafa]/80 border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight text-zinc-900">
            COHORT
          </div>
          
          <a 
            href={`https://wa.me/${phoneNumber}`} 
            className="group flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors border border-zinc-200 hover:border-zinc-400 px-5 py-2 rounded-full bg-white"
          >
            <MessageCircle size={16} />
            <span>Start Project</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 z-10">
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-zinc-200 rounded-full bg-white text-zinc-500 text-xs uppercase tracking-widest font-medium">
            <Sparkles size={12} />
            Digital Production
          </div>

          <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-zinc-900">
             Эстетика кода <br />
             <span className="text-zinc-400">
               <TypewriterEffect phrases={["для вашего бизнеса.", "для ваших идей.", "для ваших клиентов."]} />
             </span>
          </h1>

          <p className="text-lg text-zinc-500 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Мы создаем цифровые продукты, где форма следует за функцией. 
            Никакого визуального шума. Только смысл.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`https://wa.me/${phoneNumber}`}
              className="px-8 py-4 bg-zinc-900 text-white font-medium rounded-lg hover:bg-black hover:scale-[1.02] transition-all flex items-center gap-3"
            >
              Обсудить проект
            </a>
            
            <a 
              href={`tel:${phoneNumber}`}
              className="px-8 py-4 text-zinc-600 font-medium rounded-lg hover:bg-zinc-100 transition-colors flex items-center gap-3"
            >
              <Phone size={20} />
              {formattedPhone}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ПРОЕКТЫ (Бизнес) */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-6">
            <h2 className="text-3xl font-medium text-zinc-900">Избранные кейсы</h2>
            <span className="text-zinc-400 text-sm">2024 — 2025</span>
          </div>

          <div className="space-y-32">
            {commercialProjects.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Изображение: Чистое, без цветных фильтров */}
                <a href={item.link} target="_blank" rel="noreferrer" className="w-full md:w-3/5 group cursor-pointer">
                  <div className="overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200 relative aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                </a>

                {/* Текст */}
                <div className="w-full md:w-2/5 flex flex-col justify-center items-start">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-medium text-zinc-900 mb-4">{item.title}</h3>
                  <p className="text-zinc-500 text-lg mb-8 font-light leading-relaxed">{item.description}</p>
                  
                  <a href={item.link} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-zinc-900 font-medium border-b border-zinc-300 hover:border-black pb-1 transition-all">
                    Смотреть проект 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ИГРЫ (Grid Layout) */}
      <section className="py-24 px-6 relative z-10 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex justify-center items-center w-12 h-12 bg-white rounded-xl border border-zinc-200 mb-6 text-zinc-600 shadow-sm">
              <Gamepad2 size={24} />
            </div>
            <h2 className="text-3xl font-medium text-zinc-900">Самые крутые проекты</h2>
            <p className="text-zinc-500 mt-4">Наши эксперименты с интерактивностью</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamesProjects.map((game, idx) => (
              <motion.a
                key={game.id}
                href={game.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-xl border border-zinc-200 hover:border-zinc-400 transition-colors flex flex-col items-start gap-4 hover:shadow-lg hover:shadow-zinc-100"
              >
                <div className="p-3 bg-zinc-50 rounded-lg text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  {game.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{game.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {game.desc}
                  </p>
                </div>
                <div className="mt-auto pt-4 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>Play</span>
                  <ArrowRight size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ (Minimal) */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Quote size={40} className="text-zinc-200 mx-auto mb-8" />
          
          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-2xl font-light text-zinc-800 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <div className="font-semibold text-zinc-900 text-sm uppercase tracking-wider">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-zinc-400 text-xs mt-1">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ФУТЕР */}
      <footer className="py-12 border-t border-zinc-200 bg-white text-center relative z-10">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-lg font-bold tracking-widest text-zinc-900 uppercase">
            COHORT
          </h2>
          
          <div className="flex gap-4">
            <a href={`https://wa.me/${phoneNumber}`} className="text-zinc-400 hover:text-zinc-900 transition-colors">
               <MessageCircle size={24} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
               <Globe size={24} />
            </a>
          </div>

          <p className="text-zinc-400 text-sm">
            © 2024. Almaty, Kazakhstan.
          </p>
        </div>
      </footer>
    </div>
  );
}