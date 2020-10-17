import React from 'react'
import './CardPad.css'
import WordCard from './WordCard'
import YouTubeCard from './YouTubeCard'
import WordCard2 from './WordCard2'

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
        } else if(card.isCard2) {
          html = <WordCard2 card={card}/>
        }
        else {
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