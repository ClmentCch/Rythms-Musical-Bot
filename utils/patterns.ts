export const videoPattern = /^(https?:\/\/)?(www\.)?(m\.|music\.)?(youtube\.com|youtu\.?be)\/.+$/;
export const playlistPattern = /^.*(list=)([^#\&\?]*).*/;
export const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
export const mobileScRegex = /^https?:\/\/(soundcloud\.app\.goo\.gl)\/(.*)$/;
export const isURL =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

export function hasYoutubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    return parsed.hostname.includes("youtube.com") && parsed.searchParams.has("v");
  } catch {
    return false;
  }
}

export function normalizeYoutubeVideoUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");

      if (videoId) return `https://www.youtube.com/watch?v=${videoId}`;
    }

    return url;
  } catch {
    return url;
  }
}
