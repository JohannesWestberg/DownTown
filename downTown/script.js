document.addEventListener('DOMContentLoaded', function () {
    var hamburgerInput = document.querySelector('.hamburger-inp');
    var hamburgerMenu = document.getElementById('hamburgerMenu');

    hamburgerInput.addEventListener('click', function () {
        const show = document.getElementById( 'hamburgerMenu' );
        if( window.getComputedStyle( show ).display === "none" ) {
            show.style.display = "flex";
        } else {
            show.style.display = "none"; // unset flex, so it returns to `none` as defined in the CSS.
        }
    });

    hamburgerInput.addEventListener('click', function () {
        const hide = document.getElementById( 'catch' );
        if( window.getComputedStyle( hide ).display === "none" ) {
            hide.style.display = "block";
        } else {
            hide.style.display = "none"; // unset flex, so it returns to `none` as defined in the CSS.
        }
    });


});