// Netlify Forms Next.js 5+ migration: API route handler
export async function POST(req) {
  const formData = await req.formData();
  // Optionally, process or validate formData here
  // Netlify will handle the submission automatically
  return new Response(null, { status: 200 });
}
