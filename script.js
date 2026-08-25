// ========================================
// TEMA CLARO/ESCURO
// ========================================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const nextTheme = isLight ? "dark" : "light";

    if (nextTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("theme", nextTheme);
  });
}

// ========================================
// NAVEGAÇÃO E MENU MOBILE
// ========================================

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Menu hambúrguer
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ========================================
// NAVEGAÇÃO ATIVA
// ========================================

const sections = document.querySelectorAll("section[id]");

function activeMenu() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-link[href*=" + sectionId + "]")
        ?.classList.add("active");
    } else {
      document
        .querySelector(".nav-link[href*=" + sectionId + "]")
        ?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", activeMenu);

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ========================================
// ANIMAÇÕES NO SCROLL (INTERSECTION OBSERVER)
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Aplicar animação a elementos específicos
const animateElements = document.querySelectorAll(
  ".skill-category, .certificado-card, .projeto-card, .info-card, .contato-card",
);

animateElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(element);
});

// ========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ========================================

const heroTitle = document.querySelector(".hero-title");
let charIndex = 0;
let typeWriterTimeout = null;

function typeWriter() {
  const titleText = window.i18n ? window.i18n.t("hero.title") : "Desenvolvedor Full Stack Jr";
  if (charIndex < titleText.length) {
    heroTitle.textContent = titleText.substring(0, charIndex + 1);
    charIndex++;
    typeWriterTimeout = setTimeout(typeWriter, 100);
  } else {
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.textContent = "|";
    heroTitle.appendChild(cursor);
  }
}

function restartTypeWriter() {
  clearTimeout(typeWriterTimeout);
  charIndex = 0;
  heroTitle.textContent = "";
  typeWriterTimeout = setTimeout(typeWriter, 100);
}

// Iniciar efeito de digitação após o carregamento
window.addEventListener("load", () => {
  heroTitle.textContent = "";
  typeWriterTimeout = setTimeout(typeWriter, 500);
});

// Reinicia o efeito ao trocar de idioma
document.addEventListener("languagechange", restartTypeWriter);

// ========================================
// CONTADOR DE CERTIFICADOS
// ========================================

function countUp(element, target) {
  let count = 0;
  const increment = target / 50;

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(count);
    }
  }, 30);
}

// ========================================
// COPIAR EMAIL (OPCIONAL)
// ========================================

const emailCard = document.querySelector('.contato-card[href^="mailto"]');
if (emailCard) {
  emailCard.addEventListener("dblclick", (e) => {
    e.preventDefault();
    const email = emailCard.querySelector("p").textContent;

    navigator.clipboard.writeText(email).then(() => {
      const originalText = emailCard.querySelector("h4").textContent;
      const copiedText = window.i18n ? window.i18n.t("contato.emailCopied") : "E-mail Copiado!";
      emailCard.querySelector("h4").textContent = copiedText;

      setTimeout(() => {
        emailCard.querySelector("h4").textContent = originalText;
      }, 2000);
    });
  });
}

// ========================================
// LOADING SCREEN (OPCIONAL)
// ========================================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  // Remove o loading screen se existir
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }
});

// ========================================
// PREVENIR SCROLL HORIZONTAL
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflowX = "hidden";
});

// ========================================
// EASTER EGG: KONAMI CODE
// ========================================

