
     window.onload=function(){
        
        
        
        console.log('yello');   


console.log('ze sweetest peaches');    



let airQualBtn = document.getElementById('clickMe1');  
           let airQualBlurb = document.getElementById('airQualBlurb'); 

           let UVBlurb =document.getElementById('UVBlurb')


           const searchBox = document.getElementById('searchBox');
      
      searchBox.addEventListener('keypress', setQuery); 
/*
if(window.chart && window.chart !== null){ 


    console.log('time to destroy chart'); 
    window.chart.destroy();
    }
    
    
         window.myChart ;  */
    
    
    
          let arrayOfTempsNDates =[];   
          let datesArray =[]; 
          let tempsArray =[];  
          let humidityArray =[];
    
          var ul = document.createElement('ul'); 
          let uli =document.createElement('ul');
          var listDiv = document.getElementById('listDiv'); 
          let listDiv2 = document.getElementById('listDiv2'); 
          

          const synth = window.speechSynthesis;
          


const api= {
      
      key:"5e4558760b4e3c113797ae8bea9ee0be", 
      
      base:"https://api.openweathermap.org/data/2.5/"
      
      }   


      const IQApi = {

      key:"a7977a94-bb99-4d8a-8691-b9feb4fbeced"

     } 

      
      
      
      
      
      
      function setQuery(evt){
      
      if(evt.keyCode ==13 /*&& searchBox.value.length !==0*/){ 

        getResults(searchBox.value); 
      
       // get5DayForecast(searchBox.value);---------we can keep this commented out as it pertains to the chart js stuff
        console.log(searchBox.value); 
      
        arrayOfTempsNDates = [];  


        localStorage["key"] = searchBox.value; 
        console.log(localStorage["key"] + " this is the local storage!");
        ul.style.display='none'; 

        let inputForChart=document.getElementById('inputForChart');

        inputForChart.value=searchBox.value;
        


        }
      }  




    function getResults(query) { 
      console.log('huuuuuuh?');
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) //send the apirequest when u type in a cty & hit enter
     .then(function(resp) {return resp.json();}) //THEN if it works,  get the response back in json format
     .then(displayResults);//THEN if that works, run the displayResults function(which hs access to the query we're passing into this getResults()func) 
  
        }     

      


