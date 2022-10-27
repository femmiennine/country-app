import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { filter } from "../features/countriesSlice";
import "../styles/Filter.css"

const Filter = () => {
  const [countryFilter, setCountryFilter] = useState<string | number>("");
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOnChange = (event: any) => {
    event.preventDefault()
    setCountryFilter(event.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    dispatch(filter(countryFilter));
  }, [countryFilter, dispatch]);

  return (
    <div className="filter__container">
      <select
        className="select"
        name="countryFilter"
        id="countryFilter"
        onChange={handleOnChange}
      >
        <option value="all">{isSelected ? "All" : "Filter by Region"}</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;