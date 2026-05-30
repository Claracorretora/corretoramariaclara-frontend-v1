export function capitalizeWords(text: string) {
  return text.replace(
    /\p{L}+/gu,
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
}
