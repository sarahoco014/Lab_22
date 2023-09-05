import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";
import "./CountryContainer.css";

const CountryContainer = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();
      setCountries(jsonData);
    } catch (error) {
      console.error("Error loading API data: ", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const moveFromAllToVisited = (country) => {
    setVisitedCountries((prevVisitedCountries) => [
      ...prevVisitedCountries,
      country,
    ]);

    setCountries((prevCountries) =>
      prevCountries.filter((c) => c.cca3 !== country.cca3)
    );
  };

  const removeFromVisited = (country) => {
    const updatedVisitedCountries = visitedCountries.filter(
      (visitedCountry) => visitedCountry.cca3 !== country.cca3
    );
    setVisitedCountries(updatedVisitedCountries);
    setCountries((prevCountries) => [...prevCountries, country]);
  };

  return (
    <div className="country-container">
      <h1>Country Bucket List</h1>
      {countries.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="lists-container">
          <div className="list">
            <h2>All Countries</h2>
            <CountryList countries={countries} moveFromAllToVisited={moveFromAllToVisited} />
          </div>
          <div className="list">
            <h2>Visited Countries</h2>
            <VisitedCountryList
              visitedCountries={visitedCountries}
              removeFromVisited={removeFromVisited}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryContainer;
