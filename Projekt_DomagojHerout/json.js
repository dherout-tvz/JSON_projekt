var i;
var kittens= [{
	"name": "Louie",
	"gender": "Male",
	"type": "American Shorthair",
	"size": "Small",
}, {
	"name": "Nami",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Ariel",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Bell",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Ochibi",
	"gender": "Male",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Purla",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Bella",
	"gender": "Female",
	"type": "Calico Mix",
	"size": "Small",
}, {
	"name": "Callista",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Emerald",
	"gender": "Female",
	"type": "Domestic Medium Hair",
	"size": "Small",
}, {
	"name": "Urchin",
	"gender": "Female",
	"type": "American Shorthair",
	"size": "Small",
}, {
	"name": "Cheetah",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Pippi",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Medium",
}, {
	"name": "Cream Puff",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}, {
	"name": "Zia",
	"gender": "Female",
	"type": "Domestic Shorthair",
	"size": "Small",
}];


function napraviTablicu() {
	for (i = 0; i < kittens.length; i++) {
		var element = document.createElement('div');
                var image = document.createElement("img");
                image.setAttribute("src", "images/" + i + ".jpg");
                image.classList.add('img-style');
                var name = document.createElement('ime');
                var ime = document.createTextNode(kittens[i].name);
                name.appendChild(ime);
		var tekst = document.createElement('dodatno');
                var spol = document.createTextNode("Gender : " + kittens[i].gender);
                var tip = document.createTextNode("Type : " + kittens[i].type);
                var velicina = document.createTextNode("Size : " + kittens[i].size);
                var br = document.createElement("br")
                var br1 = document.createElement("br");
                var br2 = document.createElement("br");
		var hr = document.createElement("hr")
                var hr1 = document.createElement("hr");
                var hr2 = document.createElement("hr");
		tekst.appendChild(spol);
		tekst.appendChild(br1);
		tekst.appendChild(hr1);
		tekst.appendChild(tip);
		tekst.appendChild(br2);
		tekst.appendChild(hr2);
		tekst.appendChild(velicina);
		element.appendChild(name);
                element.appendChild(br);
                element.appendChild(image);
		element.appendChild(tekst);
                element.classList.add('element');
                document.getElementById("wrap").appendChild(element);
	}  
}