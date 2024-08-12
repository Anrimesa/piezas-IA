domElementsConfig = {}

//window.GLOBAL_config_name = "clima"
//window.GLOBAL_config_name = "indeco"
window.GLOBAL_config_name = "picoplaca"

window.mediaDir = "./"
//window.mediaDir = "./media/"

/* 
 shadow horizontal offset (10px),
 shadow vertical offset (10px),
 shadow blur radius (20px),
 shadow spread radius (0px),
 shadow color (rgba(0, 0, 0, 0.5))

 var boxShadow = "10px 10px 20px 0px rgba(0, 0, 0, 0.5)"
 */

var boxAnimation = "glow 1s infinite alternate"

var boxShadow = "0     0     10px 5px rgba(0, 0, 0, 0.3), " +  // Top shadow
                "10px  0     10px 5px rgba(0, 0, 0, 0.3), " +  // Right shadow
                "0     10px  10px 5px rgba(0, 0, 0, 0.3), " +  // Bottom shadow
                "-10px 0     10px 5px rgba(0, 0, 0, 0.3)";     // Left shadow

domElementsConfig_pp = {

    "domElement-video-0": {
      "left": "0px",
      "top": "0px",
      "height": "1080px",
      "width": "1920px",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "grey",
      "background-color": "none",
      "border": "0px solid green",
      "innerText": "Video Object",
      "className": "domElement-video",
      "zIndex": "0",
      "src": "./background_pp.webm",
      "loop": "true",
      "played": "true"
    },
    "domElement-image-sombra-1": {
      "left": "1225px",
      "top": "45px",
      "height": "1000px",
      "width": "595px",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "black",
      "background-color": "none",
      "border": "0px solid white",
      "src": "./sombra.png",
      "className": "domElement-image",
      "border-radius": "3%",
      "boxShadow": "0     0     10px 5px rgba(0, 0, 0, 0.3), 10px  0     10px 5px rgba(0, 0, 0, 0.3), 0     10px  10px 5px rgba(0, 0, 0, 0.3), -10px 0     10px 5px rgba(0, 0, 0, 0.3)",
      "zIndex": "1"
    },
    "domElement-image-sombra-2": {
      "left": "550px",
      "top": "735px",
      "height": "310px",
      "width": "595px",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "black",
      "background-color": "none",
      "border": "0px solid white",
      "src": "./sombra.png",
      "className": "domElement-image",
      "border-radius": "3%",
      "boxShadow": "0     0     10px 5px rgba(0, 0, 0, 0.3), 10px  0     10px 5px rgba(0, 0, 0, 0.3), 0     10px  10px 5px rgba(0, 0, 0, 0.3), -10px 0     10px 5px rgba(0, 0, 0, 0.3)",
      "zIndex": "1"
    },
    "domElement-image-sombra-3": {
      "left": "1245px",
      "top": "375px",
      "height": "345px",
      "width": "555px",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "black",
      "background-color": "none",
      "border": "0px solid white",
      "src": "./sombra.png",
      "className": "domElement-image",
      "zIndex": "1"
    },
    "domElement-image-sombra-4": {
      "left": "1245px",
      "top": "740px",
      "height": "280px",
      "width": "555px",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "black",
      "background-color": "none",
      "border": "0px solid white",
      "src": "./sombra.png",
      "className": "domElement-image",
      "zIndex": "1"
    },
    "domElement-text-header-location": {
      "left": "1275px",
      "top": "115px",
      "height": "95px",
      "width": "500px",
      "font-size": "90px",
      "font-family": "Arial",
      "text-align": "center",
      "font-weight": "bold",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "MEDELLÍN",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-vtype-1": {
      "left": "550px",
      "top": "765px",
      "height": "",
      "width": "595px",
      "font-size": "35px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "CARROS PARTICULARES",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-vtype-2": {
      "left": "600px",
      "top": "820px",
      "height": "",
      "width": "",
      "font-size": "35px",
      "font-family": "Arial",
      "text-align": "center",
      "color": "grey",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "Con el último numero de la placa",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-vtype-3": {
      "left": "550px",
      "top": "900px",
      "height": "",
      "width": "595px",
      "font-size": "35px",
      "font-family": "Verdana",
      "text-align": "center",
      "font-weight": "bold",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "MOTOS 2 Y 4 TIEMPOS",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-vtype-4": {
      "left": "550px",
      "top": "955px",
      "height": "",
      "width": "595px",
      "font-size": "35px",
      "font-family": "Arial",
      "text-align": "center",
      "color": "grey",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "Con el primer numero de la placa",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-horario": {
      "left": "1385px",
      "top": "255px",
      "height": "",
      "width": "",
      "font-size": "35px",
      "font-family": "Arial",
      "text-align": "Right",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "5:00 am - 8:00 pm   ",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-5-1": {
      "left": "1465px",
      "top": "385px",
      "height": "",
      "width": "",
      "font-size": "45px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "right",
      "color": "grey",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "HOY",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-5-2": {
      "left": "1245px",
      "top": "755px",
      "height": "",
      "width": "555px",
      "font-size": "40px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "center",
      "color": "grey",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "PROXIMA SEMANA",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-5-sep-1": {
      "left": "1500px",
      "top": "450px",
      "height": "",
      "width": "",
      "font-size": "150px",
      "font-family": "Arial",
      "text-align": "right",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "-",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-5-sep-2": {
      "left": "1510px",
      "top": "845px",
      "height": "",
      "width": "",
      "font-size": "99px",
      "font-family": "Arial",
      "text-align": "right",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "-",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-autos-1-1": {
      "left": "1320px",
      "top": "425px",
      "height": "320px",
      "width": "200px",
      "font-size": "180px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": 1,
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-autos-1-2": {
      "left": "1530px",
      "top": "425px",
      "height": "320px",
      "width": "200px",
      "font-size": "180px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": 5,
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-motos-1-1": {
      "left": "1385px",
      "top": "855px",
      "height": "150px",
      "width": "150px",
      "font-size": "90px",
      "font-weight": "bold",
      "font-family": "Verdana",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": 0,
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-motos-1-2": {
      "left": "1520px",
      "top": "855px",
      "height": "150px",
      "width": "150px",
      "font-size": "90px",
      "font-family": "Verdana",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": 2,
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-header-1": {
      "left": "1175px",
      "top": "70px",
      "height": "95px",
      "width": "700px",
      "font-size": "45px",
      "font-family": "Arial",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "PICO Y PLACA",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-date-1": {
      "left": "1275px",
      "top": "440px",
      "height": "75px",
      "width": "500px",
      "font-size": "35px",
      "font-family": "Arial",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "Viernes 2 de Agosto",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-text-date-2": {
      "left": "1275px",
      "top": "810px",
      "height": "75px",
      "width": "500px",
      "font-size": "35px",
      "font-family": "Arial",
      "font-weight": "bold",
      "text-align": "center",
      "color": "white",
      "background-color": "none",
      "border": "0px solid #ccc",
      "innerText": "Lunes 5 de Agosto",
      "className": "domElement-text",
      "zIndex": "3"
    },
    "domElement-image-22": {
      "left": "16px",
      "top": "42px",
      "height": "10%",
      "width": "",
      "font-size": "55px",
      "font-family": "Arial",
      "color": "black",
      "background-color": "none",
      "border": "0px solid white",
      "src": window.mediaDir + "Logo_Canal.png",
      "className": "domElement-image",
      "zIndex": "3"
    }
  
 
}

domElementsConfig_indeco = {
  "indeco-video-start": {
    "left": "0px",
    "top": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "grey",
    "background-color": "none",
    "border": "0px solid green",
    "innerText": "Video Object",
    "className": "domElement-video",
    "zIndex": "10",
    "src": window.mediaDir + "start_indeco.webm",
    "loop": "true",
    "played": "false"
  },
  "indeco-image-logo": {
    "left": "1300px",
    "top": "40px",
    "height": "10%",
    "width": "",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Logo_Canal.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-video-0": {
    "left": "0px",
    "top": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "grey",
    "background-color": "none",
    "border": "0px solid green",
    "innerText": "Video Object",
    "className": "domElement-video",
    "zIndex": "0",
    "src": window.mediaDir + "background_indeco_1.webm",
    "loop": "true",
    "played": "false",
  },
  "indeco-image-bg-sombra": {
    "top": "0px",
    "left": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "1"
  },
  "indeco-image-bg-sombra-2": {
    "top": "0px",
    "left": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "1"
  },
  "indeco-image-fecha-sombra": {
    "left": "140px",
    "top": "100px",
    "height": "70px",
    "width": "1000px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "indeco-image-indicadores-sombra-1": {
    "left": "140px",
    "top": "185px",
    "height": "500px",
    "width": "1000px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "2"
  },

  "indeco-image-lineas": {
    "left": "140px",
    "top": "275px",
    "height": "300px",
    "width": "1000px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Lineas.png",
    "className": "domElement-image",
    "zIndex": "3"
  },
  /*
  "indeco-image-cafe-bg": {
    "left": "1150px",
    "top": "400px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-cafe-diff": {
    "left": "1165px",
    "top": "390px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$205",
    "className": "domElement-text",
    "zIndex": "5"
  },
  */
  /*
  "indeco-image-petroleo-bg": {
    "left": "1150px",
    "top": "300px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-petroleo-diff": {
    "left": "1165px",
    "top": "290px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$5.50",
    "className": "domElement-text",
    "zIndex": "5"
  },
*/
 /* "indeco-image-euro-bg": {
    "left": "1150px",
    "top": "200px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-euro-diff": {
    "left": "1165px",
    "top": "190px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$12.50",
    "className": "domElement-text",
    "zIndex": "5"
  },*/
  /*
  "indeco-image-uvr-bg": {
    "left": "1150px",
    "top": "500px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-uvr-diff": {
    "left": "1165px",
    "top": "490px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$25.15",
    "className": "domElement-text",
    "zIndex": "5"
  },
  */
 /*
  "indeco-image-dtf-bg": {
    "left": "1150px",
    "top": "600px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-dtf-diff": {
    "left": "1165px",
    "top": "590px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$25.20",
    "className": "domElement-text",
    "zIndex": "5"
  },
  */
  "indeco-image-cafe-dir": {
    "left": "1045px",
    "top": "405px",
    "height": "39px",
    "width": "45px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-image-uvr-dir": {
    "left": "1045px",
    "top": "505px",
    "height": "39px",
    "width": "45px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-image-euro-dir": {
    "left": "1045px",
    "top": "205px",
    "height": "39px",
    "width": "45px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-image-dtf-dir": {
    "left": "1045px",
    "top": "600px",
    "height": "39px",
    "width": "45px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-image-petroleo-dir": {
    "left": "1045px",
    "top": "305px",
    "height": "39px",
    "width": "45px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "domElement-text-cafe": {
    "left": "170px",
    "top": "390px",
    "height": "95px",
    "width": "200px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Café",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-uvr": {
    "left": "170px",
    "top": "490px",
    "height": "95px",
    "width": "200px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "UVR",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-euro": {
    "left": "170px",
    "top": "190px",
    "height": "75px",
    "width": "200px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Euro",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "domElement-text-dtf": {
    "left": "170px",
    "top": "585px",
    "height": "95px",
    "width": "200px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "DTF",
    "className": "domElement-text",
    "zIndex": "5"
  },

  
  "indeco-text-petroleo": {
    "left": "170px",
    "top": "290px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Barril petróleo",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-dolar": {
    "left": "705px",
    "top": "750px",
    "height": "70px",
    "width": "500px",
    "font-size": "45px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Dólar (TRM)",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-dolar-value": {
    "left": "705px",
    "top": "830px",
    "height": "95px",
    "width": "500px",
    "font-size": "55px",
    "font-family": "Arial",
    "font-weight": "bold",
    "text-align": "left",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "5"
  },
  /*
  "indeco-image-dolar-bg": {
    "left": "1435px",
    "top": "850px",
    "height": "50px",
    "width": "150px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-dolar-diff": {
    "left": "1455px",
    "top": "840px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "$3.15",
    "className": "domElement-text",
    "zIndex": "5"
  },
  */  
  "indeco-image-dolar-sombra": {
    "left": "690px",
    "top": "755px",
    "height": "75px",
    "width": "448px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "1px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  
  "indeco-text-dolar-bg-inv": {
    "left": "690px",
    "top": "830px",
    "height": "100px",
    "width": "450px",
    "font-size": "55px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "white",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },

  "indeco-image-dolar-dir": {
    "left": "1045px",
    "top": "850px",
    "height": "55px",
    "width": "55px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "0px solid white",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "4"
  },
  "indeco-text-cafe-value": {
    "left": "700px",
    "top": "390px",
    "height": "95px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "right",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-uvr-value": {
    "left": "700px",
    "top": "490px",
    "height": "95px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "right",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-euro-value": {
    "left": "700px",
    "top": "190px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "right",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-dtf-value": {
    "left": "700px",
    "top": "585px",
    "height": "95px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "right",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "-- %",
    "className": "domElement-text",
    "zIndex": "5"
  },
  "indeco-text-petroleo-value": {
    "left": "700px",
    "top": "290px",
    "height": "75px",
    "width": "300px",
    "font-size": "40px",
    "font-family": "Arial",
    "text-align": "right",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "5"
  },
  /*"domElement-text-25": {
    "left": "0px",
    "top": "921px",
    "height": "95px",
    "width": "800px",
    "font-size": "50px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "INDICADORES ECONÓMICOS",
    "className": "domElement-text",
    "zIndex": "5"
  },*/
  /*"domElement-text-26": {
    "left": "1358px",
    "top": "800px",
    "height": "95px",
    "width": "500px",
    "font-size": "130px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Medellín",
    "className": "domElement-text",
    "zIndex": "5"
  },*/
  "indeco-text-fecha": {
    "left": "155px",
    "top": "105px",
    "height": "95px",
    "width": "600px",
    "font-size": "35px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "-----",
    "className": "domElement-text",
    "zIndex": "5"
  }
}

domElementsConfig_clima = {
  "clima-video-start": {
    "left": "0px",
    "top": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "grey",
    "background-color": "none",
    "border": "0px solid green",
    "innerText": "Video Object",
    "className": "domElement-video",
    "zIndex": "10",
    "src": window.mediaDir + "start_clima.webm",
    "loop": "true",
    "played": "false"
  },
  "domElement-image-0": {
    "left": "1300px",
    "top": "40px",
    "height": "10%",
    "width": "",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Logo_Canal.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-image-1": {
    "left": "0px",
    "top": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Sombra.png",
    "className": "domElement-image",
    "zIndex": "1"
  },
  "domElement-text-2": {
    "left": "50px",
    "top": "780px",
    "height": "95px",
    "width": "1500px",
    "font-size": "130px",
    "font-family": "Verdana",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-text-3": {
    "left": "59px",
    "top": "974px",
    "height": "95px",
    "width": "900px",
    "font-size": "35px",
    "font-family": "verdana",
    "text-align": "left",
    "color": "white",
    "background-color": "none",
    "border": "",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-video-4": {
    "left": "0px",
    "top": "0px",
    "height": "1080px",
    "width": "1920px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "grey",
    "background-color": "none",
    "border": "0px solid green",
    "innerText": "Video Object",
    "className": "domElement-video",
    "zIndex": "0",
    "src": "",
    "loop": "true",
    "played": "false"
  },
  "domElement-image-5": {
    "left": "1376px",
    "top": "150px",
    "height": "800px",
    "width": "500px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Caja.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-image-6": {
    "left": "900px",
    "top": "150px",
    "height": "800px",
    "width": "500px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Caja.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-text-7": {
    "left": "1049px",
    "top": "210px",
    "height": "95px",
    "width": "200px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Actual",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-text-8": {
    "left": "1490px",
    "top": "210px",
    "height": "95px",
    "width": "280px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "Pronóstico",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-text-9": {
    "left": "950px",
    "top": "480px",
    "height": "95px",
    "width": "400px",
    "font-size": "170px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-text-10": {
    "left": "1376px",
    "top": "480px",
    "height": "95px",
    "width": "500px",
    "font-size": "170px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-image-11": {
    "left": "1022px",
    "top": "284px",
    "height": "250px",
    "width": "250px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "none",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "Subir.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-image-12": {
    "left": "1501px",
    "top": "293px",
    "height": "250px",
    "width": "250px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "none",
    "background-color": "none",
    "border": "none",
    "src": window.mediaDir + "1_386.png",
    "className": "domElement-image",
    "zIndex": "2"
  },
  "domElement-text-13": {
    "left": "945px",
    "top": "720px",
    "height": "95px",
    "width": "400px",
    "font-size": "35px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  },
  "domElement-text-14": {
    "left": "1425px",
    "top": "720px",
    "height": "95px",
    "width": "400px",
    "font-size": "35px",
    "font-family": "Arial",
    "color": "white",
    "background-color": "none",
    "border": "none",
    "innerText": "--",
    "className": "domElement-text",
    "zIndex": "3"
  }
}

// Enabled props for DOM elements and it's default values
domClassesProps = {
  "domElement-text": {
    "left": "50%",
    "top": "50%",
    "height": "95px",
    "width": "500px",
    "font-size": "55px",
    "font-family": "Arial",
    "text-align": "left",
    "color": "black",
    "background-color": 'white',
    "border": "0px solid #ccc",
    "innerText": "New obj text",
    "className": 'domElement-text',
    "zIndex": "3"
  },
  "domElement-image": {
    "left": "50%",
    "top": "50%",
    "height": "200px",
    "width": "200px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "black",
    "background-color": 'none',
    "border": "0px solid white",
    "src": window.mediaDir + "Subir.png",
    "className": 'domElement-image',
    "zIndex": "1"
  },
  "domElement-video": {
    "left": "50%",
    "top": "50%",
    "height": "500px",
    "width": "500px",
    "font-size": "55px",
    "font-family": "Arial",
    "color": "grey",
    "background-color": 'none',
    "border": "3px solid green",
    "innerText": "Video Object",
    "className": 'domElement-video',
    "zIndex": "3",
    "src": "",
    "loop": "false",
    "played": "false"
  },
}

window.GLOBAL_startVideoEnabled = false
if (window.GLOBAL_config_name == "clima"){
  domElementsConfig = domElementsConfig_clima
  window.GLOBAL_panelPosX = 1700
  window.GLOBAL_panelPosY = 100
  window.GLOBAL_startVideoEnabled = true
  window.GLOBAL_startVideoElement = "clima-video-start"
  window.GLOBAL_startNap = 6.5
}else if(window.GLOBAL_config_name == "picoplaca"){
  domElementsConfig = domElementsConfig_pp
}else if(window.GLOBAL_config_name == "indeco"){
  domElementsConfig = domElementsConfig_indeco
  window.GLOBAL_panelPosX = 1700
  window.GLOBAL_panelPosY = 100
  window.GLOBAL_startVideoEnabled = true
  window.GLOBAL_startVideoElement = "indeco-video-start"
  window.GLOBAL_startNap = 5.5
}
