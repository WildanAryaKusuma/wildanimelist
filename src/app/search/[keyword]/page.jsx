import React from 'react'
import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse } from '@/libs/api-libs'

const Page = async ({params}) => {
  const {keyword} = params

  const decodedKeyword =  decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <>
      {/* Filter by Popular Anime */}
        <section>
        <Header title={`Pencarian Untuk ${decodedKeyword}...`}/>
        <AnimeList api={searchAnime} />
        </section>
    </>
  )
}

export default Page