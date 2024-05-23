import { useEffect, useState } from 'react';
import { getNormalizedGamesDataByCategory } from './api-utils';

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getNormalizedGamesDataByCategory(endpoint, category);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint, category]);

  return { data, loading, error };
};
