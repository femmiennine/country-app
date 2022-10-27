import Table from '../components/Table';
import { useAppSelector } from '../app/hooks';
import "../styles/TableList.css"

const TableList = () => {
  const allCountries = useAppSelector((state) => state.countries.countries);
  const countriesSearched = useAppSelector(
    (state) => state.countries.countriesSearched
  );
  const countries = countriesSearched.length ? countriesSearched : allCountries;

  return (
    <div className="table__container">
      <table className="table__header">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Population</th>
          </tr>
        </thead>

        {countries.map((country: any, index: number) => (
          <Table key={index} country={country} />
        ))}
      </table>
    </div>
  );
};

export default TableList;