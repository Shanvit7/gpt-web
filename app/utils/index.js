/******** ICONS **********/
import Github from "../components/Icons/Github";

// CONSTANTS
export const APP_NAME = "SynthiAIze";
export const SENTIMENT_HAPPY = "POSITIVE";
export const SENTIMENT_SAD = "NEGATIVE";
export const GITHUB_LINK = "https://github.com/Shanvit7/synthiAIze-web";
// HELPERS
export const menuOptions = [
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
  { label: <Github />, url: GITHUB_LINK },
];
