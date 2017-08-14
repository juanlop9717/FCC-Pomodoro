 $(document).ready(function(){

 	//Global variables
 	var all = $("body");
	var total = 25*60;
	var totalDisplay = 25;
 	var breakTotal = 5*60;
 	var breakDisplay = 5;
 	var counter = 0;
	var minutes = $("#minutes");
	var seconds = $("#seconds");
	var progress;
	var realProgress = 0;
	var counter2 = 0;

	function progressBar(progress){
		realProgress = realProgress + progress;
		$(".fill").css('width', realProgress+'%' );
		counter2++;
		console.log(counter2);
		if(counter2 == 100){
			realProgress = 0;
			counter2 = 0;
		}
	}

 	function plusTotal(){
 		totalDisplay += 1;
 		total = totalDisplay * 60;
 		minutes.html(totalDisplay);
 		$("#session").html(totalDisplay);
 		

 	}

 	function lessTotal(){
 		if(totalDisplay < 2){
 			return;
 		}
 		else{
	 		totalDisplay = totalDisplay - 1;
	 		total = totalDisplay * 60;
	 		minutes.html(totalDisplay);
	 		$("#session").html(totalDisplay);
 		}
 		

 	}

 	function plusBreak(){
 		breakDisplay += 1;
 		breakTotal = breakDisplay * 60;
 		$("#break").html(breakDisplay);
 	}

 	function lessBreak(){
 		if(breakDisplay < 2){
 			return;
 		}
 		else{
 			breakDisplay = breakDisplay -1;
	 		breakTotal = breakDisplay * 60;
	 		$("#break").html(breakDisplay);
 		}
 		
 	}

 	$("#symbol1").click(lessTotal);
 	$("#symbol2").click(plusTotal);
 	$("#symbol3").click(plusBreak);
 	$("#symbol4").click(lessBreak);

 	function countdown(){

 		
 		$("#cont").append('<h2 id="status">Work!</h2>');
 		$("#status").fadeIn('slow');
	 	// Pertinent variables
	 	var secondsValue = pad(total % 60);
	 	var minutesValue = pad(parseInt(total/60));

	 	// ANIMATION BAR
		
 		var timeProgress = (total/100)*1000;
 			var processAnim = setInterval(function(){
			 		progressBar(0.398);
			 }, timeProgress);

    	
 	

	 	var intervalCopy = setInterval(function(){
 			--total;
 			if(total == 0 && counter == 0){
 				total = breakTotal;
 				counter = 1;
 				all.animate({
					opacity: 0
				},200,function(){
					all.css("background-color", "#34495e").animate({
						opacity: 1
					});
				});
				$("#status").html("Break!").css("display","none");
				$("#status").fadeIn('slow');
				clearInterval(process);

 			}
 			if(total == 0 && counter == 1){
 				total = 25*60;
 				all.animate({
					opacity: 0
				},200,function(){
					all.css("background-color", "#e74c3c").animate({
						opacity: 1
					});
				});
				$("#status").html("Work Harder!!");
 			}
	 		seconds.html(pad(total % 60));
	 		minutes.html(pad(parseInt(total/60)));
 		}, 1000);
	 	function pad(value){
	 		var valueString = value + "";
	 		if(valueString.length < 2){
	 			return "0" + value;

	 		}
	 		else{
	 			return valueString
	 		}
	 	}


		$("#timer").click(function(){
			$(".button").animate({ backgroundColor: "olive" }, "slow");
			clearInterval(intervalCopy);
			clearInterval(processAnim);});
		
 	}

 	// Start Counting
    $("#start").click(function(){
    	countdown();
    		
    		
    });





	 

 })