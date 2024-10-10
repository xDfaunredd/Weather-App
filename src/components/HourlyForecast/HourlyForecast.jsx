import { useSelector } from "react-redux";
import { selectForecast } from "../../redux/selectors";
import s from "./HourlyForecast.module.css";

const HourlyForecast = () => {
  const forecastItem = useSelector(selectForecast).slice(0, 2);

  const hourlyForecastObj = { ...forecastItem[0] };
  const hourlyForecastSecondObj = { ...forecastItem[1] };

  return (
    <div className={s.container}>
      <h4 className={s.title}>Hourly Forecast</h4>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.targetHour}>12:00</p>
          <img
            className={s.image}
            src={hourlyForecastObj.hour[12].condition.icon}
            alt={hourlyForecastObj.hour[12].condition.text}
          />
          <p className={s.temperature}>
            {Math.round(hourlyForecastObj.hour[12].temp_c)}°C
          </p>
          <p className={s.windDirection}>
            Wind Dir: {hourlyForecastObj.hour[12].wind_dir}
          </p>
          <p className={s.windSpeed}>
            {hourlyForecastObj.hour[12].wind_kph} km/h
          </p>
        </li>

        <li className={s.item}>
          <p className={s.targetHour}>15:00</p>
          <img
            className={s.image}
            src={hourlyForecastObj.hour[15].condition.icon}
            alt={hourlyForecastObj.hour[15].condition.text}
          />
          <p className={s.temperature}>
            {Math.round(hourlyForecastObj.hour[15].temp_c)}°C
          </p>
          <p className={s.windDirection}>
            Wind Dir: {hourlyForecastObj.hour[15].wind_dir}
          </p>
          <p className={s.windSpeed}>
            {hourlyForecastObj.hour[15].wind_kph} km/h
          </p>
        </li>

        <li className={s.item}>
          <p className={s.targetHour}>18:00</p>
          <img
            className={s.image}
            src={hourlyForecastObj.hour[18].condition.icon}
            alt={hourlyForecastObj.hour[18].condition.text}
          />
          <p className={s.temperature}>
            {Math.round(hourlyForecastObj.hour[18].temp_c)}°C
          </p>
          <p className={s.windDirection}>
            Wind Dir: {hourlyForecastObj.hour[18].wind_dir}
          </p>
          <p className={s.windSpeed}>
            {hourlyForecastObj.hour[18].wind_kph} km/h
          </p>
        </li>

        <li className={s.item}>
          <p className={s.targetHour}>21:00</p>
          <img
            className={s.image}
            src={hourlyForecastObj.hour[21].condition.icon}
            alt={hourlyForecastObj.hour[21].condition.text}
          />
          <p className={s.temperature}>
            {Math.round(hourlyForecastObj.hour[21].temp_c)}°C
          </p>
          <p className={s.windDirection}>
            Wind Dir: {hourlyForecastObj.hour[21].wind_dir}
          </p>
          <p className={s.windSpeed}>
            {hourlyForecastObj.hour[21].wind_kph} km/h
          </p>
        </li>

        <li className={s.item}>
          <p className={s.targetHour}>00:00</p>
          <img
            className={s.image}
            src={hourlyForecastSecondObj.hour[0].condition.icon}
            alt={hourlyForecastSecondObj.hour[0].condition.text}
          />
          <p className={s.temperature}>
            {Math.round(hourlyForecastSecondObj.hour[0].temp_c)}°C
          </p>
          <p className={s.windDirection}>
            Wind Dir: {hourlyForecastSecondObj.hour[0].wind_dir}
          </p>
          <p className={s.windSpeed}>
            {hourlyForecastSecondObj.hour[0].wind_kph} km/h
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HourlyForecast;
