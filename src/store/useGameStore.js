import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const PASS_THRESHOLD = 0.6; // 60% to pass

export const useGameStore = create(
  persist(
    (set, get) => ({
      // ── Game 1 State ────────────────────────────────────────────────
      game1Score: 0,
      game1Total: 0,
      game1History: [],

      // ── Game 2 State ────────────────────────────────────────────────
      game2Score: 0,
      game2Total: 0,
      game2History: [],

      // ── Game 3 State ────────────────────────────────────────────────
      game3Score: 0,
      game3Total: 0,
      game3History: [],

      // ── Game 4 State ────────────────────────────────────────────────
      game4Score: 0,
      game4Total: 0,
      game4History: [],

      // ── Game 5 State ────────────────────────────────────────────────
      game5Score: 0,
      game5Total: 0,
      game5History: [],

      // ── Game 6 State ────────────────────────────────────────────────
      game6Score: 0,
      game6Total: 0,
      game6History: [],

      // ── Overall Test State ─────────────────────────────────────────
      testScore: 0,
      testTotal: 0,
      testHistory: [],

      // ── User Profile ────────────────────────────────────────────────
      userName: '',
      level: 'HSK 3',

      // ── Actions ─────────────────────────────────────────────────────

      setUserName: (name) => set({ userName: name }),

      recordGame1: (score, total) =>
        set((state) => ({
          game1Score: score,
          game1Total: total,
          game1History: [
            ...state.game1History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordGame2: (score, total) =>
        set((state) => ({
          game2Score: score,
          game2Total: total,
          game2History: [
            ...state.game2History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordGame3: (score, total) =>
        set((state) => ({
          game3Score: score,
          game3Total: total,
          game3History: [
            ...state.game3History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordGame4: (score, total) =>
        set((state) => ({
          game4Score: score,
          game4Total: total,
          game4History: [
            ...state.game4History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordGame5: (score, total) =>
        set((state) => ({
          game5Score: score,
          game5Total: total,
          game5History: [
            ...state.game5History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordGame6: (score, total) =>
        set((state) => ({
          game6Score: score,
          game6Total: total,
          game6History: [
            ...state.game6History,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      recordTest: (score, total) =>
        set((state) => ({
          testScore: score,
          testTotal: total,
          testHistory: [
            ...state.testHistory,
            { date: new Date().toISOString(), score, total, pass: score / total >= PASS_THRESHOLD },
          ],
        })),

      getLatestGame1: () => get().game1History.at(-1) ?? null,
      getLatestGame2: () => get().game2History.at(-1) ?? null,
      getLatestGame3: () => get().game3History.at(-1) ?? null,
      getLatestGame4: () => get().game4History.at(-1) ?? null,
      getLatestGame5: () => get().game5History.at(-1) ?? null,
      getLatestGame6: () => get().game6History.at(-1) ?? null,
      getLatestTest: () => get().testHistory.at(-1) ?? null,

      resetCurrentSession: () =>
        set({
          game1Score: 0,
          game1Total: 0,
          game2Score: 0,
          game2Total: 0,
          game3Score: 0,
          game3Total: 0,
          game4Score: 0,
          game4Total: 0,
          game5Score: 0,
          game5Total: 0,
          game6Score: 0,
          game6Total: 0,
        }),
    }),
    { name: 'hsk3-storage' }
  )
);

export { PASS_THRESHOLD };
export default useGameStore;
