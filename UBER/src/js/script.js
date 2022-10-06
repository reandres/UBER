$(document).ready(function() {
    
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog_item__content').eq(i).toggleClass('catalog_item__content_active');
                $('.catalog_item__list').eq(i).toggleClass('catalog_item__list_active');
            });
        });
    }

    toggleSlide('.catalog_item__link');
    toggleSlide('.catalog_item__back');

    // Modal

    $('[data-modal=request]').on('click', function() {
        $('.overlay, #request').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #request').fadeOut('slow');
    });

});