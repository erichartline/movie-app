import React from "react";
import { Box, Flex, Heading, Input, Spacer } from "@chakra-ui/react";

const Header = () => {
  const [query, setQuery] = React.useState("");
  const handleChange = (event) => setQuery(event.target.value);
  // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Heading as="h1" size="xl">
          Movie Journal
        </Heading>
      </Box>
      <Spacer />
      <Box minW="450px">
        <Input
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie"
          size="sm"
        />
      </Box>
      <Spacer />
    </Flex>
  );
};

export default Header;
