// header
const header = document.createElement("header")
header.classList.add("header")

// header - logo
const logoContainer = document.createElement("div")
logoContainer.classList.add("logo-container")
const logo = new Image()
logo.setAttribute("width", "24")
logo.setAttribute("height", "24")

const title = document.createElement("p")
title.textContent = "The Weather App"

logoContainer.appendChild(logo)
logoContainer.appendChild(title)

// header - search
const form = document.createElement("form")
const input = document.createElement("input")
input.classList.add("search")
input.setAttribute("type", "search")
input.setAttribute("placeholder", "Search by city name")
form.appendChild(input)

header.appendChild(logoContainer)
header.appendChild(form)

// main
const currentContainer = document.createElement("main")
currentContainer.classList.add("current-container")

// main - weather icon
const iconContainer = document.createElement("div")
iconContainer.classList.add("icon-container")

const image = new Image()
image.setAttribute("width", "128")
image.setAttribute("height", "128")

// main - weather icon - description
const iconDesc = document.createElement("p")

iconContainer.appendChild(image)
iconContainer.appendChild(iconDesc)

// main - current weather
const descContainer = document.createElement("div")
descContainer.classList.add("desc-container")

const city = document.createElement("p")
city.classList.add("city")

const tempContainer = document.createElement("div")
tempContainer.setAttribute("class", "temp-container")

const temp = document.createElement("p")
temp.setAttribute("class", "temp")

const toggleWrapper = document.createElement("div")
toggleWrapper.classList.add("toggle-wrapper")

const toggleContainer = document.createElement("div")
toggleContainer.classList.add("toggle-container")
const c = document.createElement("span")
c.textContent = "°C"
const f = document.createElement("span")
f.textContent = "°F"
const toggle = document.createElement("span")
toggle.classList.add("toggle")
toggleContainer.appendChild(toggle)

toggleWrapper.appendChild(c)
toggleWrapper.appendChild(toggleContainer)
toggleWrapper.appendChild(f)

tempContainer.appendChild(temp)
tempContainer.appendChild(toggleWrapper)

const feelsLike = document.createElement("p")

const maxMinTemps = document.createElement("p")

descContainer.appendChild(city)
descContainer.appendChild(tempContainer)
descContainer.appendChild(feelsLike)
descContainer.appendChild(maxMinTemps)

currentContainer.appendChild(iconContainer)
currentContainer.appendChild(descContainer)

// footer
const footer = document.createElement("footer")

footer.innerHTML = `
    <p>Coded by
      <a href="https://github.com/rafetbasturk" rel="noopener" target="_blank">Rafet</a> - 
      <a href="https://www.theodinproject.com/" rel="noopener" target="_blank">The Odin Project</a>
    </p>`

// loading
const loadingContainer = document.createElement("div")
loadingContainer.classList.add("loading-container")

const loadingIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>`

loadingContainer.insertAdjacentHTML("afterbegin", loadingIcon)

export { header, currentContainer, footer, loadingContainer }