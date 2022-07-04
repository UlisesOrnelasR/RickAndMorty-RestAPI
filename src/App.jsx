import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return <div>App</div>;
};
