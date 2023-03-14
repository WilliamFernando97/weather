import { weather_data } from './data.js';


let loadDayForecastData = () => {
    let data = weather_data ; 

    let [ guayaquil, ] = data;

    let {city,date,mintemperature, maxtemperature,cloudiness,wind,rainfall,forecast_today,} = guayaquil;


    let city_gye = `<h5 id="city" class="text-golden"> ${city} </h5>`;
    let date_gye = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0"> ${date} </h5>`;
    let maxt_gye = `<span id="maxtemperature">${maxtemperature}</span>`;
    let mint_gye = `<span id="mintemperature" class="opacity-6 mx-2"> ${mintemperature}</span>`;
    let cloudy_gye = `<h6 id="cloudiness" class="text-golden mb-0">${cloudiness}</h6>`;
    let windy_gye = `<h6 id="wind" class="text-golden mb-0">${wind}</h6>`;
    let rainy_gye = `<h6 id="rainfall" class="text-golden mb-0">${rainfall}</h6>`;

    let ciudad = document.getElementById("city");
    let fecha = document.getElementById("date");
    let tempmax = document.getElementById("maxtemperature");
    let tempmin = document.getElementById("mintemperature");
    let nubloso = document.getElementById("cloudiness");
    let viento = document.getElementById("wind");
    let lluvia = document.getElementById("rainfall");

    ciudad.innerHTML = city_gye;
    fecha.innerHTML = date_gye;
    tempmax.innerHTML = maxt_gye;
    tempmin.innerHTML = mint_gye;
    nubloso.innerHTML = cloudy_gye;
    viento.innerHTML = windy_gye;
    lluvia.innerHTML = rainy_gye;


    // Forecast_Today_Day

    let { lapse:lapse_day, text:text_day, temperature : temperature_day, forecast : forecast_day, icon : icon_day } = forecast_today[0]

    let icon_day_gye = `<i id="late_icon" class="material-icons opacity-10">${icon_day}</i>`;
    let late_temp_gye = `<h3 id="late_temperature" class="text-center mb-0">${temperature_day}</h3>`;
    let late_forecast_gye = `<span id="late_forecast" class="text-md">${forecast_day}</span>`;
    let late_text_gye = `<h4 id="late_text" class="mb-0 text-md">${text_day}</h4>`;

    let icono_dia = document.getElementById("late_icon");
    let temp_dia = document.getElementById("late_temperature");
    let temprono_dia = document.getElementById("late_forecast");
    let texto_dia = document.getElementById("late_text");

    icono_dia.innerHTML = icon_day_gye
    temp_dia.innerHTML = late_temp_gye
    temprono_dia.innerHTML = late_forecast_gye
    texto_dia.innerHTML = late_text_gye

    // Forecast_Today_Night

    let { lapse:lapse_night , text:text_night, temperature: temperature_night, forecast: forecast_night, icon: icon_night } = forecast_today[1]

    let icon_night_gye = `<i id="late_icon" class="material-icons opacity-10">${icon_night}</i>`;
    let night_temp_gye = `<h3 id="late_temperature" class="text-center mb-0">${temperature_night}</h3>`;
    let night_forecast_gye = `<span id="late_forecast" class="text-md">${forecast_night}</span>`;
    let night_text_gye = `<h4 id="late_text" class="mb-0 text-md">${text_night}</h4>`;

    let icono_noche = document.getElementById("night_icon");
    let temp_noche = document.getElementById("night_temperature");
    let temprono_noche = document.getElementById("night_forecast");
    let texto_noche = document.getElementById("night_text");

    icono_noche.innerHTML = icon_night_gye
    temp_noche.innerHTML = night_temp_gye
    temprono_noche.innerHTML = night_forecast_gye
    texto_noche.innerHTML = night_text_gye
}

let loadWeekForecastData = () => {
    let data = weather_data ;
    
    

	
}


loadDayForecastData();
loadWeekForecastData();