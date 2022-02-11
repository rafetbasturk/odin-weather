/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/components/ui.js");
/* harmony import */ var _openWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWeather */ "./src/components/openWeather.js");


const app = (() => {
  const changeMetric = function () {
    this.classList.toggle("switch");
    const city = this.parentElement.parentElement.previousElementSibling.textContent.split(",")[0];
    const unit = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.getMetric();
    unit === "imperial" ? (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getData)(city, "imperial") : (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getData)(city, "metric");
  };

  const searchCity = e => {
    e.preventDefault();
    const city = e.target.children[0].value.trim();
    const unit = _ui__WEBPACK_IMPORTED_MODULE_0__.ui.getMetric();
    (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getData)(city, unit);
    e.target.reset();
  };

  const loadEventListeners = () => {
    document.querySelector(".toggle-container").addEventListener("click", changeMetric);
    document.querySelector("form").addEventListener("submit", searchCity);
  };

  return {
    init: () => {
      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.loadDOM();
      _ui__WEBPACK_IMPORTED_MODULE_0__.ui.isLoading();
      (0,_openWeather__WEBPACK_IMPORTED_MODULE_1__.getData)();
      loadEventListeners();
    }
  };
})();

/***/ }),

/***/ "./src/components/domElements.js":
/*!***************************************!*\
  !*** ./src/components/domElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "currentContainer": () => (/* binding */ currentContainer),
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "loadingContainer": () => (/* binding */ loadingContainer)
/* harmony export */ });
// header
const header = document.createElement("header");
header.classList.add("header"); // header - logo

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
const logo = new Image();
logo.setAttribute("width", "24");
logo.setAttribute("height", "24");
const title = document.createElement("p");
title.textContent = "The Weather App";
logoContainer.appendChild(logo);
logoContainer.appendChild(title); // header - search

const form = document.createElement("form");
const input = document.createElement("input");
input.classList.add("search");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Search by city name");
form.appendChild(input);
header.appendChild(logoContainer);
header.appendChild(form); // main

const currentContainer = document.createElement("main");
currentContainer.classList.add("current-container"); // main - weather icon

const iconContainer = document.createElement("div");
iconContainer.classList.add("icon-container");
const image = new Image();
image.setAttribute("width", "128");
image.setAttribute("height", "128"); // main - weather icon - description

const iconDesc = document.createElement("p");
iconContainer.appendChild(image);
iconContainer.appendChild(iconDesc); // main - current weather

const descContainer = document.createElement("div");
descContainer.classList.add("desc-container");
const city = document.createElement("p");
city.classList.add("city");
const tempContainer = document.createElement("div");
tempContainer.setAttribute("class", "temp-container");
const temp = document.createElement("p");
temp.setAttribute("class", "temp");
const toggleWrapper = document.createElement("div");
toggleWrapper.classList.add("toggle-wrapper");
const toggleContainer = document.createElement("div");
toggleContainer.classList.add("toggle-container");
const c = document.createElement("span");
c.textContent = "°C";
const f = document.createElement("span");
f.textContent = "°F";
const toggle = document.createElement("span");
toggle.classList.add("toggle");
toggleContainer.appendChild(toggle);
toggleWrapper.appendChild(c);
toggleWrapper.appendChild(toggleContainer);
toggleWrapper.appendChild(f);
tempContainer.appendChild(temp);
tempContainer.appendChild(toggleWrapper);
const feelsLike = document.createElement("p");
const maxMinTemps = document.createElement("p");
descContainer.appendChild(city);
descContainer.appendChild(tempContainer);
descContainer.appendChild(feelsLike);
descContainer.appendChild(maxMinTemps);
currentContainer.appendChild(iconContainer);
currentContainer.appendChild(descContainer); // footer

const footer = document.createElement("footer");
footer.innerHTML = `
    <p>Coded by
      <a href="https://github.com/rafetbasturk" rel="noopener" target="_blank">Rafet</a> - 
      <a href="https://www.theodinproject.com/" rel="noopener" target="_blank">The Odin Project</a>
    </p>`; // loading

