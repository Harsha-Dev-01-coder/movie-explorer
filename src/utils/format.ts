export const formatRuntime = (
  runtime: number | null
): string => {
  if (!runtime || runtime <= 0) {
    return "N/A";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
};