import React, { useState, useRef, useEffect, useContext } from 'react';
import './AudioPlayer.css'; // Import the CSS file for styling
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ApiContext from '../../Context/ApiContext';

const AudioPlayer = () => {
  const { data } = useContext(ApiContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleAudioEnd = () => {
      // console.log("Audio ended");
      setIsPlaying(false);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, []);

  const audioSource = data?.[0]?.phonetics?.find(phonetic => phonetic.audio)?.audio;

  // console.log(audioSource,"data")
  useEffect(() => {
    const audioPlayerElements = document.getElementsByClassName("audio-player");
    if (!audioSource || audioSource === "" && audioPlayerElements.length > 0) {
      audioPlayerElements[0].style.display = "none";
    }
  }, [audioSource]);
  

  return (
      <div className="audio-player" style={{ backgroundColor: "unset" }}>
        <div>
          <div className="circle" onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon style={{ fontSize: 25 }} /> : <PlayArrowIcon style={{ fontSize: 25 }} />}
          </div>
          <audio ref={audioRef} src={audioSource} />
        </div>
      </div>
  );
};

export default AudioPlayer;
