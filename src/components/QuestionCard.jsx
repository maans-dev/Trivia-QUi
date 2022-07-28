

import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNmbr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNmbr, totalQuestions}) => {
    (<div>
        <p className='number'>
            Question: {questionNmbr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answer.map(answer => {
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}}/>
                    </button>
                </div>
            })}
        </div>
    </div>);
}

export default QuestionCard