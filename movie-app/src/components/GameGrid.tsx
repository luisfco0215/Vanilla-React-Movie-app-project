import UseGames from "./UseGames";

const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <>
      <h3>Game Grid</h3>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
