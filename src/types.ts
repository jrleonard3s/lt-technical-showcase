export type Album = {
  albumId: number;
  photos: Photo[];
};

export type Photo = {
  url: string;
  title: string;
  albumId: number;
  photoId: number;
};
