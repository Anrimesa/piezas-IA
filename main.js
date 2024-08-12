// Initialize variables
var city = ''
var print_city = ''
var code = []
var temperature = []
var icon = []
var condition = []
var data = {}
var match_code = []
var count = 0
var local_time
var local_date

var domElements = []

var GLOBAL_counter_secs = 0
var GLOBAL_weatherCode = 0
var GLOBAL_hardwareKey = 'null'
var GLOBAL_version = '0.8.5'
var GLOBAL_status = ''

var GLOBAL_last_refresh = undefined
var GLOBAL_refresh_nap = 60

var GLOBAL_resolutionWidth = 1920
var GLOBAL_resolutionHeight = 1080

//window.GLOBAL_panelPosX = 0
//window.GLOBAL_panelPosY = 0

//window.GLOBAL_config_name = undefined
var GLOBAL_config_host = '157.230.251.44'
var GLOBAL_config_route = './v1/config/metadata'
var GLOBAL_config_data = undefined

var GLOBAL_sun_time_source = undefined
var GLOBAL_sunset_time = undefined
var GLOBAL_sunrise_time = undefined
var GLOBAL_sun_period_day = undefined
var GLOBAL_current_time = undefined

var selectedObjName = null;
var selectedObjBorder = null

var configPanelEnabled = false;

