import { useState, useEffect } from 'react';

export default function CountryList() {
  const [countries, setCountries] = useState();
  const [isError, setIsError] = useState(false);
  // const countries = [
  //   {
  //     name: 'Myanmar',
  //     code: 'mm',
  //   },
  //   {
  //     name: 'Thailand',
  //     code: 'th',
  //   },
  //   {
  //     name: 'England',
  //     code: 'gb',
  //   },
  // ];

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code', {
      method: 'GET',
    })
      .then((reponse) => reponse.json())
      .then((json) => setCountries(json))
      .catch(() => setIsError(true));
  }, []);

  // countries.forEach((country) => console.log(country.name));

  // for (let country of countries) {
  // for (let i in country) {
  //   console.log(i + ': ' + country[i]);
  // }
  // console.log(Object.keys(country));
  // console.log(Object.values(country));
  // console.log(Object.entries(country));
  // }

  return (
    <>
      &nbsp;&nbsp;&nbsp;
      {!countries && !isError ? (
        <div>loading...</div>
      ) : isError ? (
        <div>error</div>
      ) : (
        <select style={{ width: 500 }}>
          {countries &&
            countries.map((country) => (
              <option value={country.alpha2Code} key={country.alpha2Code}>
                {country.name}
              </option>
            ))}
        </select>
      )}
    </>
  );
}
