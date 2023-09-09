let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    //searchForm.classList.remove('active');

}

//let searchForm = document.querySelector('.header .search-form');
/*
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}*/

let contactInfo = document.querySelector('.contact-info');

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    //searchForm.classList.remove('active');
    
}
document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
    searchForm.classList.remove('active');

}



window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });