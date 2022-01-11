import Head from "next/head";
import MoviesList from "../components/MovieList";
import { ENDPOINTS } from "../lib/tmdb";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie Journal</title>
        <meta name="description" content="Movie Journal app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Movie Journal</h1>
        <div>
          <MoviesList
            title="Top 10 Most Popular Movies Today"
            url={ENDPOINTS["popular"]}
          />
        </div>
      </main>

      {/* <footer>Movie Demo App</footer> */}
    </div>
  );
}
