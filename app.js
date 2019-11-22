let element = function () {
	this.regex = [
		{name: 'id', query: /\#\w+/},
		{name: 'class', query: /\.\w+/g}
	];

	this.element = null;
	['section', 'article'].forEach(tag => {
		this[tag] = function (string = null) {
			this.tagname = tag;
			this.element = document.createElement(tag);

			// regex
			if (string){
				this.regex.forEach(r => {
					this.match = string.match(r.query);
					if (this.match){
						this.add(r.name);
					}
				});
			}

			return this.element;
		}
	});

	this.add = function (name) {
		switch (name){
			case 'class':
				this.match.forEach(c => {
					this.element.classList.add(c.match(/\w+/g)[0])
				});
				break;
			case 'id':
				this.element.id = this.match[0];
				break;
		}
	}
}

let elements = new element;
console.log(
	element.article('.myClass.myClass2#myId#myId'),
	document.create('article')
);

element.article('.myClass.myClass2#myId#myId');
element.create('article.myClass.myClass2#myId#myId');






















































































































