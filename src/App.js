import React, { useEffect, useState } from 'react'
import './App.css'
import CardPad from './CardPad'
import MenuBar from './MenuBar'
import YouTubeWindow from './YouTubeWindow'

function App() {

  const [level, setLevel] = useState(1)
  const [cards, setCards] = useState([])

  const [window, setWindow] = useState("")
  const [youTubeId, setYouTubeId] = useState("")

  function openYouTubeWindow(youTubeId){
    setWindow("YouTubeWindow")
    setYouTubeId(youTubeId)
  }

  function closeWindow() {
    setWindow("")
  }

  useEffect(()=>{
    fetch(`./words/level${level}.txt`)
    .then( (data)=> data.text())
    .then( (text) => {
      const tempCards = []
      const rows = text.split('\n')
      if (rows[0].trim() !== "FileFetchSuccessIdentifier") {
        return
      }
      for(let i=1; i<rows.length; i++) {
        const rowText = rows[i].trim()
        if(rowText) {
          const card = {}
          const row = rowText.split(",")
          const part0 = (row[0]??"").trim()
          const part1 = (row[1]??"").trim()
          const part2 = (row[2]??"").trim()
          const part3 = (row[3]??"").trim()
          const part4 = (row[4]??"").trim()
          card.level = level
          switch(part0) {
            case "#word":
              card.english = part1
              card.german = part2
              card.img = part3
              break
            case "#youtube":
              card.isYouTube = true
              card.youTubeSubject = part1
              card.youTubeId = part2
              break
            case "#word2":
              card.isCard2 = true
              card.german1 = part1
              card.german2 = part2
              card.img1 = part3
              card.img2 = part4
              break
            default:
          }
          tempCards.push(card)
        }
      }
      setCards(tempCards)
    })
  },[level])

  let windowHtml = null
  if(window === "YouTubeWindow") {
    windowHtml 
    = <YouTubeWindow youTubeId={youTubeId} 
        close={closeWindow} />
  }
  console.log("app")
  return (<>
    <CardPad cards={cards}
       openYouTubeWindow={openYouTubeWindow}
    />
    <MenuBar level={level} setLevel={setLevel}/>
    {windowHtml}
  </>)
}

export default App
