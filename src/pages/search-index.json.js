import { getSearchIndex } from '../lib/search-index';
import { getMomModeSearchItems } from '../lib/wordpress';

export async function GET() {
  const [local, blog] = await Promise.all([
    Promise.resolve(getSearchIndex()),
    getMomModeSearchItems(),
  ]);
  return new Response(JSON.stringify([...blog, ...local]), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
