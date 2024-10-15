"use client";

import { AlbumReview } from "@/app/types/review";
import useSWR from "swr";
import fetcher from "@/app/utils/fetcher";

export default function ReviewsPage() {
  const { data } = useSWR("/api/getAlbumReviews", fetcher);
  const reviews: AlbumReview[] = data || [];
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mt-8">
        Welcome to <span className="text-blue-500">William&apos;s reviews</span>
      </div>
      <table className="mt-8">
        <thead className="border-b border-b-foreground">
          <tr>
            <th className="px-4">Album</th>
            <th className="px-4">Artist</th>
            <th className="px-4">Genre</th>
            <th className="px-4">Best Track</th>
            <th className="px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(reviews).map(([key, review]) => (
            <tr key={key} className="even:bg-gray-100 dark:even:bg-gray-800">
              <td className="px-4">{review.title}</td>
              <td className="px-4">{review.artist}</td>
              <td className="px-4 flex gap-2">
                {review.genre.map((genre) => (
                  <div key={genre} className="px-2 bg-gray-300 dark:bg-gray-600 rounded-xl border border-gray-400">
                    {genre}
                  </div>
                ))}
              </td >
              <td className="px-4">{review.bestTrack}</td>
              <td className="px-4">{review.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
