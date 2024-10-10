import { useSelector } from "react-redux";
import { selectCurrent, selectForecast } from "../../redux/selectors";
import s from "./WeatherDetails.module.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { TbUvIndex } from "react-icons/tb";

const WeatherDetails = () => {
  const itemsForecast = useSelector(selectForecast);
  const forecast = itemsForecast[0];

  const itemsCurrent = useSelector(selectCurrent);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.temperature}>{Math.round(itemsCurrent.temp_c)}°C</p>
          <p className={s.feelsLike}>
            <span className={s.span}>Feels like: </span>
            {Math.round(itemsCurrent.feelslike_c)}°C
          </p>
          <ul>
            <li className={s.sunStateItem}>
              <img src="" alt="" className={s.sunStateItemImg} />

              <div>
                <p className={s.sunStateItemText}> Sunrise</p>
                <p className={s.sunStateItemTime}>{forecast.astro.sunrise}</p>
              </div>
            </li>

            <li className={s.sunStateItem}>
              <img src="" alt="" className={s.sunStateItemImg} />
              <div>
                <p className={s.sunStateItemText}> Sunset</p>
                <p className={s.sunStateItemTime}>{forecast.astro.sunset}</p>
              </div>
            </li>
          </ul>
        </li>
        <li className={s.item}>
          <img src={itemsCurrent.condition.icon} alt="" className={s.mainImg} />
          <p className={s.title}>{itemsCurrent.condition.text}</p>
        </li>
        <li className={s.item}>
          <ul className={s.listOfCurrentData}>
            <li className={s.dataItem}>
              <ul className={s.dataItemList}>
                <li>
                  <WiHumidity className={s.dataImg} />
                </li>
                <li className={s.dataValue}>{itemsCurrent.humidity}%</li>
                <li className={s.dataDescription}>Humidity</li>
              </ul>
            </li>
            <li className={s.dataItem}>
              <ul className={s.dataItemList}>
                <li>
                  <FaWind className={s.dataImg} />
                </li>
                <li className={s.dataValue}>{itemsCurrent.wind_kph} km/h</li>
                <li className={s.dataDescription}>Wind Speed</li>
              </ul>
            </li>
            <li className={s.dataItem}>
              <ul className={s.dataItemList}>
                <li>
                  <IoMdSpeedometer className={s.dataImg} />
                </li>
                <li className={s.dataValue}>{itemsCurrent.pressure_mb} hPa</li>
                <li className={s.dataDescription}>Pressure</li>
              </ul>
            </li>
            <li className={s.dataItem}>
              <ul className={s.dataItemList}>
                <li>
                  <TbUvIndex className={s.dataImg} />
                </li>
                <li className={s.dataValue}>{itemsCurrent.uv}</li>
                <li className={s.dataDescription}>UV</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetails;
