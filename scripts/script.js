const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const filterButtons = document.querySelectorAll('.filter');
const destinationCards = document.querySelectorAll('.destination-card');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalLocation = document.querySelector('#modal-location');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        siteNav.classList.remove('open');
    });
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
        const filter = button.dataset.filter;

        destinationCards.forEach((card) => {
            card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
        });
    });
});

function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('.image-button').forEach((button) => {
    button.addEventListener('click', () => {
        modalImage.src = button.dataset.image;
        modalImage.alt = button.querySelector('img').alt;
        modalTitle.textContent = button.dataset.title;
        modalLocation.textContent = button.dataset.location;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector('.modal-close').focus();
    });
});

modal.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
});

document.querySelector('#year').textContent = new Date().getFullYear();