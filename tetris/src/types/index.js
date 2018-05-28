// @flow
/* eslint-disable no-use-before-define */
export type Category = "red" | "yellow" | "blue" | "green";

export type GameState =
  | "PICTURES_NOT_LOADED"
  | "NOT_STARTED"
  | "RUNNING"
  | "PAUSED"
  | "ENDED";

///////////////////////////////////////////
export type Caption = {
  id: string,
  text: string,
  created_time: string,
  from: User
};

export type Picture = {
  id: string,
  user: User,
  images: Images,
  created_time: string,
  caption: Caption,
  category: Category,
  user_has_liked: boolean,
  likes: Likes,
  tags: string[],
  filter: string,
  comments: Likes,
  type: string,
  link: string,
  location: Location,
  attribution: string,
  users_in_photo: any[],
  videos?: Videos
};

export type Images = {
  thumbnail: Thumbnail,
  low_resolution: Thumbnail,
  standard_resolution: Thumbnail
};

export type Likes = {
  count: number
};

export type Location = {
  latitude: number,
  longitude: number,
  name: string,
  id: number
};

export type Meta = {
  code: number
};

export type Pagination = {
  next_max_tag_id: string,
  next_max_id: string,
  next_url: string,
  next_min_id: string,
  min_tag_id: string,
  deprecation_warning: string
};

export type PicturesResponse = {
  pagination: Pagination,
  data: Picture[],
  meta: Meta
};

export type StandardResolution = {
  width: number,
  height: number,
  url: string,
  id: string
};

export type Thumbnail = {
  width: number,
  height: number,
  url: string
};

export type User = {
  username: string
};

export type Videos = {
  standard_resolution: StandardResolution,
  low_bandwidth: StandardResolution,
  low_resolution: StandardResolution
};

//////////////////////////////////////////////////

export type Position = { x: number, y: number };

export type BucketPicture = Picture & { position: Position };

export type TopScore = { name: string, score: number };
