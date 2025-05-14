const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todos los orígenes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos permitidos
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Headers permitidos
    
    // Para manejar las solicitudes OPTIONS (pre-flight) en algunos navegadores
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

app.get('/weather/:city', (req, res) => {
    let n = Math.floor(Math.random() * 6);
    let desc = "";
    
    switch(n){
        case 0:
            desc = "Rainy";
            break;
        case 1:
            desc = "Ligh rain";
            break;
        case 2: 
            desc = "Super cloudy";
            break;
        case 3: 
            desc = "Cloudy";
            break;
            default:
            desc = "Sunny";
            break;
    }

    const response = {
        "city": req.params.city,
        "temperature": Math.floor(Math.random() * 35 - 5) + " °C",
        "wind": Math.floor(Math.random() * 12) + " km/h",
        "description": desc,
        "forecast": [
          {
            "day": 1,
            "temperature": Math.floor(Math.random() * 35 - 5) + " °C",            
            "wind": Math.floor(Math.random() * 12) + " km/h"
          },
          {
            "day": 2,
            "temperature": Math.floor(Math.random() * 35 - 5) + " °C",
            "wind": Math.floor(Math.random() * 12) + " km/h"
          },
          {
            "day": 3,
            "temperature": Math.floor(Math.random() * 35 -5) + " °C",
            "wind": Math.floor(Math.random() * 12) + " km/h"
          }
        ]
      }

  res.send(response);  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
