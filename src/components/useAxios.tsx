import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosReq } from "../interfaces";

const UseAxios = (url: string) => {
  const [data, setData] = useState<AxiosReq>({
    items: [],
  });
  useEffect(() => {
    try {
      axios.get(url).then((response) => {
        setData({
          items: response.data,
        });
      });
    } catch (error) {
      console.error(error);
      setData({
        items: [],
      });
    }
  }, [url]);
  return data?.items;
};

export default UseAxios;
