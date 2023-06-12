export async function POST(request) {
    const { text,summaryPercent } = await request.json();
    const dataObj= {
        language: 'english',
        text: text,
        summary_percent: summaryPercent || 5
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
      `${process.env.API_URL}/summarize-text/api/v1.1`,
      options
    );
    const responseJson = await response.json();
    return new Response(JSON.stringify({ summary: responseJson.summary }));
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred during summarization" })
    );
  }
}
