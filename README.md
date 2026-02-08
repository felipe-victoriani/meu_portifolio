# 🚀 Portfólio Pessoal - Carlos Felipe Lima Victoriani

Portfólio profissional desenvolvido com HTML5, CSS3 e JavaScript puro (vanilla). Design moderno, responsivo e visualmente impactante para destacar habilidades em front-end.

---

## ✨ Características

- **Totalmente responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Design moderno**: Interface clean com gradientes e animações suaves
- **Performance otimizada**: Sem frameworks pesados, apenas código puro
- **Animações fluidas**: Transições, hover effects e scroll animations
- **Acessibilidade**: Navegação por teclado e aria-labels implementados
- **SEO friendly**: Meta tags e estrutura semântica

---

## 📂 Estrutura do Projeto

```
meu_portifolio/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilos e design responsivo
├── script.js           # Interações e funcionalidades JavaScript
└── README.md           # Documentação do projeto
```

---

## 🎨 Seções do Site

### 1. **Hero / Home**

- Nome e apresentação profissional
- Título com efeito de digitação
- Botões de ação (currículo e contato)
- Avatar personalizado com animação
- Links para redes sociais

### 2. **Sobre Mim**

- Apresentação pessoal detalhada
- Experiência acadêmica (ADS - 5º semestre)
- Foco em front-end e base em back-end
- Cards informativos com ícones

### 3. **Habilidades Técnicas**

Organizado em 4 categorias:

- **Front-End**: HTML5, CSS3, JavaScript, Bootstrap, Design Responsivo
- **UI/UX**: Design de Interfaces, Experiência do Usuário
- **Back-End & Dados**: Java, POO, MySQL, Lógica de Programação
- **Inteligência Artificial**: Python + GPT, Chatbot, IA Aplicada

### 4. **Certificados**

Grid visual com 12 certificados:

- HTML e CSS (3 cursos)
- Bootstrap 5
- UI para Devs
- Lógica com JavaScript
- Java (2 cursos)
- MySQL (2 cursos)
- Python e GPT
- IA para Produtividade

### 5. **Projetos**

Cards de projetos com:

- Descrição
- Tecnologias utilizadas
- Links para demo e código (GitHub)

### 6. **Contato**

- Cards interativos para e-mail, LinkedIn, GitHub e WhatsApp
- Call to action profissional

### 7. **Footer**

- Nome e tagline
- Links sociais
- Copyright

---

## 🎯 Funcionalidades JavaScript

### Navegação

- Menu hambúrguer responsivo
- Navegação suave (smooth scroll)
- Indicador de seção ativa
- Esconder/mostrar navbar no scroll

### Animações

- Efeito de digitação no título
- Intersection Observer para animações ao scroll
- Parallax suave no hero
- Partículas flutuantes no background

### Interatividade

- Botão "Voltar ao topo"
- Copiar e-mail com duplo clique
- Easter egg com Konami Code (⬆⬆⬇⬇⬅➡⬅➡BA)
- Tracking de eventos (preparado para analytics)

---

## 🎨 Paleta de Cores

```css
Primária: #00d4ff (Cyan vibrante)
Secundária: #0099ff (Azul elétrico)
Destaque: #00ffaa (Verde neon)
Background: #0a0e27 (Azul escuro profundo)
Texto: #ffffff (Branco)
Texto secundário: #a0aec0 (Cinza claro)
```

---

## 🚀 Como Usar

### 1. **Personalizar Informações**

#### No `index.html`:

- **Linha 44-46**: Altere o nome e título
- **Linha 66-74**: Atualize os links das redes sociais (GitHub, LinkedIn, WhatsApp)
- **Linha 86**: Adicione sua foto de perfil (`avatar.jpg` na raiz do projeto)
- **Seção Contato (linhas 395-414)**: Atualize e-mail e usuários das redes
- **Links do Footer (linhas 429-437)**: Atualize os links

### 2. **Adicionar Foto de Perfil**

Coloque uma imagem chamada `avatar.jpg` na mesma pasta do `index.html`:

- Formato recomendado: JPG ou PNG
- Dimensões: 500x500px (quadrada)
- Peso: menos de 200KB

Se não adicionar foto, um placeholder com ícone será exibido automaticamente.

### 3. **Adicionar Currículo**

```html
<!-- Linha 62 do index.html -->
<a href="curriculo.pdf" class="btn btn-secondary" download>
  <i class="fas fa-download"></i> Baixar currículo
</a>
```

