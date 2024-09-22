import reviewData from "@/data/album_reviews.json";

export async function GET() {
  return new Response(JSON.stringify(reviewData), {
    status: 200,
    headers: { "Content-Type": "application/json"},
  }); 
}
