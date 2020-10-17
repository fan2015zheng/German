import React from 'react'
import './Window.css'

function Window({children, close, title}) {
  let titleDiv = null
  if(title) {
    titleDiv = <div className="_windowTitle">{title}</div>
  }
  return(<>
    <div className="_darkScreen">
      <div className="_window">
        {titleDiv}
        <div className="_close" onClick={close}></div>
        <div className="_insideWindow">
          {children}
        </div>
      </div>
    </div>
  </>)
}

export default Window