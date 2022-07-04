import { useEffect, useState } from "react";

export const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      console.log(results);
    };
    fetchData();
  }, []);

  return <div>App</div>;
};
