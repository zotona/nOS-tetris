// @flow

export const GAME_SPEED = 0.5;

export const GAME_FIELD_WIDTH = 11;
export const GAME_FIELD_HEIGHT = 15;
export const BORDER_SIZE = 5;
// In pixels
export const PREVIEW_PICTURE_SIZE = 300;

export const CLIENT_ID = "8db3d9091a114441a7c57639d8b1b613";
export const ACCESS_TOKEN =
  "7425809173.ba4c844.9cc348b7340f4742985fad928d5d0889";

export const REDIRECT_URI = encodeURIComponent("http://dema.hopto.org:5000/");

export const INSTAGRAM_AUTH_URL = `https://www.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=public_content`;

export const NEXT_TICK_DELAY = 500;

export const Keys = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32
};

export const TAGS_TO_LOAD = ["nature", "russia"];
