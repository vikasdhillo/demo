import React from 'react'
import './question.css'
const Question = () => {
  return (
    <div className='container-fluid question mt-3'>
        <div className="question-wrapper text-center">
            <h5>Do you have a question?</h5>
            <p>Get an answer in 24 hours from our experts.</p>
            <input type="text" placeholder='Ask question'/>
        </div>
    </div>
  )
}

export default Question