function displayResults(resp) { 

        

     let city = document.querySelector('.city');  

      console.log('did u get the city?')

      city.innerText= `${resp.name}, ${resp.sys.country}`; 




      let timestamp = `${resp.dt}`; 

      console.log(`WHOOHOO ${timestamp}`) 


      //The below is me trying to do local time(kind of worked kinda didnt)..


/*
      let UTCPlus3Date= new Date(); 

     let monthUTC3=UTCPlus3Date.getMonth() +1;

     let dayUTC3=UTCPlus3Date.getDate();

     let yearUTC3 = UTCPlus3Date.getFullYear(); 

     console.log(`${monthUTC3}` + "/" + `${dayUTC3}`+"/"+ `${yearUTC3}` + " is the date in utc +3");  

     let UTC3Hours =UTCPlus3Date.getHours(); 
     let UTC3Mins=UTCPlus3Date.getMinutes(); 

     console.log(`${monthUTC3}` + "/" + `${dayUTC3}`+"/"+ `${yearUTC3}` + "," +`${UTC3Hours}` + ":" +`${UTC3Mins}`+ " is the date and time in utc +3"); 

     let UTCTimeHours =UTC3Hours -3; 
     console.log(UTCTimeHours);



      let timez= `${resp.timezone}`;  

      let timezone = timez /3600;
      console.log(`${resp.name} z timezone is ....${timezone}`); 


      if(UTCTimeHours>=23){
         UTCTimeHours == 0;
      } 


      let hourOfSearchedCity = UTCTimeHours + timezone;   
      
      function fixTime(){

if(hourOfSearchedCity ==24){
  hourOfSearchedCity = 00;
}else if(hourOfSearchedCity ==25){
  hourOfSearchedCity= 01
}else if(hourOfSearchedCity == 26){
  hourOfSearchedCity =02
} else if(hourOfSearchedCity == 27){
  hourOfSearchedCity = 03
}
else if(hourOfSearchedCity = 28){
  hourOfSearchedCity = 04
}
else if(hourOfSearchedCity == 29){
  hourOfSearchedCity = 05
}
} ;
      
      

    fixTime();

      let timeOfSearchedCity = `${hourOfSearchedCity}` + ":" + `${UTC3Mins}`; 
      console.log(`LOCAL TIME in ${resp.name} is now ${timeOfSearchedCity}`); 


      let searchedCityTime = document.querySelector('.time'); 

      searchedCityTime.innerHTML = timeOfSearchedCity; */




        




          let temperature = document.querySelector('.temp'); 
          let tempz =Math.round(resp.main.temp); 

          temperature.innerHTML =`${Math.round(resp.main.temp)}<span>º</span>`; 

          let feelsLike = document.querySelector('.feelsLike');
          feelsLike.innerHTML = `Feels like ${Math.round(resp.main.feels_like)}<span>ºc</span>`; 


          let weatherIcon =document.querySelector('.icon'); 

          weatherIcon.src=" https://openweathermap.org/img/wn/"+ resp.weather[0].icon +'.png';


          let weatherConditions = document.querySelector('.weather'); 
          weatherConditions.innerHTML = resp.weather[0].main; 
 
         let weatherDescripString =JSON.stringify(weatherConditions.innerHTML);  


         

         console.log(weatherDescripString); 

         
 
 
 
           let highLowGrid = document.querySelector('.hi-low'); 
           let highLowTemps = document.querySelector('.hi-lowtemps')

          


           
           highLowGrid.innerText =`${Math.round(resp.main.temp_max)}ºc /${Math.round(resp.main.temp_min)}ºc`;
 
           highLowTemps.innerText =`${Math.round(resp.main.temp_max)}ºc /${Math.round(resp.main.temp_min)}ºc`;

           const description =document.querySelector('.Description');  

           


           description.innerHTML = resp.weather[0].description;

          

           const windSpeed =document.querySelector('.Wind'); 
           windSpeed.innerHTML = `wind: ${resp.wind.speed} km/h`; 


           const pressure =document.querySelector('.Pressure'); 
           pressure.innerHTML = `pressure: ${resp.main.pressure} hPa`;
 
 
           const humidity= document.querySelector('.humidity'); 
           humidity.innerHTML =`Humidity: ${resp.main.humidity}% `;  
 
 
           let cloudCover = document.querySelector('.cloudCover'); 
           cloudCover.innerHTML = `Cloudiness: ${resp.clouds.all}%`;
 
           let lat = resp.coord.lat;  
           let lon = resp.coord.lon;   
 
           let cityName = resp.name;
           console.log(`latitude is ${lat} & longitude is ${lon} for ${resp.name}`);   
 
       let uvNum = document.querySelector('.uvIndexNum'); 
           let uvExplanation =  document.querySelector('.uvIndexExplanation'); 
           let uvicon = document.querySelector('.UVicon');     



           


           
           /*fetch(`http://api.timezonedb.com/v2.1/list-time-zone?key=UQ2UL2T0Z2LC&format=json&country=US&zone=*New*`) 
           .then(function(res){console.log(res)})
           then(function(res){console.log(res)})---------------NEITHER this nor amdoren apiworks!!! DOES NOT work!*/
 
 
 
 
           
 
           //Making Fetch call toget uv index info from openweather map
 
           //fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=${api.key}&lat=${lat}&lon=${lon}`) 
           fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api.key}`)
           //fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=13.75&lon=100.52&appid=${api.key}`)
          .then(function(respz){return respz.json();}) 
          .then(function(respz){ 
            console.log(respz)
            console.log(respz.timezone); 

            let dewPointInKelvins = respz.current.dew_point;
            console.log('THIS is the dewpoint in Kelvins! ' + dewPointInKelvins); 

            let dewPoint =Math.round(dewPointInKelvins - 273.15); 

            console.log(dewPoint); 


            let dewPointInFahrenheit = Math.round((dewPointInKelvins - 273.15) * 9/5 + 32);

            console.log(Math.round((dewPointInKelvins - 273.15) * 9/5 + 32) +  ' dew Point in Fahrenheit!'); 

            let DewPointVal= document.querySelector('.DewPoint');
            
            DewPointVal.innerHTML =`Dew Point: ${dewPoint}°c`; 

            let DewPointBtn= document.getElementById('DewPointBtn');


            DewPointBlurb.addEventListener('mouseover', function(event){  
             
            
             if(dewPointInFahrenheit <=60) { 
                DewPointBlurb.innerHTML = `Dew Point is currently comfortable. This is an ideal time to go for a run or do any other outdoor activities.`;
              }else if(dewPointInFahrenheit > 60 && dewPointInFahrenheit <66){  
                DewPointBlurb.innerHTML =  `Dew Point is currently slightly uncomfortable. Outdoor activities may still be possible but limiting exertion levels and time is advised. `;
              } else if(dewPointInFahrenheit >=66 && dewPointInFahrenheit <71){ 
                DewPointBlurb.innerHTML= 'Dew Point is now highly uncomfortable. Postpone strenuous activities, if possible.'
              } else if(dewPointInFahrenheit >=71){ 
                DewPointBlurb.innerHTML= 'Dew Point is now extremely oppressive. Postpone all outdoor activities.'
              
              }

          })  
 
 
          DewPointBlurb.addEventListener('mouseleave', function(event){  
             
             DewPointBlurb.innerHTML ='More info';
          }) 
 



            //to calculate relative Humidity in our js program:

            let Es =6.11*10.0**(7.5*tempz/(237.7+tempz)); 

            let E=6.11*10.0**(7.5*dewPoint/(237.7+dewPoint));


            let relativeHumidity = Math.round((E/Es)*100);

            console.log(`Relative Humidity is ${relativeHumidity} in ${cityName}`);


             let indoorHumidity = document.querySelector('.indoorHumidity'); 

             indoorHumidity.innerHTML= `Indoor Humidity: ${relativeHumidity}%`; 


             let indoorHumidityBlurb = document.getElementById('indoorHumidityBlurb');




             indoorHumidityBlurb.addEventListener('mouseover', function(event){  
             
            
              if(relativeHumidity<=30) { 
                indoorHumidityBlurb.innerHTML = 'Indoor humidity is currently too low. This may lead to cold and allergy symptoms, nosebleeds, and dry skin. Consider turning on a humidifier now.';
               }else if(relativeHumidity> 31 && relativeHumidity <46){  
                 indoorHumidityBlurb.innerHTML =  'Indoor humidity is currently ideal.';
               } else if(relativeHumidity >=46){ 
                 indoorHumidityBlurb.innerHTML= 'Indoor Humidity is higher than ideal.This can cause increased allergic reactions, bacterial and viral infections, and may encourage visible mold growth in your home. Consider turning on a dehumidifier now.';
               } 
           })  
  
  
           indoorHumidityBlurb.addEventListener('mouseleave', function(event){  
              
              indoorHumidityBlurb.innerHTML ='More info';
           }) 




            




            let timezone = respz.timezone;  

            var dateobj = new Date();  
            var B = dateobj.toISOString(); 
            var here = moment.tz(B, "Africa/Nairobi"); 

            var searchedCity =here.clone().tz(timezone); 

            console.log(searchedCity.format() + "is the time of the city we searched"); 

            let time = document.querySelector('.time');
            time.innerHTML = searchedCity.format('MMMM Do YYYY, h:mm a'); 




            console.log(respz.current.uvi + ` is the UVI!index value for ${cityName} and the longi is ${respz.lon}`);



            uvNum.innerText =`Daily UV Index Number: ${respz.current.uvi}`;    

 
            //This below part is to display the uv message when we click our uv button:
 
           let UVBtn =document.getElementById('UVBtn'); 
           //let UVBlurb =document.getElementById('UVBlurb') ----placed this at very top of doc instead
           let tooltiptext= document.querySelector('.tooltiptext')
 
           /*UVBtn.addEventListener('click', function(event){ 
             UVBlurb.innerHTML =`Current UV Index Number is ${respz.value}`;  
           }); */




          
 
           UVBlurb.addEventListener('mouseover', function(event){  
             
            
             if(respz.current.uvi <=2) { 
                UVBlurb.innerHTML = `Low danger from the Sun's UV rays for the average person. Wear sunglasses on bright days. If you burn easily, cover up & use broad spectrum SPF 30+ sunscreen. Bright surfaces, such as sand, water, and snow, will increase UV exposure.`;
              }else if(respz.current.uvi  >=3 && respz.current.uvi <=5){  
                UVBlurb.innerHTML =  `Moderate risk of harm from unprotected Sun exposure.
                Stay in shade near midday when the Sun is strongest. If outdoors, wear Sun protective clothing, a wide-brimmed hat, & UV-blocking sunglasses. Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, & after swimming or sweating.`;
              } else if(respz.current.uvi >5 && respz.current.uvi  <= 7 ){ 
                UVBlurb.innerHTML= 'Moderately high risk of harm from unprotected Sun exposure. Protection against skin & eye damage is needed.'; 
              
              } else if(respz.current.uvi >7 && respz.current.uvi  <= 10 ){ 
                UVBlurb.innerHTML = 'Very high risk of harm from unprotected Sun exposure. Take extra precautions as unprotected skin and eyes will be damaged & can burn quickly.';
               
              }else if(respz.current.uvi >= 11 ){ 
                UVBlurb.innerHTML = 'Extreme risk of harm from unprotected Sun exposure. Take all precautions as unprotected skin & eyes can burn in minutes. Try to avoid Sun exposure between 10 a.m. & 4 p.m.';
               
              } 

          })  
 
 
          UVBlurb.addEventListener('mouseleave', function(event){  
             
             UVBlurb.innerHTML ='More info';
          }) 
 
 
              
 
 
 
              })  
 
 
 

          
               
            
             
            
 
 
 
 
 
              //The below is to fetch the  air quaity from iqair airvisual & display it:
 
              let airQualityIcon = document.querySelector('.airQualityIcon');
          
 
 
             const requestOptions = {
             method: 'GET',
             redirect: 'follow'
           }; 
 
 

           /*lets say addis is utc+3 

           so when we get a city like bangkok which has its utc offset in seconds, divide that to make it hours then



           


           */
 
 
            //fetch("https://api.airvisual.com/v2/nearest_city?lat="+lat+"&lon="+lon+"&key=a7977a94-bb99-4d8a-8691-b9feb4fbeced", requestOptions)
 
 
 
           fetch(`https://api.airvisual.com/v2/nearest_city?lat=${resp.coord.lat}&lon=${resp.coord.lon}&key=${IQApi.key}`, requestOptions)  
           .then(response => response.text())
           .then((result) => {console.log(JSON.parse(result)); let resultz = (JSON.parse(result)); let airQuality = document.querySelector('.airQuality'); 
           console.log(resultz); 
          airQuality.innerText =`Current air quality index is ${resultz.data.current.pollution.aqius}`; 
          //airQualityIcon.src='medical.png'; 
 
          
          /*let airQualBtn = document.getElementById('clickMe1');  */
           let airQualBlurb = document.getElementById('airQualBlurb'); 


           
 
 
 
 //This below part is to display the airQuality number when we mouseover our AQI button:
 
           airQualBlurb.addEventListener('mouseover', function(event){  
             
              airQualBlurb.innerHTML =` Current air quality index: ${resultz.data.current.pollution.aqius}`; 

              if(resultz.data.current.pollution.aqius <= 50) { 
     airQualBlurb.innerText = 'Air quality is satisfactory, and air pollution poses little to no risk.';
     
   }else if (resultz.data.current.pollution.aqius >50 && resultz.data.current.pollution.aqius <=100){airQualBlurb.innerText = "Moderate: Air quality is acceptable and poses little health risk. Sensitive individuals should avoid outdoor activity as they may experience respiratory symptoms.";
     } else if(resultz.data.current.pollution.aqius >100 && resultz.data.current.pollution.aqius <=150){airQualBlurb.innerText ="Unhealthy for Sensitive Groups: General public and sensitive individuals in particular are at risk of irritation and respiratory problems.";
 
 } else if(resultz.data.current.pollution.aqius >150 && resultz.data.current.pollution.aqius <=300){airQualBlurb.innerText ="Unhealthy: Increased likelihood of adverse effects and aggravation to the heart and lungs among general public. Avoid outdoor exercise and take care to wear a pollution mask outdoors. Ventilation is discouraged. Air purifiers should now be turned on.";}
    
 else if(resultz.data.current.pollution.aqius >300){airQualBlurb.innerText ="Hazardous!: General public and sensitive groups are at high risk to experience strong irritation and adverse health effects that could trigger other illnesses. Everyone should avoid exercise and remain indoors.";}
 
    }) 
    airQualBlurb.addEventListener('mouseleave', function(event){ 
             airQualBlurb.innerHTML = 'More info';
           })
   //catch(error => console.log('error', error)); 
           }) 

 
 
          
 
    
   
     //let airQualityExplanation = document.querySelector('.airQualityExplanation');
 
  
 
 
           //added below myself to show cloudy pic if temp is equal to or below 10c---Yesus Yimesgen! it worked
           
           if(resp.main.temp <=10){
           
           weatherIcon.src="sky.png";
       
           //document.body.style.backgroundColor = "#e8edfc";
          
          } else if(resp.main.temp >=30) { 
 
           //document.body.style.backgroundColor ="#f3e3e2";  
  
          // document.body.style.background= "-webkit-linear-gradient(to right, #ee0979, #ff6a00)"; /* Chrome 10-25, Safari 5.1-6 */
           //document.body.style.background = "linear-gradient(to right, #ee0979, #ff6a00)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 }
  
            
 
 }//end of displayResults() function here  
 

 /*function get5DayForecast(query){  
         
      
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${api.key}`)
    . then(response => response.text())
    .then((text) => {console.log(JSON.parse(text));let resultz = JSON.parse(text); console.log(resultz.list[0].main.temp); 
       
      
      let list = resultz.list;  
      let fiveDayForecastResults = document.getElementById('fiveDayForecastResults');   






      //let arrayOfTempsNDates =[];    

      const fiveDayForecastBtn = document.getElementById('cloudForecastBtn');

      //var ul = document.createElement('ul'); 
      //var listDiv = document.getElementById('listDiv'); 

      //May not be necessary!------listDiv.appendChild(ul);

     


     //---the below is for if we lisst out 5 day forecast & do
     
     
      fiveDayForecastBtn.addEventListener('click', function(event){  

        



       //let uli= document.createElement('ul');



      for (var i=0; i<list.length; i+=2) {  


        
        

        let dateAndForecast = 
        `Date: ${list[i].dt_txt} 

      Temp: ${list[i].main.temp}`; 

        let humidityAndDate = `Date: ${list[i].dt_txt} Humidity:  ${list[i].main.humidity}` 

        humidityArray.push(list[i].main.humidity); 
        console.log(humidityArray);   


        let humidityArrayDatesNTempsCheck = []; 

        humidityArrayDatesNTempsCheck.push(humidityAndDate); 

        //console.log(humidityArrayDatesNTempsCheck);            

        datesArray.push(list[i].dt_txt);   

        //console.log(datesArray);
        tempsArray.push(list[i].main.temp); 
        //console.log(tempsArray);


        var ctx = document.getElementById('myChart').getContext('2d');  

       


        var gradient = ctx.createLinearGradient(500, 0, 100, 0);
        gradient.addColorStop(0, "#80b6f4");
        gradient.addColorStop(0.3, "#f49080");
        gradient.addColorStop(0.4, "#80b6f4");
        gradient.addColorStop(0.5, "#f49080");
        gradient.addColorStop(0.7, "#80b6f4");
        gradient.addColorStop(1, "#f49080");



        //here we're saying if any previous line chart exists, first destroy that existing chart, so we can create a new (non-flickering) one below: 

          
          if(window.chart){

          window.chart.destroy();
       
          };    
          
          
          // in this case, w/ the 1st line chart. using destroy() works to stop 
          flickering but for 2nd barchart had to create & use a function called resetCanvas() instead

             




       

          

        

          

          





           //create line chart:

        window.chart = new Chart(ctx, {
type: 'line',
data: { 
labels: datesArray, 
datasets: [{ 
  data: tempsArray,
  label: "temps", 
  borderColor: gradient,
      pointBorderColor: gradient,
      pointBackgroundColor: gradient,
      pointHoverBackgroundColor: gradient,
      pointHoverBorderColor: gradient,
      pointBorderWidth: 7,
      pointHoverRadius: 7,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      fill: false,
      borderWidth: 2,
     
}]
},
options: {
legend: {
      position: "bottom"
  },
  scales: {
      yAxes: [{
          ticks: {
              fontColor: "rgba(0,0,0,0.5)",
              fontStyle: "bold",
              beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20
          },
          gridLines: {
              drawTicks: false,
              display: false
          }
}],
      xAxes: [{
          gridLines: {
              zeroLineColor: "transparent"
},
          ticks: {
              padding: 20,
              fontColor: "rgba(255, 255, 255, 0.5)",
              fontStyle: "bold"
          }
      }]
  },
title: {
display: true,
text: '5 day/ 6-hourly forecast'
}
} 

});

      


//chart.update(); 

/*
if(window.chart && window.chart !== null){ 


console.log('time to destroy chart'); 
window.chart.destroy();
}*/ 





