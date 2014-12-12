
//Toggle Div - Appers or Disappears
function toggle(div_id) {
	var div = document.getElementById(div_id);
	if ( div.style.display == 'none' ) {			
		div.style.display = 'block';
	} else {
		div.style.display = 'none';
	}
}

function computeBackGroundSize(searchBarVar) {
	if (typeof window.innerWidth != 'undefined') {
		windowHeight = window.innerHeight;
	} else {
		windowHeight = document.documentElement.clientHeight;
	}

	if ((windowHeight > document.body.parentNode.scrollHeight) && (windowHeight > document.body.parentNode.clientHeight)) {
		backgroundHeight = windowHeight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			backgroundHeight = document.body.parentNode.clientHeight;
		} else {
			backgroundHeight = document.body.parentNode.scrollHeight;
		}
	}

	var background = document.getElementById('background');
	background.style.height = backgroundHeight + 'px';
	var searchBar = document.getElementById(searchBarVar);
	searchBarHeight = screen.height/2-360;
	searchBar.style.top = searchBarHeight + 'px';
}

function computeSearchBarPosition(searchBarVar) {
	if (typeof window.innerWidth != 'undefined') {
		windowWidth = window.innerHeight;
	} else {
		windowWidth = document.documentElement.clientHeight;
	}

	if ((windowWidth > document.body.parentNode.scrollWidth) && (windowWidth > document.body.parentNode.clientWidth)) {
		searchBarPositionLeft = windowWidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			searchBarPositionLeft = document.body.parentNode.clientWidth;
		} else {
			searchBarPositionLeft = document.body.parentNode.scrollWidth;
		}
	}
	var searchBar = document.getElementById(searchBarVar);
	searchBarPositionLeft=searchBarPositionLeft/2-300;
	searchBar.style.left = searchBarPositionLeft + 'px';
}

function popup(windowname) {
	computeBackGroundSize(windowname);
	computeSearchBarPosition(windowname);
	toggle('background');
	toggle(windowname);		
}

//Ctrl launches the SearchBar and Esc Closes it.
document.onkeydown = function(e){	
	
	var div = document.getElementById('searchBar');
	var searchResults = document.getElementById('searchResults');
	
	//Open Search toolbar
	if(e.keyCode == 17 && div.style.display == 'none'){
		popup('searchBar');
		document.getElementById("searchBox").focus();
	}

	//Close Search toolbar
	if(e.keyCode == 27 && div.style.display != 'none'){
		searchResults.innerHTML = "";
		searchResults.style.display = 'none';
		popup('searchBar');
	}

	// Testing - Writing everything users writes into the searh box below
	if(e.keyCode != 27 && e.keyCode != 17 && div.style.display != 'none'){
		searchResults.style.display = 'block';
		searchResults.innerHTML += String.fromCharCode(e.keyCode);
	}
}

var div = document.createElement("div");
//TODO: Clean this up. Should read this from a seperate HTML file
var searchDiv = "<head> <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css' rel='stylesheet'></head><div id='background' style='display:none;'></div><div id='searchBar' style='display:none;'><div class='box'><div class='searchContainer'><span class='icon'><i class='fa fa-search'></i></span><input type='search' id='searchBox' placeholder='Search...' autofocus/></div><div id = 'searchResults' style='display:none;'></div></div>";
div.innerHTML = " " + searchDiv;
document.body.appendChild(div);
