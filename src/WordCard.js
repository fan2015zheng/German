import React from 'react'
import './WordCard.css'

export default function WordCard({word}){

  let frontStyle = null
  let frontContent = null
  if(word.level > 0 && word.img){
    frontStyle={
      backgroundImage: `url(./img/level${word.level}/${word.img})`
    }
  } else {
    frontContent = <div className="_wordCardFrontContent">{word.english}</div>
  }

  return(<>
   <div className="_wordCard">
     <div className="_wordCardInner">
       <div className="_wordCardFront" style={frontStyle}>
         {frontContent}
       </div>
       <div className="_wordCardBack">
        {word.german}
       </div>
     </div>
      
   </div>
  </>)
}