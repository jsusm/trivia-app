import "./App.css";
import { useQuestionsStore } from "./stores/questions";
import { StartScreen } from "./views/startScreen";
import { QuestionForm } from "./views/question";
import { Results } from "./views/results";
import { Loader } from "./components/Loader";

function App() {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const results = useQuestionsStore((state) => state.results);
  const loading = useQuestionsStore((state) => state.loading);

  return (
    <main className="grid min-h-screen place-items-center bg-stone-100 px-6">
      {questions.length === 0 &&
        (loading ? (
          <Loader text="..." time={300} className="text-8xl" />
        ) : (
          <StartScreen onStart={getQuestions} />
        ))}
      {questions.length > 0 && !results && (
        <QuestionForm
          question={questions[currentQuestion]}
          idx={currentQuestion}
        />
      )}
      {results && <Results />}
    </main>
  );
}

export default App;
