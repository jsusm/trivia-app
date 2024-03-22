import { Question } from "../types";

export function QuestionForm({ question }: { question: Question }) {
  const responses = [...question.incorrect_answers, question.correct_answer];
  return (
    <div className="max-w-screen-sm">
      <div className="py-10">
        <h2 className="font-hero text-3xl">Question 1 of 10</h2>
      </div>
      <p className="text-balance font-mono text-xl">
        Which programming language was developed by Sun Microsystems in 1995?
      </p>
      <div className="flex flex-col gap-4 py-8">
        {responses.map((r) => (
          <button className="flex justify-start rounded-lg border-2 border-stone-900 px-4 py-2 transition-all hover:bg-blue-50 focus:bg-blue-200 active:scale-[0.99]">
            <span className="font-mono">{r}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-end gap-4">
        <button className="brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono">
          Back
        </button>
        <button className="brutal-shadow flex items-center rounded-xl border-2 border-stone-900 bg-lime-200 px-8 py-2 font-mono">
          Next
        </button>
      </div>
    </div>
  );
}
