import { Box, Heading, Stack } from "@chakra-ui/react";
import useSWR from "swr";
import MovieCard from "./MovieCard";

const MovieList = ({ title, url }) => {
  const { data, error } = useSWR(url);

  if (error) {
    return <Box>failed to load :(</Box>;
  }

  if (!data) {
    return <Box>loading...</Box>;
  }

  return (
    <Box>
      <Heading as="h2" size="xl" pb={2}>
        {title}
      </Heading>
      <Stack direction="row" overflowX="auto" pl={1}>
        {data.results.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </Stack>
    </Box>
  );
};

export default MovieList;
