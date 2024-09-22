export interface AlbumReview {
  id: string;
  title: string;
  artist: string;
  publishDate: string;
  lastUpdated: string | null;
  genre: string[];
  highlights: string | null;
  bestTrack: string;
  score: number;
  review: string | null;
}
