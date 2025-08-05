const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');


search.addEventListener("click",()=>{
    const APIKey='f193205687dbd9cd2cd4f09eed644b52';
    const city = document.querySelector('.search-box input').value;
    if(city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        if(json.cod == '404'){
            cityHide.textContent = city;
            container.style.height = '400px'
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
       
        const img = document.querySelector('.weather-box img');
        const Temperature = document.querySelector('.weather-box .Temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        
        if (cityHide.textContent == city){
            return;
        }
        else{
            cityHide.textContent = city;

            container.style.height = '555px'
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            setTimeout(()=>{
                container.classList.remove('active');

            },2500);
       
        switch(json.weather[0].main){
            case 'Clear':
                img.src = '/clear.png';
                break;
            case 'Rain':
                img.src = '/rain.png';
                break;
            case 'Snow':
                img.src = '/snow.png';
                break;
            case 'Clouds':
                img.src = '/cloud.png';
                break;
            case 'Mist':
                img.src = '/mist.png';
                break;
            case 'Haze':
                img.src = '/mist.png';
                break;
            default:
                img.src = '/cloud.png';
        }
    
        Temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
        
        

        const infoWeather = document.querySelector('.info-weather');
        const infoHumidity = document.querySelector('.info-humidity');
        const infoWind = document.querySelector('.info-wind');
        
        const elCloneInfoWeather = infoWeather.cloneNode('true');
        const elCloneInfoHumidity = infoWeather.cloneNode('true');
        const elCloneInfoWind = infoWeather.cloneNode('true');

        elCloneInfoWeather.id = 'clone-info-weather';
        elCloneInfoWeather.classList.add('active-clone');

        elCloneInfoHumidity.id = 'clone-info-humidity';
        elCloneInfoHumidity.classList.add('active-clone');

        elCloneInfoWind.id = 'clone-info-wind'
        elCloneInfoWind.classList.add('active-clone');

        setTimeout(()=>{
            infoWeather.insertAdjacentElement("afterend", elCloneInfoWeather);
            infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);

            infoWind.insertAdjacentElement("afterend", elCloneInfoWind);

        }, 2200);
        const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
        const totalCloneInfoWeather = cloneInfoWeather.length;
        const cloneInfoWeatherFirst = cloneInfoWeather[0];

        const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');

        const cloneInfohumidityFirst = cloneInfoHumidity[0];

        const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
        const cloneInfoWindFirst = cloneInfoWind[0];
        if (totalCloneInfoWeather > 0){
            cloneInfoWeatherFirst.classList.remove('active-clone');
            cloneInfohumidityFirst.classList.remove('active-clone');

            cloneInfoWindFirst.classList.remove('active-clone');
            setTimeout(()=>{
                cloneInfoWeatherFirst.remove();
                cloneInfohumidityFirst.remove();
                cloneInfoWindFirst.remove();
            }, 2200)
        }
    }
    });
});


