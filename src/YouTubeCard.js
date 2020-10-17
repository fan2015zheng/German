import React from 'react'
import './YouTubeCard.css'
import FlipCard from './FlipCard'

export default function YouTubeCard({card, openYouTubeWindow}) {
  return(<>
    <FlipCard width={100} height={100} className="_wordCard"
      frontHtml={
        <div className="_youTubeCardFrontWrap">
        </div>
      } 
      backHtml={
        <div className="_youTubeCardBackWrap">
          {card.youTubeSubject}
        </div>
      }
      onClickBackExpandButton={()=>{openYouTubeWindow(card.youTubeId)}}
    />
  </>)
}