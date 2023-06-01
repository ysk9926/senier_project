import { MusicVolState, audioState } from "../../Atom";
import {
  MotionVol,
  MusicVolInput,
  PlayBtn,
  SoundSvg,
} from "../../Style/MainBarStyle";
import { useRecoilState } from "recoil";
import { ChangeEvent, useState } from "react";
import { AnimatePresence } from "framer-motion";

function VolControl() {
  const [showControls, setShowControls] = useState(false);
  const [volume, setVolume] = useRecoilState(MusicVolState);
  const [audio, setAudio] = useRecoilState(audioState);
  const handleVolBtnClick = () => {
    setShowControls((pre) => !pre);
  };
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    if (audio) {
      audio.volume = newVolume;
    }
    console.log(volume);
    setVolume(newVolume);
  };
  return (
    <>
      <PlayBtn onClick={handleVolBtnClick}>
        <SoundSvg
          xmlns="http://www.w3.org/2000/svg"
          width="16.362"
          height="13.635"
          viewBox="0 0 16.362 13.635"
        >
          <path
            id="Volume_Icon_Max"
            data-name="Volume Icon Max"
            d="M27.84,347.033v-5.454a2.727,2.727,0,1,1,0,5.454Zm0-9.544v2.045a4.772,4.772,0,0,1,0,9.544v2.045a6.817,6.817,0,1,0,0-13.635Zm-9.544,4.09v5.454h2.727l5.454,4.09V337.489l-5.454,4.09Z"
            transform="translate(-18.296 -337.489)"
            fill="#fff"
          />
        </SoundSvg>
      </PlayBtn>
      <AnimatePresence>
        {showControls && (
          <MotionVol
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MusicVolInput
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </MotionVol>
        )}
      </AnimatePresence>
    </>
  );
}

export default VolControl;
