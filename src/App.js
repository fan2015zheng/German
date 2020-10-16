import React, { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import WordPad from './WordPad'
import MenuBar from './MenuBar'

function App() {

  const [level, setLevel] = useState(1)
  const [refreshCount, setRefreshCount] = useState(0)

  function refresh() {setRefreshCount((refreshCount+1)%1000)}
  const refresh1 = useCallback(refresh)
  const wordsRef = useRef([])

  useEffect(()=>{
    fetch(`./words/level${level}.txt`)
    .then( (data)=> data.text())
    .then( (text) => {
      wordsRef.current = []
      const rows = text.split('\n')
      if (rows[0].trim() !== "FileFetchSuccessIdentifier") {
        return
      }
      for(let i=1; i<rows.length; i++) {
        const rowText = rows[i].trim()
        if(rowText) {
          const word = {}
          const row = rowText.split(",")
          word.level = level
          word.english = (row[0]??"").trim()
          word.german = (row[1]??"").trim()
          word.img = (row[2]??"").trim()
          wordsRef.current.push(word)
        }
      }
      refresh1()
    })
  },[level,refresh1])
  
  return (<>
    <WordPad words={wordsRef.current}/>
    <MenuBar level={level} setLevel={setLevel}/>
  </>)
}

export default App
