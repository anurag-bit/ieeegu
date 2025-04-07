import createImageUrlBuilder from '@sanity/image-url'
import { config } from './sanity.config'

export const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source: any) => {
  // Return fallback if source is falsy (null, undefined, etc.)
  if (!source) {
    return {
      url: () => '/images/fallback-image.jpg',
    }
  }
  
  // Return fallback if no asset reference exists
  if (!source.asset?._ref) {
    return {
      url: () => '/images/fallback-image.jpg',
    }
  }

  return imageBuilder
    .image(source)
    .auto('format')
    .fit('fill')
}
