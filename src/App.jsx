import { useState } from 'react'
import { courses } from './data'
import Header from './header'
import Course from './component/cards'
import './css/cards.css'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <div className='card-container' >
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default App
