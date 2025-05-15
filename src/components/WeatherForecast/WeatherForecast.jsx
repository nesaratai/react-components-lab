import './WeatherForecast.css';

import WeatherIcon from '../WeatherData/WeatherData';
import WeatherData from '../WeatherIcon/WeatherIcon';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
    <WeatherData forecast={forecast} />
    <WeatherIcon forecast={forecast} />
    </div>
  );
};


export default WeatherForecast;