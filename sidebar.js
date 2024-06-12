document.addEventListener('DOMContentLoaded', () => {
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        const sidebarContent = `
            <div class="sidebar">
                <h2><a href="index.html">1 Poss Studio</a></h2>
                <a href="codes.html" class="sidebar-link" data-page="codes">CODES</a>
                <a href="games.html" class="sidebar-link" data-page="games">GAMES</a>
            </div>
        `;
        sidebarPlaceholder.innerHTML = sidebarContent;

        const currentPage = sidebarPlaceholder.getAttribute('data-page');
        if (currentPage) {
            const activeLink = document.querySelector(`.sidebar-link[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    } else {
        console.error('Sidebar placeholder not found');
    }
});