//DROP-DOWN MENU FOR MOBILE HEADER

$(document).ready(function(){

  $('.fa-ellipsis-v').on('click', function(event){

  	$('.mobile-menu').toggle();
  	$('.profile-pic').toggleClass('active');

	  	if ( $('.profile-pic').hasClass('active') ) {

	  		$('.profile-pic').css('margin-top', '50px');

	  	} else {

	  		$('.profile-pic').css('margin-top', '0px');

	  	}

  }); 
  
 
//START BARS ANIMATION ONLY WHEN ELEMENT VISIBLE

	$(document).on('scroll', function(event){

		let scrollOffset = $(document).scrollTop();
		let elementOffset = $('#anchor').offset().top - scrollOffset;

		if (scrollOffset > elementOffset) {

			$('.bar-graph--html').animate({width: '90%'}, 700, 'swing');
			$('.bar-graph--css').animate({width: '80%'}, 800, 'swing');
			$('.bar-graph--js').animate({width: '50%'}, 900, 'swing');
			$('.bar-graph--sql').animate({width: '70%'}, 1000, 'swing');
			$('.bar-graph--php').animate({width: '40%'}, 1100, 'swing');

		}
	});

});