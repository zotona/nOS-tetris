// @flow
import axios from "axios";

import { ACCESS_TOKEN } from "../constants";
import { PicturesFixture } from "./fixtures/Pictures";
import { TOP_SCORES_SAMPLE } from "./fixtures/TopScores";

const categories = ["red", "green", "yellow", "blue"];

export const apiGetPictures = (tag: string) => Promise.resolve(PicturesFixture);
// export const apiGetPictures = (tag: string) =>
//   axios
//     .get(
//       `https://api.instagram.com/v1/tags/${encodeURIComponent(
//         tag
//       )}/media/recent`,
//       {
//         params: { access_token: ACCESS_TOKEN }
//       }
//     )
//     .then(({ data }) => {
//       const result = data.data.map(pic => {
//         pic.category =
//           categories[Math.floor(Math.random() * categories.length)];
//         return pic;
//       });
//       return result;
//     });
