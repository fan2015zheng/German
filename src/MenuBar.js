import React, { useState } from 'react'
import './MenuBar.css'

export default function MenuBar({level, setLevel}) {

  const [showLevel, setShowLevel] = useState(false)
  let levelPill = null
  if(showLevel) {
    levelPill =
    <div className="_levelPill">
      <div className="_levelPrompt">Level</div>
      <div>
        <input value={level} className="_levelInput"
          onChange={(e)=>{setLevel(e.target.value)}}/>
      </div>
    </div>
  }
  return(<>
    <div className="_menuBtn" onClick={()=>setShowLevel(!showLevel)}>
      <div className="_menuBtnInner"></div>
    </div>
    {levelPill}
  </>)
}