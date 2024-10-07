(function($) {
  "use strict";
  

   


 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  jQuery('.scroll').onePgaeNav({
    wrapper: '#onepage-nav',
    activeClass: 'active'
  });

       // page Animation
  AOS.init({ 
    duration: 1500,
    initClassName: 'aos-init',  
  });
 

  function NewTabopen() {
    const tgImgs = document.querySelectorAll("img[data-url]")
    tgImgs?.forEach(img => { 
      img.addEventListener('click', () => {
        window.open(img.dataset.url)
      })
    })
  }
  NewTabopen()




})(jQuery);
