export async function POST(request) {
  const dataObj = await request.formData();
  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY
        ? process.env.RAPID_API_KEY
        : "",
      "X-RapidAPI-Host": process.env.RAPID_API_HOST
        ? process.env.RAPID_API_HOST
        : "",
    },
    body: dataObj,
  };
  try {
    const response = await fetch(
      "https://text-analysis12.p.rapidapi.com/text-mining/api/v1.1",
      options
    );
    const responseJson = await response.json();
    return new Response(JSON.stringify({ text: responseJson.text }));
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred during extraction" })
    );
  }
}
