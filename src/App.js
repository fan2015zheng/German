import React, { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import CardPad from './CardPad'
import MenuBar from './MenuBar'
import YouTubeWindow from './YouTubeWindow'

function App() {

  const [level, setLevel] = useState(1)
  const [refreshCount, setRefreshCount] = useState(0)

  function refresh() {setRefreshCount((refreshCount+1)%1000)}
  const refresh1 = useCallback(refresh)
  const cardsRef = useRef([])

  const [window, setWindow] = useState("")
  const [youTubeId, setYouTubeId] = useState("")

  function openYouTubeWindow(youTubeId){
    refresh()
    setWindow("YouTubeWindow")
    setYouTubeId(youTubeId)
  }

  function closeWindow() {
    refresh()
    setWindow("")
  }

  useEffect(()=>{
    fetch(`./words/level${level}.txt`)
    .then( (data)=> data.text())
    .then( (text) => {
      cardsRef.current = []
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
            default:
          }
          cardsRef.current.push(card)
        }
      }
      refresh1()
    })
  },[level,refresh1])

  let windowHtml = null
  if(window === "YouTubeWindow") {
    windowHtml 
    = <YouTubeWindow youTubeId={youTubeId} 
        close={closeWindow} />
  }
  
  return (<>
    <CardPad cards={cardsRef.current}
       openYouTubeWindow={openYouTubeWindow}
    />
    <MenuBar level={level} setLevel={setLevel}/>
    {windowHtml}
  </>)
}

export default App
