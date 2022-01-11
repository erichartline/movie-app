import { useRouter } from "next/router";
import useSWR from "swr";
import { getMovieEndpoint } from "../../lib/tmdb";

const Movie = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(id ? getMovieEndpoint(id) : null);

  if (error) {
    return <div>failed to load :(</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>{data.title}</div>
    </div>
  );
};

export default Movie;
