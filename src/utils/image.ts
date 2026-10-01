export const getPosterUrl = (
  posterPath: string | null,
  size: string = "w500"
): string => {
  if (!posterPath) {
    return "/placeholder.jpg";
  }

  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
};