import { create } from "zustand";
import { type Question } from "../types";
import { results } from "../mocks/apiTriviaQuestion.json";
import { devtools } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  results: boolean;
  answered: () => number;
  correct: () => number;
}

interface Actions {
  getQuestions: () => Promise<void>;
  answerQuestion: (questionIdx: number, answerIdx: number) => void;
  goNextQuestion: () => void;
  goPrevQuestion: () => void;
  gotoResults: () => void;
  restart: () => void;
}

export const useQuestionsStore = create<State & Actions>()(
  devtools((set, get) => ({
    questions: [],

    currentQuestion: 0,

    results: false,

    answered: () =>
      get().questions.reduce(
        (n, q) => (q.selectedAnswer !== undefined ? n + 1 : n),
        0,
      ),

    correct: () =>
      get().questions.reduce((n, q) => {
        if (q.selectedAnswer === undefined) {
          return n;
        }
        return q.answers[q.selectedAnswer] === q.correct_answer ? n + 1 : n;
      }, 0),

    getQuestions: async () => {
      const questions = results.map((q) => ({
        ...q,
        answers: [...q.incorrect_answers, q.correct_answer].sort(
          () => Math.random() - 0.5,
        ),
      }));
      const shuffleQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

      set({ questions: shuffleQuestions });
    },

    answerQuestion: (questionIdx: number, answerIdx: number) => {
      const newQuestions = structuredClone(get().questions);
      newQuestions[questionIdx].selectedAnswer = answerIdx;
      set({ questions: newQuestions });
    },
    goNextQuestion: () => {
      if (get().currentQuestion + 1 >= get().questions.length - 1) {
        set((state) => ({ currentQuestion: state.questions.length - 1 }));
      } else {
        set((state) => ({ currentQuestion: state.currentQuestion + 1 }));
      }
    },
    goPrevQuestion: () => {
      if (get().currentQuestion - 1 < 0) {
        set({ currentQuestion: 0 });
      } else {
        set((state) => ({ currentQuestion: state.currentQuestion - 1 }));
      }
    },

    gotoResults: () => {
      set({ results: true });
    },

    restart: () => {
      set({ questions: [], currentQuestion: 0, results: false });
    },
  })),
);