// bar chart below: 




//var ctx2 =document.getElementById('myHumidityChart').getContext('2d');


//here we're saying if any previous line chart exists, first destroy that existing chart, so we can create a new (non-flickering) one below: 



/*
if(window.myChart && window.myChart !== null){ 


console.log('time to destroy chart'); 
window.myChart.destroy();
} */


//var resetCanvas = function(){
//$('#myHumidityChart').remove(); // this is my <canvas> element
//$('#chartCanvasDiv2').append('<canvas id="myHumidityChart"><canvas>');
//canvas = document.querySelector('#myHumidityChart');
//ctx2 = canvas.getContext('2d');
//ctx2.font = '10pt Verdana';
//ctx2.textAlign = 'center';



/*var gradient = ctx2.createLinearGradient(0, 0, 1, 2000);
gradient.addColorStop(0, 'rgb(252, 0, 255, 1)');   
gradient.addColorStop(0.8, 'rgba(0,219,222,1)');  
gradient.addColorStop(1, 'rgb(255,255, 255, 1)'); 



var img2 = new Image();
img2.src = 'blueswirl.jpg'; 
//img2.src = 'https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'; 

img2.onload = function() {
var fillPattern2= ctx2.createPattern(img2, 'repeat');



window.myChart = new Chart(ctx2, {
type: 'bar',
data: {
  labels: //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']  
  datesArray,
  datasets: [{
      label: 'Humidity over the next 5 days',
      data: humidityArray,
      backgroundColor: [ 

      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2,
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2,
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2,
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2,
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2,
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2, 
      fillPattern2
      ],
      borderColor: [
      'rgba(255, 255, 255, 0)'
      ],
      borderWidth: 0
  }]
},
options: {
  scales: { 
    xAxes: [{
      gridLines: {
          color: "rgba(0, 0, 0, 0)",
      }
  }],
      yAxes: [{ 
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
      },
          ticks: {
              beginAtZero: true
          }
      }]
  }
}
}); 


}

}





var img = new Image();
img.src = 'https://images.unsplash.com/photo-1545873509-33e944ca7655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
img.onload = function() {
var ctx3 = document.getElementById('myChart3').getContext('2d');
var fillPattern= ctx3.createPattern(img, 'repeat');
var chart3 = new Chart(ctx3, {
type: 'bar',
data: {
labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'n', 'm', 'u', 'o', 'p','i', 't'],
datasets: [{
data: [5.5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 25, 27],
backgroundColor: fillPattern
}]
}
})
} 





//console.log(`Here are all the temps for next 5 days: ${list[i].main.temp}, Date & Time: ${list[i].dt_txt}`);  
arrayOfTempsNDates.push(dateAndForecast);  
//console.log(arrayOfTempsNDates);


//console.log(arrayOfTempsNDates);    


resetCanvas();//This is tocall the func() that will delete and then reappend the 2nd canvas holding our bar chart-this recreatesthe chart each time & works instead of using destroy() for THIS chart



//ATTENTION: THE BELOW Commented out CODE forlooping through the arrayOfTempsNDates is for Creating a list of Divs Containing  our 5 day/ 6 hourly forecast-since we have the charts (& plus,dates are all utc)  & i couldn'tstyle them,Idecided to try notshowing them:


/* for (var j=0; j<arrayOfTempsNDates.length; j++) {  

let div5DayItem = document.createElement('div'); 

//let uli =document.createElement('ul');  

// listDiv2 = document.getElementById('listDiv2'); 

//listDiv2.appendChild(ul);  

listDiv2.appendChild(div5DayItem);   



let pLi= document.createElement('p')

pLi.classList.add('listParagraph');

div5DayItem.appendChild(pLi);

//ul.appendChild(div5DayItem);

div5DayItem.classList.add("div5DayItem");


pLi.innerHTML += arrayOfTempsNDates[j];  

//uli.appendChild(li);

//document.getElementById('showArray').innerHTML= arrayOfTempsNDates[j];

} */



