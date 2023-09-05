const CountryList = ({ countries, moveFromAllToVisited }) => {
    return (
      <>
        <ul>
          {countries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => moveFromAllToVisited(country)}>Visited!</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default CountryList;