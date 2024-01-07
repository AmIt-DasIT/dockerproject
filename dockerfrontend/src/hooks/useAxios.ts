import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useRef, useState } from "react";




const useAxios = (axiosparams: AxiosRequestConfig) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState(0);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.request({
          ... axiosparams,
          signal: controllerRef.current.signal
        });
        setData(response.data.data);
        setStatus(response.status);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { cancel, data, error, loaded, status };
};

export default useAxios;