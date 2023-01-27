console.log("Todo OK.")

const Categories = {
	isInitialized: undefined,
	selectedIdx: undefined,
	icons: undefined,

	initialize() {
		const C = this
		isInitialized = true
		C.icons = document.querySelectorAll(".category-icon")
		C.selectIdx(0)

		C.icons.forEach(icon => {
			icon.addEventListener("mouseover", C.EFIconMouseOver)
		})
	},

	destroy() {
		const C = this
		C.isInitialized = undefined
		C.selectedIdx = undefined
		C.icons.forEach(icon => {
			icon.removeEventListener("mouseover", C.EFIconMouseOver)
		})
		C.icons = undefined
	},

	selectIdx(idx) {
		const C = Categories

		if (C.selectedIdx != undefined)
			C.unselectIdx(C.selectedIdx)
		C.selectedIdx = idx

		let infoIntro = document.querySelector(".info-intro")
		let infoMain = document.querySelector(".info-main")

		const colour = [
			{ filter: "brightness(0)" },
			{ filter: "brightness(100%)" }
		]

		const colourOptions = {
			duration: 300,
			easing: "ease",
			fill: "forwards"
		}

		icon = C.icons[idx]

		icon.animate(colour, colourOptions)

		switch (idx) {
			case 0:
				infoIntro.textContent = "¡Hola! Mi nombre es"
				infoMain.textContent = "Agustín Domenicale"
				break
			case 1:
				infoIntro.textContent = "Mi dirección de correo es"
				infoMain.textContent = "aguzztyngm@gmail.com"
				break
			case 2:
				infoIntro.textContent = "Nací el"
				infoMain.textContent = "19/01/1995"
				break
			case 3:
				infoIntro.textContent = "Resido en"
				infoMain.textContent = "Bahía Blanca, Argentina"
				break
			case 4:
				infoIntro.textContent = "Mi número de teléfono es"
				infoMain.textContent = "+542914238252"
				break
		}
	},

	unselectIdx(idx) {
		const C = this
		const colour = [
			{ filter: "brightness(100%)" },
			{ filter: "brightness(0)" }
		]

		const colourOptions = {
			duration: 0,
			fill: "forwards"
		}

		let icon = C.icons[idx]

		icon.animate(colour, colourOptions)
	},

	/* Event functions */
	EFIconMouseOver(e) {
		const C = Categories
		let icon = e.composedPath()[0]
		let idx

		// console.log(icon)

		/* Definitivamente se puede mejorar con alguna función, pero no tengo tiempo */
		switch (icon.alt) {
			case "Nombre":
				idx = 0
				break
			case "Mail":
				idx = 1
				break
			case "Cumpleaños":
				idx = 2
				break
			case "Ubicación":
				idx = 3
				break
			case "Teléfono":
				idx = 4
				break
			default:
				idx = 0
		}

		C.selectIdx(idx)
	}
}

window.onload = () => {
	Categories.initialize()
}