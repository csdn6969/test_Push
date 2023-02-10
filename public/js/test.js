const menu_toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menu_toggle.addEventListener('click', showMenu);
function showMenu(){
    console.log(0)
    menu.classList.toggle('hide')
}
$(document).ready(function (){
    $('.menu-relative .icon-menu').click(function () {
        $(this).parent('li').children('.menu-child').slideToggle();
        $(this).toggleClass('fa-chevron-down fa-chevron-right');
    });
});