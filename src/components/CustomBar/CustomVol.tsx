import { CustomVolSvg } from "../../Style/CustomBarStyled";
import {
  CustomLabel,
  CustomVolBtn,
  CustomVolControler,
  CustomVolInput,
  InputWrapper,
  LabelWrapper,
} from "../../Style/CustomVolStyled";
import { AnimatePresence } from "framer-motion";
import { useState, ChangeEvent } from "react";
import { MusicVolInput } from "../../Style/MainBarStyle";

function CustomVol() {
  const [showControls, setShowControls] = useState(false);
  const handleCustomVolClick = () => {
    setShowControls((pre) => !pre);
  };
  return (
    <>
      <CustomVolBtn onClick={handleCustomVolClick}>
        <CustomVolSvg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
        >
          <g
            id="그룹_280"
            data-name="그룹 280"
            transform="translate(-1735.643 -160.912)"
          >
            <rect
              id="사각형_267"
              data-name="사각형 267"
              width="5"
              height="3"
              transform="translate(1735.643 167.912)"
              fill="#fff"
            />
            <rect
              id="사각형_272"
              data-name="사각형 272"
              width="5"
              height="3"
              transform="translate(1742.643 167.912)"
              fill="#fff"
            />
            <rect
              id="사각형_273"
              data-name="사각형 273"
              width="5"
              height="2"
              transform="translate(1742.643 164.912)"
              fill="#fff"
            />
            <rect
              id="사각형_274"
              data-name="사각형 274"
              width="5"
              height="2"
              transform="translate(1742.643 160.912)"
              fill="#fff"
            />
            <rect
              id="사각형_268"
              data-name="사각형 268"
              width="5"
              height="2"
              transform="translate(1735.643 171.912)"
              fill="#fff"
            />
            <rect
              id="사각형_271"
              data-name="사각형 271"
              width="5"
              height="2"
              transform="translate(1742.643 171.912)"
              fill="#fff"
            />
            <rect
              id="사각형_275"
              data-name="사각형 275"
              width="5"
              height="2"
              transform="translate(1749.643 171.912)"
              fill="#fff"
            />
            <rect
              id="사각형_269"
              data-name="사각형 269"
              width="5"
              height="2"
              transform="translate(1735.643 175.912)"
              fill="#fff"
            />
            <rect
              id="사각형_270"
              data-name="사각형 270"
              width="5"
              height="2"
              transform="translate(1742.643 175.912)"
              fill="#fff"
            />
            <rect
              id="사각형_276"
              data-name="사각형 276"
              width="5"
              height="2"
              transform="translate(1749.643 175.912)"
              fill="#fff"
            />
          </g>
        </CustomVolSvg>
      </CustomVolBtn>
      <AnimatePresence>
        {showControls && (
          <CustomVolControler
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: -307 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <InputWrapper>
              <LabelWrapper>
                <CustomLabel htmlFor="cityRain">City Rain</CustomLabel>
                <CustomVolInput
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={0.2}
                  id="cityRain"
                  //   onChange={handleVolumeChange}
                />
              </LabelWrapper>
              <LabelWrapper>
                <CustomLabel htmlFor="cagePeople">Cage People</CustomLabel>
                <CustomVolInput
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={0.5}
                  id="cagePeople"
                  //   onChange={handleVolumeChange}
                />
              </LabelWrapper>
              <LabelWrapper>
                <CustomLabel htmlFor="cityTraffic">City Traffic</CustomLabel>
                <CustomVolInput
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={0.7}
                  id="cityTraffic"
                  //   onChange={handleVolumeChange}
                />
              </LabelWrapper>
            </InputWrapper>
          </CustomVolControler>
        )}
      </AnimatePresence>
    </>
  );
}

export default CustomVol;
