export interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <button
      onClick={onStart}
      className="brutal-shadow-lg rounded-xl border-2 border-stone-900 bg-lime-200 px-16 py-10"
    >
      <h1 className="text-center font-hero text-5xl text-stone-950">
        Start Trivia
      </h1>
    </button>
  );
}
