$(document).ready(function(){

	console.log("it works.");
	
	var state = 0;
	var firstletter = 0;
	var secondletter = 0;
	var thirdletter = 0;
	
	
	
	
	
	
	
	var hide = function(y){
		console.log(y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log(y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	
	
	
	var oneImg = function(y){
		var z = ("url(images/" + y + ".jpg)");
		$(".word1").css("backgroundImage", z);
		console.log("new word1 img");	
	};
	
	var twoImg = function(y){
		var z = ("url(images/" + y + ".jpg)");
		$(".word2").css("backgroundImage", z);
		console.log("new word2 img");
	};
	
	var threeImg = function(y){
		var z = ("url(images/" + y + ".jpg)");
		$(".word3").css("backgroundImage", z);
		console.log("new word3 img");
	};
	
	
	
	
	
	var clearAll = function(){
		$(".word1").css("backgroundImage", "none");
		$(".word2").css("backgroundImage", "none");
		$(".word3").css("backgroundImage", "none");
		hide(".speakblock");
		firstletter = 0;
		secondletter = 0;
		thirdletter = 0;
		state = 0;
	};
	
	
	
	
	
	$(".letter3").hover(function(){
		$(".text3").css("display","block");
		},function(){
		$(".text3").css("display","none");
	});
	
	
	
	
	
	
	
	var clickedLetter = function(letter){
		console.log("clicked letter" + letter);
		
		if(state === 0){
			switch(letter) {
				case 1:
					oneImg("letter1large");
					state = 1;
					firstletter = 1;
					break;
				case 2:
					oneImg("letter2large");
					state = 1;
					firstletter = 2;
					break;
				case 3:
					oneImg("letter3large");
					state = 1;
					firstletter = 3;
					break;
				case 4:
					oneImg("letter4large");
					state = 1;
					firstletter = 4;
					break;
				case 5:
					oneImg("letter5large");
					state = 1;
					firstletter = 5;
					break;
				case 6:
					oneImg("letter6large");
					state = 1;
					firstletter = 6;
					break;
				case 7:
					oneImg("letter7large");
					state = 1;
					firstletter = 7;
					break;
				default:
					break;
			}
		
		}else if(state === 1) {
			switch(letter) {
				case 1:
					twoImg("letter1large");
					state = 2;
					secondletter = 1;
					break;
				case 2:
					twoImg("letter2large");
					state = 2;
					secondletter = 2;
					break;
				case 3:
					twoImg("letter3large");
					state = 2;
					secondletter = 3;
					break;
				case 4:
					twoImg("letter4large");
					state = 2;
					secondletter = 4;
					break;
				case 5:
					twoImg("letter5large");
					state = 2;
					secondletter = 5;
					break;
				case 6:
					twoImg("letter6large");
					state = 2;
					secondletter = 6;
					break;
				case 7:
					twoImg("letter7large");
					state = 2;
					secondletter = 7;
					break;
				default:
					break;
			}
		}else if(state === 2){
			switch(letter) {
				case 1:
					threeImg("letter1large");
					state = 3;
					thirdletter = 1;
					show(".speakblock");
					break;
				case 2:
					threeImg("letter2large");
					state = 3;
					thirdletter = 2;
					show(".speakblock");
					break;
				case 3:
					threeImg("letter3large");
					state = 3;
					thirdletter = 3;
					show(".speakblock");
					break;
				case 4:
					threeImg("letter4large");
					state = 3;
					thirdletter = 4;
					show(".speakblock");
					break;
				case 5:
					threeImg("letter5large");
					state = 3;
					thirdletter = 5;
					show(".speakblock");
					break;
				case 6:
					threeImg("letter6large");
					state = 3;
					thirdletter = 6;
					show(".speakblock");
					break;
				case 7:
					threeImg("letter7large");
					state = 3;
					thirdletter = 7;
					show(".speakblock");
					break;
				default:
					break;
			}
		}
			
		
	};
	
	
	$(".letter1").click(function(){
		clickedLetter(1);
	});
	
	$(".letter2").click(function(){
		clickedLetter(2);
	});
	
	$(".letter3").click(function(){
		clickedLetter(3);
	});
	
	$(".letter4").click(function(){
		clickedLetter(4);
	});
	
	$(".letter5").click(function(){
		clickedLetter(5);
	});
	
	$(".letter6").click(function(){
		clickedLetter(6);
	});
	
	$(".letter7").click(function(){
		clickedLetter(7);
	});
	
	
	
	
	$(".speakblock").click(function(){
		
		if(firstletter === 5 && secondletter === 3 && thirdletter === 4){
			console.log("You spelled CAB!");
			show(".letter6");
		}
		
		
		
		
		
		
		clearAll();
	});
	
	
	
	
	
	
});