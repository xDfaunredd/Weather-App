import WeatherDetails from "../WeatherDetails/WeatherDetails";
import CityInfo from "../CityInfo/CityInfo";
import FiveDaysForecast from "../FiveDaysForecast/FiveDaysForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import s from "./List.module.css";
const List = () => {
  return (
    <>
      <ul className={s.upperList}>
        <li>
          <CityInfo />
        </li>
        <li>
          <WeatherDetails />
        </li>
      </ul>

      <ul className={s.bottomList}>
        <li>
          <FiveDaysForecast />
        </li>
        <li>
          <HourlyForecast />
        </li>
      </ul>
    </>
  );
};

export default List;
