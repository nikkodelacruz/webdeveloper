$(function(){

	// Prevent any jQuery code from running before the document is finished loading (is ready).
	$(document).ready(function() {
		// jQuery methods go here...
		
		// Example 1
		// Get a value
		// Get a text
		// Get a html

		/*============================================================*/
		
		// Example 2 
		// Set a value
		// Set a text
		// Set a html

		/*============================================================*/

		// Example 3
		// hide();
		// show();
		// fadeIn()
		// fadeOut()
		// fadeToggle()
		// fadeTo()
		// remove()
		// append()
		// addClass()

		/*============================================================*/		

		// Example 4
		// Single
		// Multiple

		/*============================================================*/

		// Example 5

		// First parent
		// All child
		// Specific child
		// Find specific child inside a parent
		// Select specifi parent
		// Select nearest parent


		// $('.child').parent().css({'border-color':'red'}); // first parent
		// $('.parent').children().css({'border-color':'green'}); // all child
		// $('.parent').children('.child1').css({'border-color':'blue'}); //specific child
		// $('.parent').find('.child3-1').animate({'marginLeft':'100px'}); // find specific child within parent
		// $('.child3-1').parents('.grandparent').animate({'marginLeft':'100px'}); // select specific parent
		// $('.child3-1').closest('.grandparent').animate({'marginLeft':'100px'}); // target the nearest parent

		// next() // next element
		// prev() // previous element
		// siblings() // all next and previous elements as long as it is within the element

		/*============================================================*/

		// Example 6

		// Single click
		// Double click
		// By document
		// Mouse enter
		// Mouse leave
		// Hover
		// Multiple events

		$('.demo11').click(function(event) {
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

		// Activity 2


	});


	$(document).scroll(function() {
		/* Act on the event */
		// alert()
	});






});