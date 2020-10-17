import React from 'react'
import './FlipCard.css'

export default function FlipCard({
  frontHtml, backHtml,
  width, height, className,
  onClickBackExpandButton
}){
  const cardStyle={
    width: `${width}px`,
    height: `${height}px`
  }
  let backExpandBtn = null
  if(onClickBackExpandButton) {
    backExpandBtn = 
    <div className="_flipCardBackExpand"
      onClick={onClickBackExpandButton}
    ></div>
  }
  return(<>
   <div className={`_flipCard ${className}`} style={cardStyle}>
     <div className="_flipCardInner">
       <div className="_flipCardFront">
         {frontHtml}
       </div>
       <div className="_flipCardBack">
         {backHtml}
         {backExpandBtn}
       </div>
     </div>
      
   </div>
  </>)
}