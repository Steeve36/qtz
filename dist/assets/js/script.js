// ===================
// CODE DE LA SIDEBAR - OUVRIR ET FERMER LA SIDEBAR
// ===================
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// ===================
// CODE DU DROPDOWN MENU - OUVRIR ET FERMER LE DROPDOWN
// ===================
function showDropdown() {
    const dropdown = document.querySelector('.dropdown-menu')
    dropdown.style.opacity = '1'
}
function hideDropdown() {
    const dropdown = document.querySelector('.dropdown-menu')
    dropdown.style.opacity = '0'
}