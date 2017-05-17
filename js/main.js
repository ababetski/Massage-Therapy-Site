$('button').on('click',function(e){

    // prevent defalt click behavior
	e.preventDefault();

	window.location.href = "confirmation.html";

});

$('.jump a').on('click',function(e){
    
    // prevent defalt click behavior
    e.preventDefault();
    
    // identify target
    var target = $(this).attr('href');
    var top = $(target).offset().top;

    // animate scroll to target
    $('html,body').animate({
      scrollTop: top
    },700);
      
});