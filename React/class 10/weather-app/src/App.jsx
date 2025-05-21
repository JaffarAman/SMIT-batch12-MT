import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const APIKEY = `69e67c8bdadf637986d2a5ad89d314c4`

  // const apiResponse = {
  //   "coord": {
  //     "lon": 67.0822,
  //     "lat": 24.9056
  //   },
  //   "weather": [
  //     {
  //       "id": 711,
  //       "main": "Smoke",
  //       "description": "smoke",
  //       "icon": "50n"
  //     }
  //   ],
  //   "base": "stations",
  //   "main": {
  //     "temp": 29.9,
  //     "feels_like": 33.88,
  //     "temp_min": 29.9,
  //     "temp_max": 29.9,
  //     "pressure": 1004,
  //     "humidity": 66,
  //     "sea_level": 1004,
  //     "grnd_level": 1000
  //   },
  //   "visibility": 5000,
  //   "wind": {
  //     "speed": 6.17,
  //     "deg": 240
  //   },
  //   "clouds": {
  //     "all": 20
  //   },
  //   "dt": 1747845721,
  //   "sys": {
  //     "type": 1,
  //     "id": 7576,
  //     "country": "PK",
  //     "sunrise": 1747788308,
  //     "sunset": 1747836701
  //   },
  //   "timezone": 18000,
  //   "id": 1174872,
  //   "name": "Karachi",
  //   "cod": 200
  // }

  useEffect(() => {
    // fetchData()
  }, [])

  const [cityName, setCityName] = useState("karachi")
  const [apiResponse, setApiResponse] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
      console.log("response", response.data)
      setApiResponse(response.data)
    } catch (error) {
      console.log("error: ", error.message)
    }
  }

  console.log("cityName", cityName)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(":event", event)
    fetchData()
  }
  return (
    <div>


      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter CIty Name...'
          onChange={(e) => {
            setCityName(e.target.value)
          }}
        />
        {/* <button>Check...</button> */}
      </form>


      <div>
        <h1> {new Date().toDateString()} </h1>
        <h1>City : {apiResponse?.name}  </h1>
        <h1>Weather: {apiResponse?.main?.temp} </h1>
          <img src={`https://openweathermap.org/img/w/${apiResponse?.weather[0]?.icon}.png`}
          
          alt="" />
      
      </div>

    </div>
  )
}

export default App
