import Link from "next/link";
import { Image, Stack } from "@chakra-ui/react";
import useSWR from "swr";

const MovieList = ({ title, url }) => {
  const { data, error } = useSWR(url);

  if (error) {
    return <div>failed to load :(</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h3>{title}</h3>
      <Stack direction="row" overflowX="auto">
        {data.results.map((item) => (
          <Link key={item.id} href={`/movies/${item.id}`} passHref>
            <Image
              src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt={item.title}
            />
          </Link>
        ))}
      </Stack>
    </div>
  );
};

export default MovieList;
