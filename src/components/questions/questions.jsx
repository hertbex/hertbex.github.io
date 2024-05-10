import { Link } from 'react-router-dom'
import './questions.css'
import React, { useRef, useState } from "react"
import store from '../../state/store'
export const QuestionInput = ({obj, onAnswer}) =>{
  const [buttonClass, setButtonClass] = useState('question-button')
  const handleAnswerClick = () => {
    onAnswer(obj.value);
    if (obj.value === "yes"){
      setButtonClass('question-button-right')
    }
    else{
      setButtonClass('question-button-wrong')
    }
  }
  return(
    <div className='question-inputs' key={obj.key}>
      <button
        htmlFor={obj.questionNumber} 
        className={buttonClass}
        value={obj.value} 
        onClick={handleAnswerClick}

      >
        {obj.key} {buttonClass}
      </button>
    </div>
  );

};

export const Questions = () => {
    // const rightAnswerCount = useRef(0)
    // const [checked, setChecked] = useState(false)
    // const onAnswer = (value) => {
    //   if(value === 'yes'){
    //     console.log(`current: ${rightAnswerCount.current + 1}`);
    //     rightAnswerCount.current = rightAnswerCount.current + 1;
    //   }
    //   else{
    //     console.log('wrong')
    //   }
    //   setChecked(true)
    // }
    const rightAnswerCount = useRef(0);
    const onAnswer = (value) => {
        if (value === 'yes') {
            rightAnswerCount.current = rightAnswerCount.current + 1;
            console.log(`Current right answer count: ${rightAnswerCount.current}`);
        } else {
            console.log('Wrong answer');
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
                    onAnswer={()=> onAnswer(obj.value)}
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