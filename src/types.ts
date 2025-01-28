export type Album = {
  albumId: number;
  photos: Photo[];
};

export type Photo = {
  albumId: number;
  photoId: number;
  title: string;
  url: string;
};
