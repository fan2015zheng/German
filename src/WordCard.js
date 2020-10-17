import React from 'react'
import './WordCard.css'
import FlipCard from './FlipCard'

export default function WordCard({card}){

  let frontWrapStyle = null
  let frontText = null
  if(card.level > 0 && card.img){
    frontWrapStyle ={
      backgroundImage: `url(./img/level${card.level}/${card.img})`
    }
  } else {
    frontText = card.english
  }
  return(<>
    <FlipCard width={100} height={100} className="_wordCard"
      frontHtml={
        <div className="_wordCardFrontWrap" style={frontWrapStyle}>
          {frontText}
        </div>
      } 
      backHtml={
        <div className="_wordCardBackWrap">
          {card.german}
        </div>
      }
    />
  </>)
}