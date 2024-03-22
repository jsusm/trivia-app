interface Question {
  "type": string,
  "difficulty": string,
  "category": string,
  "question": string,
  "correct_answer": string,
  "incorrect_answers": string[]
}

export function QuestionForm({ question }: { question: Question }) {
  const responses = [...question.incorrect_answers, question.correct_answer];
  return (
    <div className="max-w-screen-sm">
      <div className="py-10">
        <h2 className="font-hero text-3xl">Question 1 of 10</h2>
      </div>
      <p className="font-mono text-xl text-balance">Which programming language was developed by Sun Microsystems in 1995?</p>
      <div className="flex flex-col gap-4 py-8">
        {responses.map(r => (
          <button className="py-2 px-4 border-2 border-stone-900 rounded-lg hover:bg-blue-50 flex justify-start active:scale-[0.99] focus:bg-blue-200 transition-all">
            <span className="font-mono">{r}</span>
          </button>
        ))}
      </div>
      <div className='flex justify-end gap-4'>
        <button className="py-2 px-8 border-2 border-stone-900 bg-lime-200 rounded-xl brutal-shadow flex items-center font-mono">
          Back
        </button>
        <button className="py-2 px-8 border-2 border-stone-900 bg-lime-200 rounded-xl brutal-shadow flex items-center font-mono">
          Next
        </button>
      </div>
    </div>
  )

}
