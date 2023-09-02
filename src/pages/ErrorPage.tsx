import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        height="75vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize={40}>Oops</Heading>
        <Text fontSize={25}>
          {isRouteErrorResponse(error)
            ? "404 Page Not Found!"
            : "Unexpected Error!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
