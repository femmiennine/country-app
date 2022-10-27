import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import fetchCountriesData from '../features/apiCall';
import Search from "../components/Search";
import Filter from "../components/Filter";
import Nav from "../components/Nav";
import Header from "../components/Header";
import TableList from "../components/TableList";
import "../styles/Home.css"

const Home = () => {
  const dispatch = useAppDispatch();
  const allCountries = useAppSelector((state) => state.countries.countries);

  useEffect(() => {
    if (!allCountries.length) {
      fetchCountriesData(dispatch);
    }
  }, [allCountries.length, dispatch]);

  const pending = useAppSelector((state) => state.countries.pending);
  const error = useAppSelector((state) => state.countries.error);

  return (
    <div className="home__container">
      <Nav />      
      <Header />
      <Search />
      <Filter />
      <TableList />
    </div>
  );
};

export default Home;
