//
//
//
let footer;

let dom = {
    tags: null,
    enum: function(){
	this.tags = document.getElementsByTagName("*");
	// an HTMLCollection
    },
    named: function(id){
	return this.tags.namedItem(id);
    },
    show: function(){
	for(i=0; i<this.tags.length; i++){
	    console.log("element=>",this.tags.item(i))
	}
    }
}

/// DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) { // Wait for DOM to load
    console.log(event);
    //footer = document.getElementById("footer")[0];
    dom.enum();
    dom.show();
    initialize();
});



function initialize(){
    console.log("bingo");
    footer = document.getElementById("footer");
    content = document.getElementById("content");
    content.innerHTML += "<br>blue  => html"
    content.innerHTML += "<br>black => body"
    content.innerHTML += "<br>red   => .page"

    dom.named("body").onclick = handleClick;
}



function handleClick(e){
    console.log(e);
    x = e.target;
    footer.innerHTML = `target=/${x.id}/${x.tagName}/`;
    //console.log(e.target.tagName);
}
