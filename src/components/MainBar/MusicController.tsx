import { useQuery } from "react-query";
import { fetchMusic } from "../../fetch";
import { PlayBtn, PlaySvg } from "../../Style/MainBarStyle";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { MusicVolState, audioState } from "../../Atom";

function MusicPlayBtn() {
  const [isplay, setIsplay] = useState(false);
  const { data: musicUrl, error } = useQuery("music", fetchMusic);
  const [volume, setVolume] = useRecoilState(MusicVolState);
  const [audio, setAudio] = useRecoilState(audioState);
  useEffect(() => {
    const musicElement = new Audio(musicUrl);
    musicElement.volume = volume;
    setAudio(musicElement);
  }, [volume]);
  const togglePlay = () => {
    if (audio) {
      if (isplay) {
        audio?.pause();
        console.log("pause");
      } else {
        audio?.play();
        console.log("play");
      }
    }
    setIsplay(!isplay);
  };
  return (
    <PlayBtn onClick={togglePlay}>
      <PlaySvg
        xmlns="http://www.w3.org/2000/svg"
        width="10.908"
        height="13.635"
        viewBox="0 0 10.908 13.635"
      >
        <path
          id="Play_Icon"
          data-name="Play Icon"
          d="M177.014,337.49v13.635l10.908-6.817Z"
          transform="translate(-177.014 -337.49)"
          fill="#fff"
        />
      </PlaySvg>
    </PlayBtn>
  );
}

export default MusicPlayBtn;
