import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  BackSvg,
  NextSvg,
  PlayBtn,
  PlayBtnWrapper,
  PlaySvg,
  SoundSvg,
} from "../Style/PlayBtnStyle";
import { musicPlayState } from "../Atom";

function PlayBar() {
  const isplay = useSetRecoilState(musicPlayState);
  const clickPlay = () => {
    isplay((pre) => !pre);
  };
  return (
    <PlayBtnWrapper>
      <PlayBtn>
        <BackSvg
          xmlns="http://www.w3.org/2000/svg"
          width="17.452"
          height="10.908"
          viewBox="0 0 17.452 10.908"
        >
          <path
            id="Remote_Icon_1"
            data-name="Remote Icon 1"
            d="M278.411,338.489V349.4l-8.726-5.454Zm-8.726,0V349.4l-8.726-5.454Z"
            transform="translate(-260.959 -338.489)"
            fill="#fff"
          />
        </BackSvg>
      </PlayBtn>
      <PlayBtn onClick={clickPlay}>
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
      <PlayBtn>
        <NextSvg
          xmlns="http://www.w3.org/2000/svg"
          width="17.452"
          height="10.908"
          viewBox="0 0 17.452 10.908"
        >
          <path
            id="Remote_Icon_2"
            data-name="Remote Icon 2"
            d="M302.485,343.943l-8.726,5.454V338.489Zm8.726,0-8.726,5.454V338.489Z"
            transform="translate(-293.759 -338.489)"
            fill="#fff"
          />
        </NextSvg>
      </PlayBtn>
      <PlayBtn>
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
    </PlayBtnWrapper>
  );
}

export default PlayBar;
