import styled from "styled-components";
import {
  CustomBarWrapper,
  CustomVolSvg,
  SceneSvg,
  SettingSvg,
  SuffleSvg,
} from "../../Style/CustomBarStyled";
import CustomVol from "./CustomVol";

const Wrapper = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 99;
`;

function CustomBar() {
  return (
    <>
      <Wrapper>
        <CustomBarWrapper>
          {/* 셔플 */}
          <SuffleSvg
            id="구성_요소_4_1"
            data-name="구성 요소 4 – 1"
            xmlns="http://www.w3.org/2000/svg"
            width="16.247"
            height="16.181"
            viewBox="0 0 16.247 16.181"
          >
            <path
              id="Mix_Icon"
              data-name="Mix Icon"
              d="M341.4,367.689a7.326,7.326,0,0,1-2.416,5.5,7.373,7.373,0,0,1,2.416,5.5h-3.243c0-2.14-1.459-3.874-3.275-3.874-1.8,0-3.275,1.733-3.275,3.874h-3.243a7.328,7.328,0,0,1,2.432-5.5,7.282,7.282,0,0,1-2.432-5.5H326.74l3.243-5.189,3.243,5.189H331.6c0,2.14,1.476,3.875,3.275,3.875,1.816,0,3.275-1.735,3.275-3.875H336.5l3.243-5.189,3.243,5.189Z"
              transform="translate(-326.74 -362.5)"
              fill="#fff"
            />
          </SuffleSvg>
          {/* 커스텀 볼륨 */}
          <CustomVol />
          {/* 장면 선택 */}
          <SceneSvg
            xmlns="http://www.w3.org/2000/svg"
            width="20.017"
            height="20.017"
            viewBox="0 0 20.017 20.017"
          >
            <g
              id="그룹_276"
              data-name="그룹 276"
              transform="translate(-1724 83)"
            >
              <g
                id="그룹_275"
                data-name="그룹 275"
                transform="translate(1725 -82)"
              >
                <path
                  id="패스_4407"
                  data-name="패스 4407"
                  d="M158.008,772.017a9.008,9.008,0,1,1,9.009-9.008A9.018,9.018,0,0,1,158.008,772.017Z"
                  transform="translate(-149 -754)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_19"
                  data-name="선 19"
                  x2="10.181"
                  transform="translate(0.516 6.006)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_20"
                  data-name="선 20"
                  y1="8.901"
                  x2="5.139"
                  transform="translate(2.141 5.996)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_21"
                  data-name="선 21"
                  x1="5.124"
                  y1="8.876"
                  transform="translate(5.538 9.004)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_22"
                  data-name="선 22"
                  x1="10.275"
                  transform="translate(7.249 12.011)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_23"
                  data-name="선 23"
                  x1="5.107"
                  y2="8.845"
                  transform="translate(10.749 3.155)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <line
                  id="선_24"
                  data-name="선 24"
                  x2="5.113"
                  y2="8.856"
                  transform="translate(7.353 0.135)"
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </g>
          </SceneSvg>
          {/* 설정 */}
          <SettingSvg
            xmlns="http://www.w3.org/2000/svg"
            width="17.748"
            height="18.097"
            viewBox="0 0 17.748 18.097"
          >
            <path
              id="Settings_icon"
              data-name="Settings icon"
              d="M312.227,373.247l-1.7-.981a3.737,3.737,0,0,0,0-1.482l1.7-.979a.9.9,0,0,0,.333-1.236l-1.811-3.134a.906.906,0,0,0-1.238-.331l-1.688.972a6.842,6.842,0,0,0-1.3-.764v-1.929a.9.9,0,0,0-.9-.9h-3.625a.905.905,0,0,0-.907.9v1.929a6.885,6.885,0,0,0-1.3.764L298.1,365.1a.906.906,0,0,0-1.238.331l-1.812,3.134a.905.905,0,0,0,.331,1.236l1.7.979a3.737,3.737,0,0,0,0,1.482l-1.7.981a.9.9,0,0,0-.331,1.236l1.812,3.134a.908.908,0,0,0,1.238.331l1.688-.974a6.788,6.788,0,0,0,1.3.764v1.931a.907.907,0,0,0,.907.9h3.625a.905.905,0,0,0,.9-.9v-1.931a6.746,6.746,0,0,0,1.3-.764l1.688.974a.908.908,0,0,0,1.238-.331l1.811-3.134A.9.9,0,0,0,312.227,373.247Zm-8.421.994a2.715,2.715,0,1,1,2.718-2.715A2.717,2.717,0,0,1,303.806,374.241Z"
              transform="translate(-294.933 -362.478)"
              fill="#fff"
            />
          </SettingSvg>
        </CustomBarWrapper>
      </Wrapper>
    </>
  );
}

export default CustomBar;