let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join("") === konamiSequence.join("")) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  // Adicionar efeito especial
  document.body.style.animation = "rainbow 2s linear infinite";

  // Adicionar CSS para o efeito rainbow
  const easterStyle = document.createElement("style");
  easterStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
  document.head.appendChild(easterStyle);

  // Criar mensagem
  const message = document.createElement("div");
  message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9);
        color: #00d4ff;
        padding: 2rem 3rem;
        border-radius: 16px;
        font-size: 2rem;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 0 50px rgba(99, 102, 241, 0.5);
        animation: pulse 1s ease-in-out infinite;
    `;
  message.textContent = "🎮 Easter Egg Ativado! 🎮";
  document.body.appendChild(message);

  // Remover após 3 segundos
  setTimeout(() => {
    document.body.style.animation = "";
    message.remove();
    easterStyle.remove();
  }, 3000);
}

// ========================================
// ANALYTICS / TRACKING (PLACEHOLDER)
// ========================================

function trackEvent(category, action, label) {
  // Integrar com Google Analytics ou outra ferramenta
  console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Rastrear cliques em botões importantes
document
  .querySelectorAll(".btn, .projeto-links a, .contato-card")
  .forEach((element) => {
    element.addEventListener("click", (e) => {
      const category = "User Interaction";
      const action = "Click";
      const label = e.currentTarget.textContent.trim() || e.currentTarget.href;
      trackEvent(category, action, label);
    });
  });

// ========================================
// PROJETOS VIA GITHUB API
// ========================================

const GITHUB_USERNAME = "Felipe-Victoriani";

// Fallback com os projetos estáticos caso a API falhe (nome/descrição vêm do i18n)
const STATIC_PROJECTS_META = [
  {
    key: "crm",
    tech: ["JavaScript", "HTML5", "CSS3"],
    url: "https://github.com/felipe-victoriani/crm-para-clinica",
    homepage: null,
  },
  {
    key: "gym",
    tech: ["Flutter", "Dart", "Mobile"],
    url: "https://github.com/felipe-victoriani/academia_gym",
    homepage: null,
  },
  {
    key: "store",
    tech: ["JavaScript", "HTML5", "CSS3"],
    url: "https://github.com/felipe-victoriani/leuria_loja",
    homepage: null,
  },
];

function getStaticProjects() {
  const dict = window.i18n ? window.i18n.t("static_projects") : {};
  return STATIC_PROJECTS_META.map((meta) => ({
    name: (dict[meta.key] && dict[meta.key].name) || meta.key,
    description: (dict[meta.key] && dict[meta.key].description) || "",
    tech: meta.tech,
    url: meta.url,
    homepage: meta.homepage,
  }));
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildProjectCard({ name, description, tech, url, homepage }) {
  const viewProjectLabel = window.i18n ? window.i18n.t("projetos.viewProject") : "Ver projeto";
  const codeLabel = window.i18n ? window.i18n.t("projetos.code") : "Código";
  const techTags = tech.map((t) => `<span>${escapeHtml(t)}</span>`).join("");
  const liveLink = homepage
    ? `<a href="${escapeHtml(homepage)}" target="_blank" rel="noopener noreferrer">${escapeHtml(viewProjectLabel)}</a>`
    : "";
  return `
    <div class="projeto-card">
      <div class="projeto-content">
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="projeto-tech">${techTags}</div>
        <div class="projeto-links">
          ${liveLink}
          <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> ${escapeHtml(codeLabel)}
          </a>
        </div>
      </div>
    </div>`;
}

// "static" enquanto não há dados do GitHub, "live" após a API responder —
// permite re-renderizar ao trocar de idioma sem refazer a requisição
let currentProjectsSource = "static";
let currentLiveFeatured = [];
let currentLiveExtras = 0;

function renderStaticProjects() {
  currentProjectsSource = "static";
  const grid = document.getElementById("projetos-grid");
  const counter = document.getElementById("repos-count");
  if (grid) grid.innerHTML = getStaticProjects().map(buildProjectCard).join("");
  if (counter) {
    counter.textContent = window.i18n
      ? window.i18n.t("projetos.moreGeneric")
      : "E mais projetos no GitHub!";
  }
}

function renderLiveProjects() {
  const grid = document.getElementById("projetos-grid");
  const counter = document.getElementById("repos-count");
  const cards = currentLiveFeatured.map((repo) =>
    buildProjectCard({
      name: repo.name.replace(/[-_]/g, " "),
      description: repo.description,
      tech: repo.tech,
      url: repo.url,
      homepage: repo.homepage,
    }),
  );
  if (grid) grid.innerHTML = cards.join("");
  if (counter) {
    if (currentLiveExtras > 0) {
      counter.textContent = window.i18n
        ? window.i18n.t("projetos.moreCount")(currentLiveExtras)
        : `E mais ${currentLiveExtras} projetos no GitHub!`;
    } else {
      counter.textContent = window.i18n
        ? window.i18n.t("projetos.allOnGithub")
        : "Todos os projetos no GitHub:";
    }
  }
}

async function loadGithubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=public`,
      { headers: { Accept: "application/vnd.github.v3+json" } },
    );

    if (!response.ok)
      throw new Error(`GitHub API respondeu: ${response.status}`);

    const repos = await response.json();

    // Filtrar forks sem descrição e pegar os 6 mais recentes com conteúdo
    const publicRepos = repos.filter((r) => !r.fork);
    const featured = publicRepos.filter((r) => r.description).slice(0, 6);

    if (featured.length === 0) {
      renderStaticProjects();
      return;
    }

    currentProjectsSource = "live";
    currentLiveFeatured = featured.map((repo) => {
      const tech = [];
      if (repo.language) tech.push(repo.language);
      if (repo.topics) tech.push(...repo.topics.slice(0, 2));
      return {
        name: repo.name,
        description: repo.description,
        tech,
        url: repo.html_url,
        homepage: repo.homepage || null,
      };
    });
    currentLiveExtras = Math.max(0, publicRepos.length - 6);
    renderLiveProjects();
  } catch (error) {
    console.warn("Não foi possível carregar repositórios do GitHub:", error);
    renderStaticProjects();
  }
}

// Iniciar carregamento ao abrir a página
loadGithubRepos();

// Re-renderiza os cards (labels/fallback traduzidos) ao trocar de idioma,
// sem refazer a chamada à API do GitHub
document.addEventListener("languagechange", () => {
  if (currentProjectsSource === "live") {
    renderLiveProjects();
  } else {
    renderStaticProjects();
  }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
  "%c👨‍💻 Desenvolvido por Carlos Felipe Lima Victoriani",
  "color: #00d4ff; font-size: 16px; font-weight: bold;",
);
console.log(
  "%c🚀 Portfólio criado com HTML, CSS e JavaScript puro",
  "color: #00ffaa; font-size: 14px;",
);
console.log(
  "%c📧 Entre em contato: felipevictoriani@hotmail.com",
  "color: #0099ff; font-size: 14px;",
);
console.log(
  "%c💡 Dica: Tente o Konami Code! ⬆⬆⬇⬇⬅➡⬅➡BA",
  "color: #ff6b6b; font-size: 12px; font-style: italic;",
);

// ========================================
// HERO SHADOW OVERLAY ANIMATION
// Portado do componente React/Framer Motion
// Equivale a: animate(hueRotateMotionValue, 360, { repeat: Infinity, ease: "linear" })
// ========================================
(function () {
  const feHueRotate = document.getElementById("hero-hue-rotate");
  if (!feHueRotate) return;

  // Configuração espelhando os props do componente original:
  // animation.scale = 40, animation.speed = 30
  // animationDuration = mapRange(30, 1, 100, 1000, 50) ≈ 722ms → duration = 722/25 ≈ 28.9s
  const DURATION_MS = 28900;
  let startTime = null;

  function animateShadow(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime) % DURATION_MS;
    const hue = (elapsed / DURATION_MS) * 360;
    feHueRotate.setAttribute("values", String(hue));
    requestAnimationFrame(animateShadow);
  }

  requestAnimationFrame(animateShadow);
})();
