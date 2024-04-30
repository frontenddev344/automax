jQuery(document).ready(function($){
alert("hi");
//var trigger = $('.hamburger'),
     var overlay = $('.overlay');
    var isClosed = false;




    $('#hamburger').click(function () {
      
        if (isClosed === true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
   
    });

 



});