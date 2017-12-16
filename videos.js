/*jshint esversion: 6*/

//used to make clicking the videos play/pause the video
var videos = (function(){
    "use strict";

    document.getElementById("localization").onclick = function(){
    	if(document.getElementById("localization").paused)
    		document.getElementById("localization").play();
    	else
	    	document.getElementById("localization").pause();
    };

    document.getElementById("penalty_shot").onclick = function(){
    	if(document.getElementById("penalty_shot").paused)
    		document.getElementById("penalty_shot").play();
    	else
	    	document.getElementById("penalty_shot").pause();
    };

    document.getElementById("main_right_thruster_fail").onclick = function(){
    if(document.getElementById("main_right_thruster_fail").paused)
        document.getElementById("main_right_thruster_fail").play();
    else
        document.getElementById("main_right_thruster_fail").pause();
    };

    document.getElementById("left_right_thruster_fail").onclick = function(){
    if(document.getElementById("left_right_thruster_fail").paused)
        document.getElementById("left_right_thruster_fail").play();
    else
        document.getElementById("left_right_thruster_fail").pause();
    };
}());