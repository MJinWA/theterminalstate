# The Terminal State

Public reading room for [theterminalstate.com](https://theterminalstate.com). Essays, film transcripts, and linked signals. The production desk lives in a different repository.

## Add a page

A paper, film, or signal is a Markdown file. The build checks the fields and fails if one is missing.

- `src/content/papers/your-slug.md` — `title`, `description`, `date`, `vector` (`acheron`, `lyra`, or `both`), `minutes`
- `src/content/films/your-slug.md` — the same, plus optional `platform` and `embed` (a YouTube URL once the cut is public)
- `src/content/signals/your-slug.md` — the same, plus `outlet`, `url`, and `topic` (`energy`, `biology`, `governance`, `compute`, `labor`)

Push to `main`. The site rebuilds from that.

## Locally

```
npm install
npm run dev
npm run build
```
