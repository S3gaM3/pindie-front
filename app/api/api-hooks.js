// app/api/api-hooks.js

import { useState, useEffect } from "react";

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils";

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const rawData = await getNormalizedGamesDataByCategory(endpoint, category);
      if (isResponseOk(rawData)) {
        setData(rawData);
      } else {
        setData(null);
      }
    }
    fetchData();
  }, [category, endpoint]);

  return data;
};
