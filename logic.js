async function widgetLogic_caller(widgetName){
    if(widgetName == "clima"){
        return widgetLogic_weather()
    }else if(widgetName == "indeco"){
        return widgetLogic_indeco()
    }else if(widgetName == "picoplaca"){
        return widgetLogic_picoPlaca()
    }
}

async function widgetLogic_weather(){
    console.log("Fetching data..")

    const weatherData = await fetchWeather_v2()
    
    const mediaDir = window.mediaDir

    console.log("Updating values...")
        
    let date = new Date();
    local_time = date.toLocaleTimeString();

    let hour;

    // Convert the time to 24-hour format
    if (local_time.includes('PM')) {
        hourValue = parseInt(local_time.split(':')[0])
        if (hourValue < 12) {
        hour = hourValue + 12;
        }else{
        hour = 0;
        }
    } else {
        hour = parseInt(local_time.split(':')[0]);
    }
    // Set the forecast hour 2 hours after current time, if time is > 22 forecast = current
    let forecast_h
    //if (hour < 22) {
    if (hour < 21) {
        //forecast_h = hour + 4
        forecast_h = hour + 2
    }
    else {
        forecast_h = hour
    }

    //location.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
    //humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
    //sunrise.textContent = `Sunrise: ${weatherData.forecast.forecastday[0].astro.sunrise}`;
    //sunset.textContent = `Sunset: ${weatherData.forecast.forecastday[0].astro.sunset}`;

    const varTemperatureActual = `${Math.round(weatherData.current.temp_c)}°C`;
    const varTemperaturePronostico = `${Math.round(weatherData.forecast.forecastday[0].hour[forecast_h].temp_c)}°C`;
    
    const varIconActualRemote = 'https:' + weatherData.current.condition.icon;
    const varIconActualLocal = "1_" + varIconActualRemote.substring(varIconActualRemote.lastIndexOf('/') + 1);
    
    const varIconPronosticoRemote = 'https:' + weatherData.forecast.forecastday[0].hour[forecast_h].condition.icon;
    const varIconPronosticoLocal = "1_" + varIconPronosticoRemote.substring(varIconPronosticoRemote.lastIndexOf('/') + 1);
    const { dateStr, timeStr } = formatDateAndTime(weatherData.location.localtime);
    const localDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDay = localDate.toLocaleDateString('es-ES', dateOptions);
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const currentTime = localDate.toLocaleTimeString('en-US', timeOptions);
    
    // Hack to test same time but day / night
    //const currentTime = new Date(localDate.getTime() + 12 * 60 * 60 * 1000).toLocaleTimeString('en-US', timeOptions);

    GLOBAL_current_time = currentTime
    const [dayWord, dayNumber, deWord, monthWord] = currentDay.split(' ');
    let formattedCurrentDay = `${dayWord.charAt(0).toUpperCase() + dayWord.slice(1)} ${dayNumber} de ${monthWord.charAt(0).toUpperCase() + monthWord.slice(1)}`;
    formattedCurrentDay = formattedCurrentDay.replace(',', '')
    const varFecha = `${formattedCurrentDay}, ${currentTime}`;

    //const ciudad = weatherData.location.name.split(',')[0].trim();

    const cityName = GLOBAL_config_data['city_string']
    const varLocation = `${cityName}`;
    
    const varConditionActual = weatherData.current.condition.text;
    const varConditionPronostico = weatherData.forecast.forecastday[0].hour[forecast_h].condition.text;
    
    let videoCode = undefined
    const currentCode = weatherData.current.condition.code
    let codeData = null
    for (const item of GLOBAL_template_info) {
      if (item.codes.includes(currentCode)) {
          videoCode = item.code;
          codeData = item
      }
    }

    GLOBAL_sun_time_source = GLOBAL_config_data['sun_time_source']
    if(GLOBAL_sun_time_source == 'api'){
      GLOBAL_sunset_time = weatherData.forecast.forecastday[0].astro.sunset
      GLOBAL_sunrise_time = weatherData.forecast.forecastday[0].astro.sunrise  
    }else if(GLOBAL_sun_time_source == 'local'){
      GLOBAL_sunset_time = GLOBAL_config_data['sunset_time']
      GLOBAL_sunrise_time = GLOBAL_config_data['sunrise_time']
    }
    
    GLOBAL_sun_period_day = sunPeriod(currentTime, GLOBAL_sunrise_time, GLOBAL_sunset_time)
    
    // Manual tests
    // videoCode = 10
    // GLOBAL_sun_period_day = true

    let codeVideos = null
    if(GLOBAL_sun_period_day){
      codeVideos = codeData["videos"]["day"]  
    }else{
      codeVideos = codeData["videos"]["night"]
    }
    const videoFile = codeVideos[Math.floor(Math.random() * codeVideos.length)];
    varVideo = videoFile

    //varVideo = "20.night.webm"
    GLOBAL_weatherCode = currentCode + " -> " + varVideo

    // === END CUSTOM CODE / LOGIC ===

    // === ELEMENTS-VARS MAPPING ===
    // Assings a variable to an element prop
    const elementsIdValues = [
      { 'domElementId' : "domElement-text-9"   , 'propName' : 'innerText' , 'value' : varTemperatureActual },
      { 'domElementId' : "domElement-text-10"  , 'propName' : 'innerText' , 'value' : varTemperaturePronostico },
      { 'domElementId' : "domElement-text-3"   , 'propName' : 'innerText' , 'value' : varFecha },
      { 'domElementId' : "domElement-image-11" , 'propName' : 'src'       , 'value' : mediaDir + varIconActualLocal },
      { 'domElementId' : "domElement-image-12" , 'propName' : 'src'       , 'value' : mediaDir + varIconPronosticoLocal },
      { 'domElementId' : "domElement-text-2"   , 'propName' : 'innerText' , 'value' : varLocation },
      { 'domElementId' : "domElement-text-2"   , 'propName' : 'innerText' , 'value' : varLocation },
      { 'domElementId' : "domElement-video-4"  , 'propName' : 'src'       , 'value' : mediaDir + varVideo },
      { 'domElementId' : "domElement-text-13"   , 'propName' : 'innerText' , 'value' : varConditionActual },
      { 'domElementId' : "domElement-text-14"   , 'propName' : 'innerText' , 'value' : varConditionPronostico },
    ]

    return elementsIdValues

}

