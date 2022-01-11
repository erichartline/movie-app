import { useRouter } from "next/router";
import useSWR from "swr";
import { Box } from "@chakra-ui/react";
import { getMovieEndpoint } from "../../lib/tmdb";

const Movie = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(id ? getMovieEndpoint(id) : null);

  if (error) {
    return <Box>failed to load :(</Box>;
  }

  if (!data) {
    return <Box>loading...</Box>;
  }

  return <Box>{data.title}</Box>;
};

export default Movie;
