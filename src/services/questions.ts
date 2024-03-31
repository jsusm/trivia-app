interface apiResponseType {
  results: Array<{
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }>;
}

export async function getQuestions() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18",
    );
    const json = await res.json() as apiResponseType;
    const questions = json.results.map((q) => ({
      ...q,
      answers: [...q.incorrect_answers, q.correct_answer].sort(
        () => Math.random() - 0.5,
      ),
    }));
    return questions;
  } catch {
    throw new Error("Error fetching questions");
  }
}
