import useFetchData from './useFetchData';

export default function CountryList() {
  const {
    data: countries,
    isSuccess,
    isLoading,
    isError,
  } = useFetchData(
    'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code'
  );

  return (
    <>
      &nbsp;&nbsp;&nbsp;
      {isLoading ? (
        <div>loading...</div>
      ) : isError ? (
        <div>error</div>
      ) : (
        <select style={{ width: 500 }}>
          {isSuccess &&
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
