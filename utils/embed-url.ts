export function getYoutubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    // youtube.com/watch?v= or youtube.com/shorts/
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      // youtube.com/shorts/...
      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const shortId = parsedUrl.pathname.split("/")[2];
        if (shortId) {
          return `https://www.youtube.com/embed/${shortId}`;
        }
      }
    }

    // youtu.be/
    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.slice(1);

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    return url;
  } catch {
    return url;
  }
}
