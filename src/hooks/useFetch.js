import { useEffect, useState } from "react";
// http://numbersapi.com/${id}/trivia

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.text())
      .then((res) => setState({ data: res, loading: false }));
  }, [url, setState]);

  return state;
};
