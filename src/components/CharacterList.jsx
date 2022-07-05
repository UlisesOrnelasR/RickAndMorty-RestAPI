import { useEffect, useState } from "react";
import { Character } from "./Character";
import { NavPage } from "./NavPage";
export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await response.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};
