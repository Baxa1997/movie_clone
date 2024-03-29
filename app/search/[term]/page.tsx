import MoviesCarousel from "@/components/MoviesCarousel";
import {getPopularMovies, getSearchedMovies} from "@/lib/getMovies";
import {notFound} from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

async function Search({params: {term}}: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(term);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 lg:42">
        <h2 className="text-6xl font-bold px-10">Results for {termToUse}</h2>

        <MoviesCarousel title={"Movies"} movies={movies} isVertical={true} />
        <MoviesCarousel
          title={"You may also like"}
          movies={popularMovies}
          isVertical={false}
        />
      </div>
    </div>
  );
}

export default Search;
