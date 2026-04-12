import React from "react";

export default class Weather extends React.Component {

  state = {
    data: null
  }

  render() {
    const { data } = this.state;

    if (data) {
      // console.log(data)
      const weatherInfo = data.data[0];
      // console.log(weatherInfo)


      return (
        <article>
          <h1>{weatherInfo.city_name}</h1>
          <p>{weatherInfo.weather.description}</p>
          <p>Temperature: {weatherInfo.temp}°C</p>
        </article>
      )
    }
    return null
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    this.fetchWeatherData(lat, lng)
  }

  async fetchWeatherData(lat, lng) {
    const resp = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.API_KEY}&lat=${lat}&lon=${lng}`);
    const data = await resp.json();

    this.setState({ data: data })
  }
}