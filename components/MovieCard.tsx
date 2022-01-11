import Link from "next/link";
import { Box, Image } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  return (
    <Box minW="185px">
      <Box>
        <Link href={`/movies/${movie.id}`} passHref>
          <Image
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
        </Link>
      </Box>
      <Box display="flex">
        <Box>{movie.vote_average}/10</Box>
        <Box ml={2}>{movie.vote_count} votes</Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
