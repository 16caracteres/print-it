const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Etape 2 : ajouter les addEventListener

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener("click", () => {
	console.log("Je clique sur la flèche gauche")
})

arrowRight.addEventListener("click", () => {
	console.log("Je clique sur la flèche droite")
})

// Etape 3 : insérer les bullets points

let dots = document.querySelector(".dots")

for(i = 0 ; i < slides.length; i++) {
	console.log(slides[i])
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dots.appendChild(dot)

	if (i === 0){
	dot.classList.add("dot_selected")
	}
}