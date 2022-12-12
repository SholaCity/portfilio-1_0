document.addEventListener('DOMContentLoaded', function () {
    
    //    // loader
    const loader = document.querySelector(".loader");
    
       setTimeout(() => {
          loader.className += ' hide-loader';
       }, 3000);
    });