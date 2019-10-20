$(function(){


	$(document).ready(function() {
		// AJAX examples

		// url: '/path/to/file',
		// type: 'default GET (Other values: POST)',
		// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		// data: {param1: 'value1'},

		// Example 1
		example1();
		function example1(){
			$.ajax({
				url: 'demo.txt',
				// beforeSend: function(){
				// 	$('.demo2').html('Please wait');
				// },
				success: function(response){
					$('.demo1').html(response);
				},
				// error: function(){
				// 	alert('File not exist');
				// }
				complete: function(response){
					console.log(response);
				}
			});
		}

		// Example 2
		// example2();
		function example2(){
			$.ajax({
				url: 'assets/php/request.php',
				// dataType: 'json', //expected response
				success: function(response){
					$('.demo2').html(response);
				},
			});
		}

		// Example 3
		$('.demo3').click(function(event) {
			/* Act on the event */
			$.ajax({
				url: 'assets/php/request.php',
				success: function(response){
					$('.demo4').html(response);
				},
			});
		});

		// Example 4
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

		
		
	});
	

});