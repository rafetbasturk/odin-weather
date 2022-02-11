import { ui } from "./ui"
import { getData } from "./openWeather"

export const app = (() => {

  const changeMetric = function () {
    this.classList.toggle("switch")
    const city = this.parentElement.parentElement.previousElementSibling.textContent.split(",")[0]
    const unit = ui.getMetric()
    unit === "imperial"
      ? getData(city, "imperial")
      : getData(city, "metric")
  }

  const searchCity = (e) => {
    e.preventDefault()
    const city = e.target.children[0].value.trim()
    const unit = ui.getMetric()
    getData(city, unit)
    e.target.reset()
  }

  const loadEventListeners = () => {
    document.querySelector(".toggle-container").addEventListener("click", changeMetric)
    document.querySelector("form").addEventListener("submit", searchCity)
  }

  return {
    init: () => {
      ui.loadDOM()
      ui.isLoading()
      getData()
      loadEventListeners()
    }
  }
})()