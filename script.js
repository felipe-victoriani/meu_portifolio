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
const titleText = "Desenvolvedor Front-End";
let charIndex = 0;

function typeWriter() {
  if (charIndex < titleText.length) {
    heroTitle.textContent = titleText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    // Adiciona o cursor piscante após terminar de digitar
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.textContent = "|";
    heroTitle.appendChild(cursor);
  }
}

// Iniciar efeito de digitação após o carregamento
window.addEventListener("load", () => {
  heroTitle.textContent = "";
  setTimeout(typeWriter, 500);
});

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
// PARTÍCULAS NO BACKGROUND (OPCIONAL)
// ========================================

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(0, 212, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 10}s linear infinite;
    `;

  return particle;
}

// Adicionar CSS para animação de partículas
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Adicionar partículas ao hero background
const heroBackground = document.querySelector(".hero-background");
if (heroBackground) {
  for (let i = 0; i < 30; i++) {
    heroBackground.appendChild(createParticle());
  }
}

// ========================================
// PARALLAX SUAVE NO HERO
// ========================================

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");
  const heroContent = document.querySelector(".hero-content");

  if (heroBackground) {
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  if (heroContent && scrolled < 800) {
    heroContent.style.opacity = 1 - scrolled / 800;
    heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});

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
      emailCard.querySelector("h4").textContent = "E-mail Copiado!";

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
        box-shadow: 0 0 50px rgba(0, 212, 255, 0.5);
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