//arrayOfTempsNDates.splice(0,arrayOfTempsNDates.length);


/*
arrayOfTempsNDates.forEach(function (item) {
let li = document.createElement('li');
ul.appendChild(li);

li.innerHTML += item; 

document.getElementById('showArray').innerHTML= item;
}); */ 





/*arrayOfTempsNDates.splice(0,arrayOfTempsNDates.length);
let toggle5DayList = false; */


/*
//fiveDayForecastResults.innerHTML =`Here are all the temps for next 5 days: ${list[i].main.temp}, Date & Time: ${list[i].dt_txt}`

var ul = document.getElementById("FiveDayForecastList");    

//var listDiv = document.createElement('div'); 
//listDiv.className = 'listDivGroup'; 


//ul.appendChild(listDiv); 


//So now create a li and attach it to the div, which willbe attached to our ul: 

var li = document.createElement('li'); 
li.innerText=` Temp: ${list[i].main.temp} 

${list[i].dt_txt} 

`;  

ul.appendChild(li);


let toggle5DayList = false;

//ul.style.display="none";//so it can be blank til we click for 5dayforecasts!  

let toggle5DayList = false;


if(toggle5DayList==false){ 


ul.style.display = "block";  
clearInputNdisplay();
}


if(searchBox.value == ''){ 


//console.log('empty!') 

//let uli =document.createElement('ul');


for (var j=0; j<arrayOfTempsNDates.length; j++) {  

let li = document.createElement('li'); 

//let uli =document.createElement('ul');  
uli.setAttribute("class", "rightList");

document.getElementById('listDiv2').appendChild(uli);




li.innerHTML += arrayOfTempsNDates[j];  

uli.appendChild(li);

document.getElementById('showArray').innerHTML= arrayOfTempsNDates[j];

} 



searchBox.addEventListener("focus", function(){ 

   
 console.log('ok now on focus clear the li')  
 location.reload();  //----IMPORTANT-Only need to do this to reload the pageif we're using chartjs & need to stop charts flickering!!

 //chart.update(); 
 //$("#listDiv2").remove(); 
 //$("ul").empty(); 
 //$('.rightList').remove(); 
 
/* var listNodes = uli.getElementsByTagName("li");
for(var i=0; i<listNodes.length; i++) {
listNodes[i].innerHTML='';
}*/
 
 //$("ul").remove();
 //uli.style.display='none'; 
 //uli.innerHTML='';
