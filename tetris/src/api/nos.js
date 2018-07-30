// @flow
import { TOP_SCORES_SAMPLE } from "./fixtures/TopScores";
import API from '@nosplatform/api-functions';
import { Base64 } from 'js-base64';

// Add your smart contract's scriptHash here
const scriptHash = "fe5e19dc1ac7165ca64f7837b9243d028f943b23";

// The storagekey you want to query
const key = "score";

//export const apiGetTopScores = () => Promise.resolve(TOP_SCORES_SAMPLE);
//export const apiSaveHighScore = (name: string, score: number) =>
//Promise.resolve();

 export const apiGetTopScores = () => API.getStorage({ scriptHash, key });

 export const apiSaveHighScore = (name: string, score: number) => {   
   API.invoke({
     scriptHash,
     operation: "",
     args: [name, score]
   });
 };
 

