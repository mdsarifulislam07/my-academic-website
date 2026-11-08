// 1. Find the navigation links and all pages.
const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// 2. Show one page and hide every other page.
function showPage(pageName) {
    const validPage = document.getElementById(pageName);
    if (!validPage || !validPage.classList.contains('page')) pageName = 'about';

    pages.forEach(page => {
        page.classList.toggle('active', page.id === pageName);
    });

    // 3. Shade the selected tab; dim all other tabs.
    links.forEach(link => {
        const selected = link.dataset.page === pageName;
        link.classList.toggle('active', selected);
        if (selected) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    window.scrollTo(0, 0);
}

// 4. Clicking a tab immediately opens its page.
links.forEach(link => {
    link.addEventListener('click', () => showPage(link.dataset.page));
});

// 5. The URL #section also supports Back, Forward, and direct links.
window.addEventListener('hashchange', () => {
    showPage(window.location.hash.substring(1));
});

// 6. First visit (no #section) -> ABOUT page.
//    A direct link such as #education opens that page instead.
showPage(window.location.hash.substring(1) || 'about');