const loadingContainer = document.createElement("div");
loadingContainer.classList.add("loading-container");
const loadingIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>`;
loadingContainer.insertAdjacentHTML("afterbegin", loadingIcon);


/***/ }),

/***/ "./src/components/ipInfo.js":
/*!**********************************!*\
  !*** ./src/components/ipInfo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegion": () => (/* binding */ getRegion)
/* harmony export */ });
const ip_key = "31eb3d93215b3b";
const getRegion = async () => {
  const res = await fetch(`https://ipinfo.io/?token=${ip_key}`, {
    mode: 'cors'
  });
  const data = await res.json();
  const {
    region
  } = data;
  return region;
};

/***/ }),

/***/ "./src/components/openWeather.js":
/*!***************************************!*\
  !*** ./src/components/openWeather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _ipInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipInfo */ "./src/components/ipInfo.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/components/ui.js");


const weather_url = "https://api.openweathermap.org/data/2.5/";
const weather_key = "ad344063e038369ae92741db9cd8bb63";
const getData = async (query, unit = "metric") => {
  _ui__WEBPACK_IMPORTED_MODULE_1__.ui.isLoading();
  query ? null : query = await (0,_ipInfo__WEBPACK_IMPORTED_MODULE_0__.getRegion)();

  try {
    const response = await fetch(`${weather_url}weather?q=${query}&appid=${weather_key}&units=${unit}`, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    const {
      name,
      sys: {
        country
      },
      main: {
        temp,
        temp_max: high,
        temp_min: low,
        feels_like: feels
      },
      weather: [{
        icon,
        description: desc
      }] // coord: { lat, lon }

    } = weatherData;
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideIsLoading();
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.loadWeather(name, country, temp, unit, feels, desc, high, low, icon); // const res = await fetch(`${weather_url}onecall?lat=${lat}&lon=${lon}&exclude=current,daily,minutely&appid=${weather_key}&units=${unit}`, { mode: 'cors' })
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
    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.hideIsLoading(); // console.log(error);

    _ui__WEBPACK_IMPORTED_MODULE_1__.ui.showError(query);
    getData();
  }
}; // const weather = fetch(`${weather_url}onecall?lat=33.44&lon=-94.04&appid=${weather_key}&units=metric`)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch((err) => console.log(err))

/***/ }),

