import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [url]);

  return data;
};