var mockUpData = {
  "data": {
    "Bolivar": {
      "direction": "sube", 
      "unit": "$", 
      "value": "106.48", 
      "value_prev": "106.34"
    }, 
    "COLCAP": {
      "direction": "sube", 
      "unit": "$", 
      "value": "1,332.98", 
      "value_prev": "1,318.11"
    }, 
    "Cafe": {
      "direction": "baja", 
      "unit": "$", 
      "value": "1,464,000", 
      "value_prev": "1,480,000"
    }, 
    "DTF": {
      "direction": "baja", 
      "unit": "%", 
      "value": "10.60", 
      "value_prev": "10.94"
    }, 
    "Dolar": {
      "direction": "baja", 
      "unit": "$", 
      "value": "3,842.30", 
      "value_prev": null
    }, 
    "Euro": {
      "direction": "sube", 
      "unit": "$", 
      "value": "4,164.32", 
      "value_prev": "4,163.94"
    }, 
    "Inflacion": {
      "direction": "sube", 
      "unit": "%", 
      "value": "1.09", 
      "value_prev": null
    }, 
    "Petroleo": {
      "direction": "baja", 
      "unit": "$", 
      "value": "86.09", 
      "value_prev": null
    }, 
    "Tasa": {
      "direction": "baja_verde", 
      "unit": "%", 
      "value": "33.09", 
      "value_prev": "33.30"
    }, 
    "UVR": {
      "direction": "sube", 
      "unit": "$", 
      "value": "365.7411", 
      "value_prev": "365.6132"
    }
  }
}

