import Head from "next/head";
import { Box, Heading } from "@chakra-ui/react";
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
        <Heading as="h1" size="4xl">
          Movie Journal
        </Heading>
        <Box>
          <MoviesList
            title="Top 10 Most Popular Movies Today"
            url={ENDPOINTS["popular"]}
          />
        </Box>
      </main>

      {/* <footer>Movie Demo App</footer> */}
    </div>
  );
}
