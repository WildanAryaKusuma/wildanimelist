import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    // Baca input dari request body
    const { anime_mal_id, user_email, anime_image, anime_title } =
      await request.json();
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    // Simpan data ke database
    const createCollection = await prisma.collection.create({ data });

    // Jika berhasil, kirimkan respons sukses
    return Response.json({ status: "200", isCreated: true });
  } catch (error) {
    console.error("Error in POST /api/v1/collection:", error);

    // Jika ada error, kirimkan respons error
    return Response.json({
      status: "500",
      isCreated: false,
      error: error.message,
    });
  }
}
