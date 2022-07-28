export enum Diffuclty {
    EASY = "easy",
    MEDUIM = 'MEDUIM',
    HARD = 'hard'
}

export const fetchQuiz = async (amount: number, diffuclty: Diffuclty) => {
const endpoint = `https://opentdb.com/api.php?amount=${amount}&diffuclty=${diffuclty}&type=multiple`; 
const data = await (await fetch (endpoint)).json();
}
