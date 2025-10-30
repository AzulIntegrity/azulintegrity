// Netlify Forms Next.js 5+ migration: API route handler
export async function POST(req) {
  // Netlify will handle the submission automatically
  return new Response(null, { status: 200 });
}
