import { useSelector } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";

import "./App.css";
import { selectLocation } from "../../redux/selectors";
import List from "../List/List";

function App() {
  const itemsLocation = useSelector(selectLocation);

  return (
    <>
      <SearchForm />

      {Object.keys(itemsLocation).length !== 0 && (
        <>
          <List />
        </>
      )}
    </>
  );
}

export default App;
