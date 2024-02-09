const apikey = "dc2db78201bac7b7fd3c4c868ec30025";
        const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        
        const cityval = document.querySelector(".searchbar2 input");
        const citybtn = document.querySelector(".searchbar2 button");

        const weathericon = document.querySelector(".weatherbtn");
        async function checkweather(city){
           const response = await fetch(apiURL +city+`&appid=${apikey}`);
           var data = await response.json();
           console.log(data);
           document.querySelector(".cityname").innerHTML = data.name;
           document.querySelector(".temparature").innerHTML = data.main.temp + `°C`;
           document.querySelector(".wind2").innerHTML = data.wind.speed+`km/h`;
           document.querySelector(".humidity2").innerHTML = data.main.humidity + `%`;
           if(data.weather[0].main === "Clouds" ){
            weathericon.src = "images/clouds.png";
          }
          else if(data.weather[0].main === "Clear"){
           weathericon.src = "images/clear.png";
          }
          else if(data.weather[0].main === "Drizzle"){
           weathericon.src = "images/drizzle.png";
          }
          else if(data.weather[0].main === "Snow"){
           weathericon.src = "images/snow.png";
          }
          else if(data.weather[0].main === "Haze"){
           weathericon.src = "images/mist.png";
          }
          else if(data.weather[0].main === "Rain"){
           weathericon.src = "images/rain.png";
          }
        }

       citybtn.addEventListener("click",()=>{
        
        checkweather(cityval.value);
        
       })

      
       