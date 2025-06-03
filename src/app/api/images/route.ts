'use server'

import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    const res = await cloudinary.search
      .expression("folder:courses-certificates-portifah")
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    const filtered = res.resources.map((img : any) => ({
      id: img.public_id,
      url: img.secure_url,
    }));

    return Response.json(filtered);
  } catch (error) {
    console.error("Erro ao buscar imagens:", error);
    return Response.json({ error: "Erro ao buscar imagens" }, { status: 500 });
  }
}