//
//
//
//
//
//
//
let footer;

/// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) { // Wait for DOM to load
    console.log(event);
    footer = document.getElementsByClassName("footer")[0];
    x = document.getElementsByTagName("*");
    console.log("DOMelements=>",x.length);
    //    footer.innerHTML += "<p>"
    let s = "";
    for (i=0; i<x.length; i++){
	console.log("elementID=>",x[i].id,"/",x[i].tagName);
	s += "elementID=>" + x[i].id + "/" + x[i].tagName + "__:__"
    }
    footer.innerHTML = `<p>${s}</p>`
    initialize();
});

function initialize(){
    console.log("bingo");
    footer = document.getElementsByClassName("footer");
    content = document.getElementsByClassName("content")[0];
    content.innerHTML += "<br>blue  => html"
    content.innerHTML += "<br>black => body"
    content.innerHTML += "<br>red   => .page"
	
}
