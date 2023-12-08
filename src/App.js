import { useState,  } from 'react';
import './App.css';
import Login from "./Component/Login"
import SignUp from './Component/SignUp';
import QuizApp  from './Component/QuizApp';
import Review from './Component/Review';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { questions, math,GK, history  } from './Component/questions';

function App() {
  const[ans,setAns]=useState([])
  const[question ,setQuestion]=useState(questions)
  const [firstQ,setFirstQ] = useState(0)
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
 

const HandleHist=()=>{
  setCurrentQuestion((pre)=> pre+1)
  setQuestion(history)
  
}
const handelmath=()=>{
  setCurrentQuestion((pre)=> pre+1)
  setQuestion(math)
  
}
const handelgk=()=>{
  setCurrentQuestion((pre)=> pre+1)
  setQuestion(GK)

}
const handelRetry =() =>{
  setCurrentQuestion(0)
  navigate("/Home")

}

  return (
<>
{/* <BrowserRouter> */}
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/SignUp" element={<SignUp/>} />

<Route path='/Home' element={<QuizApp question={question} firstQ={firstQ} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} setAns={setAns}/>} />
<Route path='/review' element={<Review ans={ans} mainquestion={question}/>} />
</Routes>
<button onClick={HandleHist} >History</button>
<button onClick={handelgk}>GK</button>
<button onClick={handelmath}>Math</button>
 <button onClick={() =>handelRetry()}>Retry</button>
{/* // </BrowserRouter> */}
</>
  )
}

export default App;
