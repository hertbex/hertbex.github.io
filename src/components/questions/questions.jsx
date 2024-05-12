import { Link } from 'react-router-dom'
import './questions.css'
import React, { useRef, useState} from "react"
import store from '../../state/store'
export const QuestionInput = ({obj, handleAnswerClick,  buttonClasses}) =>{
  
  return(
    <div className='question-inputs' key={obj.key}>
      <button
        htmlFor={obj.questionNumber} 
        className={`question-button ${buttonClasses[obj.key]}`}
        
        value={obj.value} 
        onClick={()=>{handleAnswerClick();}}>
        {obj.key}
      </button>
    </div>
  );

};

export const Questions = () => {
    const [buttonClasses, setButtonClasses] = useState([])
    const rightAnswerCount = useRef(0);
    const onAnswer = (value, answers) => {
        if (value === 'yes') {
            rightAnswerCount.current = rightAnswerCount.current + 1;
            console.log(`Current right answer count: ${rightAnswerCount.current}`);
        } else {
            console.log('Wrong answer');
        }
        const updatedButtonClasses = {...buttonClasses}
        for (let i = 0; i < Object.keys(answers).length; i++){
          updatedButtonClasses[answers[i].key] = answers[i].value === "yes" ? "question-button-right" : "question-button-wrong";
        }
        setButtonClasses(updatedButtonClasses)
        console.log(buttonClasses) 
        // console.log(buttonClasses)
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
                    obj={obj}
                    buttonClasses={buttonClasses}
                    handleAnswerClick={()=> {onAnswer(obj.value, item.answers);}}
                    key={obj.key}

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