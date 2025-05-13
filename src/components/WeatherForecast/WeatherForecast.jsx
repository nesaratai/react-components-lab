import './WeatherForecast.css';

import WeatherIcon from './WeatherData';
import WeatherData from './WeatherIcon';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
    <WeatherData forecast={forecast} />
    <WeatherIcon forecast={forecast} />
    </div>
  );
};


export default WeatherForecast;