import { useState, useEffect } from "react";

const baseURL = 'http://localhost:9000';

const useAPICall = (callable, url, params, key, domain) => {
  const [state, setState] = useState('idle');
  const [data, setData] = useState(null);

  const settings = {
    method: callable,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  const getData = async (url, key) => {
    try {
      const response = await fetch(`${domain || baseURL}${url}`, settings);
      const repData = await response.json();
      setData(key ? repData[key] : repData);
      setState('fullfilled');
    } catch (e) {
      console.log(e);
      setState('rejected');
    }
    return;
  }

  useEffect(() => {
    getData(url, key);
    return;
  }, [url, key]);


  // useEffect(() => {
  //   callable(url, params).then(({ data }) => {
  //     console.log(data);
  //     setData(key ? data[key] : data);
  //     setState('fullfilled');
  //   }).catch((e) => {
  //     console.log(e);
  //     setState('rejected');
  //   });

  //   return;
  // }, [url, key]);

  return { state, data, setData };
}

export default useAPICall;