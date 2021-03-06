Element.prototype.getText = function() {
	if (this.innerText == undefined) {
		return this.textContent
	} else {
		return this.innerText
	}
};
Element.prototype.setText = function(a) {
	if (this.innerText == undefined) {
		this.textContent = a || ""
	} else {
		this.innerText = a || ""
	}
};
Element.prototype.getFinalStyle = function(c, b) {
	var a;
	if (window.getComputedStyle) {
		a = window.getComputedStyle(this, null)[c]
	} else {
		a = this.currentStyle[c]
	}
	if (b != undefined) {
		a = a * b + "px"
	}
	return a.substring(0, a.toString().length - 2)
};
Element.prototype.mlellipsis = function(h) {
	var g = this.getText();
	var f = this.getAttribute("title");
	if (f == null) {
		this.setAttribute("title", g)
	} else {
		this.setText(f)
	}
	var e = this.getFinalStyle("fontSize");
	if (/msie/i.test(navigator.userAgent)) {
		var c = this.getFinalStyle("lineHeight", e)
	} else {
		var c = this.getFinalStyle("lineHeight")
	}
	var a = this.clientHeight;
	if (c == "norm") {
		c = Number(e * 1.5);
		var b = this.getAttribute("style") || "";
		this.setAttribute("style", b + ";line-height:" + c + "px")
	} else {
		c = Number(c)
	}
	var d = Math.floor(h * c);
	if (a >= d) {
		g = this.getText();
		while (d * 3 < this.clientHeight) {
			this.setText(g.substring(0, g.length / 2));
			g = this.getText()
		}
		while (d < this.clientHeight) {
			g = this.getText();
			this.setText(g.replace(/(\s)*([a-zA-Z0-9]?|\W)(\.\.\.)?$/, "..."))
		}
	}
};