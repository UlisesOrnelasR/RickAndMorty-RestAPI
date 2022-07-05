import { useEffect, useState } from "react";
import { Character } from "./Character";
export const CharacterList = () => {
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
      {characters.map((character) => {
        return <Character character={character} />;
      })}
    </div>
  );
};
