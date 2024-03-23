import "./App.css";
import { useQuestionsStore } from "./stores/questions";
import { StartScreen } from "./views/startScreen";
// import { QuestionForm } from './views/question'
import { QuestionForm } from "./views/question";

function App() {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  return (
    <main className="grid min-h-screen place-items-center bg-stone-100 px-6">
      {questions.length === 0 ? (
        <StartScreen onStart={getQuestions} />
      ) : (
        <QuestionForm
          question={questions[currentQuestion]}
          idx={currentQuestion}
        />
      )}
    </main>
  );
}

export default App;
