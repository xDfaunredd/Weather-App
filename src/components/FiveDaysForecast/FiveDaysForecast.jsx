import { useSelector } from "react-redux";
import { selectForecast } from "../../redux/selectors";
import s from "./FiveDaysForecast.module.css";

const FiveDaysForecast = () => {
  const forecastItems = useSelector(selectForecast).slice(1);
  console.log(forecastItems);

  return (
    <div className={s.container}>
      <h3 className={s.title}>5 Days Forecast</h3>
      <ul className={s.list}>
        {forecastItems.map((item, index) => {
          const date = new Date(item.date);

          const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const dayOfWeek = daysOfWeek[date.getDay()];
          const day = date.getDate();
          const month = monthNames[date.getMonth()];

          return (
            <li key={index}>
              <ul className={s.listData}>
                <li>
                  <img
                    className={s.img}
                    src={item.day.condition?.icon}
                    alt={item.day.condition.text}
                  />
                </li>
                <li className={s.temperature}>
                  {Math.round(item.day?.avgtemp_c)}°C
                </li>
                <li className={s.date}>{`${dayOfWeek},${day} ${month.slice(
                  0,
                  3
                )}`}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FiveDaysForecast;
