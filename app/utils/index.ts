/******** ICONS **********/
import Github from "../components/Icons/Github";
/******** INTERFACES **********/
import { MenuOptionsInterface } from "./interfaces";
// CONSTANTS
export const APP_NAME : string = "SynthiAIze";
export const SENTIMENT_HAPPY: string = "POSITIVE";
export const SENTIMENT_SAD: string = "NEGATIVE";
export const GITHUB_LINK: string | URL = "https://github.com/Shanvit7/synthiAIze-web";
// HELPERS
export const menuOptions : MenuOptionsInterface [] = [
  { label: "Home", url: "/home" },
  {
    label: "Tools",
    subOptions: [
      { label: "Image to Text", url: "/ocr" },
      { label: "Text Summary", url: "/text-summarization" },
      { label: "Text Mining", url: "/text-mining" },
      { label: "Sentiment Analysis", url: "/sentiment-analysis" },
      { label: "Language Detection", url: "/comming-soon" },
      { label: "Entity Recognition", url: "/comming-soon" },
    ],
  },
  { label: "About", url: "/about" },
  { label: "Github", url: GITHUB_LINK },
];
