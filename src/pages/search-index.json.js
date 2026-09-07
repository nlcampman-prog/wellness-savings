import { getSearchIndex } from '../lib/search-index';

export async function GET() {
  return new Response(JSON.stringify(getSearchIndex()), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
