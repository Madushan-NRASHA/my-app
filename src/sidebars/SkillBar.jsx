import React from 'react'
import NeomorphismProgressBar from '../components/FramworkSkill';
function SkillBar() {
  return (
    <div>
        <h1 style={{color:'silver'}}>My Experience</h1><br />
       <div className='n'>
                <NeomorphismProgressBar targetProgress={65} />
                <NeomorphismProgressBar targetProgress={75} />
                <NeomorphismProgressBar targetProgress={95} />
                <div className='flutter_name'>
               <h2>React</h2>
            </div>
           <div className='react_name'>
               <h2>Flutter</h2>
            </div>
            <div className='laravel_name'>
               <h2>Laravel</h2>
            </div>
            </div>
            

    </div>
  )
}

export default SkillBar
