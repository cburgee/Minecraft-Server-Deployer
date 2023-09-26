async function getWeatherData() {
  const dallasLatitude = 32.78
  const dallasLongitude = -96.81
  const apiEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${dallasLatitude}&lon=${dallasLongitude}&units=imperial&exclude=hourly,alerts,minutely&appid=${process.env.REACT_APP_API_KEY}`
  const res = await fetch(apiEndpoint)
  if (res.ok) return res.json()
  throw new Error("Bad Request")
}

export default getWeatherData
