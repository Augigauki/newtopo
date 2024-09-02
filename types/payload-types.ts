/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "photographs".
 */
export interface Photograph {
  id: string;
  location?: string | null;
  year?: number | null;
  exhibition?: (string | null) | Exhibition;
  photographer?: (string | null) | Photographer;
  streetview?: string | null;
  hero?: boolean | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exhibitions".
 */
export interface Exhibition {
  id: string;
  title: string;
  slug?: string | null;
  introText?: string | null;
  thumbnail?: (string | null) | Photograph;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "photographers".
 */
export interface Photographer {
  id: string;
  name: string;
  slug?: string | null;
  about?: string | null;
  links?:
    | {
        linkTitle?: string | null;
        link?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}

