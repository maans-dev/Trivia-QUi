import { useState} from 'react'
import Game from "./game";
import LoadingSpinner from "./loadingspinner"

function QuizPage() {
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true,
    errorMessage: '',
    data: null,
    });

  useEffect(()=>{
    async function getQuiz() {
    try {
      const fetch = async() => {
      const url = ''
      const response = await fetch(url)

      const json = await response.json()
      const { response_code, results } = json;

      if ( response_code === 1 ) {
        throw new Error('Bad Connection')
      } else if (response_code === 2) {
        throw new Error("Bad API Request")
      }
       
      setQuizFetch({
        isLoading: false,
        errorMessage: "",
        data: results,
      });
      } catch (err) {
      setQuizFetch({
      isLoading: false,
      errorMessage: 'Try again, something went wrong',
      data: null,
    });
   }
  }
  getQuiz();
}, []);


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