/***/ "./src/components/ui.js":
/*!******************************!*\
  !*** ./src/components/ui.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/components/domElements.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");


const ui = (() => {
  return {
    loadWeather: (name, country, temp, unit, feels, desc, high, low, icon) => {
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[0].children[0].src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[1].children[0].textContent = `${name}, ${country}`;
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[1].children[1].children[0].textContent = `${Math.round(temp)} °${unit === "metric" ? "C" : "F"}`;
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[1].children[2].textContent = `Feels like ${Math.round(feels)}°`;
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[1].children[3].textContent = `H: ${Math.round(high)}° L: ${Math.round(low)}°`;
      _domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer.children[0].children[1].textContent = `${desc.split(" ").map(item => `${item.charAt(0).toUpperCase()}${item.slice(1)}`).join(" ")}`;
    },
    isLoading: () => {
      document.body.append(_domElements__WEBPACK_IMPORTED_MODULE_0__.loadingContainer);
    },
    hideIsLoading: () => {
      _domElements__WEBPACK_IMPORTED_MODULE_0__.loadingContainer.remove();
    },
    getMetric: () => {
      let val;
      document.querySelector(".toggle-container").classList.contains("switch") ? val = "imperial" : val = "metric";
      return val;
    },
    showError: query => {
      const alert = document.createElement("div");
      alert.classList.add("alert");
      alert.textContent = `There is no place called '${query}' in the database! Please try again.`;
      document.body.append(alert);
      setTimeout(() => {
        alert.remove();
      }, 3000);
    },
    loadDOM: () => {
      document.body.appendChild(_domElements__WEBPACK_IMPORTED_MODULE_0__.header);
      document.body.appendChild(_domElements__WEBPACK_IMPORTED_MODULE_0__.currentContainer);
      document.body.appendChild(_domElements__WEBPACK_IMPORTED_MODULE_0__.footer);
      _domElements__WEBPACK_IMPORTED_MODULE_0__.header.children[0].children[0].src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;
    }
  };
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&family=Gluten:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 10px;\n  font-family: \"Baloo Bhaijaan 2\", cursive;\n}\n\nbody {\n  font-size: 1.6rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  max-width: 600px;\n  font-family: \"Gluten\", cursive;\n  display: flex;\n  gap: 3rem;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.6rem 1rem;\n  font-size: 1.25rem;\n  text-align: center;\n}\n\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\nform {\n  flex: 1 0 auto;\n  display: flex;\n  justify-content: flex-end;\n}\n\ninput {\n  width: 100%;\n  max-width: 320px;\n  border-radius: 2rem;\n  border: 1px solid #23343f;\n  padding: 1rem 2.4rem;\n}\n\n.current-container {\n  width: 100%;\n  max-width: 450px;\n  padding: 1.2rem;\n  border-radius: 0.6rem;\n  display: flex;\n  background-color: #87cefa;\n  color: #23343f;\n}\n\n.desc-container,\n.icon-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.desc-container {\n  justify-content: space-between;\n  gap: 0.8rem;\n  flex: 2 0 auto;\n}\n\n.city {\n  font-size: 2.4rem;\n}\n\n.icon-container {\n  justify-content: center;\n  flex: 1 0 auto;\n}\n\n.temp-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.temp {\n  font-size: 3.6rem;\n}\n\n.toggle-wrapper {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.toggle-container {\n  width: 50px;\n  height: 24px;\n  padding: 0.2rem;\n  border: 1px solid #23343f;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n\n.toggle {\n  background: #23343f;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n}\n\n.switch {\n  justify-content: flex-end;\n}\n\nfooter {\n  padding: 1.6rem;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\na {\n  padding: 0 0.6rem;\n  text-decoration: none;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #23343fe0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n}\n\nsvg {\n  width: 96px;\n  height: 96px;\n  fill: #87cefa;\n  animation: rotate 2s linear infinite;\n}\n\n.alert {\n  padding: 1.6rem;\n  border-radius: 0.8rem;\n  color: white;\n  text-align: center;\n  position: fixed;\n  z-index: 10;\n  top: 1.6rem;\n  right: 1.6rem;\n  left: 1.6rem;\n  background: rgb(200, 75, 50);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,8BAA8B;EAC9B,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,eAAe;EACf,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,WAAW;EACX,aAAa;EACb,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&family=Gluten:wght@700&display=swap\");\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 10px;\n  font-family: \"Baloo Bhaijaan 2\", cursive;\n}\n\nbody {\n  font-size: 1.6rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  max-width: 600px;\n  font-family: \"Gluten\", cursive;\n  display: flex;\n  gap: 3rem;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.6rem 1rem;\n  font-size: 1.25rem;\n  text-align: center;\n}\n\n.logo-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\nform {\n  flex: 1 0 auto;\n  display: flex;\n  justify-content: flex-end;\n}\n\ninput {\n  width: 100%;\n  max-width: 320px;\n  border-radius: 2rem;\n  border: 1px solid #23343f;\n  padding: 1rem 2.4rem;\n}\n\n.current-container {\n  width: 100%;\n  max-width: 450px;\n  padding: 1.2rem;\n  border-radius: 0.6rem;\n  display: flex;\n  background-color: #87cefa;\n  color: #23343f;\n}\n\n.desc-container,\n.icon-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.desc-container {\n  justify-content: space-between;\n  gap: 0.8rem;\n  flex: 2 0 auto;\n}\n\n.city {\n  font-size: 2.4rem;\n}\n\n.icon-container {\n  justify-content: center;\n  flex: 1 0 auto;\n}\n\n.temp-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.temp {\n  font-size: 3.6rem;\n}\n\n.toggle-wrapper {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.toggle-container {\n  width: 50px;\n  height: 24px;\n  padding: 0.2rem;\n  border: 1px solid #23343f;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: pointer;\n}\n\n.toggle {\n  background: #23343f;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n}\n\n.switch {\n  justify-content: flex-end;\n}\n\nfooter {\n  padding: 1.6rem;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\na {\n  padding: 0 0.6rem;\n  text-decoration: none;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #23343fe0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 5;\n}\n\nsvg {\n  width: 96px;\n  height: 96px;\n  fill: #87cefa;\n  animation: rotate 2s linear infinite;\n}\n\n.alert {\n  padding: 1.6rem;\n  border-radius: 0.8rem;\n  color: white;\n  text-align: center;\n  position: fixed;\n  z-index: 10;\n  top: 1.6rem;\n  right: 1.6rem;\n  left: 1.6rem;\n  background: rgb(200, 75, 50);\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72d069d3af67d478868f.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ "./src/components/app.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


_components_app__WEBPACK_IMPORTED_MODULE_0__.app.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUVBdEYscURBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9pcEluZm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvb3BlbldlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aVwiXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSBcIi4vb3BlbldlYXRoZXJcIlxuXG5leHBvcnQgY29uc3QgYXBwID0gKCgpID0+IHtcblxuICBjb25zdCBjaGFuZ2VNZXRyaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic3dpdGNoXCIpXG4gICAgY29uc3QgY2l0eSA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQuc3BsaXQoXCIsXCIpWzBdXG4gICAgY29uc3QgdW5pdCA9IHVpLmdldE1ldHJpYygpXG4gICAgdW5pdCA9PT0gXCJpbXBlcmlhbFwiXG4gICAgICA/IGdldERhdGEoY2l0eSwgXCJpbXBlcmlhbFwiKVxuICAgICAgOiBnZXREYXRhKGNpdHksIFwibWV0cmljXCIpXG4gIH1cblxuICBjb25zdCBzZWFyY2hDaXR5ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQuY2hpbGRyZW5bMF0udmFsdWUudHJpbSgpXG4gICAgY29uc3QgdW5pdCA9IHVpLmdldE1ldHJpYygpXG4gICAgZ2V0RGF0YShjaXR5LCB1bml0KVxuICAgIGUudGFyZ2V0LnJlc2V0KClcbiAgfVxuXG4gIGNvbnN0IGxvYWRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1jb250YWluZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU1ldHJpYylcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHNlYXJjaENpdHkpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgIHVpLmxvYWRET00oKVxuICAgICAgdWkuaXNMb2FkaW5nKClcbiAgICAgIGdldERhdGEoKVxuICAgICAgbG9hZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cbn0pKCkiLCIvLyBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIilcbmhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG5cbi8vIGhlYWRlciAtIGxvZ29cbmNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5sb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRhaW5lclwiKVxuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpXG5sb2dvLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMjRcIilcbmxvZ28uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMjRcIilcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxudGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBXZWF0aGVyIEFwcFwiXG5cbmxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbylcbmxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbi8vIGhlYWRlciAtIHNlYXJjaFxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuaW5wdXQuY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKVxuaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlYXJjaFwiKVxuaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2ggYnkgY2l0eSBuYW1lXCIpXG5mb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcilcbmhlYWRlci5hcHBlbmRDaGlsZChmb3JtKVxuXG4vLyBtYWluXG5jb25zdCBjdXJyZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIilcbmN1cnJlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtY29udGFpbmVyXCIpXG5cbi8vIG1haW4gLSB3ZWF0aGVyIGljb25cbmNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5pY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKVxuXG5jb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG5pbWFnZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEyOFwiKVxuaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTI4XCIpXG5cbi8vIG1haW4gLSB3ZWF0aGVyIGljb24gLSBkZXNjcmlwdGlvblxuY29uc3QgaWNvbkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG5pY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKVxuaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uRGVzYylcblxuLy8gbWFpbiAtIGN1cnJlbnQgd2VhdGhlclxuY29uc3QgZGVzY0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmRlc2NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2MtY29udGFpbmVyXCIpXG5cbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuY2l0eS5jbGFzc0xpc3QuYWRkKFwiY2l0eVwiKVxuXG5jb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudGVtcENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRlbXAtY29udGFpbmVyXCIpXG5cbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxudGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRlbXBcIilcblxuY29uc3QgdG9nZ2xlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnRvZ2dsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRvZ2dsZS13cmFwcGVyXCIpXG5cbmNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnRvZ2dsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLWNvbnRhaW5lclwiKVxuY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5jLnRleHRDb250ZW50ID0gXCLCsENcIlxuY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG5mLnRleHRDb250ZW50ID0gXCLCsEZcIlxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbnRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlXCIpXG50b2dnbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlKVxuXG50b2dnbGVXcmFwcGVyLmFwcGVuZENoaWxkKGMpXG50b2dnbGVXcmFwcGVyLmFwcGVuZENoaWxkKHRvZ2dsZUNvbnRhaW5lcilcbnRvZ2dsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZilcblxudGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKVxudGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVXcmFwcGVyKVxuXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG5jb25zdCBtYXhNaW5UZW1wcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbmRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eSlcbmRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcilcbmRlc2NDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKVxuZGVzY0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXhNaW5UZW1wcylcblxuY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKVxuY3VycmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjQ29udGFpbmVyKVxuXG4vLyBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcblxuZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICA8cD5Db2RlZCBieVxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWZldGJhc3R1cmtcIiByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPlJhZmV0PC9hPiAtIFxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIiByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBPZGluIFByb2plY3Q8L2E+XG4gICAgPC9wPmBcblxuLy8gbG9hZGluZ1xuY29uc3QgbG9hZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmxvYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvYWRpbmctY29udGFpbmVyXCIpXG5cbmNvbnN0IGxvYWRpbmdJY29uID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNHB4XCIgZmlsbD1cIiMwMDAwMDBcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6XCIvPjwvc3ZnPmBcblxubG9hZGluZ0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGxvYWRpbmdJY29uKVxuXG5leHBvcnQgeyBoZWFkZXIsIGN1cnJlbnRDb250YWluZXIsIGZvb3RlciwgbG9hZGluZ0NvbnRhaW5lciB9IiwiY29uc3QgaXBfa2V5ID0gXCIzMWViM2Q5MzIxNWIzYlwiXG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2lwaW5mby5pby8/dG9rZW49JHtpcF9rZXl9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc3QgeyByZWdpb24gfSA9IGRhdGFcbiAgcmV0dXJuIHJlZ2lvblxufSIsImltcG9ydCB7IGdldFJlZ2lvbiB9IGZyb20gXCIuL2lwSW5mb1wiXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpXCJcblxuY29uc3Qgd2VhdGhlcl91cmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9cIlxuY29uc3Qgd2VhdGhlcl9rZXkgPSBcImFkMzQ0MDYzZTAzODM2OWFlOTI3NDFkYjljZDhiYjYzXCJcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAocXVlcnksIHVuaXQgPSBcIm1ldHJpY1wiKSA9PiB7XG4gIHVpLmlzTG9hZGluZygpXG4gIHF1ZXJ5ID8gbnVsbCA6IHF1ZXJ5ID0gYXdhaXQgZ2V0UmVnaW9uKClcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3dlYXRoZXJfdXJsfXdlYXRoZXI/cT0ke3F1ZXJ5fSZhcHBpZD0ke3dlYXRoZXJfa2V5fSZ1bml0cz0ke3VuaXR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBzeXM6IHsgY291bnRyeSB9LFxuICAgICAgbWFpbjogeyB0ZW1wLCB0ZW1wX21heDogaGlnaCwgdGVtcF9taW46IGxvdywgZmVlbHNfbGlrZTogZmVlbHMgfSxcbiAgICAgIHdlYXRoZXI6IFt7IGljb24sIGRlc2NyaXB0aW9uOiBkZXNjIH1dLFxuICAgICAgLy8gY29vcmQ6IHsgbGF0LCBsb24gfVxuICAgIH0gPSB3ZWF0aGVyRGF0YVxuXG4gICAgdWkuaGlkZUlzTG9hZGluZygpXG4gICAgdWkubG9hZFdlYXRoZXIobmFtZSwgY291bnRyeSwgdGVtcCwgdW5pdCwgZmVlbHMsIGRlc2MsIGhpZ2gsIGxvdywgaWNvbilcblxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3dlYXRoZXJfdXJsfW9uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9Y3VycmVudCxkYWlseSxtaW51dGVseSZhcHBpZD0ke3dlYXRoZXJfa2V5fSZ1bml0cz0ke3VuaXR9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICAvLyBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAvLyBjb25zdCB7IGhvdXJseSB9ID0gZm9yZWNhc3RcbiAgICAvLyBob3VybHkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAvLyAgIGNvbnN0IHtcbiAgICAvLyAgICAgZHQsICBcbiAgICAvLyAgICAgdGVtcCxcbiAgICAvLyAgICAgZmVlbHNfbGlrZSxcbiAgICAvLyAgICAgY2xvdWRzLFxuICAgIC8vICAgICB3aW5kX2RlZyxcbiAgICAvLyAgICAgaHVtaWRpdHksXG4gICAgLy8gICAgIHByZXNzdXJlLFxuICAgIC8vICAgICB3ZWF0aGVyOiBbeyBpY29uIH1dXG4gICAgLy8gICB9ID0gaXRlbVxuICAgIC8vICAgY29uc29sZS50YWJsZSh7IGR0LCB0ZW1wLCBmZWVsc19saWtlLCBjbG91ZHMsIHdpbmRfZGVnLCBodW1pZGl0eSwgcHJlc3N1cmUsIGljb24gfSk7XG4gICAgLy8gfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB1aS5oaWRlSXNMb2FkaW5nKClcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgdWkuc2hvd0Vycm9yKHF1ZXJ5KVxuICAgIGdldERhdGEoKVxuICB9XG59XG5cbi8vIGNvbnN0IHdlYXRoZXIgPSBmZXRjaChgJHt3ZWF0aGVyX3VybH1vbmVjYWxsP2xhdD0zMy40NCZsb249LTk0LjA0JmFwcGlkPSR7d2VhdGhlcl9rZXl9JnVuaXRzPW1ldHJpY2ApXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxuLy8gICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSkiLCJpbXBvcnQgeyBoZWFkZXIsIGN1cnJlbnRDb250YWluZXIsIGZvb3RlciwgbG9hZGluZ0NvbnRhaW5lciB9IGZyb20gXCIuL2RvbUVsZW1lbnRzXCJcbmltcG9ydCBsb2dvVVJMIGZyb20gXCIuLi9pbWFnZXMvbG9nby5wbmdcIlxuXG5leHBvcnQgY29uc3QgdWkgPSAoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGxvYWRXZWF0aGVyOiAobmFtZSwgY291bnRyeSwgdGVtcCwgdW5pdCwgZmVlbHMsIGRlc2MsIGhpZ2gsIGxvdywgaWNvbikgPT4ge1xuICAgICAgY3VycmVudENvbnRhaW5lci5jaGlsZHJlblswXS5jaGlsZHJlblswXS5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1ANHgucG5nYFxuICAgICAgY3VycmVudENvbnRhaW5lci5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGAke25hbWV9LCAke2NvdW50cnl9YFxuICAgICAgY3VycmVudENvbnRhaW5lci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCl9IMKwJHt1bml0ID09PSBcIm1ldHJpY1wiID8gXCJDXCIgOiBcIkZcIn1gXG4gICAgICBjdXJyZW50Q29udGFpbmVyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtNYXRoLnJvdW5kKGZlZWxzKX3CsGBcbiAgICAgIGN1cnJlbnRDb250YWluZXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBgSDogJHtNYXRoLnJvdW5kKGhpZ2gpfcKwIEw6ICR7TWF0aC5yb3VuZChsb3cpfcKwYFxuICAgICAgY3VycmVudENvbnRhaW5lci5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IGAke2Rlc2Muc3BsaXQoXCIgXCIpLm1hcChpdGVtID0+IGAke2l0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtpdGVtLnNsaWNlKDEpfWApLmpvaW4oXCIgXCIpfWBcbiAgICB9LFxuICAgIGlzTG9hZGluZzogKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobG9hZGluZ0NvbnRhaW5lcilcbiAgICB9LFxuICAgIGhpZGVJc0xvYWRpbmc6ICgpID0+IHtcbiAgICAgIGxvYWRpbmdDb250YWluZXIucmVtb3ZlKClcbiAgICB9LFxuICAgIGdldE1ldHJpYzogKCkgPT4ge1xuICAgICAgbGV0IHZhbDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLWNvbnRhaW5lclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzd2l0Y2hcIilcbiAgICAgICAgPyB2YWwgPSBcImltcGVyaWFsXCJcbiAgICAgICAgOiB2YWwgPSBcIm1ldHJpY1wiXG4gICAgICByZXR1cm4gdmFsXG4gICAgfSxcbiAgICBzaG93RXJyb3I6IChxdWVyeSkgPT4ge1xuICAgICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICBhbGVydC5jbGFzc0xpc3QuYWRkKFwiYWxlcnRcIilcbiAgICAgIGFsZXJ0LnRleHRDb250ZW50ID0gYFRoZXJlIGlzIG5vIHBsYWNlIGNhbGxlZCAnJHtxdWVyeX0nIGluIHRoZSBkYXRhYmFzZSEgUGxlYXNlIHRyeSBhZ2Fpbi5gXG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGFsZXJ0KVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYWxlcnQucmVtb3ZlKCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9LFxuICAgIGxvYWRET006ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXJyZW50Q29udGFpbmVyKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgICBoZWFkZXIuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3JjID0gbG9nb1VSTFxuICAgIH1cbiAgfVxufSkoKSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rQmhhaWphYW4rMiZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxvbytCaGFpamFhbisyJmZhbWlseT1HbHV0ZW46d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFsb28gQmhhaWphYW4gMlxcXCIsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkdsdXRlblxcXCIsIGN1cnNpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNnJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjMzNDNmO1xcbiAgcGFkZGluZzogMXJlbSAyLjRyZW07XFxufVxcblxcbi5jdXJyZW50LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Y2VmYTtcXG4gIGNvbG9yOiAjMjMzNDNmO1xcbn1cXG5cXG4uZGVzYy1jb250YWluZXIsXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC44cmVtO1xcbiAgZmxleDogMiAwIGF1dG87XFxufVxcblxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbn1cXG5cXG4uaWNvbi1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRlbXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiAzLjZyZW07XFxufVxcblxcbi50b2dnbGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjRyZW07XFxufVxcblxcbi50b2dnbGUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzMzQzZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICBiYWNrZ3JvdW5kOiAjMjMzNDNmO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmEge1xcbiAgcGFkZGluZzogMCAwLjZyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2FkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzIzMzQzZmUwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgaGVpZ2h0OiA5NnB4O1xcbiAgZmlsbDogIzg3Y2VmYTtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmFsZXJ0IHtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiAxLjZyZW07XFxuICByaWdodDogMS42cmVtO1xcbiAgbGVmdDogMS42cmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDIwMCwgNzUsIDUwKTtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJhbG9vK0JoYWlqYWFuKzImZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rQmhhaWphYW4rMiZmYW1pbHk9R2x1dGVuOndnaHRANzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkJhbG9vIEJoYWlqYWFuIDJcXFwiLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHbHV0ZW5cXFwiLCBjdXJzaXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjZyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuZm9ybSB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzMzQzZjtcXG4gIHBhZGRpbmc6IDFyZW0gMi40cmVtO1xcbn1cXG5cXG4uY3VycmVudC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XFxuICBjb2xvcjogIzIzMzQzZjtcXG59XFxuXFxuLmRlc2MtY29udGFpbmVyLFxcbi5pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjLWNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuOHJlbTtcXG4gIGZsZXg6IDIgMCBhdXRvO1xcbn1cXG5cXG4uY2l0eSB7XFxuICBmb250LXNpemU6IDIuNHJlbTtcXG59XFxuXFxuLmljb24tY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMy42cmVtO1xcbn1cXG5cXG4udG9nZ2xlLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4udG9nZ2xlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzM0M2Y7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUge1xcbiAgYmFja2dyb3VuZDogIzIzMzQzZjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5hIHtcXG4gIHBhZGRpbmc6IDAgMC42cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9hZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMyMzM0M2ZlMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDU7XFxufVxcblxcbnN2ZyB7XFxuICB3aWR0aDogOTZweDtcXG4gIGhlaWdodDogOTZweDtcXG4gIGZpbGw6ICM4N2NlZmE7XFxuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5hbGVydCB7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRvcDogMS42cmVtO1xcbiAgcmlnaHQ6IDEuNnJlbTtcXG4gIGxlZnQ6IDEuNnJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYigyMDAsIDc1LCA1MCk7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIlxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcblxuYXBwLmluaXQoKSJdLCJuYW1lcyI6WyJ1aSIsImdldERhdGEiLCJhcHAiLCJjaGFuZ2VNZXRyaWMiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaXR5IiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0ZXh0Q29udGVudCIsInNwbGl0IiwidW5pdCIsImdldE1ldHJpYyIsInNlYXJjaENpdHkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInZhbHVlIiwidHJpbSIsInJlc2V0IiwibG9hZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJsb2FkRE9NIiwiaXNMb2FkaW5nIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImxvZ29Db250YWluZXIiLCJsb2dvIiwiSW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJ0aXRsZSIsImFwcGVuZENoaWxkIiwiZm9ybSIsImlucHV0IiwiY3VycmVudENvbnRhaW5lciIsImljb25Db250YWluZXIiLCJpbWFnZSIsImljb25EZXNjIiwiZGVzY0NvbnRhaW5lciIsInRlbXBDb250YWluZXIiLCJ0ZW1wIiwidG9nZ2xlV3JhcHBlciIsInRvZ2dsZUNvbnRhaW5lciIsImMiLCJmIiwiZmVlbHNMaWtlIiwibWF4TWluVGVtcHMiLCJmb290ZXIiLCJpbm5lckhUTUwiLCJsb2FkaW5nQ29udGFpbmVyIiwibG9hZGluZ0ljb24iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpcF9rZXkiLCJnZXRSZWdpb24iLCJyZXMiLCJmZXRjaCIsIm1vZGUiLCJkYXRhIiwianNvbiIsInJlZ2lvbiIsIndlYXRoZXJfdXJsIiwid2VhdGhlcl9rZXkiLCJxdWVyeSIsInJlc3BvbnNlIiwid2VhdGhlckRhdGEiLCJuYW1lIiwic3lzIiwiY291bnRyeSIsIm1haW4iLCJ0ZW1wX21heCIsImhpZ2giLCJ0ZW1wX21pbiIsImxvdyIsImZlZWxzX2xpa2UiLCJmZWVscyIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkZXNjIiwiaGlkZUlzTG9hZGluZyIsImxvYWRXZWF0aGVyIiwiZXJyb3IiLCJzaG93RXJyb3IiLCJsb2dvVVJMIiwic3JjIiwiTWF0aCIsInJvdW5kIiwibWFwIiwiaXRlbSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwiYm9keSIsImFwcGVuZCIsInJlbW92ZSIsInZhbCIsImNvbnRhaW5zIiwiYWxlcnQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==