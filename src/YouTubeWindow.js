import React from 'react'
import './YouTubeWindow.css'
import Window from './Window'

export default function YouTubeWindow({youTubeId, close}) 
{
  return(<>
    <Window  close={close}>
      <div className="_youTubeDiv">
        <iframe className="_youTubeFrame" title={"youtube"}
       src={`https://www.youtube.com/embed/${youTubeId}`}/>
      </div>
    </Window>
  </>)
}