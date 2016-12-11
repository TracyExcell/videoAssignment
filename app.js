window.onload = function() {

//video variables    
    
var video = document.getElementById("video1");


    
//button variables 
    
var playButton = document.getElementById("play_pause");
var volume = document.getElementById("volume");
var fullScreen = document.getElementById("full_screen");

    
    
//progres bar variables 

var time = document.getElementById("current");

//var duration = document.getElementById("duration"); // Not sure if I will need this variable in the final submission as duration time is set to 0.59 sec


var seek = document.getElementById("seekBar"); //progress bar


//Text Variables 

// THIS LINE FIXES THE PROBELM OF GETTING HIGHLIGHTtEXT TO FUNCTION. NAME ALL VARIABLES 
var text = document.getElementsByClassName("text");


    
//Event Listeners 
    
playButton.addEventListener("click", playPause, false);

volume.addEventListener("click", onOffVolume, false);

fullScreen.addEventListener("click", fullScreenMode, false);

//Attach "timeupdate" to the video rather than #current then it will function when being played.

video.addEventListener("timeupdate", currentTime, false);


video.addEventListener("timeupdate", progressBarUpdate, false);

// Video to play from place clicked on, on the seekBar

seek.addEventListener("click", function(event) {
            var onClick = event.offsetX / this.offsetWidth;
    //To do this compare the clicked value (x axis) (in relation to the element's width in this case 100), with the the value attribute set on the progress element:
            video.currentTime = onClick * video.duration;
            seek.value = onClick / 100; // creates the length value to where the video is currently at.
        });

video.addEventListener("timeupdate", highlightText, false); 


// Functions for video controls


// Play / pause video

function playPause() {
   if (video.paused === true){
        video.play();
        //Update button image to pause icon
       document.getElementById("play_pause").src = "icons/pause-icon.png";
    } else {
        video.pause();
        //Update button image to play icon
       document.getElementById("play_pause").src = "icons/play-icon.png";
    } 
     
}
 
// mute the video 

function onOffVolume() {
   if (video.muted === false){
       //mute
       video.muted = true;
        //Update button image to volume off icon
     document.getElementById("volume").src = "icons/volume-off-icon.png";
   } else {
       //unmute
       video.muted = false;
        //Update button image to volume on icon
       document.getElementById("volume").src = "icons/volume-on-icon.png";
   }
        
}

// Full Screen mode

 function fullScreenMode() {
            if (video.requestFullscreen) {
            		video.requestFullscreen();
        	} else if (video.mozRequestFullScreen) {
        		video.mozRequestFullScreen(); // Firefox
        	} else if (video.webkitRequestFullscreen) {
        		video.webkitRequestFullscreen(); // Chrome and Safari
        	}
        }
    

// Current time function 


function currentTime() {
    
    var currentMinutes = Math.floor(video.currentTime / 60);
	var currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
    
     if (currentSeconds < 10) {
    	currentSeconds = "0" + currentSeconds;
    }
    
    
  //  var durationMinutes = Math.floor(video.duration / 60);
	//var durationSeconds = Math.floor(video.duration - durationMinutes * 60);

	//if (durationSeconds < 10) {
		//durationSeconds = "0" + durationSeconds;
	//}

    
     time.innerHTML = currentMinutes + ":" + currentSeconds;
    // duration.innerHTML = currentMinutes + ":" + currentSeconds;
        
}

  // Updating the progress bar function  

function progressBarUpdate() {

            // Calculate the progress bar value
    		var value = (100 / video.duration) * video.currentTime;
    		// Update the progress bar value
    		seek.value = value;
        }
    


// Text position jumping when clicked on seekBar function

function textjump() {

 var transcript = document.getElementsById('transcript');
 var textJumping = transcript.getElementsByTagName('span'); // find the transcript 
           
    for (var i = 0; i < textJumping.length; i++) {
            textJumping[i].addEventListener("click"); 
            }
}
    


// Text highlighting as the video is playing 


function highlightText() {
  //Get current video time
  var highlightTime = video.currentTime;

  //Highlight span in sync with the current time
  function Highlight(n) {
    // Removed highlight from text
    for (var i = 0; i < text.length; i++) {
      text[i].classList.remove("highlighted");
    }
    //Add highlighted class
    text[n].classList.add("highlighted");
  }

  if (highlightTime > 0 && highlightTime < 4.13) {
    Highlight(0);
  } else if (highlightTime > 4.13 && highlightTime < 7.535) {
    Highlight(1);
  } else if (highlightTime > 7.535 && highlightTime < 11.27) {
    Highlight(2);
  } else if (highlightTime > 11.27 && highlightTime < 13.96) {
    Highlight(3);
  } else if (highlightTime > 13.96 && highlightTime < 17.94) {
    Highlight(4);
  } else if (highlightTime > 17.94 && highlightTime < 22.37) {
    Highlight(5);
  } else if (highlightTime > 22.37 && highlightTime < 26.88) {
    Highlight(6);
  } else if (highlightTime > 26.88 && highlightTime < 32.1) {
    Highlight(7);
  } else if (highlightTime > 32.1 && highlightTime < 34.73) {
    Highlight(8);
  } else if (highlightTime > 34.73 && highlightTime < 39.43) {
    Highlight(9);
  } else if (highlightTime > 39.43 && highlightTime < 42.35) {
    Highlight(10);
  } else if (highlightTime > 42.35 && highlightTime < 46.3) {
    Highlight(11);
  } else if (highlightTime > 46.3 && highlightTime < 49.27) {
    Highlight(12);
  } else if (highlightTime > 49.27 && highlightTime < 53.76) {
    Highlight(13);
  } else if (highlightTime > 53.76 && highlightTime < 57.78) {
    Highlight(14);
  } else if (highlightTime >  57.78 && highlightTime < 59.00) {
    Highlight(15);
  }
}
    
}; // End of the wndow.onload function