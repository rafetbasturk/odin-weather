import { header, currentContainer, footer, loadingContainer } from "./domElements"
import logoURL from "../images/logo.png"

export const ui = (() => {
  return {
    loadWeather: (name, country, temp, unit, feels, desc, high, low, icon) => {
      currentContainer.children[0].children[0].src = `https://openweathermap.org/img/wn/${icon}@4x.png`
      currentContainer.children[1].children[0].textContent = `${name}, ${country}`
      currentContainer.children[1].children[1].children[0].textContent = `${Math.round(temp)} °${unit === "metric" ? "C" : "F"}`
      currentContainer.children[1].children[2].textContent = `Feels like ${Math.round(feels)}°`
      currentContainer.children[1].children[3].textContent = `H: ${Math.round(high)}° L: ${Math.round(low)}°`
      currentContainer.children[0].children[1].textContent = `${desc.split(" ").map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join(" ")}`
    },
    isLoading: () => {
      document.body.append(loadingContainer)
    },
    hideIsLoading: () => {
      loadingContainer.remove()
    },
    getMetric: () => {
      let val;
      document.querySelector(".toggle-container").classList.contains("switch")
        ? val = "imperial"
        : val = "metric"
      return val
    },
    showError: (query) => {
      const alert = document.createElement("div")
      alert.classList.add("alert")
      alert.textContent = `There is no place called '${query}' in the database! Please try again.`

      document.body.append(alert)

      setTimeout(() => {
        alert.remove();
      }, 3000);
    },
    loadDOM: () => {
      document.body.appendChild(header)
      document.body.appendChild(currentContainer)
      document.body.appendChild(footer)
      header.children[0].children[0].src = logoURL
    }
  }
})()