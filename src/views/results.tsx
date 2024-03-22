export function Results() {
  return (
    <div className="max-w-screen-sm w-full">
      <h2 className="font-hero text-4xl tracking-tight text-center">Your score is 12 out of 20</h2>
      <div className="text-center">
        <p className="font-hero text-xl text-stone-600">You've made a good job 👍</p>
        <p className="font-hero text-2xl text-stone-900 pt-8">Do you think you can do it better?</p>
      </div>
      <div className="flex justify-center pt-8">
        <button className="py-2 px-8 border-2 border-stone-900 bg-lime-200 rounded-xl brutal-shadow flex items-center font-mono">
          Try again
        </button>
      </div>
    </div>
  )
}
