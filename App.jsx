import { Route, Routes, useNavigate } from 'react-router-dom'
import Subject from './SubjectChoiceQuery'





function SmartQuiz() {
  return(
    <>
    <h2>
      Smart Quiz
    </h2>
    <p>Test what you know. Learn what you don't</p>
    </>
  )
}

function QuizEntryButton() {
  const navigate = useNavigate()
  return(
    <>
   <button onClick={() => {navigate('/SubjectChoiceQuery')}}>
    Start Quiz
    </button>
  
    </>
  )
}

function Info() {
  return(
    <>
    <p>How it works</p>
    </>
  )
}

export default function App() {
  return(
    <Routes>
      <Route
      path='/'
      element={
    <>
      <SmartQuiz />
      <QuizEntryButton />
      <Info />
    </>
      }
      />

      <Route 
      path='/SubjectChoiceQuery/*'
      element={<Subject />}
      />
    </Routes>
  )
}