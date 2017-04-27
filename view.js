/*jshint esversion: 6*/

var view = (function(){
    "use strict";

    window.onload = function(){
    	switch(location.search){
    		case '?page=home':
    			document.getElementById("home_link").onclick();
    			break;
    		case '?page=software':
    			document.getElementById("software_link").onclick();
    			break;
    		case '?page=CSCC09':
    			document.getElementById("CSCC09_link").onclick();
    			break;
    		case '?page=CSCC10':
    			document.getElementById("CSCC10_link").onclick();
    			break;
    		case '?page=CSCC24':
    			document.getElementById("CSCC24_link").onclick();
    			break;
    		case '?page=CSCC43':
    			document.getElementById("CSCC43_link").onclick();
    			break;
    		case '?page=CSCC69':
    			document.getElementById("CSCC69_link").onclick();
    			break;
    		case '?page=CSCC85':
    			document.getElementById("CSCC85_link").onclick();
    			break;
    		default:
    			document.getElementById("home_link").onclick();
    			break;
    	}
    };

    document.getElementById("home_link").onclick = function(){
    	var path = 'index.html?page=home';
    	history.pushState({path: path}, "", path);
    	hide_pages(["inline", "none", "none", "none", "none", "none", "none", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("software_link").onclick = function(){
    	var path = 'index.html?page=software';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "inline", "none", "none", "none", "none", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC09_link").onclick = function(){
    	var path = 'index.html?page=CSCC09';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "inline", "none", "none", "none", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC10_link").onclick = function(){
    	var path = 'index.html?page=CSCC10';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "none", "inline", "none", "none", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC24_link").onclick = function(){
    	var path = 'index.html?page=CSCC24';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "none", "none", "inline", "none", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC43_link").onclick = function(){
    	var path = 'index.html?page=CSCC43';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "none", "none", "none", "inline", "none", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC69_link").onclick = function(){
    	var path = 'index.html?page=CSCC69';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "none", "none", "none", "none", "inline", "none"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

    document.getElementById("CSCC85_link").onclick = function(){
    	var path = 'index.html?page=CSCC85';
    	history.pushState({path: path}, "", path);
    	hide_pages(["none", "none", "none", "none", "none", "none", "none", "inline"]);
	    if(document.getElementById("collapse").className === "navbar-toggle")
	    	document.getElementById("collapse").click()
    };

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


    var hide_pages = function(pages){
    	document.getElementById("about").style.display = pages[0];
	    document.getElementById("software").style.display = pages[1];
	    document.getElementById("CSCC09").style.display = pages[2];
	    document.getElementById("CSCC10").style.display = pages[3];
	    document.getElementById("CSCC24").style.display = pages[4];
	    document.getElementById("CSCC43").style.display = pages[5];
	    document.getElementById("CSCC69").style.display = pages[6];
	    document.getElementById("CSCC85").style.display = pages[7];
    }    
}());