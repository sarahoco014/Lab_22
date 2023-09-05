import Country from "./Country"; 

const CountryList = ({ countries, moveFromAllToVisited }) => {
  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <Country
              countryData={country}
              onVisitedClick={moveFromAllToVisited}
            />
            <button onClick={() => moveFromAllToVisited(country)}>Visited!</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountryList;
