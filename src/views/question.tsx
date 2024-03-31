import { useQuestionsStore } from "../stores/questions";
import { type Question } from "../types";
import { Button } from "../components/button";
import { AnswerEntry } from "../components/AnswerEntry";

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
  const answered = useQuestionsStore((state) => state.answered)();
  const gotoResults = useQuestionsStore((state) => state.gotoResults);

  const handleNextButtonClick = () => {
    if (answered === totalQuestions) {
      gotoResults();
    } else {
      goNextQuestion();
    }
  };

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
            onClick={handleNextButtonClick}
            disabled={question.selectedAnswer === undefined}
          >
            {answered === totalQuestions ? "Results" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
