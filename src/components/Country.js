const Country = ({ countryData }) => {
    return (
      <div>
        <h2>{countryData.name.common}</h2>
        <p>Capital: {countryData.capital || "N/A"}</p>
        <p>Region: {countryData.region || "N/A"}</p>
      </div>
    );
  };
  
  export default Country;