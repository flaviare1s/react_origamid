import React, { useCallback, useState } from 'react';

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async(url, options) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      setLoading(false);
    } catch (erro) {
      json = null
      setError;
    } finally {
      setData(json);
      setLoading(false)
      return {response, json}
    }
  }, [])

  return { data, error, loading, request };
};
