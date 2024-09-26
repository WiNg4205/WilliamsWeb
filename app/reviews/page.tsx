"use client"

import { AlbumReview } from "@/app/types/review";
import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";

export default function ReviewsPage() {
  const { data } = useSWR("/api/getAlbumReviews", fetcher);
  const reviews: AlbumReview[] = data || [];
  return (
    <>
      <div>Welcome to <span className="text-blue-500">William&apos;s reviews</span></div>
      <table>
        <thead>
          <tr>
            <th>Album</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Best Track</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
        {Object.entries(reviews).map(([key, review]) => (
          <tr key={key}>
            <td>{review.title}</td>
            <td>{review.artist}</td>
            <td className="flex gap-2">
              {review.genre.map((genre) => (
                <div key={genre} className="px-2 bg-gray-300 rounded-xl">{genre}</div>
              ))}
            </td>
            <td>{review.bestTrack}</td>
            <td>{review.score}</td>
          </tr>
        ))}          
        </tbody>
      </table>
    </>
  );
}
