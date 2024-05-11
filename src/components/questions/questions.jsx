import { Link } from 'react-router-dom'
import './questions.css'
import React, { useRef, useState } from "react"
import store from '../../state/store'
export const QuestionInput = ({obj, handleAnswerClick}) =>{
  const [buttonClass, setButtonClass] = useState('question-button')
  return(
    <div className='question-inputs' key={obj.key}>
      <button
        htmlFor={obj.questionNumber} 
        className={buttonClass}
        value={obj.value} 
        onClick={handleAnswerClick}

      >
        {obj.key}
      </button>
    </div>
  );

};

export const Questions = () => {

    const rightAnswerCount = useRef(0);
    const onAnswer = (value, answers) => {
        if (value === 'yes') {
            rightAnswerCount.current = rightAnswerCount.current + 1;
            console.log(`Current right answer count: ${rightAnswerCount.current}`);
        } else {
            console.log('Wrong answer');

        }
        for (var i in answers){
        const right = 'question-button-right'
        const wrong = 'question-button-wrong'
            if(answers[i].value === 'yes'){
              // setButtonClass(right)
              console.log(right)
            }
            else{
              // setButtonClass(wrong)
              console.log(wrong)
            }
        }
    };
    return (
      <div className="Container">
        {store.questions.map((item) => {
          return (
            <div className="test-wrapper" key={item.questionNumber}>
              <p className="question-title">
                <span>{item.questionNumber}</span><br />{item.question}
                <img src={item.imageLink} alt=''/>
              </p>
  
              {item.answers.map((obj) => {
                return(
                  <QuestionInput
                    key={obj.key}
                    obj={obj}
                    handleAnswerClick={()=> onAnswer(obj.value, item.answers)}

                  />
                )
                  
              })}
  
              
            </div>
          );
        })}
        <Link to="/test-env/results" className="question-button-next" type="button">
          ЗАКОНЧИТЬ
        </Link>
      </div>
    );
  };

// const checkAnswers = (item) =>{
//     item.answers.forEach((obj) =>{
//         if(obj.value === 'yes'){
//             rightUserAnswersCount++;
            
//         }
        
//     })
// }