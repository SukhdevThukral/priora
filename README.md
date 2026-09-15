# PRIORA


**Messy feedback. Clear decisions.**

_It is an AI-powered product feedback prioritization engine. Paste in raw, unclean, unstructured user feedback, support tickets, reviews, user interviews, Slack threads and Priora processes it into ranked, actionable product decisions._

Live at [getpriora.xyz](https://getpriora.xyz) · Beta

<img width="1906" height="907" alt="priora" src="https://github.com/user-attachments/assets/8b5c1f8a-4741-46cb-bc23-218d14f7041f" />


---

## What it does

Product teams drown in qualitative feedback but struggle to act on it. Priora runs that noise through a synthesis pipeline powered by Gemini (ON MY API BTW), extracting themes, scoring severity, and surfacing what actually matters so you stop guessing and start shipping the right things.

**Input:** Raw text feedback in any format  
**Output:** Prioritized issues with strategic weight, grouped by theme


## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API
- **Deployment:** Vercel


## Running Locally

```bash
git clone https://github.com/yourusername/priora.git
cd priora
npm install
```

Create a `.env.local` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).


## How it works

1. **Ingest** — Paste raw feedback from any source (no formatting required)
2. **Synthesize** — Gemini identifies recurring issues, pain points, and themes
3. **Prioritize** — Each issue is scored by frequency, severity, and strategic impact
4. **Decide** — You get a ranked list of what to fix, build, or investigate next


## Use cases

- Processes user interview transcripts before a sprint
- Triaging a backlog of support tickets
- Turning App Store reviews into a product roadmap
- Consolidating feedback from multiple channels into a single view


## Project status

Currently in **beta**. Core analysis pipeline is live. Roadmap includes:

- [ ] CSV / file upload support
- [ ] Persistent session history
- [ ] Export to Notion / Linear
- [ ] Team workspaces

---

## License

MIT
