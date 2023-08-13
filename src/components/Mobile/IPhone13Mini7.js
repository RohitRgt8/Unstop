import { useState, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PortalPopup from "./PortalPopup";
import FrameComponent1 from "./FrameComponent1";
import { css } from "@emotion/css";
import add from "../image/add.png";
import bars from "../image/bars.png";
import assesment from "../image/assesment.png";
import roundstatus from "../image/roundstatus.png";
import library from "../image/library.png";
import source from "../image/source.png";
import link from "../image/link.png";
import math from "../image/math.png";
import share from "../image/share.png";
import candidate from "../image/group.png";
import dots from "../image/dots.png";
import mobile from "../image/mobile.png";
import date from "../image/date.png";
import search from "../image/search.png";
import filter from "../image/filter.png";
import menu from "../image/menu.png";
import chart from "../image/chart.png";
import laptop from "../image/laptop.png";
import Assesment from "./Assesment";
import { Link } from "react-router-dom";

const IPhone13Mini7 = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Frame 1000009409" to the project
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const onFrameContainer154Click = useCallback(() => {
    // Please sync "Frame 1000009409" to the project
  }, []);

  return (
    <>
      <div
        className={css`
          position: relative;
          background-color: #f6f8fa;
          width: 100%;
          height: 86.88rem;
          text-align: left;
          font-size: 1rem;
          color: #1c4980;
          font-family: Inter;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0rem;
            left: 0rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                background-color: #fff;
                width: 23.44rem;
                height: 2.5rem;
                display: flex;
                flex-direction: row;
                padding: 0.44rem 1rem;
                box-sizing: border-box;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 1.78rem;
                  height: 0.69rem;
                `}
                alt=""
                src={menu}
              />
              <div
                className={css`
                  height: 0.69rem;
                  overflow: hidden;
                  display: flex;
                  flex-direction: row;
                  padding: 0rem 0.06rem;
                  box-sizing: border-box;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.5rem;
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 0.97rem;
                    height: 0.61rem;
                  `}
                  alt=""
                  src={menu}
                />
                <img
                  className={css`
                    position: relative;
                    width: 0.87rem;
                    height: 0.63rem;
                  `}
                  alt=""
                  src="/vector1.svg"
                />
                <img
                  className={css`
                    position: relative;
                    width: 1.41rem;
                    height: 0.64rem;
                  `}
                  alt=""
                  src="/frame-1000007851.svg"
                />
              </div>
            </div>
            <div
              className={css`
                background-color: #fff;
                width: 23.44rem;
                height: 3.13rem;
                overflow: hidden;
                flex-shrink: 0;
                display: flex;
                flex-direction: row;
                padding: 0rem 0.94rem;
                box-sizing: border-box;
                align-items: center;
                justify-content: space-between;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.63rem;
                `}
              >
                <div
                  className={css`
                    border-radius: 60px;
                    background-color: #f2f8fe;
                    width: 2.5rem;
                    height: 2.5rem;
                    display: flex;
                    flex-direction: row;
                    padding: 0.63rem;
                    box-sizing: border-box;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                  `}
                  onClick={openFrame}
                >
                  <img
                    className={css`
                      position: relative;
                      width: 1.88rem;
                      height: 1.88rem;
                      overflow: hidden;
                      flex-shrink: 0;
                    `}
                    alt=""
                    src={menu}
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    line-height: 140%;
                    font-weight: 600;
                  `}
                >
                  Assessment
                </div>
              </div>
              <div
                className={css`
                  border-radius: 70px;
                  background-color: #fff;
                  width: 2.5rem;
                  height: 2.5rem;
                  display: flex;
                  flex-direction: row;
                  padding: 0.63rem;
                  box-sizing: border-box;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                `}
                // onClick={onFrameContainer3Click}
              >
                
                  <img
                    className={css`
                      position: relative;
                      width: 1.25rem;
                      height: 1.25rem;
                      overflow: hidden;
                      flex-shrink: 0;
                    `}
                    alt=""
                    src={laptop}
                  />
                <Link to="/">
                <img
                  className={css`
                    position: relative;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                  `}
                  alt=""
                  src={laptop}
                />
                </Link>
              </div>
            </div>
            <div
              className={css`
                background-color: #fff;
                width: 23.44rem;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                font-size: 0.88rem;
                color: #0073e6;
              `}
            >
              
            </div>
          </div>
          <div
            className={css`
              background-color: #fff;
              width: 23.44rem;
              display: flex;
              flex-direction: column;
              padding: 1.25rem 0.94rem;
              box-sizing: border-box;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 0.63rem;
                `}
              >
                <div
                  className={css`
                    width: 21.56rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      font-weight: 600;
                    `}
                  >
                    My Assessment
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 0.25rem;
                    `}
                  >
                    <div
                      className={css`
                        border-radius: 50px;
                        background-color: #fff;
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        flex-direction: row;
                        padding: 0.25rem;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 1.38rem;
                          height: 1.38rem;
                          overflow: hidden;
                          flex-shrink: 0;
                        `}
                        alt=""
                        src={search}
                      />
                    </div>
                    <div
                      className={css`
                        border-radius: 50px;
                        background-color: #fff;
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        flex-direction: row;
                        padding: 0.25rem;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <img
                        className={css`
                          position: relative;
                          width: 1.5rem;
                          height: 1.5rem;
                          overflow: hidden;
                          flex-shrink: 0;
                        `}
                        alt=""
                        src={filter}
                      />
                    </div>
                    <div
                      className={css`
                        border-radius: 50px;
                        background-color: #fff;
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        flex-direction: row;
                        padding: 0.25rem;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: center;
                      `}
                    >
                      <div
                        className={css`
                          width: 1.25rem;
                          height: 1.25rem;
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: center;
                        `}
                      >
                        <img
                          className={css`
                            position: relative;
                            width: 1rem;
                            height: 1rem;
                          `}
                          alt=""
                          src={chart}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    width: 21.56rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: 0.94rem;
                    text-align: center;
                    font-size: 0.88rem;
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      border-radius: 12px;
                      background-color: #f6f8fa;
                      border: 1px dashed #dadce0;
                      overflow: hidden;
                      display: flex;
                      flex-direction: column;
                      padding: 1.25rem 1.88rem;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                      gap: 0.75rem;
                      cursor: pointer;
                    `}
                    onClick={openFrame1}
                  >
                    <div
                      className={css`
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 0.63rem;
                        z-index: 0;
                      `}
                    >
                      <div
                        className={css`
                          border-radius: 51.43px;
                          background-color: #fff;
                          width: 3.13rem;
                          height: 3.13rem;
                          overflow: hidden;
                          flex-shrink: 0;
                          display: flex;
                          flex-direction: row;
                          padding: 0.45rem;
                          box-sizing: border-box;
                          align-items: center;
                          justify-content: center;
                        `}
                      >
                        <img
                          className={css`
                            position: relative;
                            width: 1.79rem;
                            height: 1.79rem;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                          src={add}
                        />
                      </div>
                      <div
                        className={css`
                          position: relative;
                          font-weight: 600;
                        `}
                      >
                        New Assessment
                      </div>
                    </div>
                    <div
                      className={css`
                        align-self: stretch;
                        position: relative;
                        font-size: 0.75rem;
                        font-weight: 500;
                        z-index: 1;
                      `}
                    >
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        margin: 0 !important;
                        top: -1.19rem;
                        left: 29.38rem;
                        width: 9.31rem;
                        height: 9.31rem;
                        display: none;
                        z-index: 2;
                      `}
                      alt=""
                      src="/vector2.svg"
                    />
                  </div>
                  <Assesment />
                  <Assesment />
                  <Assesment />
                  <Assesment />
                  <Assesment />
                  <Assesment />
                  <Assesment />
                  <Assesment />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 47.06rem;
            left: 19.38rem;
            border-radius: 51.43px;
            background-color: #a1a1a1;
            width: 3.13rem;
            height: 3.13rem;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            padding: 0.45rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          `}
          onClick={openFrame2}
        >
          <img
            className={css`
              position: relative;
              width: 1.79rem;
              height: 1.79rem;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src={add}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 0rem;
            left: 0rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              background-color: #fff;
              width: 23.44rem;
              height: 3.13rem;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: row;
              padding: 0rem 0.94rem;
              box-sizing: border-box;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: 0.63rem;
              `}
            >
              <div
                className={css`
                  border-radius: 60px;
                  background-color: #f2f8fe;
                  width: 2.5rem;
                  height: 2.5rem;
                  display: flex;
                  flex-direction: row;
                  padding: 0.63rem;
                  box-sizing: border-box;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                `}
                onClick={openFrame3}
              >
                <img
                  className={css`
                    position: relative;
                    width: 1.88rem;
                    height: 1.88rem;
                    overflow: hidden;
                    flex-shrink: 0;
                  `}
                  alt=""
                  src={menu}
                />
              </div>
              <div
                className={css`
                  position: relative;
                  line-height: 140%;
                  font-weight: 600;
                `}
              >
                Assessment
              </div>
            </div>
            <div
              className={css`
                border-radius: 70px;
                background-color: #fff;
                width: 2.5rem;
                height: 2.5rem;
                display: flex;
                flex-direction: row;
                padding: 0.63rem;
                box-sizing: border-box;
                align-items: center;
                justify-content: center;
                cursor: pointer;
              `}
              onClick={onFrameContainer154Click}
            >
              <Link to="/">
              <img
                className={css`
                  position: relative;
                  width: 1.25rem;
                  height: 1.25rem;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src={laptop}
              />
              </Link>
             
            </div>
          </div>
          <div
            className={css`
              background-color: #fff;
              width: 23.44rem;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              font-size: 0.88rem;
              color: #0073e6;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  background-color: #fff;
                  border-bottom: 2px solid #0073e6;
                  box-sizing: border-box;
                  height: 3.13rem;
                  display: flex;
                  flex-direction: row;
                  padding: 0.63rem 0rem;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 500;
                  `}
                >
                  My Assessments
                </div>
              </div>
              <div
                className={css`
                  flex: 1;
                  background-color: #fff;
                  border-bottom: 2px solid #f6f8fa;
                  box-sizing: border-box;
                  height: 3.13rem;
                  display: flex;
                  flex-direction: row;
                  padding: 0.63rem 0rem;
                  align-items: center;
                  justify-content: center;
                  color: #3e6493;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 500;
                  `}
                >
                  Unstop Assessments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent1 onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent1 onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <FrameComponent onClose={closeFrame3} />
        </PortalPopup>
      )}
    </>
  );
};

export default IPhone13Mini7;
