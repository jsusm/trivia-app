import { useQuestionsStore } from "../stores/questions";
import { type Question } from "../types";
import { cx } from "class-variance-authority";

interface AnswerEntryProps {
  question: Question;
  onClick: () => void;
  response: string;
  responseIdx: number;
}

function AnswerEntry({
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
        "flex justify-start rounded-lg border-2 border-stone-900 px-4 py-2 transition-all focus:scale-[1.02] focus:bg-blue-200 active:scale-[0.99]",
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

export function QuestionForm({
  question,
  idx,
}: {
  question: Question;
  idx: number;
}) {
  const answerQuestion = useQuestionsStore((state) => state.answerQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPrevQuestion = useQuestionsStore((state) => state.goPrevQuestion);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const questionsNumber = useQuestionsStore((state) => state.questions.length);

  const mkHandleClick = (answerIdx: number) => {
    return () => {
      answerQuestion(idx, answerIdx);
    };
  };

  return (
    <div className="w-full max-w-screen-sm">
      <div className="py-10">
        <h2 className="font-hero text-3xl">
          Question {currentQuestion + 1} of {questionsNumber}
        </h2>
      </div>
      <p
        className="text-balance font-mono text-xl"
        dangerouslySetInnerHTML={{ __html: question.question }}
      ></p>
      <div className="flex flex-col gap-4 py-8">
        {question.answers.map((r, idx) => (
          <AnswerEntry
            key={r}
            question={question}
            onClick={mkHandleClick(idx)}
            responseIdx={idx}
            response={r}
          />
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={goPrevQuestion}
          className="brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono"
        >
          Back
        </button>
        <button
          onClick={goNextQuestion}
          className="brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono"
        >
          Next
        </button>
      </div>
    </div>
  );
}
