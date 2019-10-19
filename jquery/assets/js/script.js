$(function(){

	// Prevent any jQuery code from running before the document is finished loading (is ready).
	$(document).ready(function() {
		// jQuery methods go here...
		
		// Example 1
		// var demo1 = $('.demo1').text();
		// var demo2 = $('.demo2').text();
		// var demo3 = $('.demo3').html();
		// console.log(demo3);



		// Example 2 
		// $('.demo4').val('lorem');
		// $('.demo5').text('lorem');
		// $('.demo6').html("<h1>test</h1>");

		// Example 3
		$('#demo7').hide();
		$('#demo8').show();
		// fadeIn()
		// fadeOut()
		// fadeToggle()
		// fadeTo()

		// Example 4

		$('.demo9').animate({'marginLeft':'100px'});

		// Multiple
		// $(".demo10").animate({
		//     left: '250px',
		//     opacity: '0.5',
		//     height: '150px',
		//     width: '150px'
		// });








	});


	$(document).scroll(function() {
		/* Act on the event */
		// alert()
	});






});