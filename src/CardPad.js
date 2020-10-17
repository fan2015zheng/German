import React from 'react'
import './CardPad.css'
import WordCard from './WordCard'
import YouTubeCard from './YouTubeCard'

export default function CardPad({
  cards,
  openYouTubeWindow
}) {
  cards = cards ?? []

  return(<>
    <div className="_cardPad">
      {cards.map((card,i)=> {
        let html = null
        if(card.isYouTube) {
          html = 
          <YouTubeCard card={card} openYouTubeWindow={openYouTubeWindow} />
        } else {
          html = <WordCard card={card} />
        }
        return (
        <div key={i}>
          {html}
        </div>
        )
      })}
    </div>
  </>)
}