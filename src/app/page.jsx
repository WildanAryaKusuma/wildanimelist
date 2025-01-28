import React from 'react'
import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponses, reproduce } from '../libs/api-libs'

const Page = async () => {
  const topAnime = await getAnimeResponse(`top/anime`, `limit=8`)
  let recommendedAnime = await getNestedAnimeResponses(`recommendations/anime`, "entry")
  recommendedAnime = reproduce(recommendedAnime, 4)

  return (
    <>
      {/* Filter by Popular Anime */}
      <section>
        <Header
          title={"Paling Populer"}
          linkTitle={"Lihat Semua"}
          linkHref={`/populer`}
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Filter by Recommendation Anime */}
      <section>
        <Header title={"Rekomendasi"} linkHref={`/populer`} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

export default Page