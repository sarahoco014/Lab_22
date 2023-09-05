const VisitedCountryList = ({ visitedCountries, removeFromVisited }) => {
    return (
      <>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>
              {country.name.common}{" "}
              <button onClick={() => removeFromVisited(country)}>Remove</button>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default VisitedCountryList;