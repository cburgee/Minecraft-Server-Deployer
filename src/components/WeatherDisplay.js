import styles from "./WeatherDisplay.module.css"
export default function WeatherDisplay({ weatherData }) {
  return weatherData ? (
    <div className={styles.content}>
      <h2>Whats the weather in: </h2>
      <h3>Dallas, TX</h3>
      <h5>Temp: {weatherData.current.temp}F</h5>
      <h5>Feels Like: {weatherData.current.feels_like}F</h5>
    </div>
  ) : (
    <div />
  )
}
