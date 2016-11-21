window.addEventListener("load", function() {
	function query(e, q) {
		return Array.prototype.slice.call(e.querySelectorAll(q));
	}
	var sponsors = query(document, "div.sponsors");
	for (var i in sponsors) {
		var container = sponsors[i];
		var links = query(container, "a");
		for (var j in links) container.removeChild(links[j]);
		while(links.length > 0) {
			var ix = Math.floor(Math.random() * links.length);
			var a = links[ix];
			links = links.slice(0,ix).concat(links.slice(ix+1,links.length));
			container.appendChild(a);
		}
	}
}, false);