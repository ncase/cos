(function(){

	window.END_THE_GAME = function(){

		document.getElementById("game").setAttribute("screen","credits");
		window.GAME_HAS_ENDED = true;
		document.getElementById("share").style.background = "#222";
		document.getElementById("credits").style.background = "#222";

		var closers = document.querySelectorAll(".close_screen");
		for(var i=0;i<closers.length;i++){
			closers[i].style.visibility = "hidden";
		}

		CURRENT_SCREEN=2;
		changeScreen();

	};

	var CURRENT_SCREEN = 0;
	// 0 - normal game
	// 1 - social
	// 2 - credits

	var button_share = document.getElementById("button_share");
	var share_screen = document.getElementById("share");
	var button_credits = document.getElementById("button_credits");
	var credits_screen = document.getElementById("credits");

	var closers = document.querySelectorAll(".close_screen");
	for(var i=0;i<closers.length;i++){
		closers[i].onclick = function(){
			setTimeout(function(){
				CURRENT_SCREEN = 0;
				changeScreen();
			},1);
		};
	}

	button_share.onclick = function(){
		if(CURRENT_SCREEN==1){
			CURRENT_SCREEN = 0;
		}else{
			CURRENT_SCREEN = 1;
		}
		changeScreen();
	};

	button_credits.onclick = function(){
		if(CURRENT_SCREEN==2){
			CURRENT_SCREEN = 0;
		}else{
			CURRENT_SCREEN = 2;
		}
		changeScreen();
	};

	function changeScreen(){

		share_screen.style.display = "none";
		credits_screen.style.display = "none";
		button_share.setAttribute("selected","false");
		button_credits.setAttribute("selected","false");

		switch(CURRENT_SCREEN){
			case 0:
				window.GAME_PAUSED = false;

				// unless game has ended, then go to CREDITS no matter what.
				if(window.GAME_HAS_ENDED){
					CURRENT_SCREEN = 2;
					changeScreen();
				}

				break;
			case 1:
				window.GAME_PAUSED = true;
				share_screen.style.display = "block";
				button_share.setAttribute("selected","true");
				break;
			case 2:
				window.GAME_PAUSED = true;
				credits_screen.style.display = "block";
				button_credits.setAttribute("selected","true");
				break;
		}
	}

	var button_fs = document.getElementById("button_fs");
	button_fs.onclick = function(){

		var i = document.body;

		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ){
		 
			// go full-screen
			if (i.requestFullscreen) {
			    i.requestFullscreen();
			} else if (i.webkitRequestFullscreen) {
			    i.webkitRequestFullscreen();
			} else if (i.mozRequestFullScreen) {
			    i.mozRequestFullScreen();
			} else if (i.msRequestFullscreen) {
			    i.msRequestFullscreen();
			}

		}else{

			// exit full-screen
			if (document.exitFullscreen) {
		      document.exitFullscreen();
		    } else if (document.msExitFullscreen) {
		      document.msExitFullscreen();
		    } else if (document.mozCancelFullScreen) {
		      document.mozCancelFullScreen();
		    } else if (document.webkitExitFullscreen) {
		      document.webkitExitFullscreen();
		    }

		}

	};

	// Note that the API is still vendor-prefixed in browsers implementing it
	/*function onFSChange(event){
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement){
			button_fs.setAttribute("selected","false");
		}else{
			button_fs.setAttribute("selected","true");
		}
	}
	document.addEventListener("fullscreenchange", onFSChange, false);
	document.addEventListener("mozFullscreenchange", onFSChange, false);
	document.addEventListener("webkitFullscreenchange", onFSChange, false);
	document.addEventListener("msFullscreenchange", onFSChange, false);*/

})();