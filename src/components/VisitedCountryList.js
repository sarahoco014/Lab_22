import Country from "./Country"; // Import the updated Country component

const VisitedCountryList = ({ visitedCountries, removeFromVisited }) => {
  return (
    <>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>
            <Country countryData={country} />
            <button onClick={() => removeFromVisited(country)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VisitedCountryList;
