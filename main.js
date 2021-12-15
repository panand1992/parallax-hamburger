const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', handleMenuClick);

function handleMenuClick() {
    if(hamburger.classList[0] === 'open') {
        hamburger.classList.remove('open');
        sidebar.classList.remove('active');
    } else {
        hamburger.classList.add('open');
        sidebar.classList.add('active');
    }
}