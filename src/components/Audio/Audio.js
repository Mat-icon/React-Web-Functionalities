import React, { useState } from 'react';
import './app.css';
import Test from '../../assets/Test.mp3'

function Audio() {
    const [isPlaying, setIsPlaying] = useState(false)

    function handClick(){
        const audio = document.querySelector('audio');

        if(!audio){
            return <div>Loading...</div>
        }
        if(isPlaying){
            audio.pause();
        }
        else{
            audio.play();
        }
        setIsPlaying(!isPlaying)
    }
  return (
    <div className='audio-body'>
        <h1>Play my Favourite Songs</h1>
        <div className='audio-card'>
            <audio src={Test} />
            <button onClick={handClick} className='audio-btn'>{isPlaying ? "Pause" : "Play"}</button>
        </div>
        
    </div>
  )
}

export default Audio