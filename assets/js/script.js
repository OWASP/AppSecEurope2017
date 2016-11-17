window.addEventListener("load", function() {
	function query(e, q) {
		return Array.prototype.slice.call(e.querySelectorAll(q));
	}
	var uls = query(document, "ul.sponsors");
	for (var i in uls) {
		var ul = uls[i];
		var lis = query(ul, "li");
		for (var j in lis) ul.removeChild(lis[j]);
		while(lis.length > 0) {
			var ix = Math.floor(Math.random() * lis.length);
			var li = lis[ix];
			lis = lis.slice(0,ix).concat(lis.slice(ix+1,lis.length));
			ul.appendChild(li);
		}
	}
}, false);