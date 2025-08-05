const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
search.addEventListener("click",()=>{
    const APIKey='f193205687dbd9cd2cd4f09eed644b52';
    const city = document.querySelector('.search-box input').value;
    if(city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
        const img = document.querySelector('.weather-box img');
        const Temperature = document.querySelector('.weather-box .Temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        switch(json.weather[0].main){
            case 'Clear':
                img.src = 'clear.png';
                break;
            case 'Rain':
                img.src = 'rain.png';
                break;
            case 'Snow':
                img.src = 'snow.png';
                break;
            case 'Clouds':
                img.src = 'cloud.png';
                break;
            case 'Mist':
                img.src = 'mist.png';
                break;
            case 'Haze':
                img.src = 'mist.png';
                break;
            default:
                img.src = 'cloud.png';
        }
    });
});