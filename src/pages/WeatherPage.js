import React, { useState, useEffect } from "react"
import WeatherDisplay from "../components/WeatherDisplay"
import getWeatherData from "../utilities/weather-api"

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const json = await getWeatherData()
      console.log("got data")
      console.log(json)
      setWeatherData(json)
    }

    fetchData()
  }, [])

  return (
    <div>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  )
}

export default WeatherPage