Coloque seu arquivo PDF na mesma pasta e atualize o `href`.

### 4. **Adicionar Projetos**

Edite a seção **Projetos** (linhas 360-394) adicionando mais cards:

```html
<div class="projeto-card">
  <div class="projeto-image">
    <i class="fas fa-icon-name"></i>
  </div>
  <div class="projeto-content">
    <h3>Nome do Projeto</h3>
    <p>Descrição breve do projeto...</p>
    <div class="projeto-tech">
      <span>HTML5</span>
      <span>CSS3</span>
    </div>
    <div class="projeto-links">
      <a href="URL_DO_PROJETO" target="_blank">
        <i class="fas fa-external-link-alt"></i> Ver projeto
      </a>
      <a href="URL_DO_GITHUB" target="_blank">
        <i class="fab fa-github"></i> Código
      </a>
    </div>
  </div>
</div>
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Flexbox, Grid, Variáveis CSS, Animações
- **JavaScript ES6+**: Vanilla JS para interações
- **Font Awesome 6.4**: Ícones profissionais

---

## 📱 Responsividade

O site se adapta perfeitamente a diferentes tamanhos de tela:

- **Desktop**: Layout em duas colunas, navegação horizontal
- **Tablet (1024px)**: Layout adaptado, grid responsivo
- **Mobile (768px)**: Menu hambúrguer, layout em coluna única
- **Small Mobile (480px)**: Fontes e espaçamentos otimizados

---

## 🎭 Easter Eggs

### Konami Code

Digite a sequência: **↑ ↑ ↓ ↓ ← → ← → B A**

Ativa um efeito especial arco-íris! 🌈

### Console

Abra o DevTools (F12) e veja mensagens personalizadas no console.

### Duplo Clique no E-mail

Clique duas vezes no card de e-mail para copiar automaticamente.

---

## 🚀 Deploy

### GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages
4. Selecione a branch `main` e salve
5. Seu site estará disponível em: `https://seu-usuario.github.io/nome-repositorio`

### Netlify

1. Arraste a pasta do projeto para [netlify.com/drop](https://app.netlify.com/drop)
2. Site publicado em segundos!

### Vercel

1. Instale Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto: `vercel`
3. Siga as instruções

---

## 📝 Checklist de Personalização

- [ ] Atualizar nome e título no hero
- [ ] Adicionar foto de perfil (`avatar.jpg`)
- [ ] Atualizar links das redes sociais
- [ ] Adicionar arquivo de currículo PDF
- [ ] Personalizar texto "Sobre Mim"
- [ ] Revisar lista de habilidades
- [ ] Adicionar projetos reais
- [ ] Atualizar informações de contato
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Fazer deploy

---

## 🎨 Customização de Cores

Para alterar as cores, edite as variáveis CSS no início do `style.css`:

```css
:root {
  --primary-color: #00d4ff; /* Cor principal */
  --secondary-color: #0099ff; /* Cor secundária */
  --accent-color: #00ffaa; /* Cor de destaque */
  --dark-bg: #0a0e27; /* Background escuro */
  /* ... */
}
```

---

## 📊 Performance

- **Sem frameworks**: Carregamento ultra-rápido
- **CSS otimizado**: Uso de variáveis e reutilização
- **Imagens otimizadas**: Suporte a fallback
- **JavaScript eficiente**: Eventos delegados e debounce

---

## 🐛 Solução de Problemas

### Menu não abre no mobile

Verifique se o JavaScript está carregando corretamente.

### Ícones não aparecem

Verifique a conexão com Font Awesome (linha 10 do HTML).

### Animações não funcionam

Verifique se o JavaScript está habilitado no navegador.

---

## 📄 Licença

Este projeto é de código aberto e pode ser utilizado livremente para criar seu próprio portfólio.

**Desenvolvido com 💙 por Carlos Felipe Lima Victoriani**

---

## 🤝 Contato

- **GitHub**: [github.com/seu-usuario](https://github.com/seu-usuario)
- **LinkedIn**: [linkedin.com/in/seu-usuario](https://linkedin.com/in/seu-usuario)
- **E-mail**: seuemail@example.com

---

## 🎓 Aprendizado

Este projeto demonstra conhecimentos em:

- HTML5 semântico
- CSS3 avançado (Flexbox, Grid, Animações)
- JavaScript vanilla
- Design responsivo
- UI/UX
- Boas práticas de código
- Acessibilidade web

---

**Última atualização**: Fevereiro 2026
#   m e u _ p o r t i f o l i o  
 