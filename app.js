const city = document.getElementById('city');
const bodyBack = document.getElementById('b1');
const btn = document.getElementById('find');
const url = "https://api.openweathermap.org/data/2.5/weather?q=dubai&appid=20f0991d489bd96ffe26901a1ac3a0ba";
const req = new XMLHttpRequest();
const clear = document.getElementById('cls');
let gorod = document.getElementById('c1');
let temperature = document.getElementById('q1');
let sky = document.getElementById('q2');
let wind = document.getElementById('q3');
let humidity = document.getElementById('q4');
let coord = document.getElementById('q5');
let visibility = document.getElementById('q6');
let count=0;
function showUserName(event)
{
    event.preventDefault();
    if(city.value != '')
    {
        req.open("GET", url.replace('dubai', city.value));
        req.responseType="json";
        req.onload = () => {
            let data = req.response;
            count++;
            localStorage.setItem(String(count), city.value);
            // console.log(data);
            gorod.innerHTML = `Вы выбрали город: ${data['name']}`;
            temperature.innerHTML = `Температура воздуха: ${data['main']['temp']-273} по цельсию`;
            sky.innerHTML = `Сейчас: ${data['weather']['0']['main']}`;
            wind.innerHTML = `Ветер: ${data['wind']['speed']} м/сек`;
            humidity.innerHTML = `Влажность воздуха: ${data['main']['humidity']}%`;
            coord.innerHTML = `Координаты: Широта ${data['coord']['lat']}, Долгота ${data['coord']['lon']}`;
            visibility.innerHTML = `Дальность видимости: ${data['visibility']} метров`;
            if (data['weather']['0']['main'] == 'Clear')
            {
                bodyBack.style.cssText =
                `
                    background-image: url(https://wpapers.ru/wallpapers/nature/14163/1920x1080_%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0.jpg);
                    font-size: xx-large;
                `;
            }
            else if (data['weather']['0']['main'] == 'Clouds')
            {
                bodyBack.style.cssText =
                `
                    background-image: url(https://wpapers.ru/wallpapers/nature/13300/1920x1080_%D0%9E%D0%B1%D0%BB%D0%B0%D1%87%D0%BD%D0%BE%D0%B5-%D0%BD%D0%B5%D0%B1%D0%BE.jpg);
                    font-size: xx-large;
                `;
            }
            else if (data['weather']['0']['main'] == 'Mist')
            {
                bodyBack.style.cssText =
                `
                    background-image: url(https://widewp.ru/file/15891);
                    font-size: xx-large;
                `;
            }
            else if (data['weather']['0']['main'] == 'Drizzle')
            {
                bodyBack.style.cssText =
                `
                    background-image: url(https://wpapers.ru/wallpapers/Holidays/9-may/15459/1920x1080_%D0%93%D1%80%D0%B8%D0%B1%D0%BD%D0%BE%D0%B9-%D0%B4%D0%BE%D0%B6%D0%B4%D1%8C.jpg);
                    color: azure;
                    font-size: xx-large;
                `;
            }
            else if (data['weather']['0']['main'] == 'Snow')
            {
                bodyBack.style.cssText =
                `
                    background-image: url(https://wpapers.ru/wallpapers/nature/Winter/15819/1920x1080_%D0%97%D0%B8%D0%BC%D0%B0.jpg);
                    font-size: xx-large;
                `;
            }
        }
        req.send();
    }
}
btn.addEventListener("click", showUserName)
function clearLocalStorage()
{
    localStorage.clear();
}
clear.addEventListener('click', clearLocalStorage)