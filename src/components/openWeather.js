import { getRegion } from "./ipInfo"
import { ui } from "./ui"

const weather_url = "https://api.openweathermap.org/data/2.5/"
const weather_key = "ad344063e038369ae92741db9cd8bb63"

export const getData = async (query, unit = "metric") => {
  ui.isLoading()
  query ? null : query = await getRegion()
  try {
    const response = await fetch(`${weather_url}weather?q=${query}&appid=${weather_key}&units=${unit}`, { mode: 'cors' })
    const weatherData = await response.json()
    const {
      name,
      sys: { country },
      main: { temp, temp_max: high, temp_min: low, feels_like: feels },
      weather: [{ icon, description: desc }],
      // coord: { lat, lon }
    } = weatherData

    ui.hideIsLoading()
    ui.loadWeather(name, country, temp, unit, feels, desc, high, low, icon)

    // const res = await fetch(`${weather_url}onecall?lat=${lat}&lon=${lon}&exclude=current,daily,minutely&appid=${weather_key}&units=${unit}`, { mode: 'cors' })
    // const forecast = await res.json()
    // const { hourly } = forecast
    // hourly.forEach(item => {
    //   const {
    //     dt,  
    //     temp,
    //     feels_like,
    //     clouds,
    //     wind_deg,
    //     humidity,
    //     pressure,
    //     weather: [{ icon }]
    //   } = item
    //   console.table({ dt, temp, feels_like, clouds, wind_deg, humidity, pressure, icon });
    // })
  } catch (error) {
    ui.hideIsLoading()
    // console.log(error);
    ui.showError(query)
    getData()
  }
}

// const weather = fetch(`${weather_url}onecall?lat=33.44&lon=-94.04&appid=${weather_key}&units=metric`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch((err) => console.log(err))