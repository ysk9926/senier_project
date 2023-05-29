import {
  BackSvg,
  MenuBtnWrapper,
  MenuSvg,
  MuteBtnWrapper,
  MuteSvg,
  NextSvg,
  PlayBtn,
  PlayBtnWrapper,
} from "../../Style/MainBarStyle";
import styled from "styled-components";
import VolControl from "./VolumControl";
import MusicPlayBtn from "./MusicController";

const Wrapper = styled.div`
  width: 259px;
  height: 35px;
  position: absolute;
  top: 5%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

function MainBar() {
  return (
    <Wrapper>
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
        {/* 플레이 버튼 */}
        <MusicPlayBtn />
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
        {/* 볼륨 조절 */}
        <VolControl />
      </PlayBtnWrapper>
      <MuteBtnWrapper>
        <MuteSvg
          xmlns="http://www.w3.org/2000/svg"
          width="16.315"
          height="13.635"
          viewBox="0 0 16.315 13.635"
        >
          <path
            id="Volume_Icon_Off"
            data-name="Volume Icon Off"
            d="M87.477,337.489v13.635l-5.454-4.09H79.3v-5.454h2.727Zm8.134,4.895-1.445-1.444-1.923,1.922-1.922-1.922-1.445,1.444,1.923,1.922-1.923,1.922,1.445,1.447,1.922-1.924,1.923,1.924,1.445-1.447-1.923-1.922Z"
            transform="translate(-79.296 -337.489)"
            fill="#fff"
          />
        </MuteSvg>
      </MuteBtnWrapper>
      <MenuBtnWrapper>
        <MenuSvg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="16"
          viewBox="0 0 19 16"
        >
          <g id="그룹_8" data-name="그룹 8" transform="translate(-0.21 -0.456)">
            <rect
              id="사각형_6"
              data-name="사각형 6"
              width="19"
              height="2"
              transform="translate(0.21 0.456)"
              fill="#fff"
            />
            <rect
              id="사각형_7"
              data-name="사각형 7"
              width="19"
              height="3"
              transform="translate(0.21 6.456)"
              fill="#fff"
            />
            <rect
              id="사각형_8"
              data-name="사각형 8"
              width="19"
              height="3"
              transform="translate(0.21 13.456)"
              fill="#fff"
            />
          </g>
        </MenuSvg>
      </MenuBtnWrapper>
    </Wrapper>
  );
}

export default MainBar;
