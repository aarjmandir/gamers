import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="75vh"
      >
        <Spinner />
      </Box>
    );
  if (error || !game) throw error;
  return (
    <Box padding={5}>
      <Heading marginBottom={3}>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
