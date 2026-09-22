import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profile from '../assets/profile.jpeg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import medium from '../assets/medium.png';

const roles = ['Software Engineer', 'Full-Stack Developer', 'AI/ML Explorer', 'Systems Thinker'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (typing && displayed.length === currentRole.length) {
      const t = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(t);
    }
    if (!typing && displayed.length === 0) {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTyping(true);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(typing
        ? currentRole.slice(0, displayed.length + 1)
        : displayed.slice(0, -1)
      );
    }, typing ? 65 : 30);
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="about" className="relative w-full flex min-h-screen mx-auto overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-32 -left-20 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="px-6 sm:px-16 flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-12 mt-28 pb-12">

        {/* ── Left: Text content ── */}
        <motion.div
          className="flex flex-col gap-5 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Open-to-work badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">Open to Opportunities</span>
          </div>

          {/* Name */}
          <div>
            <p className="text-gray-500 text-base font-light mb-1 tracking-widest uppercase text-sm">Hey there, I'm</p>
            <h1 className="display-font font-black text-white text-5xl sm:text-6xl leading-tight tracking-tight">
              Komal{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
                Bagwe
              </span>
            </h1>
          </div>

          {/* Animated role */}
          <div className="h-8 flex items-center">
            <span className="text-lg text-cyan-400 font-mono tracking-wide">
              {displayed}
              <span className="animate-pulse text-cyan-300">|</span>
            </span>
          </div>

          {/* Bio */}
          <p className="text-gray-400 text-base leading-relaxed">
            I'm a backend engineer with 5 years of experience at Accenture, building production systems for healthcare and finance clients. I hold an M.S. in Computer Science from NYU and work primarily in Java/Spring Boot and Python/FastAPI, with Go as an emerging focus.  I build distributed systems, real-time video infrastructure, and RAG + AI agent projects. </p>

          {/* Social icons */}
          <div className="flex gap-5 items-center mt-1">
            {[
              { href: 'https://github.com/komal-bagwe', src: github, alt: 'GitHub' },
              { href: 'https://www.linkedin.com/in/komalbagwe/', src: linkedin, alt: 'LinkedIn' },
              { href: 'https://medium.com/@komalbagwe31797', src: medium, alt: 'Medium' },
            ].map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer"
                className="hover:-translate-y-1 transform transition-all duration-200">
                <img src={src} alt={alt} className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href="https://drive.google.com/file/d/1_rqFvTDXg8GOAIkNyH1PqDy_EmN2lJLf/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transform text-sm tracking-wide"
            >
              View Resume ↗
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-700 hover:border-cyan-500/60 text-gray-300 hover:text-cyan-400 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 transform text-sm tracking-wide"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Glow behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-2xl scale-110 pointer-events-none" />

          <motion.div
            className="relative w-60 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={profile} alt="Komal Bagwe" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            className="absolute -bottom-5 -left-8 bg-gray-900/90 backdrop-blur border border-white/10 rounded-xl px-4 py-2 shadow-xl"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
          >
            <p className="text-xs text-gray-500 uppercase tracking-widest">Experience</p>
            <p className="text-white display-font font-bold text-xl">5+ Years</p>
          </motion.div>

          <motion.div
            className="absolute -top-5 -right-8 bg-gray-900/90 backdrop-blur border border-white/10 rounded-xl px-4 py-2 shadow-xl"
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
          >
            <p className="text-xs text-gray-500 uppercase tracking-widest">Currently</p>
            <p className="text-cyan-400 display-font font-bold text-base">@ NYU</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;