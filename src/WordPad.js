import React from 'react'
import './WordPad.css'
import WordCard from './WordCard'

export default function WordPad({words}) {
  words = words ?? []
  return(<>
    <div className="_wordPad">
      {words.map((word,i)=> {
        return (
        <div key={i}>
          <WordCard word={word} />
        </div>
        )
      })}
    </div>
  </>)
}