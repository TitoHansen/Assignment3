document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.toggle('hovered');
        });
        item.addEventListener('mouseout', () => {
            item.classList.toggle('hovered');
        });
    });

    const phoneInput = document.querySelector('input[type="tel"]');
    const mainButton = document.querySelector('main button');
    mainButton.addEventListener('click', () => {
        mainButton.textContent = 'We will contact you!';
        phoneInput.disabled = true;
    });

    const footerLink = document.querySelector('footer a');
    footerLink.addEventListener('mouseover', () => {
        footerLink.textContent = 'Follow us on Instagram!';
    });
    footerLink.addEventListener('mouseout', () => {
        footerLink.textContent = '@treine.me';
    });
});
