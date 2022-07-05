import { useEffect, useState } from "react";
import { Character } from "./Character";
export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await response.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container bg-danger">
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
