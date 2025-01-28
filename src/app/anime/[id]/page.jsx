import CollectionButton from "@/components/AnimeList/CollectionButton";
import CommentCard from "@/components/AnimeList/CommentCard";
import CommentInput from "@/components/AnimeList/CommentInput";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });

  const comments = await prisma.comment.findMany({
    where: { anime_mal_id: id },
  });

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>RANK</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>MEMBERS</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={270}
          className="w-full rounded object-cover"
        />
        <p className="text-xl text-justify">{anime.data.synopsis}</p>
      </div>

      <div className="p-4">
        {user && (
          <>
            <h3 className="text-color-primary text-xl  pb-2 px-0">
              Write Your Comment
            </h3>
            <CommentInput
              anime_mal_id={id}
              user_email={user?.email}
              user_name={user?.name}
              anime_title={anime.data.title}
            />
          </>
        )}
        {comments.length > 0 && (
          <>
            <h3 className="text-color-primary text-2xl pt-6 pb-2 px-0">
              Comments Section
            </h3>
            <CommentCard anime_mal_id={id} />
          </>
        )}
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
