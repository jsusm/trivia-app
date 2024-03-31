import { useQuestionsStore } from "../stores/questions";

export function Results() {
  const questions = useQuestionsStore((state) => state.questions);
  const correct = useQuestionsStore((state) => state.correct)();
  const restart = useQuestionsStore((state) => state.restart);
  return (
    <div className="w-full max-w-screen-sm">
      <h2 className="text-center font-hero text-4xl tracking-tight">
        Your score is {correct} out of {questions.length}
      </h2>
      <div className="text-center">
        <p className="font-hero text-xl text-stone-600">
          You've made a good job 👍
        </p>
        <p className="pt-8 font-hero text-2xl text-stone-900">
          Do you think you can do it better?
        </p>
      </div>
      <div className="flex justify-center pt-8">
        <button
          onClick={restart}
          className="brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
