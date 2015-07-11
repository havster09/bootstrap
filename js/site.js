(function(){
    "use strict";
    var pickButton = $('#pickButton');

    $('#reasonDropdown li a').on("click",function(){
       var reason =  $(this).text();
        pickButton.text(reason);
    });

    var sentDialog = $('#sentDialog');

    $('#contactForm input[type="submit"]').on('click',function(){
        sentDialog.modal('show');
        return false;
    });

    var warningAlert = $('#warningAlert')

    sentDialog.on('hidden.bs.modal',function(){
        warningAlert.show();
    });

    warningAlert.on("close.bs.alert",function(){
        warningAlert.hide();
        return false;
    });

    var theCarousel = $('#theCarousel');

    theCarousel.carousel();

    $('#contactForm input[type="submit"]').tooltip({
        //placement:"left"
    });
})();


