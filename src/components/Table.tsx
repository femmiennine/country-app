import { Link } from 'react-router-dom';
import "../styles/Table.css"

interface Props {
  country: {
    flags: any;
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
    cca3: string;
  };
}

const Table: React.FC<Props> = ({ country }) => {
  const population = country.population.toLocaleString();

  return (
      <tbody>
        <tr>
          <td><img className="flag" src={country.flags.svg} alt='flag' /></td>
          <Link className="country__link" to={`/country/${country.cca3}`}>
          <td>{country.name.common}</td>
          </Link>
          <td>{country.capital}</td>
          <td>{country.region}</td>
          <td>{population}</td>
        </tr>
      </tbody>
  );
};

export default Table;