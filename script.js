function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');  
  }
  

function navigateToPage(pageName) {
    const pages = {
        home: 'index.html',
        resume: 'resume.html',
        contact: 'contact.html'
    };

    if (pages[pageName]) {
        window.location.href = pages[pageName];
    } else {
        alert('Page not found!');
    }
}