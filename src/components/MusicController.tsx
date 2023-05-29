import React, { useState, useEffect, ChangeEvent } from "react";
import { motion } from "framer-motion";

function MusicControler() {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch("API_ENDPOINT");
        const audioData = await response.json();
        const audioElement = new Audio(audioData.url);
        audioElement.volume = volume;
        setAudio(audioElement);
      } catch (error) {
        console.error("음원을 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchMusic();

    return () => {
      if (audio) {
        audio.pause();
        setAudio(undefined);
      }
    };
  }, [volume]);

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const handleVolumeButtonClick = () => {
    setShowControls(!showControls);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? "일시 정지" : "재생"}</button>
      <motion.button
        onClick={handleVolumeButtonClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        음량 설정
      </motion.button>
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </motion.div>
      )}
    </div>
  );
}
export default MusicControler;
