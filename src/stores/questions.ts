import { create } from "zustand";
import { type Question } from "../types";
import { results } from "../mocks/apiTriviaQuestion.json";
import { devtools } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
}

interface Actions {
  getQuestions: () => Promise<void>;
  answerQuestion: (questionIdx: number, answerIdx: number) => void;
  // goNextQuestion: () => void,
  // goPrevQuestion: () => void,
  // restart: () => void,
}

export const useQuestionsStore = create<State & Actions>()(
  devtools((set, get) => ({
    questions: [],

    currentQuestion: 0,

    getQuestions: async () => {
      const questions = results.map((q) => ({
        ...q,
        answers: [...q.incorrect_answers, q.correct_answer].sort(
          () => Math.random() - 0.5,
        ),
      }));
      const shuffleQuestions = questions
        .sort(() => Math.random() - 0.5)
        .slice(10);

      set({ questions: shuffleQuestions });
    },

    answerQuestion: (questionIdx: number, answerIdx: number) => {
      const newQuestions = structuredClone(get().questions);
      newQuestions[questionIdx].selectedAnswer = answerIdx;
      set({ questions: newQuestions });
    },
  })),
);
