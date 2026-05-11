// Seleção de elementos
const btnMobile = document.getElementById('btn-mobile');
const header = document.querySelector('.header');
const yearSpan = document.getElementById('current-year');

// 1. Função do Menu Hamburger (Passo 4)
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
  // Acessibilidade: atualiza o status do aria-expanded
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Fechar menu ao pressionar Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
    btnMobile.setAttribute('aria-expanded', 'false');
  }
});

// 2. Efeito de Scroll na Navbar (Desafio Extra)
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});

// 3. Ano Automático no Footer (Passo 6)
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
