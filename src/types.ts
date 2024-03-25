export interface Root {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Capture;
  rights: Capture;
  title: Capture;
  icon: Capture;
  link: Link[];
  id: Id;
}

export interface Author {
  name: Name;
  uri: Uri;
}

export interface Name {
  label: string;
}

export interface Uri {
  label: string;
}

export interface Entry {
  'im:name': Capture;
  'im:image': ImImage[];
  summary: Capture;
  'im:price': ImPrice;
  'im:contentType': ImContentType;
  rights?: Capture;
  title: Capture;
  link: Link;
  id: Id;
  'im:artist': ImArtist;
  category: Category;
  'im:releaseDate': ImReleaseDate;
}

export interface ImImage {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface ImPrice {
  label: string;
  attributes: ImPriceAttributes;
}

export interface ImPriceAttributes {
  amount: string;
  currency: string;
}

export interface ImContentType {
  attributes: ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
  term: string;
  label: string;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface Id {
  label: string;
  attributes?: IdAttributes;
}

export interface IdAttributes {
  'im:id': string;
}

export interface ImArtist {
  label: string;
  attributes?: ImArtistAttributes;
}

export interface ImArtistAttributes {
  href: string;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

export interface ImReleaseDate {
  label: string;
  attributes: Capture;
}

export interface Capture {
  label: string;
}
