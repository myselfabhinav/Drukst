const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
};

document.querySelector('.mobile-menu-btn').addEventListener('click', toggleMenu);
