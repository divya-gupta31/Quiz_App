import { QuizData } from "../Data/QuizData";
import  { useState } from "react";
import QuizResult from "./QuizResult";

function Quiz(){
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickOption,setClickOption]=useState(0);
    const[showResult,setShowResult]=useState(false);

    const changeQuestion=()=>{
        updateScore();
       if(currentQuestion<QuizData.length-1){
         setCurrentQuestion(currentQuestion+1);
         setClickOption(0);
       }else{
        //    alert(`Quiz Finished! Your score is ${score}`);
        setShowResult(true)
       }
    }

const updateScore=()=>{
        if(clickOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickOption(0);
        setScore(0);
    }
    return <div>
        <p className="heading-txt">Quiz App</p>
        <div className="container">

            { showResult ? (
                <QuizResult  score={score} totalScore={QuizData.length} tryAgain={resetAll} />
             ):(
             <>
             <div className="question">
              <span id="question-number">{currentQuestion+1}.</span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
             </div>

             <div className="option-container">
             {QuizData[currentQuestion].options.map((option, i)=>{
                return(
                    <button 
                    // className="option-btn"
                    className={`option-btn ${clickOption == i+1?"checked":" "}`}
                     key={i} onClick={()=>setClickOption(i+1)}> {option} </button>
                )
             })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
         </>)}
        </div>
    </div>
}
export default Quiz;