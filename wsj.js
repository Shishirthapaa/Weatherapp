
    if(
        localStorage.Date !=null &&
        parseInt(localStorage.Date) + 360000 > Date.now()
      ){
        getdata(localStorage);
      }
      
       else{
      
       fetch("https://raw.githubusercontent.com/Shishirthapaa/Weatherapp/main/ptp2.php")
       // Convert response string to json object
       .then((Response) => Response.json())
       .then((Response) => {
      console.log(Response);
      
         
         const speed = Response.speed;
         const city = Response.city;
         console.log(speed, city);
         
         getdata(Response);
         setdata(Response);
       
      
         })
       .catch(err => { // catches the error
      
          console.log(err);
         }) // Displaying error in console
       }
      
        function getdata(Response){
          document.getElementById('description').innerHTML = Response.description;
          document.getElementById('temperature').innerHTML = Response.temp + " °C";   
          document.getElementById('pressure').innerHTML = "Pressure : " +Response.pressure +" hPa";
          document.getElementById('humidity').innerHTML = "Humidity : " + Response.humidity + " %";
          document.getElementById('wind').innerHTML = "Wind Speed : " +Response.speed + " m/s";
          document.getElementById('winddirection').innerHTML = "Wind Direction : " +Response.deg + "°";
          document.getElementById('city').innerHTML = "Weather in Edinburgh";
          document.getElementById('date').innerHTML =  Response.created_at;
      
        }
      
        function setdata(Response){
          localStorage.setItem("Weather_Description", Response.description);
          localStorage.setItem("City", Response.city);
          localStorage.setItem("Temperature", Response.temp);
          localStorage.setItem("Pressure", Response.pressure);
          localStorage.setItem("Humidity", Response.humidity);
          localStorage.setItem("Wind_Speed", Response.speed);
          localStorage.setItem("Wind_Degree", Response.deg);
          localStorage.setItem("Date", Response.created_at);

        }
