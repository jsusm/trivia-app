import './App.css'
// import { StartScreen } from './views/startScreen'
import { QuestionForm } from './views/question'

const question = {
  "type": "multiple",
  "difficulty": "medium",
  "category": "Science: Computers",
  "question": "Which programming language was developed by Sun Microsystems in 1995?",
  "correct_answer": "Java",
  "incorrect_answers": [
    "Python",
    "Solaris OS",
    "C++"
  ]
}

function App() {
  return (
    <main className="min-h-screen grid place-items-center bg-stone-100 px-6">
      <QuestionForm question={question} />
    </main>
  )
}

export default App
