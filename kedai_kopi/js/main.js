// Toggle class active
const navbarNav = document.querySelector('.navbarNav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
    // kalau classnya ada, hilangkan, kalau belum, tambahkan
}