async function widgetLogic_indeco(weatherData){

    url = 'http://157.230.251.44:5000/report'
    //apiData = await fetchData(url)
    apiData = mockUpData

    function dirToColor(direction){

      if(direction=="sube"){
        return "green"
      }else if(direction=="baja"){
        return "red"
      }else{
        return "black"
      }

    }

    function dirToImage(direction){

      mediaDir = window.mediaDir
      
      if(direction=="sube"){
        return mediaDir + "Subir.png"
      }else if(direction=="baja"){
        return mediaDir + "Bajar.png"
      }else{
        return mediaDir + "Sombra.png"
      }

    }


    function valueFormat(item){

      unit = item['unit']
      value = item['value']

      if(unit=="$"){
        return "$ " + value
      }else if(unit=="%"){
        return value + " %"
      }else{
        return unit + " " + value
      }

    }

    function valueDiff(item){

      unit = item['unit']
      
      value_str = item['value'].replace(",","")
      if(item['value_prev'] == null){
        return null
      }else{
        value_prev_str = item['value_prev'].replace(",","")

        value = parseFloat(value_str)
        value_prev = parseFloat(value_prev_str)
        
        roundDecimals = 2
        value_diff = (value - value_prev).toFixed(roundDecimals)
        
        if(unit=="$"){
          return "$ " + value_diff
        }else if(unit=="%"){
          return value_diff + " %"
        }else{
          return unit + " " + value_diff
        }
      }
    }

    priceData = apiData['data']

    const localDate = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDay = localDate.toLocaleDateString('es-ES', dateOptions);
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const currentTime = localDate.toLocaleTimeString('en-US', timeOptions);
    GLOBAL_current_time = currentTime
    const [dayWord, dayNumber, deWord, monthWord] = currentDay.split(' ');
    let formattedCurrentDay = `${dayWord.charAt(0).toUpperCase() + dayWord.slice(1)} ${dayNumber} de ${monthWord.charAt(0).toUpperCase() + monthWord.slice(1)}`;
    formattedCurrentDay = formattedCurrentDay.replace(',', '')
    const varFecha = `${formattedCurrentDay}, ${currentTime}`;

    const elementsIdValues = [

      { 'domElementId' : "indeco-text-euro-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['Euro']) },
      { 'domElementId' : "indeco-text-petroleo-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['Petroleo']) },
      { 'domElementId' : "indeco-text-cafe-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['Cafe']) }, 
      { 'domElementId' : "indeco-text-uvr-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['UVR']) },
      { 'domElementId' : "indeco-text-dtf-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['DTF']) },
      { 'domElementId' : "indeco-text-dolar-value" , 'propName' : 'innerText' , 'value' : valueFormat(priceData['Dolar']) },

      { 'domElementId' : "indeco-text-euro-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['Euro']) },
      { 'domElementId' : "indeco-text-petroleo-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['Petroleo']) },
      { 'domElementId' : "indeco-text-cafe-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['Cafe']) }, 
      { 'domElementId' : "indeco-text-uvr-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['UVR']) },
      { 'domElementId' : "indeco-text-dtf-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['DTF']) },
      { 'domElementId' : "indeco-text-dolar-diff" , 'propName' : 'innerText' , 'value' : valueDiff(priceData['Dolar']) },
      
      { 'domElementId' : "indeco-image-euro-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['Euro']['direction']) },
      { 'domElementId' : "indeco-image-petroleo-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['Petroleo']['direction']) },
      { 'domElementId' : "indeco-image-cafe-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['Cafe']['direction']) }, 
      { 'domElementId' : "indeco-image-uvr-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['UVR']['direction']) },
      { 'domElementId' : "indeco-image-dtf-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['DTF']['direction']) },
      { 'domElementId' : "indeco-image-dolar-bg" , 'propName' : 'background-color' , 'value' : dirToColor(priceData['Dolar']['direction']) },

      { 'domElementId' : "indeco-image-cafe-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['Cafe']['direction']) }, 
      { 'domElementId' : "indeco-image-uvr-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['UVR']['direction']) },
      { 'domElementId' : "indeco-image-euro-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['Euro']['direction']) },
      { 'domElementId' : "indeco-image-dtf-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['DTF']['direction']) },
      { 'domElementId' : "indeco-image-petroleo-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['Petroleo']['direction']) },
      { 'domElementId' : "indeco-image-dolar-dir" , 'propName' : 'src' , 'value' : dirToImage(priceData['Dolar']['direction']) },

      { 'domElementId' : "indeco-text-fecha"   , 'propName' : 'innerText' , 'value' : varFecha },

        /*{ 'domElementId' : "domElement-image-11" , 'propName' : 'src'       , 'value' : varIconActualLocal },
        { 'domElementId' : "domElement-image-12" , 'propName' : 'src'       , 'value' : varIconPronosticoLocal },
        { 'domElementId' : "domElement-video-4"  , 'propName' : 'src'       , 'value' : varVideo },
        { 'domElementId' : "domElement-text-13"   , 'propName' : 'innerText' , 'value' : varConditionActual },
        { 'domElementId' : "domElement-text-14"   , 'propName' : 'innerText' , 'value' : varConditionPronostico },*/
      ]
  
      return elementsIdValues

}

async function widgetLogic_picoPlaca(weatherData){

  //url = 'http://157.230.251.44:5000/report'
  //apiData = await fetchData(url)

  apiData = {
    "Monday" : {
      "autos" : [0, 2],
      "motos" : [0, 2],
      },
    "Tuesday" : {
      "autos" : [6, 9],
      "motos" : [6, 9],
    },
    "Wednesday" : {
      "autos" : [3, 7],
      "motos" : [3, 7],
    },
    "Thursday" : {
      "autos" : [4, 8],
      "motos" : [4, 8],
    },
    "Friday" : {
      "autos" : [1, 5],
      "motos" : [1, 5],
    },
    "Saturday" : {
      "autos" : [],
      "motos" : [],
    },
    "Sunday" : {
      "autos" : [],
      "motos" : [],
    }
  }

  const localDate = new Date();
  const todayDate = new Date();
  const nextDate = new Date();
  
  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const currentTime = localDate.toLocaleTimeString('en-US', timeOptions);
  GLOBAL_current_time = currentTime
  
  todayDate.setDate(localDate.getDate() + 0)
  nextDate.setDate(todayDate.getDate() + 1)
  
  const dateOptionsEsp = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateOptionsEng = { weekday: 'long' };
  
  let nextDayEng = nextDate.toLocaleDateString('en-EN', dateOptionsEng);
  // Skip saturdays to monday
  if(nextDayEng == "Saturday"){
    nextDate.setDate(todayDate.getDate() + 3)
    nextDateStr = "PROXIMA SEMANA"
    nextDayEng = "Monday"
  }else{
    nextDateStr = "MAÑANA"
  }
  const currentDayEsp = todayDate.toLocaleDateString('es-ES', dateOptionsEsp);
  const currentDayEng = todayDate.toLocaleDateString('en-EN', dateOptionsEng);
  const nextDayEsp = nextDate.toLocaleDateString('es-ES', dateOptionsEsp);
  
  let [dayWord, dayNumber, deWord, monthWord] = nextDayEsp.split(' ');
  let formattedNextDay = `${dayWord.charAt(0).toUpperCase() + dayWord.slice(1)} ${dayNumber} de ${monthWord.charAt(0).toUpperCase() + monthWord.slice(1)}`;
  formattedNextDay = formattedNextDay.replace(',', '')
  //const varFecha = `${formattedCurrentDay}, ${currentTime}`;
  const varNextDate = `${formattedNextDay}`;  

  [dayWord, dayNumber, deWord, monthWord] = currentDayEsp.split(' ');
  formattedCurrentDay = `${dayWord.charAt(0).toUpperCase() + dayWord.slice(1)} ${dayNumber} de ${monthWord.charAt(0).toUpperCase() + monthWord.slice(1)}`;
  formattedCurrentDay = formattedCurrentDay.replace(',', '')
  //const varFecha = `${formattedCurrentDay}, ${currentTime}`;
  const varFecha = `${formattedCurrentDay}`;

  function dayToCarNumbers(day){

    //return "-"
    return apiData[day]['autos']

  }

  function dayToMotoNumbers(day){

    //return "--"
    return apiData[day]['motos']

  }


  function valueFormat(item){

    unit = item['unit']
    value = item['value']

    if(unit=="$"){
      return "$ " + value
    }else if(unit=="%"){
      return value + " %"
    }else{
      return unit + " " + value
    }

  }

  const elementsIdValues = [

    { 'domElementId' : "domElement-text-autos-1-1" , 'propName' : 'innerText' , 'value' : dayToCarNumbers(currentDayEng)[0] }, 
    { 'domElementId' : "domElement-text-autos-1-2" , 'propName' : 'innerText' , 'value' : dayToCarNumbers(currentDayEng)[1] },
    { 'domElementId' : "domElement-text-motos-1-1" , 'propName' : 'innerText' , 'value' : dayToCarNumbers(nextDayEng)[0] },
    { 'domElementId' : "domElement-text-motos-1-2" , 'propName' : 'innerText' , 'value' : dayToCarNumbers(nextDayEng)[1] },


    { 'domElementId' : "domElement-text-autos-2-1" , 'propName' : 'innerText' , 'value' : dayToMotoNumbers(currentDayEng)[0] }, 
    { 'domElementId' : "domElement-text-autos-2-2" , 'propName' : 'innerText' , 'value' : dayToMotoNumbers(currentDayEng)[1] },
    { 'domElementId' : "domElement-text-motos-2-1" , 'propName' : 'innerText' , 'value' : dayToMotoNumbers(nextDayEng)[0] },
    { 'domElementId' : "domElement-text-motos-2-2" , 'propName' : 'innerText' , 'value' : dayToMotoNumbers(nextDayEng)[1] },
    
    { 'domElementId' : "domElement-text-5-2" , 'propName' : 'innerText' , 'value' : nextDateStr},
    
    { 'domElementId' : "domElement-text-date-1"   , 'propName' : 'innerText' , 'value' : varFecha },
    { 'domElementId' : "domElement-text-date-2"   , 'propName' : 'innerText' , 'value' : varNextDate },

    

      /*{ 'domElementId' : "domElement-image-11" , 'propName' : 'src'       , 'value' : varIconActualLocal },
      { 'domElementId' : "domElement-image-12" , 'propName' : 'src'       , 'value' : varIconPronosticoLocal },
      { 'domElementId' : "domElement-video-4"  , 'propName' : 'src'       , 'value' : varVideo },
      { 'domElementId' : "domElement-text-13"   , 'propName' : 'innerText' , 'value' : varConditionActual },
      { 'domElementId' : "domElement-text-14"   , 'propName' : 'innerText' , 'value' : varConditionPronostico },*/
    ]

    return elementsIdValues

}
