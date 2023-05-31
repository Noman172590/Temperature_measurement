const loadData=(data)=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=2141a39430ab2546342bd8e462e6e1a0&units=metric`)

    .then(res=>res.json())
    .then(datared=>displaydata(datared))
}
const displaydata=data=>{
document.getElementById('Temperaturecelcius').innerText=data.main.temp
document.getElementById('cityName').innerText=data.name
document.getElementById('weatherType').innerText=data.weather[0].main
console.log(data)

}

document.getElementById('SearchBtn').addEventListener('click',function(){
        const inputfield=document.getElementById('inputfield').value
        console.log(inputfield)
        loadData(inputfield)
      

})

loadData('dhaka')