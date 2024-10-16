const express = require('express')
const app = express()
const port = 3000


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
            "day": "1",
            "temperature": Math.floor(Math.random() * 35 - 5) + " °C",            
            "wind": Math.floor(Math.random() * 12) + " km/h"
          },
          {
            "day": "2",
            "temperature": Math.floor(Math.random() * 35 - 5) + " °C",
            "wind": Math.floor(Math.random() * 12) + " km/h"
          },
          {
            "day": "3",
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
