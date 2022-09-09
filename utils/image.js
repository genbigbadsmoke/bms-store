import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(200).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(380).url();
}

export { urlFor, urlForThumbnail };