var GLOBAL_template_info = [
  {
      "code":"10",
      "name":"Soleado",
      "codes":[1000],
      "videos": {
        "day" : [
          "10.day.webm",
          "11.day.webm",
        ],
        "night": [
          "10.night.webm",
        ],
        "last": undefined,
      }
  },
  {
      "code":"20",
      "name":"Soleado con nubes",
      "codes":[1003],
      "videos": {
        "day" : [
          "20.day.webm",
          "30.day.webm",
        ],
        "night": [
          "30.night.webm",
          "31.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"30",
      "name":"Día y poco nublado",
      "codes":[1006, 1009, 1030, 1117, 1135, 1147],
      "videos": {
        "day" : [
          "30.day.webm",
          "20.day.webm",
          "31.day.webm"
        ],
        "night": [
          "30.night.webm",
          "31.night.webm"
        ],
        "last": undefined,
      }
    },
  {
      "code":"40",
      "name":"Día y lluvias ligeras",
      "codes":[1063, 1066, 1069, 1072, 1150, 1153, 1168, 1186, 1189, 1198, 1201, 1204, 1207, 1210, 1213, 1216, 1219, 1240, 1249, 1255, 1261, 1273],
      "videos": {
        "day" : [
          "40.day.webm",
          "50.day.webm",
        ],
        "night": [
          "101.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"50",
      "name":"Día y lluvia",
      "codes":[1087, 1114, 1171, 1180, 1183, 1192, 1195, 1222, 1225, 1243, 1246, 1252, 1258, 1264, 1276, 1279, 1282],
      "videos": {
        "day" : [
          "50.day.webm",
          "50.day.webm",
          "40.day.webm"
        ],
        "night": [
          "101.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"60",
      "name":"Granizo",
      "codes":[1237],
      "videos": {
        "day" : [
          "60.day.webm",
        ],
        "night": [
          "60.day.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"70",
      "name":"Noche nublado",
      "codes":[11003, 11006],
      "videos": {
        "day" : [
          "80.night.webm",
        ],
        "night": [
          "80.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"80",
      "name":"Noche muy nublado",
      "codes":[11009, 11030, 11117, 11135, 11147],
      "videos": {
        "day" : [
          "80.night.webm",
          "81.night.webm",
        ],
        "night": [
          "80.night.webm",
          "81.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"90",
      "name":"Noche con lluvia ligera",
      "codes":[11063, 11066, 11069, 11072, 11114, 11150, 11153, 11183, 11186, 11189, 11204, 11210, 11213, 11216, 11219, 11255, 11261, 11273, 11279, 11282],
      "videos": {
        "day" : [
          "90.night.webm",
        ],
        "night": [
          "90.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"100",
      "name":"Noche con lluvia",
      "codes":[11087, 11171, 11180, 11192, 11195, 11198, 11201, 11207, 11252, 11258, 11264, 11276],
      "videos": {
        "day" : [
          "100.night.webm",
          "101.night.webm",
        ],
        "night": [
          "100.night.webm",
          "101.night.webm",
        ],
        "last": undefined,
      }

    },
  {
      "code":"110",
      "name":"Noche despejada",
      "codes":[11000],
      "videos": {
        "day" : [
          "10.night.webm",
        ],
        "night": [
          "10.night.webm",
        ],
        "last": undefined,
      }

    }
]

function displayLocalTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    // Add leading zero if the value is less than 10
    hours = (hours < 10 ? "0" : "") + hours
    minutes = (minutes < 10 ? "0" : "") + minutes
    seconds = (seconds < 10 ? "0" : "") + seconds

    var timeString = hours + ":" + minutes + ":" + seconds
    document.getElementById("localTime").innerHTML = timeString
}

function createNewPropInput(propName, propValue){

  const label = document.createElement('label');
  label.textContent = propName + ':';
  label.style.display = 'inline-block'; // Display labels in line
  label.style.textAlign = 'right'; // Align labels to the right
  label.style.width = '95px'; // Set a fixed width for labels
  label.style.marginRight = '5px'; // Adjust space between labels and inputs
  label.style.fontSize = '18px';
  label.style.fontFamily = 'Verdana';
  label.style.color = 'darkgreen'

  const input = document.createElement('input');
  input.type = 'text';
  input.value = propValue;
  input.style.marginLeft = '10px'; // Add left margin to inputs
  input.style.width = '200px'
  input.style.fontSize = '18px'

  const inputContainer = document.createElement('div');
  inputContainer.style.marginBottom = '0px'; // Adjust spacing between properties
  inputContainer.style.border = '0px solid black';
  inputContainer.style.padding = '0px';
  inputContainer.style.marginTop = '0px';

  inputContainer.appendChild(label);
  inputContainer.appendChild(input);

  return inputContainer;

}

async function getHardwareKey(){
  
  try {
    const response = await $.get("http://localhost:9696/info");
    key = response.hardwareKey;

    if (key == undefined){
      return 'No resp';
    }else{
      return key;
    }


  } catch (error) {
    //return 'Error';
    return 'da281e0f3902f3afcc22bc605ef6ee76'
  }

}

function updateDomElementProp(id, prop, value) {
  if (domElementsConfig[id]) {
    domElementsConfig[id][prop] = value;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'e') {
    const element = document.getElementById('editButton');
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
    const element = document.getElementById('statusMonitor');
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
});

function mainContainerRefresh(elements){
  const mainContainer = document.getElementById('mainContainer');
  mainContainer.innerHTML = '';

  domElements = elements;

  if(window.GLOBAL_startVideoEnabled){
    domElements = []
    domElements[window.GLOBAL_startVideoElement] = elements[window.GLOBAL_startVideoElement]
  }

  for(elementName in domElements){

    itemProps = domElements[elementName]
    
    if(itemProps.className == "domElement-text"){
      renderContainerElement('text', elementName, itemProps)
    }else if(itemProps.className == "domElement-image"){
      renderContainerElement('image', elementName, itemProps)
    }else if(itemProps.className == "domElement-video"){
      renderContainerElement('video', elementName, itemProps)
    }

  }

}

function createContainerElement(objType, objProps){

    obj = renderContainerElement(objType, null, objProps)
    // Add new object to domElements list
    domElements[obj.id] = obj
    domElementsConfig[obj.id] = objProps
    //console.log(domElements)
    //console.log(domElements.length)
    
}

function renderContainerElement(objType, objId, objProps){

    const mainContainer = document.getElementById('mainContainer');
    let domElementsCounter = 0
    for (items in domElements){
      domElementsCounter += 1
    };

    let obj = null;

    if(objType == "text"){
      obj = document.createElement('div');
      objClass = 'domElement-text';
      obj.className = objClass;
    }else if(objType == "image"){
      obj = document.createElement('img');
      objClass = 'domElement-image';
      obj.className = objClass;
    }else if(objType == "video"){
      obj = document.createElement('div');
      objClass = 'domElement-video';
      obj.className = 'jp-jplayer'
    }else{
      console.log('WARNING: objType unknown (' + objType + ')')
      obj = document.createElement('div');
      objClass = 'domElement-text';
      obj.className = objClass;
    }

    if(objId){
      obj.id = objId 
    }else{
      obj.id = objClass + '-' + domElementsCounter ;
    }

    obj.textContent = objProps["innerText"];
    obj.draggable = false;
    obj.style.position = 'absolute';
    // obj.src = 'https:' + weatherData.current.condition.icon;

    // Function to handle dragging the modal
    let objIsSelected = false;
    let isDragging = false;
    let initialX;
    let initialY;

    obj.addEventListener('click', function(e) {

        objIsSelected = !objIsSelected;

        /* const properties = document.getElementById('properties');
        properties.innerHTML = ''; */

        // Set back last selected object border
        if(selectedObjName){
          if(obj.id != selectedObjName){
            var lastSelectedObj = document.getElementById(selectedObjName)
            lastSelectedObj.style.border = selectedObjBorder
          }
        }

        if(obj.id != selectedObjName){
          selectedObjName = obj.id;
          //initialX = e.clientX;
          //initialY = e.clientY;
          obj.style.cursor = 'move';
          selectedObjBorder = obj.style.border
          obj.style.border = '5px solid rgb(55, 25, 255)';

          if(configPanelEnabled){
            listDiv = document.getElementById("elementsList");
            const elementsButtons = listDiv.getElementsByTagName('button');

            for(const index in elementsButtons){
              item = elementsButtons[index];
              if(item.innerText == obj.id){
                item.click();
              }
            }
          }

        }else{

          obj.style.cursor = 'none';
          obj.style.border = selectedObjBorder;

          selectedObjName = null
          selectedObjBorder = null

        }

    });

    obj.addEventListener('mousedown', function(e) {
      isDragging = true;
      initialX = e.clientX;
      initialY = e.clientY;
      obj.style.cursor = 'move';
    });

    window.addEventListener('mousemove', function(e) {
        if (isDragging) {
          const offsetX = e.clientX - initialX;
          const offsetY = e.clientY - initialY;

          obj.style.left = `${obj.offsetLeft + offsetX}px`;
          obj.style.top = `${obj.offsetTop + offsetY}px`;

          initialX = e.clientX;
          initialY = e.clientY;
        }

    });

    window.addEventListener('mouseup', function() {
        if(isDragging){
         
          isDragging = false;
          obj.style.cursor = 'none';

          //console.log("mouseup -> " + obj.id)

          updateDomElementProp(obj.id, "left", obj.style.left);
          updateDomElementProp(obj.id, "top", obj.style.top);

          //domElementsConfig[obj.id].left = obj.style.left
          //domElementsConfig[obj.id].top = obj.style.top

        }
    });

    let videoPropSrc = ""
    let videoPropLoop = false
    let videoPropHeight = "200px"
    let videoPropWidth = "200px"

    Object.keys(objProps).forEach(key => {

        if((objType == "image") && (key == "src")){
          // Obj.src needs to be called as method
          // in order to load the URL into the <img> object
          // Using style['src'] = srcURL does not loads the image
          srcURL = objProps[key]
          obj.src = srcURL
        }else if((objType == "video") && (key == "src")){   
          videoPropSrc = objProps[key]
        }else if((objType == "video") && (key == "loop")){
          videoPropLoop = objProps[key]
        }else if((objType == "video") && (key == "height")){          
          videoPropHeight = objProps[key]
          obj.style[key] = objProps[key]
        }else if((objType == "video") && (key == "width")){
          videoPropWidth = objProps[key]          
          obj.style[key] = objProps[key]
        }else{
          obj.style[key] = objProps[key]
        }
        //console.log(`${name}.style.${key}: ${obj.style[key]}`) 
    });

    // Set obj as a child
    mainContainer.appendChild(obj);

    if(objType == "video"){
      
      if(objProps["loop"] == "true" || objProps["played"] == "false"){

        console.log("loading " + videoPropSrc + " on " + obj.id)
        console.log("dimensions " + videoPropWidth + " x " + videoPropHeight)

        if(videoPropSrc != ""){

          $(`#${obj.id}`).jPlayer({
            ready: function () {
                
              $(this).jPlayer("setMedia", {
                    title: "Video Background",
                    //webmv: "./" + domElementsConfig[obj.id]['src']
                    webmv: videoPropSrc
                }).jPlayer("play").jPlayer("mute");
                
              // Pause the video after 5000 milliseconds (5 seconds)
              setTimeout(function () {
                $(this).jPlayer("pause");
              }, 1000);

            },
            swfPath: "jquery.jplayer.swf",
            supplied: "webmv",
            size: {
                width: videoPropWidth,
                height: videoPropHeight,
                cssClass: "jp-video-360p"
            },
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            loop: videoPropLoop // Loop the video
          });

        }

        objProps["played"] = "true"
      
      }else{

        console.log("already plaing video, not refreshing..")

      }

    }

    return obj;
  
}

async function fetchWeather_v2() {

  try {
      //city = "medellin"
      city = GLOBAL_config_data['city_param']
      weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=096668c072d14323b2a222258230111&q=${city}&aqi=no&lang=es`)
  } catch (error) {
      console.log()
  }

  const weatherData = await weatherResponse.json()

  return weatherData

}
async function fetchData(url){

  try {
    response = await fetch(url)
    const apiData = await response.json()
    return apiData
  } catch (error) {
    console.log("Error fetching data from: " + url)
  }
}

function formatDateAndTime(dateTimeStr) {
    const months = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const [datePart, timePart] = dateTimeStr.split(' ');
  
    const [year, month, day] = datePart.split('-');
    const date = new Date(year, month - 1, day);
    const monthName = months[date.getMonth()];
  
    const formattedDate = `${day} de ${monthName}`;
  
    return { dateStr: formattedDate, timeStr: timePart };
}

function sunPeriod(currentTime, sunrise, sunset) {
  const currentTimeHours = parseInt(currentTime.split(':')[0]);
  const currentTimePeriod = currentTime.includes('PM') ? 'PM' : 'AM';
  const sunriseHours = parseInt(sunrise.split(':')[0]);
  const sunrisePeriod = sunrise.includes('PM') ? 'PM' : 'AM';
  const sunsetHours = parseInt(sunset.split(':')[0]);
  const sunsetPeriod = sunset.includes('PM') ? 'PM' : 'AM';

  // Convert 12-hour format to 24-hour format for comparison
  const convertTo24Hour = (time, period) => {
      if (period === 'PM' && time !== 12) {
          return time + 12;
      } else if (period === 'AM' && time === 12) {
          return 0;
      } else {
          return time;
      }
  };

  const currentHour24 = convertTo24Hour(currentTimeHours, currentTimePeriod);
  const sunriseHour24 = convertTo24Hour(sunriseHours, sunrisePeriod);
  const sunsetHour24 = convertTo24Hour(sunsetHours, sunsetPeriod);

  if (currentHour24 >= sunriseHour24 && currentHour24 < sunsetHour24) {
      // Daytime actions
      console.log("It's daytime!");
      return true;
  } else {
      // Nighttime actions
      console.log("It's nighttime!");
      return false;
  }
}

async function mainContainerRenderer(widgetName, domElementsConfig) {

    const elementsIdValues = await widgetLogic_caller(widgetName)
  
    for(const element of elementsIdValues){
      // domElementValue = eval(element['varName'])
      domElementValue = element['value']
      updateDomElementProp(element['domElementId'], element['propName'], domElementValue)
      console.log("Updating "  + element['domElementId'] + " -> " + element['varName'] + " = " + domElementValue)  
    }

    mainContainerRefresh(domElementsConfig)

    defaultHeight = GLOBAL_resolutionHeight
    defaultWidth  = GLOBAL_resolutionWidth

    mainContainer.style.height = defaultHeight + 'px'
    mainContainer.style.width = defaultWidth + 'px'
    mainContainer.style.position = 'absolute'
    mainContainer.style.top = 0
    mainContainer.style.left = 0
    mainContainer.style.border = "1px solid white"

    // Call the function when the script is loaded or when required
    populateMonitorDiv();

}

// Function to populate variables in a div with class 'monitor'
function populateMonitorDiv() {

    const variables = {
        // Define your variables here
        version: GLOBAL_version,
        counter_secs: GLOBAL_counter_secs,
        hardwareKey: GLOBAL_hardwareKey,
        configHost: GLOBAL_config_host,
        current_time: GLOBAL_current_time,
        
        //===== Wheather =====
        weatherCode: GLOBAL_weatherCode,
        sun_time_source: GLOBAL_sun_time_source,
        sunrise: GLOBAL_sunrise_time,
        sunset: GLOBAL_sunset_time,
        sun_period_day: GLOBAL_sun_period_day,
        
        refresh_nap: GLOBAL_refresh_nap + " secs",
        last_refresh: GLOBAL_last_refresh,
        status: GLOBAL_status,
        // Add more variables as needed
    };
  
    const monitorDiv = document.getElementById('statusMonitor')
    monitorDiv.innerHTML = '';
    monitorDiv.textContent = "State Monitor"
  
    // Create a table element
    const table = document.createElement('table');
    table.classList.add('monitor-table');

    // Create table rows and populate with variable names and values
    for (const variable in variables) {
      if (variables.hasOwnProperty(variable)) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const valueCell = document.createElement('td');
  
        nameCell.textContent = variable;
        valueCell.textContent = variables[variable];
  
        row.appendChild(nameCell);
        row.appendChild(valueCell);
        table.appendChild(row);
      }
    }
  
    // Append the table to the monitor div
    monitorDiv.appendChild(table);
}

  
function buildPanel() {

  // =====
  // Control panel modal
  // =====

  const modal = document.getElementById('myModal');
  modal.innerHTML = ''
  modal.left = window.GLOBAL_panelPosX
  modal.top = window.GLOBAL_panelPosY

  //const modalContent = document.createElement('div')
  //modalContent.className = "modal-content"
  //document.querySelector('.modal-content');
  //modal.appendChild(modalContent)

  const close = document.createElement('span')
  close.id = 'closePanelButton'
  close.className = 'close'
  close.innerHTML = '&times;'

  const list = document.createElement('div');
  list.id = 'list'
  list.marginTop = '10px'
  list.marginLeft = '10px'

  const properties = document.createElement('div');
  properties.id = 'properties'
  properties.marginTop = '10px'
  properties.marginLeft = '10px'


  modal.appendChild(close)
  modal.appendChild(list)
  modal.appendChild(properties)
  
  buttonsColor = '  #ecf0f1'
  buttonsForeColor = 'black'
  buttonsHeigth = '20px'
  buttonsWidth = '50px'

  titleBarColor = '#186a3b'
  //labelsColor = '#52be80'
  labelsColor = 'white';

  // Title bar for dragging the modal
  const titleBar = document.createElement('div');
  titleBar.style.cursor = 'move';
  titleBar.style.padding = '10px';
  titleBar.style.backgroundColor = titleBarColor;
  titleBar.style.userSelect = 'none';
  titleBar.style.color = 'white';
  titleBar.style.fontSize = '20px';
  titleBar.textContent = ' Config Panel';
  modal.appendChild(titleBar);

  // Function to handle dragging the modal
  let isDragging = false;
  let initialX;
  let initialY;
  
  titleBar.addEventListener('mousedown', function(e) {
      isDragging = true;
      initialX = e.clientX;
      initialY = e.clientY;
  });

  titleBar.addEventListener('mousemove', function(e) {
    if (isDragging) {
    const offsetX = e.clientX - initialX;
    const offsetY = e.clientY - initialY;

    modal.style.left = `${modal.offsetLeft + offsetX}px`;
    modal.style.top = `${modal.offsetTop + offsetY}px`;

    initialX = e.clientX;
    initialY = e.clientY;
    }

  });

  titleBar.addEventListener('mouseup', function() {
      isDragging = false;
  });


  const container = document.createElement('div');
  container.style.display = 'flex'; // Use flexbox for layout
  
  //const list = document.createElement('div');
  list.id = 'elementsList';
  list.style.float = 'left'; // Align the list to the left
  list.style.width = '250px'; // Set a width for the list
  
  //const properties = document.createElement('div');
  properties.id = 'properties';
  properties.style.marginLeft = '0px'; // Adjust spacing between list and properties

  container.appendChild(list); // Append list to the container
  container.appendChild(properties); // Append properties to the container
  modal.appendChild(container); // Append container to the modal content
  
  // Populate list with items from domElementsConfig
  function populateElementsList(){

    list.innerHTML = ''
    properties.innerHTML = ''

    for (const elementName in domElementsConfig) {
      const item = document.createElement('button');
      item.id = elementName + "-panel-btn"
      item.textContent = elementName;
      item.style.display = 'block'; // Display each item as a block element
      item.style.width = '200px'; // Set a fixed width for each button
      item.style.marginBottom = '0px'; // Adjust spacing between items

      item.addEventListener('click', function() {
        properties.innerHTML = '';

        for (const prop in domElementsConfig[elementName]) {
          const label = document.createElement('label');
          label.textContent = prop;
          
          label.style.display = 'inline-block'; // Display labels in line
          label.style.textAlign = 'right'; // Align labels to the right
          label.style.width = '150px'; // Set a fixed width for labels
          label.style.marginRight = '5px'; // Adjust space between labels and inputs
          label.style.fontSize = '16px';
          label.style.fontFamily = 'Verdana';
          label.style.color = labelsColor

          const input = document.createElement('input');
          input.type = 'text';
          input.value = domElementsConfig[elementName][prop];
          input.style.marginLeft = '10px'; // Add left margin to inputs
          input.style.width = '200px'
          input.style.fontSize = '18px'

          const inputContainer = document.createElement('div');
          inputContainer.style.marginBottom = '0px'; // Adjust spacing between properties
          inputContainer.style.border = '0px solid black';
          inputContainer.style.padding = '0px';
          inputContainer.style.marginTop = '0px';

          inputContainer.appendChild(label);
          inputContainer.appendChild(input);

          properties.appendChild(inputContainer);
        }

        const deleteContainer = document.createElement('div');
        deleteContainer.style.marginBottom = '0px'; // Adjust spacing between properties
        deleteContainer.style.border = '0px solid black';
        deleteContainer.style.padding = '15px';
        deleteContainer.style.marginTop = '0px';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete element";
        deleteBtn.style.display = 'block'; // Display each item as a block element
        deleteBtn.style.width = '200px'; // Set a fixed width for each button
        deleteBtn.style.marginBottom = '0px'; // Adjust spacing between items
        deleteBtn.style.backgroundColor = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.left = '45%';
        deleteBtn.style.top = '50%';
        deleteBtn.style.position = 'relative';

        deleteBtn.addEventListener('click', function() {
      
          const userResponse = window.confirm("Delete element: " + elementName + " ?")

          if(userResponse){
            delete domElementsConfig[elementName]
            mainContainerRefresh(domElementsConfig)

            const elementBtn = document.getElementById(elementName + "-panel-btn");
            elementBtn.remove();

            properties.innerHTML = ''

          }
    
        });
        
        deleteContainer.appendChild(deleteBtn)
        properties.appendChild(deleteContainer)
    
      });

      list.appendChild(item);
    }

      // Function to set active button and store its text content as key
    function setActiveButton(button) {
        const buttons = list.getElementsByTagName('button');
        for (const btn of buttons) {
        btn.classList.remove('active');
        }
        button.classList.add('active');
        modal.key = button.textContent;
    }

    // Add click event listeners to each button to set the active button
    const buttons = list.getElementsByTagName('button');
    for (const button of buttons) {
      button.addEventListener('click', function() {
        setActiveButton(this);

        // Reset style of all buttons
        for (const btn of buttons) {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }
        // Set style for the active button
        this.style.backgroundColor = 'darkblue';
        this.style.color = 'white';

      });
    }

  }

  populateElementsList()
  // Function to update domElementsConfig based on input changes
  function updateDomElementsConfig(key, prop, value) {
      if (domElementsConfig[key]) {
        domElementsConfig[key][prop] = value;
      }
  }

  // Add event listeners to update domElementsConfig on input changes
  properties.addEventListener('input', function(event) {
      
      const target = event.target;
      const parentDiv = target.parentNode;
      
      const label = parentDiv.querySelector('label');
      //const input = parentDiv.querySelector('input');

      const activeButton = list.querySelector('button.active');
      const key = activeButton ? activeButton.textContent : ''; // Check for active button
      
      //const key = list.querySelector('button.active').textContent;
      console.log("button.active key : " + key);
      
      prop = label.innerText;
      value = target.value;

      updateDomElementProp(key, prop, value);
  });
    
  // Create and append the "Update" button
  const updateButton = document.createElement('button');
  updateButton.textContent = 'Reload';
  updateButton.style.backgroundColor = buttonsColor;
  updateButton.style.color = buttonsForeColor;
  updateButton.style.marginTop = '10px';
  updateButton.style.marginLeft = '5px';
  updateButton.style.width = '100px';

  updateButton.addEventListener('click', function() {
    
      mainContainerRefresh(domElementsConfig)

  });
  
  modal.appendChild(updateButton);

  // Create and append the "Update" button
  const clearDomButton = document.createElement('button');
  clearDomButton.textContent = 'Clear DOM';
  clearDomButton.style.backgroundColor = buttonsColor;
  clearDomButton.style.color = buttonsForeColor;
  clearDomButton.style.marginTop = '10px';
  clearDomButton.style.marginLeft = '5px';
  clearDomButton.style.width = '100px';

  clearDomButton.addEventListener('click', function() {
    
      domElementsConfig = {}
      mainContainerRefresh(domElementsConfig)

  });
  
  modal.appendChild(clearDomButton);

  const saveConfigButton = document.createElement('button');
  saveConfigButton.textContent = 'Save Config';
  saveConfigButton.style.backgroundColor = buttonsColor;
  saveConfigButton.style.color = buttonsForeColor;
  saveConfigButton.style.marginTop = '10px';
  saveConfigButton.style.marginLeft = '10px';
  
  saveConfigButton.addEventListener('click', function() {
    const configString = "domElementsConfig = " + JSON.stringify(domElementsConfig, null, 2);
  
    navigator.clipboard.writeText(configString)
      .then(() => {
        const localKey = getHardwareKey();
        alert('Config copied to clipboard on key = ' + localKey);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  });

  modal.appendChild(saveConfigButton);

  // =====
  // New Text Object
  // =====

  const objTextNewButton = document.createElement('button');
  objTextNewButton.textContent = 'New Text';
  objTextNewButton.style.backgroundColor = buttonsColor;
  objTextNewButton.style.color = buttonsForeColor;
  objTextNewButton.style.marginTop = '10px';
  objTextNewButton.style.marginLeft = '10px';

  objTextNewButton.addEventListener('click', function() {

    // Assing deep copies from the values of the props object
    // to avoid object linking in the assingments of new value
    newClassProps = { ...domClassesProps["domElement-text"] }
    createContainerElement('text',newClassProps);
    populateElementsList();

  });

  modal.appendChild(objTextNewButton);

  // =========================
  // New Image object
  // =========================

  const objImageNewButton = document.createElement('button');
  objImageNewButton.textContent = 'New Image';
  objImageNewButton.style.backgroundColor = buttonsColor;
  objImageNewButton.style.color = buttonsForeColor;
  objImageNewButton.style.marginTop = '10px';
  objImageNewButton.style.marginLeft = '10px';

  objImageNewButton.addEventListener('click', function() {

    // Assing deep copies from the values of the props object
    // to avoid object linking in the assingments of new value
    newClassProps = { ...domClassesProps["domElement-image"] }
    createContainerElement('image',newClassProps);
    populateElementsList();

  });

  modal.appendChild(objImageNewButton);

  // =========================
  // New Video object
  // =========================

  const objVideoNewButton = document.createElement('button');
  objVideoNewButton.textContent = 'New Video';
  objVideoNewButton.style.backgroundColor = buttonsColor;
  objVideoNewButton.style.color = buttonsForeColor;
  objVideoNewButton.style.marginTop = '10px';
  objVideoNewButton.style.marginLeft = '10px';

  objVideoNewButton.addEventListener('click', function() {

    // Assing deep copies from the values of the props object
    // to avoid object linking in the assingments of new value
    newClassProps = { ...domClassesProps["domElement-video"] }
    createContainerElement('video',newClassProps);
    populateElementsList();

  });
  
  modal.appendChild(objVideoNewButton)

  // =========================
  // New Tree Modal
  // =========================

  const treeModalButton = document.createElement('button');
  treeModalButton.textContent = 'Elements';
  treeModalButton.style.backgroundColor = buttonsColor;
  treeModalButton.style.color = buttonsForeColor;
  treeModalButton.style.marginTop = '10px';
  treeModalButton.style.marginLeft = '10px';

  treeModalButton.addEventListener('click', function() {

    createModalWithTree(domElementsConfig)
    
  });

  modal.appendChild(treeModalButton);  
  configPanelEnabled = true
}

window.addEventListener('DOMContentLoaded', function() {

  document.getElementById('editButton').addEventListener('click', function() {
    console.log("Edit button click")
    buildPanel()
    document.getElementById('myModal').style.display = 'block';

    // Close modal when close button or outside modal is clicked
    document.getElementById('closePanelButton').addEventListener('click', function() {
      document.getElementById('myModal').style.display = 'none';
    });

  });


});

// Function to create the modal and render the tree
function createModalWithTree(elementsData) {
  // Create the modal
  var modal = document.createElement('div');
  modal.className = 'treeModal';
  modal.style.left = '500px'
  modal.style.top = '100px'
  modal.style.position = 'absolute'
  modal.style.zIndex = 3

  var titleBar = document.createElement('div');
  titleBar.className = 'treeModal-title-bar';
  titleBar.textContent = 'Draggable Title';

  var closeButton = document.createElement('span');
  closeButton.className = 'treeModal-close-button';
  closeButton.textContent = 'X';

  var treeContainer = document.createElement('div');
  treeContainer.id = 'tree';

  var collapseButton = document.createElement('button');
  collapseButton.className = 'collapse-all-button';
  collapseButton.textContent = 'Collapse all';

  titleBar.appendChild(closeButton);
  modal.appendChild(titleBar);
  modal.appendChild(treeContainer);
  modal.appendChild(collapseButton);
  document.body.appendChild(modal);

  // Initialize the tree view
  var treeData = [elementsData];

  // Create a simple unordered list to represent the tree
  function renderTree(data, container, level = 0) {
      var ul = document.createElement('ul');
      if (level > 0) {
          ul.style.display = 'none'; // Initially hide the list
      }
      for (var key in data) {
          var li = document.createElement('li');
          li.textContent = key;
          if (typeof data[key] === 'object') {
              var span = document.createElement('span');
              span.textContent = '+ ';
              span.style.cursor = 'pointer';
              span.onclick = function() {
                  var childUl = this.nextElementSibling;
                  if (childUl) {
                      if (childUl.style.display === 'none') {
                          childUl.style.display = 'block';
                          this.textContent = '- ';
                      } else {
                          childUl.style.display = 'none';
                          this.textContent = '+ ';
                      }
                  }
              };
              li.prepend(span);
              renderTree(data[key], li, level + 1);
          }else{
              li.textContent = key + ' : ' + data[key];
          }
          ul.appendChild(li);
      }
      container.appendChild(ul);
  }

  renderTree(treeData, treeContainer);

  // Add event listeners
  closeButton.addEventListener('click', function() {
    modal.remove();
  });

  collapseButton.addEventListener('click', function() {
      var uls = document.querySelectorAll('#tree ul');
      uls.forEach(function(ul) {
          if (ul.parentElement === treeContainer) {
              ul.style.display = 'block'; // Expand level 0
          } else {
              ul.style.display = 'none'; // Collapse other levels
          }
          var span = ul.previousElementSibling;
          if (span) {
              span.textContent = ul.style.display === 'none' ? '+ ' : '- '; // Update the collapse/expand sign
          }
      });
  });

  // Make the modal draggable
  var isDragging = false;
  var offset = { x: 0, y: 0 };
  titleBar.addEventListener('mousedown', function(e) {
    isDragging = true;
    offset.x = e.clientX - modal.getBoundingClientRect().left;
    offset.y = e.clientY - modal.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', function(e) {
    if (isDragging) {
      modal.style.left = (e.clientX - offset.x) + 'px';
      modal.style.top = (e.clientY - offset.y) + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  // Create the Refresh button
  var refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.textContent = 'Refresh';
  refreshButton.style.backgroundColor = '#008080'; // Windows 2000 title bar color
  refreshButton.style.color = 'white';
  refreshButton.style.padding = '5px';
  refreshButton.style.cursor = 'pointer';
  refreshButton.style.border = 'none';

  // Add event listener to the Refresh button
  refreshButton.addEventListener('click', function() {
      treeContainer.innerHTML = ''
      var treeData = [elementsData];
      renderTree(treeData, treeContainer);
  });

  // Append the Refresh button to the modal header
  var modalHeader = document.querySelector('.treeModal-header');
  modal.appendChild(refreshButton);

}

function mainContainerInit(){

  const mainContainer = document.getElementById('mainContainer');

  defaultHeight = GLOBAL_resolutionHeight
  defaultWidth  = GLOBAL_resolutionWidth

  mainContainer.style.height = defaultHeight + 'px'
  mainContainer.style.width = defaultWidth + 'px'
  mainContainer.style.position = 'absolute'
  mainContainer.style.top = 0
  mainContainer.style.left = 0
  mainContainer.style.border = "1px solid white"

}

function getConfig(hardwareKey){

  // fetch backend API server to search hardware key on database
  // 'day_time_source' options: 'local', 'api'
  // 'sunset' format: '07:00 PM'
  // 'sunrise' format: '07:00 AM'

  configData = {
    'city_param' : 'Medellin,Colombia',
    'city_string': 'Medellín',
    'sun_time_source' : 'api',
  }

  configData_0 = {
    'city_param' : 'Bogota,Colombia',
    'city_string': 'Bogotá',
    'sun_time_source' : 'api',
  }

  configData_1 = {
    'city_param' : 'Buenos Aires',
    'city_string': 'Buenos Aires',
    'sun_time_source' : 'api',
  }

  configData_2 = {
    'city_param' : 'Atlanta',
    'city_string': 'Atlanta',
    'sun_time_source' : 'api',
  }

  configData_3 = {
    'city_param' : 'Singapur',
    'city_string': 'Singapur',
    'sun_time_source' : 'api',
  }

  GLOBAL_config_data = configData

}

// =====
// MainLoop
// =====

async function mainLoop(){
  
  // refresh nap in seconds
  GLBOAL_refresh_nap = 60

  GLOBAL_counter_secs += 0.5;
    //console.log("mainLoop counter_secs=" + counter_secs)
    if((GLOBAL_counter_secs == 1) || (GLOBAL_counter_secs % GLOBAL_refresh_nap === 0)){

      GLOBAL_status = "Refreshing main container.."
      populateMonitorDiv()

      //const weatherData = await fetchWeather_v2()

      mainContainerRenderer(window.GLOBAL_config_name, domElementsConfig);
      //mainContainerRenderer("clima", domElementsConfig);
      //mainContainerRenderer("indeco", domElementsConfig);
      //mainContainerRenderer("picoplaca", domElementsConfig);
      
      //mainContainerRefresh(domElementsConfig)

      const now = new Date()
      const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }
      const nowTime = now.toLocaleTimeString('en-US', timeOptions)
      GLOBAL_last_refresh = nowTime 
      GLOBAL_status = "Refresh finished OK"
      populateMonitorDiv()
      
    }

    if(window.GLOBAL_startVideoEnabled){
      if(window.GLOBAL_startNap == GLOBAL_counter_secs){
        console.log("Removing startVideo at counter_sec=" + GLOBAL_counter_secs)
        delete domElementsConfig[window.GLOBAL_startVideoElement]
        window.GLOBAL_startVideoEnabled = false
        mainContainerRefresh(domElementsConfig)
      }
    }

    populateMonitorDiv()

}

// =====
// Init functions
// =====

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// =====
// Init functions
// =====

async function run() {
  
  var nap = 150
  console.log("Start run process...");
  GLOBAL_status = "Loading DOM objects.."
  await sleep(nap);
  // Call the async function and wait for it to complete
  mainContainerInit()

  GLOBAL_hardwareKey = "value_1"
  GLOBAL_status = "Fetching hardwareKey data.."
  GLOBAL_hardwareKey = await getHardwareKey();
  // After the async function completes, continue with the result

  await sleep(nap);
  GLOBAL_status = "Fetching API config.."
  
  await sleep(nap);
  getConfig(GLOBAL_hardwareKey)

  await sleep(nap);
  GLOBAL_status = "Starting mainLoop() .."
  setInterval(mainLoop, 500);
  //mainContainerRefresh(domElementsConfig)

  await sleep(nap);
  GLOBAL_status = "Load finished OK"

}

run();

// Call the function that uses async/await
//GLOBAL_hardwareKey = getHardwareKey()

//displayLocalWeather_v2();
//setInterval(displayLocalTime, 1000);
//displayLocalTime();

/* ===== Start Notes =====

https://www.tutorialspoint.com/html/images/html-mini-logo.jpg

   ===== Start Notes ===== */

