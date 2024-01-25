document.addEventListener('DOMContentLoaded', function () {
    let hamburgerInput = document.querySelector('.hamburger-inp');
    let hamburgerMenu = document.getElementById('hamburgerMenu');

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


// under this comment is the links between pages

var logoDiv = document.querySelector('.logo');

if (logoDiv) {
    // Attach a click event listener to the div
    logoDiv.addEventListener('click', function() {
    // Perform the desired action when the div is clicked
    var newPageURL = 'index.html';

      // Open a new window or tab with the specified URL
      window.open(newPageURL, 'index.html');
    // You can replace the alert with any other action or function call
  });
}

var vansDiv = document.querySelector('.vans');

if (vansDiv) {
    // Attach a click event listener to the div
    vansDiv.addEventListener('click', function() {
    // Perform the desired action when the div is clicked
    var newPageURL = 'detail.html';

      // Open a new window or tab with the specified URL
      window.open(newPageURL, 'detail.html');
    // You can replace the alert with any other action or function call
  });
}