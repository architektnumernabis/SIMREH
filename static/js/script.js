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

//skrypt usuwający animację skaczącej strzałki na mobilnych urządzeniach
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const bouncer = document.querySelector('.fa-chevron-down')

if (isMobile == true) {
    bouncer.classList.remove('bounce-top')
}

//skrypt zmieniający bacgroudn-attachment na scroll na urządzeniach IOS
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }

if (iOS() == true) {
    document.getElementById("hero-image").style.backgroundAttachment = "scroll"
    ocument.getElementById("hero-image-two").style.backgroundAttachment = "scroll"
}
