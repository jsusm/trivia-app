import { type Question } from "../types";
import { cx } from "class-variance-authority";

interface AnswerEntryProps {
  question: Question;
  onClick: () => void;
  response: string;
  responseIdx: number;
}

export function AnswerEntry({
  question,
  onClick,
  response,
  responseIdx,
}: AnswerEntryProps) {
  return (
    <button
      disabled={question.selectedAnswer !== undefined}
      onClick={onClick}
      className={cx(
        "flex justify-start rounded-lg border-2 border-stone-900 px-4 py-2 transition-all active:scale-[0.99] active:bg-blue-200",
        question.selectedAnswer === undefined &&
          "hover:bg-blue-100 focus:scale-[1.02]",
        question.selectedAnswer !== undefined && {
          "bg-red-200":
            question.selectedAnswer === responseIdx &&
            question.correct_answer !==
              question.answers[question.selectedAnswer],
          "bg-lime-200":
            question.correct_answer === question.answers[responseIdx],
        },
      )}
    >
      <span
        className="font-mono"
        dangerouslySetInnerHTML={{ __html: response }}
      ></span>
    </button>
  );
}
