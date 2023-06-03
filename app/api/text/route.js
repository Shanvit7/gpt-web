export async function GET(request) {
  return new Response(
    JSON.stringify({ data: "Severless function dev & testing" })
  );
}
