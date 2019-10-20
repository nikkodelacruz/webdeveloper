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
		// remove()
		// append()
		// addClass()

		// Example 4
		$('.demo9').animate({'marginLeft':'100px'});

		// Multiple
		// $(".demo10").animate({
		//     left: '250px',
		//     opacity: '0.5',
		//     height: '150px',
		//     width: '150px'
		// });

		// Example 5
		$('.child').parent().css({'border-color':'red'});

		$('.parent').children().css({'border-color':'green'});

		$('.parent').children('.child1').css({'border-color':'blue'});

		$('.parent').find('.child3-1').animate({'marginLeft':'100px'}); // within parent

		$('.child3-1').parents('.grandparent').animate({'marginLeft':'100px'});

		// $('.child3-1').closest('.grandparent').animate({'marginLeft':'100px'}); // target the first parent

		// siblings()
		// next()
		// prev()



		// Example 6
		$('.demo11').click(function(event) {
			/* Act on the event */
			alert('You clicked a button');
		});

		$(".demo11").dblclick(function(){
			$(this).hide();
		});

		$(document).on('click', '.demo12', function(event) {
			event.preventDefault();
			/* Act on the event */
			alert('You clicked another button');
		});


		$('.demo13').mouseenter(function(event) {
			/* Act on the event */
			$(this).text('Mouse enter');
		});

		$('.demo13').mouseleave(function(event) {
			/* Act on the event */
			$(this).text('Mouse leave');
		});

		$(".demo14").hover(function(){
			$(this).text('Hello');
		},
		function(){
			$(this).text('Goodbye');
		});

		// Multiple event handlers
		$(".demo15").on({
			mouseenter: function(){
		    	$(this).css("background-color", "blue");
		  	},
		  	mouseleave: function(){
		    	$(this).css("background-color", "red");
		  	},
		  	click: function(){
		    	$(this).css("background-color", "green");
		  	}
		});

		// submit() - forms
		// change() - select






















		// Ativities

		// Activity 1


	});


	$(document).scroll(function() {
		/* Act on the event */
		// alert()
	});






});