import { Link } from 'react-router-dom'
import './questions.css'
import React, { useState } from "react"
import store from '../../state/store'
export const QuestionInput = ({obj, onAnswer}) =>{
  
  return(
    <div className='question-inputs' key={obj.key}>
      <button
        htmlFor={obj.questionNumber} 
        className='question-button' 
        value={obj.value} 
        onClick={() => {
            onAnswer(obj.value);

        }}
        
      >
        {obj.key}
      </button>
    </div>
  );

};

export const Questions = () => {
    const [rightAnswerCount, setRightAnswerCount] = useState(1)
    const [checked, setChecked] = useState([])
    
    const onAnswer = (value) => {
      if(value === 'yes'){

        
        setRightAnswerCount(rightAnswerCount+1)
        console.log('rightAnswerCount', rightAnswerCount)
      }

    }

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
                      onAnswer={onAnswer}
                  />
                )
                  
              })}
  
              
            </div>
          );
        })}
        <Link to="/results" className="question-button-next" type="button">
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