import React from 'react'
import './WordCard2.css'
import FlipCard from './FlipCard'

export default function WordCard2({card}){

  const frontImg1Style ={
      backgroundImage: `url(./img/level${card.level}/${card.img1})`
  }
  const frontImg2Style ={
      backgroundImage: `url(./img/level${card.level}/${card.img2})`
  }

  return(<>
    <FlipCard width={205} height={100} className="_wordCard2" //205 = card width 100 + margin 5px
      frontHtml={
        <div className="_wordCard2FrontWrap">
          <div className="_wordCard2FrontImg" style={frontImg1Style}></div>
          <div className="_wordCard2FrontImg" style={frontImg2Style}></div>
        </div>
      } 
      backHtml={
        <div className="_wordCard2BackWrap">
          <div className="_wordCard2BackGerman">{card.german2}</div>
          <div className="_wordCard2BackGerman">{card.german1}</div>
        </div>
      }
    />
  </>)
}