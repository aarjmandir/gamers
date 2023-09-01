import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../stores/gameQueryStore";

const GenreList = () => {
  const { gameQuery, setGenreId } = useGameQueryStore((s) => ({
    gameQuery: s.gameQuery,
    setGenreId: s.setGenreId,
  }));
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreItemSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            padding={1}
            borderRadius={5}
            backgroundColor={gameQuery.genreId === genre.id ? "gray.700" : ""}
          >
            <HStack>
              <Image
                boxSize="36px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={gameQuery.genreId === genre.id ? "bold" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
