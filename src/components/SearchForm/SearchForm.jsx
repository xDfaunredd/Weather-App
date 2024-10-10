import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../../redux/options";
import s from "./SearchForm.module.css";

const initialValues = {
  searchCity: "",
};

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    if (values.searchCity.trim() === "") {
      return;
    }
    dispatch(fetchSearchData(values.searchCity));
    actions.resetForm();
  };
  return (
    <div className={s.container}>
      <button type="button" className={s.switchThemeButton}>
        Switch Theme
      </button>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="searchCity"
            className={s.input}
            placeholder="Enter your City"
          />
          <button type="submit" className={s.searchButton}>
            Search
          </button>
        </Form>
      </Formik>

      <button type="button" className={s.currentLocationButton}>
        Current Location
      </button>
    </div>
  );
};

export default SearchForm;
