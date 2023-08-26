import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { Order } from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="20px">
        <HStack marginBottom={8} spacing={5}>
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />
          <SortSelector
            onSelectOrder={(order) => setSelectedOrder(order)}
            selectedOrder={selectedOrder}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          selectedOrder={selectedOrder}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
