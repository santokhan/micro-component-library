export function TextToLink(text) {
  return text
    .split(" ")
    .map((e) => e.toLowerCase())
    .join("-");
}
