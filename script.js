const inputCity = document.getElementById('input-City')
const submit = document.getElementById('submit')
const cityName = document.getElementById('city-name')
const localTime = document.getElementById('time')
const temperature = document.getElementById('temp')

async function getData(val){
    const City = await fetch(`http://api.weatherapi.com/v1/current.json?key=7d1ca67dd8c847f8b6294311230412 &q=${val}&aqi=no`)
    return await City.json();
}

submit.addEventListener('click',async ()=>{
    const data = await getData(inputCity.value)
    cityName.innerText = `City: ${data.location.name} , ${data.location.country}`;
    localTime.innerText = `Time: ${data.location.localtime}`
    temperature.innerText = `Temparature: ${data.current.temp_c}`
})