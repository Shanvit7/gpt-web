import Github from "../components/Icons/Github";
// HELPERS
export const menuOptions = [
  { label: "Home", url: "/home" },
  {
    label: "Tools",
    subOptions: [
      { label: 'Image to Text', url: '/ocr' },
      { label: 'Text Summary', url: '/text-summarization' },
      { label: 'Text Mining', url: '/text-mining' },
      { label: 'Sentiment Analysis',url:'/sentiment-analysis'},
      { label: 'Language Detection',url:'/comming-soon'},
      { label: 'Entity Recognition',url:'/comming-soon'},
    ],
  },
  { label: "About", url: "/comming-soon" },
  {label: <Github />,url:'/comming-soon'},
];

// CONSTANTS
export const APP_NAME = "SynthiAIze";
export const SENTIMENT_HAPPY = 'POSITIVE'
export const SENTIMENT_SAD = 'NEGATIVE'
