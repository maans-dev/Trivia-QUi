export type Question = {
    category: string;
    correct_answer: string;
    difficulty : string;
    incorrect_answer: string[];
    question: string;
    type: string;
}

export enum Diffuclty {
    EASY = "easy",
    MEDUIM = 'MEDUIM',
    HARD = 'hard'
}

export const fetchQuiz = async (amount: number, diffuclty: Diffuclty) => {
const endpoint = `https://opentdb.com/api.php?amount=${amount}&diffuclty=${diffuclty}&type=multiple`; 
const data = await (await fetch (endpoint)).json();
     return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
}