//list.length=0;  
//arrayOfTempsNDates.length=0; 
//arrayOfTempsNDates.splice(0,arrayOfTempsNDates.length);
//console.log(arrayOfTempsNDates);

//}); 

//} 

//} 



//arrayOfTempsNDates.splice(0,arrayOfTempsNDates.length);




   
   
     // }  
          
     
 








 

 
      //)} 
      
    //)} 

    







function clearInputNdisplay(){ 

searchBox.value="";    


} 






//for reading out air quality
 
let airQualitReading = document.getElementById('clickMe'); 


airQualitReading.addEventListener('click', function readOutAirQuality(){


let text = new SpeechSynthesisUtterance(airQualBlurb.innerHTML); 

if(airQualBlurb == 'More info'){
    text = new SpeechSynthesisUtterance('Please enter a valid city first.')
} else{ 

    text =new SpeechSynthesisUtterance(airQualBlurb.innerHTML); 
}

  speechSynthesis.speak(text); 

});
 


//for reading out uv
 
 
let UVReading = document.getElementById('UVBtn'); 


UVReading.addEventListener('click', function readOutUVIndex(){

let uvText= new SpeechSynthesisUtterance(UVBlurb.innerHTML); 

if(UVBlurb.innerHTML == 'More info'){

    uvText = new SpeechSynthesisUtterance('Please enter a valid city first.')
} else{
uvText= new SpeechSynthesisUtterance(UVBlurb.innerHTML); 
}

speechSynthesis.speak(uvText);

 });  





 //for reading out dew point

 
 let dewPointReading = document.getElementById('DewPointBtn'); 
 
 
 
dewPointReading.addEventListener('click', function readOutDewPoint(){

let DewPointText= new SpeechSynthesisUtterance(DewPointBlurb.innerHTML); 

if(DewPointBlurb.innerHTML == 'More info'){

    DewPointText = new SpeechSynthesisUtterance('Please enter a valid city first.')

    //speechSynthesis.speak(DewPointNoText);
} else { 

   DewPointText= new SpeechSynthesisUtterance(DewPointBlurb.innerHTML); 



}

speechSynthesis.speak(DewPointText);


 
 })
         
 





         

        
};//This is the end of window.onload 