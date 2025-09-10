"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<LangKey>('es');

  // Diccionario de textos con signatura de índice para los objetos internos
  type LangKey = 'es' | 'en';
  const lightClass =
    "bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 text-gray-800";
  const darkClass =
    "bg-gradient-to-tr from-[#1a0033] via-[#28004d] to-[#ff00cc] text-white";
  const texts: Record<LangKey, Record<string, any>> = {
    es: {
      heroTitle: "Hola, Soy Evelin",
      heroDesc: "Estudiante de Ingeniería de Software apasionada por el clean code, el diseño estético y la creación de proyectos innovadores con un toque gamer.",
      about: "Acerca de mi",
      aboutDesc: "Soy estudiante de Ingeniería de Software con interés en crear soluciones prácticas, minimalistas y funcionales. Me gusta combinar la lógica con el diseño estético para construir experiencias digitales únicas.",
      skills: "Conocimientos",
      education: "Educación",
      education1: "Ingeniería de Software",
      education1Desc: "Universidad Cooperativa de Colombia - Presente",
      education1Detail: "Actualmente cursando el último año, con enfoque en desarrollo web y experiencia de usuario.",
      education2: "Curso de Desarrollo Frontend",
      education2Desc: "Platzi, 2022",
      education2Detail: "Aprendizaje intensivo en React, Next.js y Tailwind CSS.",
      experience: "Experiencia",
      exp1: "Intern Software Developer",
      exp1Desc: "Tech Company ABC, 2023",
      exp1List: [
        "Desarrollé componentes React reutilizables para la plataforma interna.",
        "Implementé mejoras en la UI con Tailwind CSS y accesibilidad.",
        "Colaboré con el equipo de backend para integrar APIs REST."
      ],
      exp2: "Freelance Developer",
      exp2Desc: "2021 - Presente",
      exp2List: [
        "Creación de sitios web para clientes pequeños con React y Next.js.",
        "Optimización SEO y performance para mejorar visibilidad.",
        "Diseño UI/UX personalizado con Figma y Tailwind CSS."
      ],
      projects: "Proyectos",
      projectList: [
        { title: "MindBoots", desc: "Plataforma de salud mental con IA y profesionales para mejorar el flujo de pacientes." },
        { title: "Turtu", desc: "Plataforma de streaming para proyectos educativos, con estimaciones de costos y tiempos." }
      ],
      gallery: "Galería",
      contact: "Contacto",
      contactDesc: "Puedes escribirme si quieres colaborar o conocer más sobre mi trabajo ✨",
      sayHello: "Escríbeme",
      nav: [
        "about", "skills", "education", "experience", "projects", "gallery", "contact"
      ],
      footer: "Evelin. Construido con Next.js & Tailwind."
    },
    en: {
      heroTitle: "Hi, Im Evelin",
      heroDesc: "Software Engineering student passionate about clean code, aesthetic design, and building innovative projects with a gamer vibe.",
      about: "About Me",
      aboutDesc: "Im a Software Engineering student interested in creating practical, minimalist, and functional solutions. I love combining logic with aesthetic design to build unique digital experiences.",
      skills: "Skills",
      education: "Education",
      education1: "Software Engineering",
      education1Desc: "Cooperative University of Colombia - Present",
      education1Detail: "Currently in my last year, focused on web development and user experience.",
      education2: "Frontend Development Course",
      education2Desc: "Platzi, 2022",
      education2Detail: "Intensive learning in React, Next.js, and Tailwind CSS.",
      experience: "Experience",
      exp1: "Intern Software Developer",
      exp1Desc: "Tech Company ABC, 2023",
      exp1List: [
        "Developed reusable React components for the internal platform.",
        "Implemented UI improvements with Tailwind CSS and accessibility.",
        "Collaborated with the backend team to integrate REST APIs."
      ],
      exp2: "Freelance Developer",
      exp2Desc: "2021 - Present",
      exp2List: [
        "Created websites for small clients using React and Next.js.",
        "SEO and performance optimization for better visibility.",
        "Custom UI/UX design with Figma and Tailwind CSS."
      ],
      projects: "Projects",
      projectList: [
        { title: "MindBoots", desc: "Mental health platform with AI and professionals to improve patient flow." },
        { title: "Turtu", desc: "Streaming platform for educational projects, with cost and time estimates." }
      ],
      gallery: "Gallery",
      contact: "Contact",
      contactDesc: "You can write to me if you want to collaborate or learn more about my work ✨",
      sayHello: "Say Hello",
      nav: [
        "about", "skills", "education", "experience", "projects", "gallery", "contact"
      ],
      footer: "Evelin. Built with Next.js & Tailwind."
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ${
        darkMode ? darkClass : lightClass
      } font-sans`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-gray-300 dark:border-pink-600">
        <div className="flex items-center gap-3 mt-2">
          <img
            src="/fotouno.jpeg"
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-fuchsia-500 shadow-lg ring-2 ring-fuchsia-300 dark:ring-fuchsia-700 transition-all duration-300"
            style={{objectPosition: 'center top'}}
          />
          <h1
            className={`text-2xl font-extrabold tracking-tight ${
              darkMode ? "drop-shadow-[0_0_5px_#ff00ff]" : ""
            }`}
          >
            Evelin 🌷
          </h1>
        </div>
        <nav className="flex gap-6 text-gray-700 dark:text-white font-semibold">
          {(texts[lang].nav as string[]).map((section: string) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-cyan-400 dark:hover:text-pink-400 transition ${darkMode ? 'text-white' : ''}`}
            >
              {texts[lang][section] ? texts[lang][section] : section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
        {/* Toggle y selector de idioma */}
        <div className="flex items-center gap-2">
          <div className="flex bg-white/80 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-600 overflow-hidden shadow text-xs font-semibold">
            <button
              onClick={() => setLang('es')}
              className={`flex items-center gap-1 px-3 py-1 transition focus:outline-none ${
                lang === 'es'
                  ? 'bg-fuchsia-500 text-white dark:bg-fuchsia-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900'
              }`}
              aria-label="Español"
            >
              <span role="img" aria-label="Español">🇪🇸</span> ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1 px-3 py-1 transition focus:outline-none ${
                lang === 'en'
                  ? 'bg-fuchsia-500 text-white dark:bg-fuchsia-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900'
              }`}
              aria-label="English"
            >
              <span role="img" aria-label="English">🇺🇸</span> EN
            </button>
          </div>
          <button
            aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
            onClick={() => setDarkMode((m) => !m)}
            className="ml-2 p-2 rounded-full bg-white/70 dark:bg-fuchsia-600/70 shadow hover:scale-110 transition"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 max-w-3xl mx-auto">
        <img
          src="/fotouno.jpeg"
          alt="profile"
          className={`w-40 h-40 object-cover rounded-full mx-auto border-4 border-white shadow-lg ring-4 ring-fuchsia-300 dark:ring-fuchsia-700 transition-all duration-300 ${
            darkMode
              ? "dark:border-cyan-400 drop-shadow-[0_0_15px_#ff00ff]"
              : ""
          }`}
          style={{objectPosition: 'center top'}}
        />
        <h2
          className={`text-6xl font-extrabold mt-6 dark:text-white ${
            darkMode ? "drop-shadow-[0_0_20px_#ff00ff]" : ""
          }`}
        >
          {texts[lang].heroTitle}
        </h2>
        <p
          className={`mt-4 text-xl max-w-lg mx-auto leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {texts[lang].heroDesc}
        </p>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <h3
          className={`text-4xl font-bold mb-6 ${
            darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
          }`}
        >
          {texts[lang].about}
        </h3>
        <p
          className={`leading-relaxed text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {texts[lang].aboutDesc}
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`py-16 px-6 ${
          darkMode
            ? "bg-gradient-to-br from-[#0d001a] to-[#1a0033]"
            : "bg-gradient-to-br from-purple-100 to-pink-100"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-4xl font-bold mb-8 ${
              darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
            }`}
          >
            {texts[lang].skills}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Python",
              "Node.js",
              "Git",
              "Docker",
              "Figma",
              "TypeScript",
              "SQL",
            ].map((skill: string) => (
              <div
                key={skill}
                className={`p-5 rounded-xl bg-gradient-to-br from-pink-300 to-purple-300 transition font-bold text-lg cursor-default select-none ${
                  darkMode
                    ? "from-[#2d004d] to-[#ff00cc] shadow-[0_0_25px_#ff00ff] hover:shadow-[0_0_35px_#00ffff]"
                    : "shadow-sm"
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-4xl mx-auto py-16 px-6">
        <h3
          className={`text-4xl font-bold mb-8 ${
            darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
          }`}
        >
          {texts[lang].education}
        </h3>
        <div className="space-y-6">
          <div
            className={`p-6 rounded-2xl transition hover:scale-[1.02] ${
              darkMode
                ? "bg-[#0d001a] shadow-[0_0_20px_#ff00ff]"
                : "bg-white shadow"
            }`}
          >
            <h4 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : ""}`}>
              {texts[lang].education1}
            </h4>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {texts[lang].education1Desc}
            </p>
            <p className={`mt-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              {texts[lang].education1Detail}
            </p>
          </div>
          <div
            className={`p-6 rounded-2xl transition hover:scale-[1.02] ${
              darkMode
                ? "bg-[#0d001a] shadow-[0_0_20px_#ff00ff]"
                : "bg-white shadow"
            }`}
          >
            <h4 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : ""}`}>
              {texts[lang].education2}
            </h4>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{texts[lang].education2Desc}</p>
            <p className={`mt-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              {texts[lang].education2Detail}
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className={`py-16 px-6 ${
          darkMode
            ? "bg-gradient-to-br from-[#1a0033] to-[#28004d]"
            : "bg-gradient-to-br from-purple-100 to-pink-100"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-4xl font-bold mb-8 ${
              darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
            }`}
          >
            {texts[lang].experience}
          </h3>
          <div className="space-y-8">
            <div
              className={`p-6 rounded-2xl transition hover:scale-[1.03] ${
                darkMode
                  ? "bg-[#0d001a] shadow-[0_0_20px_#ff00ff]"
                  : "bg-white shadow"
              }`}
            >
              <h4 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : ""}`}>
                {texts[lang].exp1}
              </h4>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {texts[lang].exp1Desc}
              </p>
              <ul
                className={`list-disc list-inside mt-2 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {texts[lang].exp1List.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              className={`p-6 rounded-2xl transition hover:scale-[1.03] ${
                darkMode
                  ? "bg-[#0d001a] shadow-[0_0_20px_#ff00ff]"
                  : "bg-white shadow"
              }`}
            >
              <h4 className={`text-2xl font-semibold ${darkMode ? "text-pink-400" : ""}`}>
                {texts[lang].exp2}
              </h4>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {texts[lang].exp2Desc}
              </p>
              <ul
                className={`list-disc list-inside mt-2 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {texts[lang].exp2List.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto py-16 px-6">
        <h3
          className={`text-4xl font-bold mb-8 ${
            darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
          }`}
        >
          {texts[lang].projects}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {texts[lang].projectList.map((proj: {title: string, desc: string}) => (
            <div
              key={proj.title}
              className={`p-6 rounded-2xl transition hover:scale-105 cursor-pointer ${
                darkMode
                  ? "bg-[#0d001a] shadow-[0_0_25px_#ff00ff]"
                  : "bg-white shadow"
              }`}
            >
              <h4 className={`text-xl font-bold mb-2 ${darkMode ? "text-pink-400" : ""}`}>
                {proj.title}
              </h4>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className={`py-16 px-6 ${
          darkMode
            ? "bg-gradient-to-br from-[#0d001a] to-[#1a0033]"
            : "bg-gradient-to-br from-purple-100 to-pink-100"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-4xl font-bold mb-8 ${
              darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
            }`}
          >
            {texts[lang].gallery}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <img
                key={num}
                src={`https://picsum.photos/seed/${num}/300/200`}
                alt={`Gallery image ${num}`}
                className="rounded-xl shadow-lg cursor-pointer hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h3
          className={`text-4xl font-bold mb-6 ${
            darkMode ? "text-cyan-300 drop-shadow-[0_0_10px_#00ffff]" : ""
          }`}
        >
          {texts[lang].contact}
        </h3>
        <p className={`mb-8 text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {texts[lang].contactDesc}
        </p>
        <a
          href="mailto:evelin@example.com"
          className={`inline-block px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition ${
            darkMode
              ? "bg-[#ff00cc] text-white hover:bg-[#ff33ff] shadow-[0_0_25px_#ff00ff]"
              : "bg-fuchsia-500 text-white hover:bg-fuchsia-600"
          }`}
        >
          {texts[lang].sayHello}
        </a>

        {/* Redes sociales */}
        <div className="mt-12 flex justify-center gap-8 text-3xl dark:text-pink-400">
          <a
            href="https://github.com/evelinpulsara"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/evelin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            💼
          </a>
          <a
            href="https://twitter.com/evelin"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🐦
          </a>
          <a
            href="https://instagram.com/evelin"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            📸
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 dark:text-gray-400 py-6 text-sm">
        © {new Date().getFullYear()} {texts[lang].footer}
      </footer>
    </main>
  );
}
