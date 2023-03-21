import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './app.css'
import Examples from './Examples'

function Hero() {
    const[Example, setExample] = useState(Examples);
   
  return (
    <div className='hero-body'>
       <div className='hero-center'>
        <h1>React Practice</h1>
        <div className='hero--grid'>
            { Example.map((exam) => (
                <div key={exam.id}>
                <Link to={exam.path}>
                 <div className='hero--card'>
                <h3>{exam.name}</h3>
            </div>
            </Link>
            </div>
            ))
               }
        </div>
       </div>
    </div>
  )
}

export default Hero