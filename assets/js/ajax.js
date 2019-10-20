$(function(){


	$(document).ready(function() {
		// AJAX examples

		// url: '/path/to/file',
		// type: 'default GET (Other values: POST)',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// data: {param1: 'value1'},

		// Example 1
		// example1();
		function example1(){
			$.ajax({
				url: 'demo.txt',
				success: function(response){
					$('.demo1').html(response);
				}
			});
		}

		// Example 2
		// example2();
		function example2(){
			$.ajax({
				url: 'assets/demo.txt',
				beforeSend: function(){
					$('.demo1a').html('Please wait');
				},
				success: function(response){
					$('.demo1a').html(response);
				},
				error: function(){
					alert('File not exist');
				},
				complete: function(response){
					console.log(response);
					alert('completed');
				}
			});
		}

		// Example 3
		// example3();
		function example3(){
			$.ajax({
				url: 'assets/php/request.php',
				// dataType: 'json', //expected response
				success: function(response){
					$('.demo2').html(response);
				},
			});
		}

		// Example 4
		$('.demo3').click(function(event) {
			/* Act on the event */
			$.ajax({
				url: 'assets/php/request.php',
				success: function(response){
					$('.demo4').html(response);
				},
			});
		});

		// Example 5
		$('.demo7').click(function(event) {
			/* Act on the event */
			var name = $('.demo5').val();
			var address = $('.demo6').val();
			$.ajax({
				url: 'assets/php/request.php',
				type: 'POST',
				data : {
					'name': name,
					'address': address
				},
				success: function(response){
					// alert(response);
					$('.demo8').html(response);
				},
			});
		});






















		// Activities

		// $.ajax({
		// 	url: 'directory',
		//    	type: 'POST',
		//    	data: {
		//    		'param' : value
		//    	},
		// 	success: function(response){
		// 	},
		// });

		// Activity 1

		// Activity 2

		$('.act3b').click(function(event) {
			$.ajax({
				url: 'assets/php/json.php',
			   	// type: 'POST',
			   	// data: {
			   	// 	'param' : value
			   	// },
			   	dataType : 'json',
				success: function(response){
					console.log(response);
					alert(response.message);
					// $('.act3a').val(response.message);
				},
			});
		});
	
		
	});
	

});