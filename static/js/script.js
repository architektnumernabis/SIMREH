document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navBrand = document.querySelectorAll('.navbar-brand')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    navBrand.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
    
    

    window.addEventListener('scroll', addShadow)
})