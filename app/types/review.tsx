export interface AlbumReview {
  id: string;
  title: string;
  artist: string;
  year: number;
  reviewDate: string;
  lastUpdated: string | null;
  genre: string[];
  highlights: string | null;
  bestTrack: string;
  score: number;
  review: string | null;
}
