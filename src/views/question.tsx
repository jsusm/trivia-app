import { useQuestionsStore } from "../stores/questions";
import { type Question } from "../types";
import { cx } from "class-variance-authority";
import { Button } from "../components/button";

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
  const totalQuestions = useQuestionsStore((state) => state.questions.length);

  const mkHandleClick = (answerIdx: number) => {
    return () => {
      answerQuestion(idx, answerIdx);
    };
  };

  return (
    <div className="w-full max-w-screen-sm">
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
      <div className="flex items-center justify-between gap-4">
        <p className="pt-0.5 font-mono">
          {currentQuestion + 1}/{totalQuestions}
        </p>
        <div className="flex gap-4">
          <Button disabled={currentQuestion === 0} onClick={goPrevQuestion}>
            Back
          </Button>
          <Button
            disabled={question.selectedAnswer === undefined}
            onClick={goNextQuestion}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
