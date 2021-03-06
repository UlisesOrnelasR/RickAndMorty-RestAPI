import { CharacterList } from "./components/CharacterList";

export const App = () => {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4 fw-bold">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
};
