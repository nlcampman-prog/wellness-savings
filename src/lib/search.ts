export type SearchItem = {
  type: 'article' | 'coupon' | 'page' | 'blog';
  title: string;
  description: string;
  category: string;
  url: string;
  date?: string;
  code?: string;
  discount?: string;
  tags?: string[];
};

export function tokenizeQuery(query: string) {
  return query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}%+./-]+/gu, ' ')
    .split(/\s+/)
    .filter((term) => term.length >= 2);
}

function words(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9%+]+/)
    .filter(Boolean);
}

function termHitsWord(term: string, word: string) {
  if (word === term) return true;
  // Allow short suffixes so "twin" matches "twins" without matching "equipment" for "equip"
  if (word.startsWith(term) && word.length - term.length <= 2) return true;
  return false;
}

export function searchItems(items: SearchItem[], query: string, limit = 20): SearchItem[] {
  const terms = tokenizeQuery(query);
  if (!terms.length) return [];

  return items
    .map((item) => {
      const title = item.title.toLowerCase();
      const wordList = words(
        [
          item.title,
          item.description,
          item.category,
          item.type,
          item.code,
          item.discount,
          ...(item.tags || []),
        ]
          .filter(Boolean)
          .join(' ')
      );

      if (!terms.every((term) => wordList.some((word) => termHitsWord(term, word)))) return null;

      let score = 0;
      for (const term of terms) {
        if (title === term) score += 120;
        else if (title.startsWith(term)) score += 80;
        else if (title.includes(term)) score += 50;
        else if ((item.code || '').toLowerCase().includes(term)) score += 40;
        else if ((item.category || '').toLowerCase().includes(term)) score += 25;
        else score += 10;
      }
      if (item.type === 'article') score += 2;
      return { item, score };
    })
    .filter((row): row is { item: SearchItem; score: number } => Boolean(row))
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map((row) => row.item);
}
