export interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <p className="max-w-screen-sm text-center font-hero text-3xl text-stone-950">
        This trivia consists of 10 questions about computer science and
        computers in general
      </p>
      <div>
        <p className="max-w-screen-sm text-center font-hero text-3xl text-stone-950">
          Do you think you can get all 10 right?
        </p>
        <p className="text-center font-mono text-sm text-red-800">
          (it's hard, at least for me)
        </p>
      </div>
      <button
        onClick={onStart}
        className="brutal-shadow-lg rounded-xl border-2 border-stone-800 bg-lime-200 px-8 py-4 font-hero text-3xl text-stone-800 animate-in fade-in"
      >
        Start Trivia
      </button>
    </div>
  );
}
