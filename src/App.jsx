import { useEffect, useState } from "react";

export const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      setCharacters(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <ol>
        {characters.map((charachter) => {
          return <li>{charachter.name}</li>;
        })}
      </ol>
    </div>
  );
};
