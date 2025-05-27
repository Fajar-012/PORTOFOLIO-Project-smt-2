const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isOpen);

      const lines = menuBtn.querySelectorAll('span');
      lines[0].classList.toggle('rotate-45');
      lines[0].classList.toggle('translate-y-2');
      lines[1].classList.toggle('opacity-0');
      lines[2].classList.toggle('-rotate-45');
      lines[2].classList.toggle('-translate-y-2');
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });


document.addEventListener('DOMContentLoaded', () => {
  const kategoriButtons = document.querySelectorAll('.kategori-btn');
  const cards = document.querySelectorAll('.project-card');

  kategoriButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      kategoriButtons.forEach(b => b.classList.remove('bg-indigo-600', 'text-white'));
      btn.classList.add('bg-indigo-600', 'text-white');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
      });
    });
  });

  // Set default to all
  document.querySelector('.kategori-btn[data-filter="all"]').click();
});




const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalGithubLink = document.getElementById('modal-github-link');
  const modalDemoLink = document.getElementById('modal-demo-link');
  const modalClose = document.getElementById('modal-close');

  document.querySelectorAll('button[data-modal-target]').forEach(button => {
    button.addEventListener('click', () => {
      modalImage.src = button.getAttribute('data-modal-image');
      modalTitle.textContent = button.getAttribute('data-modal-title');
      modalDesc.textContent = button.getAttribute('data-modal-description');
      modalGithubLink.href = button.getAttribute('data-modal-github') || '#';
      modalDemoLink.href = button.getAttribute('data-modal-demo') || '#';

      modal.classList.remove('opacity-0', 'pointer-events-none');
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
    }
  });