export async function POST(request) {
    const { text } = await request.json();
    const dataObj={
        text: text,
        min_length: 10,
        max_length: 10,
    }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY
        ? process.env.RAPID_API_KEY
        : "",
      "X-RapidAPI-Host": process.env.RAPID_API_HOST
        ? process.env.RAPID_API_HOST
        : "",
    },
    body: JSON.stringify(dataObj),
  };
  try {
    const response = await fetch(
      "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/",
      options
    );
    const json = await response.json();
    console.log('Res',json);
    return new Response(JSON.stringify({ summary: json.summary }));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred during summarization" })
    );
  }
}
