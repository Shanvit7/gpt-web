"use client";

export const fetchSentimentAnalysis = async (apiUrl: string | URL, dataArgs: any) => {
  const { text } = dataArgs?.arg;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return await response.json();
};

export const fetchTextExtraction = async (apiUrl: string | URL, dataArgs: any) => {
  const { fileData } = dataArgs?.arg;
  const dataObj = new FormData();
  dataObj.append("input_file", fileData);
  dataObj.append("language", "english");
  const response = await fetch(apiUrl, {
    method: "POST",
    body: dataObj,
  });
  return await response.json();
};

export const fetchTextSummarization = async (apiUrl: string | URL, dataArgs: any) => {
  const { text, summaryPercent } = dataArgs?.arg;
  const data = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, summaryPercent }),
  });
  return await data.json();
};
