import React, { useState, useEffect, useCallback } from 'react'
import cricket from './CircketApi/api';

function useApi(endpoint) {
  const [results, setResults] = useState([]);

  const getResults = useCallback(() => {
    cricket.get(`${endpoint}`)
      .then((response) => {
        setResults(response.data.data);
      })
  }, [endpoint])

  useEffect(() => {
    getResults();
  }, [getResults])

  return [results, getResults];
}

export default useApi;