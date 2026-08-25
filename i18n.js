// ========================================
// SISTEMA DE TRADUÇÃO (PT-BR / EN)
// ========================================

(function () {
  const translations = {
    pt: {
      meta: {
        title: "Carlos Felipe | Desenvolvedor Full Stack Jr",
        description:
          "Portfólio de Carlos Felipe Lima Victoriani - Desenvolvedor Full Stack Jr especializado em criar interfaces modernas e sistemas completos",
      },
      a11y: {
        skipToContent: "Pular para o conteúdo principal",
        themeToggle: "Alternar tema claro/escuro",
        langToggleGroup: "Idioma do site",
        backToTop: "Voltar ao topo",
      },
      nav: {
        home: "Home",
        about: "Sobre",
        skills: "Habilidades",
        certificates: "Certificados",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        greeting: "Disponível para projetos",
        title: "Desenvolvedor Full Stack Jr",
        subtitle:
          "Transformando ideias em código limpo, interfaces intuitivas e sistemas completos. Do front ao back, com HTML5, CSS3, JavaScript, Java e MySQL.",
        ctaProjects:
          '<i class="fas fa-rocket" aria-hidden="true"></i> Ver Projetos',
        ctaContact:
          '<i class="fas fa-envelope" aria-hidden="true"></i> Contato',
        scroll: "Scroll",
        avatarAlt: "Carlos Felipe Lima Victoriani - Desenvolvedor Full Stack Jr",
      },
      sobre: {
        title: "Sobre mim",
        p1: 'Dev: <strong>Formado em Análise e Desenvolvimento de Sistemas</strong>, com projetos reais entregues — de um <strong>CRM para clínica</strong> a um <strong>app mobile de academia</strong> e uma <strong>plataforma de e-commerce</strong>.',
        p2: "Meu trabalho vai além de montar telas bonitas. Escrevo código semântico, acessível e com performance pensada desde o início — variáveis CSS, Intersection Observer, lazy loading, métricas de Core Web Vitals. Interfaces que simplesmente funcionam, em qualquer dispositivo.",
        p3: 'Tenho uma <strong>trajetória incomum</strong>: antes de entrar em TI, trabalhei como <strong>Técnico de Enfermagem</strong>. Isso me ensinou algo que nenhum curso técnico ensina — enxergar o produto pelos olhos de quem usa, não de quem constrói. Cada tela que crio carrega esse olhar: o usuário no centro, o erro como algo a evitar antes de acontecer.',
        p4: 'Também atuo no universo da <strong>Inteligência Artificial</strong>: já criei chatbots com Python e GPT, aplico IA no meu fluxo de desenvolvimento diariamente e estudo como integrar essas ferramentas em produtos reais. Paralelamente, curso <strong>inglês na Wizard</strong> para alcançar o mercado internacional.',
        highlight:
          "A enfermagem me ensinou a cuidar das pessoas. A tecnologia me deu as ferramentas para fazer isso em escala.",
        card1: { title: "Formação", text: "Tecnologia em ADS<br />2026" },
        card2: { title: "Foco", text: "Full Stack Jr<br />+ IA Aplicada" },
        card3: {
          title: "Idiomas",
          text: "Português (Nativo)<br />Inglês (em curso)",
        },
        card4: {
          title: "Status",
          text: "Disponível para<br />oportunidades",
        },
      },
      habilidades: {
        title: "Habilidades técnicas",
        frontend: { title: "Front-End", responsive: "Design Responsivo" },
        uiux: {
          interfaceDesign: "Design de Interfaces",
          ux: "Experiência do Usuário",
          colorTheory: "Teoria das Cores",
          designFundamentals: "Fundamentos de Design",
        },
        backend: {
          title: "Back-End & Dados",
          oop: "POO",
          logic: "Lógica de Programação",
        },
        ai: {
          title: "Inteligência Artificial",
          chatbot: "Chatbot com IA",
          productivity: "IA para Produtividade",
          applied: "IA Aplicada",
        },
      },
      certificados: {
        title: "Certificados",
        c1: {
          title: "HTML e CSS: Ambientes, Estrutura e Tags",
          text: "Fundamentos da construção web",
        },
        c2: {
          title: "HTML e CSS: Classes, Posicionamento e Flexbox",
          text: "Layout moderno e responsivo",
        },
        c3: {
          title: "HTML e CSS: Cabeçalho, Footer e Variáveis CSS",
          text: "Estruturas completas e variáveis",
        },
        c4: {
          title: "Bootstrap 5: Landing Page Responsiva",
          text: "Framework para desenvolvimento ágil",
        },
        c5: {
          title: "UI para Devs: Fundamentos de Design",
          text: "Princípios de design para interfaces",
        },
        c6: {
          title: "Lógica de Programação com JavaScript",
          text: "Algoritmos e estruturas de dados",
        },
        c7: {
          title: "Java: Criando a Primeira Aplicação",
          text: "Introdução ao desenvolvimento Java",
        },
        c8: {
          title: "Java: Aplicando Orientação a Objetos",
          text: "POO e boas práticas",
        },
        c9: {
          title: "MySQL: Conhecendo a Ferramenta",
          text: "Banco de dados relacional",
        },
        c10: {
          title: "MySQL (40 horas)",
          text: "Curso em Vídeo - Aprofundamento",
        },
        c11: {
          title: "Python e GPT: Criação de Chatbot com IA",
          text: "Inteligência artificial aplicada",
        },
        c12: {
          title: "Aprendizagem com IA: Personalizando a Rotina",
          text: "IA para produtividade com ChatGPT",
        },
      },
      projetos: {
        title: "Projetos em destaque",
        loading: "Carregando projetos do GitHub...",
        fetching: "Buscando repositórios...",
        viewAll: "Ver todos no GitHub",
        viewProject: "Ver projeto",
        code: "Código",
        moreCount: (n) => `E mais ${n} projetos no GitHub!`,
        moreGeneric: "E mais projetos no GitHub!",
        allOnGithub: "Todos os projetos no GitHub:",
      },
      contato: {
        title: "Vamos trabalhar juntos?",
        subtitle: "Pronto para o próximo projeto!",
        p1: "Estou sempre aberto a novas oportunidades, colaborações e projetos desafiadores. Se você está procurando um desenvolvedor full stack jr dedicado, comunicativo e apaixonado por criar experiências digitais memoráveis, vamos conversar!",
        p2: "Seja para discutir uma ideia, propor uma colaboração ou apenas bater um papo sobre tecnologia, ficarei feliz em responder.",
        email: "E-mail",
        emailCopied: "E-mail Copiado!",
      },
      footer: {
        copy: "&copy; 2026 Carlos Felipe. Todos os direitos reservados.",
      },
      static_projects: {
        crm: {
          name: "CRM para Clínica",
          description:
            "Sistema de gerenciamento de relacionamento com clientes para clínicas, desenvolvido com JavaScript para otimizar o atendimento e organização.",
        },
        gym: {
          name: "App Academia Gym",
          description:
            "Aplicativo mobile para academias desenvolvido com Flutter e Dart, oferecendo controle de treinos e acompanhamento fitness.",
        },
        store: {
          name: "Leuria Loja",
          description:
            "Plataforma de e-commerce desenvolvida com JavaScript, oferecendo experiência completa de compra online.",
        },
      },
    },
    en: {
      meta: {
        title: "Carlos Felipe | Junior Full Stack Developer",
        description:
          "Portfolio of Carlos Felipe Lima Victoriani - Junior Full Stack Developer specialized in building modern interfaces and complete systems",
      },
      a11y: {
        skipToContent: "Skip to main content",
        themeToggle: "Toggle light/dark theme",
        langToggleGroup: "Site language",
        backToTop: "Back to top",
      },
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        certificates: "Certificates",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Available for projects",
        title: "Junior Full Stack Developer",
        subtitle:
          "Turning ideas into clean code, intuitive interfaces, and complete systems. From front to back, with HTML5, CSS3, JavaScript, Java and MySQL.",
        ctaProjects:
          '<i class="fas fa-rocket" aria-hidden="true"></i> View Projects',
        ctaContact:
          '<i class="fas fa-envelope" aria-hidden="true"></i> Contact',
        scroll: "Scroll",
        avatarAlt: "Carlos Felipe Lima Victoriani - Junior Full Stack Developer",
      },
      sobre: {
        title: "About me",
        p1: 'Dev: <strong>Graduated in Systems Analysis and Development</strong>, with real projects delivered — from a <strong>CRM for a clinic</strong> to a <strong>gym mobile app</strong> and an <strong>e-commerce platform</strong>.',
        p2: "My work goes beyond assembling pretty screens. I write semantic, accessible code with performance in mind from the start — CSS variables, Intersection Observer, lazy loading, Core Web Vitals metrics. Interfaces that simply work, on any device.",
        p3: 'I have an <strong>unusual path</strong>: before entering IT, I worked as a <strong>Licensed Nursing Technician</strong>. That taught me something no technical course does — seeing the product through the eyes of the person using it, not the person building it. Every screen I build carries that lens: the user at the center, errors treated as something to prevent before they happen.',
        p4: "I also work in the world of <strong>Artificial Intelligence</strong>: I've built chatbots with Python and GPT, apply AI in my daily development workflow, and study how to integrate these tools into real products. Alongside that, I'm <strong>studying English at Wizard</strong> to reach the international market.",
        highlight:
          "Nursing taught me to care for people. Technology gave me the tools to do that at scale.",
        card1: {
          title: "Education",
          text: "Systems Analysis & Dev.<br />2026",
        },
        card2: { title: "Focus", text: "Junior Full Stack<br />+ Applied AI" },
        card3: {
          title: "Languages",
          text: "Portuguese (Native)<br />English (in progress)",
        },
        card4: {
          title: "Status",
          text: "Available for<br />opportunities",
        },
      },
      habilidades: {
        title: "Technical Skills",
        frontend: { title: "Front-End", responsive: "Responsive Design" },
        uiux: {
          interfaceDesign: "Interface Design",
          ux: "User Experience",
          colorTheory: "Color Theory",
          designFundamentals: "Design Fundamentals",
        },
        backend: {
          title: "Back-End & Data",
          oop: "OOP",
          logic: "Programming Logic",
        },
        ai: {
          title: "Artificial Intelligence",
          chatbot: "AI Chatbot",
          productivity: "AI for Productivity",
          applied: "Applied AI",
        },
      },
      certificados: {
        title: "Certificates",
        c1: {
          title: "HTML & CSS: Environments, Structure and Tags",
          text: "Web development fundamentals",
        },
        c2: {
          title: "HTML & CSS: Classes, Positioning and Flexbox",
          text: "Modern, responsive layout",
        },
        c3: {
          title: "HTML & CSS: Header, Footer and CSS Variables",
          text: "Complete structures and variables",
        },
        c4: {
          title: "Bootstrap 5: Responsive Landing Page",
          text: "Framework for agile development",
        },
        c5: {
          title: "UI for Devs: Design Fundamentals",
          text: "Design principles for interfaces",
        },
        c6: {
          title: "Programming Logic with JavaScript",
          text: "Algorithms and data structures",
        },
        c7: {
          title: "Java: Building Your First Application",
          text: "Introduction to Java development",
        },
        c8: {
          title: "Java: Applying Object Orientation",
          text: "OOP and best practices",
        },
        c9: {
          title: "MySQL: Getting to Know the Tool",
          text: "Relational database",
        },
        c10: {
          title: "MySQL (40 hours)",
          text: "Video course - in-depth",
        },
        c11: {
          title: "Python and GPT: Building an AI Chatbot",
          text: "Applied artificial intelligence",
        },
        c12: {
          title: "Learning with AI: Personalizing Your Routine",
          text: "AI for productivity with ChatGPT",
        },
      },
      projetos: {
        title: "Featured Projects",
        loading: "Loading GitHub projects...",
        fetching: "Fetching repositories...",
        viewAll: "View all on GitHub",
        viewProject: "View project",
        code: "Code",
        moreCount: (n) => `${n} more projects on GitHub!`,
        moreGeneric: "More projects on GitHub!",
        allOnGithub: "All projects on GitHub:",
      },
      contato: {
        title: "Let's work together?",
        subtitle: "Ready for the next project!",
        p1: "I'm always open to new opportunities, collaborations, and challenging projects. If you're looking for a dedicated, communicative junior full stack developer who's passionate about building memorable digital experiences, let's talk!",
        p2: "Whether it's to discuss an idea, propose a collaboration, or just chat about technology, I'll be happy to respond.",
        email: "Email",
        emailCopied: "Email Copied!",
      },
      footer: {
        copy: "&copy; 2026 Carlos Felipe. All rights reserved.",
      },
      static_projects: {
        crm: {
          name: "Clinic CRM",
          description:
            "Client relationship management system for clinics, built with JavaScript to streamline scheduling and organization.",
        },
        gym: {
          name: "Gym App",
          description:
            "Mobile app for gyms built with Flutter and Dart, offering workout tracking and fitness monitoring.",
        },
        store: {
          name: "Leuria Store",
          description:
            "E-commerce platform built with JavaScript, offering a complete online shopping experience.",
        },
      },
    },
  };

  function detectDefaultLang() {
    const stored = localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("en")
      ? "en"
      : "pt";
  }

  let currentLang = detectDefaultLang();

  function resolve(key, dict) {
    return key
      .split(".")
      .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
  }

  function t(key) {
    const value = resolve(key, translations[currentLang]);
    if (value !== undefined) return value;
    return resolve(key, translations.pt);
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = t(el.getAttribute("data-i18n"));
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach((pair) => {
          const [attr, key] = pair.split(":").map((s) => s.trim());
          const value = t(key);
          if (attr && typeof value === "string") el.setAttribute(attr, value);
        });
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
      const isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setLanguage(lang) {
    if (lang !== "pt" && lang !== "en") return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  window.i18n = {
    t,
    getLang: () => currentLang,
    setLanguage,
    applyTranslations,
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.addEventListener("click", (e) => {
        const btn = e.target.closest(".lang-option");
        if (btn) setLanguage(btn.dataset.lang);
      });
    }
  });
})();
