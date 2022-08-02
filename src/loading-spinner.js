import { useState} from 'react'
import Game from "./game";
import LoadingSpinner from "./loadingspinner"

function QuizPage() {
//could create seperate useState//grouped values.

  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: '',
    data: null,
  });

const { isLoading, errorMessage, data } = quizFetch;

let contents;
if (isLoading) contents = <LoadingSpinner />;
else if (errorMessage !== '') contents = <h1>error</h1>;
else contents = <Game />;

  return (
    <main>
     {contents}
    </main>
  );
}

export default QuizPage;

//also
// {quizFetch.isLoading ? <LoadingSpinner />: null}

//condition ? exprIfTrue : exprIfFalse
// function example() {
//   return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
