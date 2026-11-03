export const vectorLabel = {
  acheron: 'Acheron',
  lyra: 'Lyra',
  both: 'Both vectors',
} as const;

export const topicLabel = {
  energy: 'Energy',
  biology: 'Biology',
  governance: 'Governance',
  compute: 'Compute',
  labor: 'Labor',
} as const;

const doors: Record<string, string> = {
  'what-it-is': '/terminal-state',
  acheron: '/acheron',
  lyra: '/lyra',
};

export function paperHref(id: string) {
  return doors[id] ?? `/papers/${id}`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function byDate<T extends { data: { date: Date } }>(items: T[]) {
  return [...items].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function embedSrc(url: string) {
  const parsed = new URL(url);
  const host = parsed.hostname.replace(/^www\./, '');
  if (host === 'youtu.be') {
    const id = parsed.pathname.split('/').filter(Boolean)[0];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  if (host === 'youtube.com' || host === 'm.youtube.com') {
    const id = parsed.searchParams.get('v') ?? parsed.pathname.split('/').filter(Boolean).at(-1);
    if (parsed.pathname.startsWith('/embed/')) return url;
    return id ? `https://www.youtube.com/embed/${id}` : url;
  }
  return url;
}
