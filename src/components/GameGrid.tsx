import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGemes";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatforms";
import { Order } from "./SortSelector";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder: Order | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
}: Props) => {
  const {
    error,
    data: games,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform, selectedOrder);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
