function toggleMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
    
    if (dropdown) {
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    } else {
        console.warn('No se encontró ningún elemento con la clase .dropdown-menu');
    }
}