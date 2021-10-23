import { useState, useEffect } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    // fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code', {
    //   method: 'GET',
    // })
    //   .then((reponse) => reponse.json())
    //   .then((json) => {
    //     setCountries(json);
    //     setIsSuccess(true);
    //     setIsLoading(false);
    //   })
    //   .catch(() => {
    //     setIsError(true);
    //     setIsLoading(false);
    //   });
    (async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
      });
      const json = await response.json().catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
      setData(json);
      setIsSuccess(true);
      setIsLoading(false);
    })();
  }, [url]);

  return {
    data,
    isSuccess,
    isLoading,
    isError,
  };
}
