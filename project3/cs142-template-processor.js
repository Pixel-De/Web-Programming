function Cs142TemplateProcessor(template){
	this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
		var tur = this.template.match(/{{[^{}]*}}/g); 
		var r = this.template;
		for (var i = 0; i < tur.length; i++) {
			var key = tur[i].substr(2, tur[i].length - 4);
			var oor = dictionary[key] || " ";
			r = r.replace(tur[i], oor);
		}
		return r;
};