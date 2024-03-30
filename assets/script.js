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


const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

const dots = document.querySelector(".dots")

for(i = 0 ; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dots.appendChild(dot)
	if ( i === 0 ) {
		dot.classList.add("dot_selected")
	}
}

const imageBanner = document.querySelector(".banner-img")
const tagLine = document.querySelector("#banner p")
const dotArray = document.querySelectorAll(".dot")
let index = 0

arrowLeft.addEventListener("click", () => {
	if(index > 0) {
		dotArray[index].classList.remove("dot_selected")
		index--
		imageBanner.setAttribute("src", "./assets/images/slideshow/" + slides[index]["image"])
		tagLine.innerHTML = slides[index]["tagLine"]
		dotArray[index].classList.add("dot_selected")
	} else {
		dotArray[index].classList.remove("dot_selected")
		index = slides.length - 1
		imageBanner.setAttribute("src", "./assets/images/slideshow/" + slides[index]["image"])
		tagLine.innerHTML = slides[index]["tagLine"]
		dotArray[index].classList.add("dot_selected")
	}

})

arrowRight.addEventListener("click", () => {
	if(index < slides.length - 1) {
		dotArray[index].classList.remove("dot_selected")
		index++
		imageBanner.setAttribute("src", "./assets/images/slideshow/" + slides[index]["image"])
		tagLine.innerHTML = slides[index]["tagLine"]
		dotArray[index].classList.add("dot_selected")
	} else {
		dotArray[index].classList.remove("dot_selected")
		index = 0
		imageBanner.setAttribute("src", "./assets/images/slideshow/" + slides[index]["image"])
		tagLine.innerHTML = slides[index]["tagLine"]
		dotArray[index].classList.add("dot_selected")
	}
})
