# Task: HSK 3 Online Test Website — Build Started

**Date:** 2026-09-16  
**Status:** Phase 1 (Core) — Scaffold complete, dev server running

## What Was Built

### Project Structure
```
hsk3-test-app/           (Vite + React 18 + Tailwind CSS + Zustand + React Router)
├── SPEC.md               — Full project specification (vocab, grammar, features, data schemas)
├── src/
│   ├── data/
│   │   ├── vocabulary.js  — 300 HSK 3 words with pinyin, English, POS
│   │   ├── grammar.js     — 36 grammar patterns with examples (resultative, direction,
│   │   │                     把, 被, 着, 过, comparison, 是...的, 9 complex sentence types)
│   │   └── quizBank.js    — 60 grammar fill-in-the-blank questions with explanations
│   ├── store/
│   │   └── useGameStore.js — Zustand store (scores, history, localStorage persistence)
│   ├── components/
│   │   ├── home/Home.jsx          — Landing page with stats, history, game cards
│   │   ├── game1/Game1.jsx        — Character → Pinyin match (30 q, keyboard nav)
│   │   ├── game2/Game2.jsx        — Pinyin → English match (30 q, keyboard nav)
│   │   ├── game3/Game3.jsx        — Grammar fill-in-the-blank (30 q, explanations)
│   │   ├── shared/ProgressBar.jsx — Animated progress bar
│   │   └── shared/ResultScreen.jsx — Score circle + PASS/FAIL with retry
│   └── pages/
│       └── TestMode.jsx  — Full 60-q test with 45-min timer, flag-for-review, section mixing
```

### Key Decisions Made
- **Vite** as build tool (not CRA) for fast HMR
- **Old HSK 3.0** standard (300 new words, widely documented) as base; noted new HSK 3.0 Band 3 (973 words) as HSK 4 upgrade path
- **Tailwind CSS v3** for styling with custom HSK color palette (red primary, ink tones)
- **Zustand** with `persist` middleware for localStorage score/history storage
- **30 questions/round** for games (not 60) for faster feedback loops; 60 for full test
- **Keyboard navigation**: 1-4 to select options, Enter/Space to continue
- **Pass threshold**: 60% (36/60) — configurable via `PASS_THRESHOLD` in store

### Dev Server
- Running at `http://localhost:5173` (Vite dev server)
- Build output: `dist/` (325 kB JS, 20 kB CSS gzipped to ~102 kB + 4.5 kB)

## What's Working
- ✅ Home page with game cards, stats, recent history
- ✅ Game 1: Character → Pinyin (30 q, 4 options, instant feedback, score circle)
- ✅ Game 2: Pinyin → English (30 q, 4 options, instant feedback)
- ✅ Game 3: Grammar fill-in (30 q, 4 options, grammar explanation shown after answer)
- ✅ Full Test Mode (60 questions, 45-min countdown timer, flag-for-review, mixed sections)
- ✅ Result screen with animated score circle, PASS/FAIL badge, retry/home actions
- ✅ Score history persisted in localStorage
- ✅ Keyboard shortcuts (1-4 select, Enter continue)

## Next Steps (Recommended)
1. **Add audio** for listening section (Phase 2)
2. **Fix Game 1 result recording** — the `recordGame1` call has a redundant calculation bug
3. **Add user profile page** with name input
4. **Add answer review screen** — show all wrong answers after test completion
5. **HSK 4 data** — add 500 new words + Band 4 grammar structures
6. **Deploy** to Vercel/Netlify
