import { useSelector } from "react-redux";
import { selectLocation } from "../../redux/selectors";
import s from "./CityInfo.module.css";

const CityInfo = () => {
  const itemsLocation = useSelector(selectLocation);

  const date = new Date(itemsLocation.localtime);

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
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div className={s.container}>
      <h2 className={s.title}>{itemsLocation.name}</h2>
      <p className={s.time}>
        {`${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }`}{" "}
      </p>
      <p className={s.date}> {`${dayOfWeek}, ${day} ${month?.slice(0, 3)}`}</p>
    </div>
  );
};

export default CityInfo;
