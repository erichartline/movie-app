import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
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
        <Header />
        <Box mt={8}>
          <MoviesList
            title="Top 10 Most Popular Movies Today"
            url={ENDPOINTS["popular"]}
          />
        </Box>
      </main>
    </div>
  );
}
