import React from 'react'
import NeomorphismProgressBar from '../components/FramworkSkill';
function LangSkill() {
  return (
    <div>
         <h1 style={{color:'silver'}}>My Experience in Programming Languages</h1><br />
       <div className='n'>
                <NeomorphismProgressBar targetProgress={65} />
                <NeomorphismProgressBar targetProgress={75} />
                <NeomorphismProgressBar targetProgress={75} />
                <div className='flutter_name'>
               <h2>C++</h2>
            </div>
           <div className='react_name'>
               <h2>Python</h2>
            </div>
            <div className='laravel_name'>
               <h2>Java</h2>
            </div>
            </div>
            
            
    </div>
  )
}

export default LangSkill
