import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const imageBuilder = createImageUrlBuilder(client);

export function urlFor(source: { asset: { _ref: string } }) {
  return imageBuilder.image(source);
}
