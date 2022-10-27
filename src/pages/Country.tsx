import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const Country = () => {
  const params = useParams<{ countryId: string }>();
  const allCountries = useAppSelector((state) => state.countries.countries);
  const country = allCountries.find(
    (country) => country.cca3 === params.countryId
  );

  const population = country?.population.toLocaleString();

  return (
    <div>
      <div>
        <div>
          <Link to='/' className='link'>
            <button className='btn'>
              Back
            </button>
          </Link>
        </div>
        {!country ? (
          <p>Error Loading</p>
        ) : (
          <div>
            <div>
              <img src={country?.flags.svg} alt={country?.name.common} />
            </div>
            <div>
              <h1>{country?.name.common}</h1>
              <div>
                <div>
                  <div>
                    <span>Population: {population}</span> 
                  </div>
                  <div>
                    <span>Region: {country?.region}</span> 
                  </div>
                  <div>
                    <span>Sub Region: {country?.subregion}</span> 
                  </div>
                  <div>
                    <span>Capital: {country?.capital}</span> 
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;