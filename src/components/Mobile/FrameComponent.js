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
import dashboard from "../image/dashboard.png";
import close from "../image/close.png";

const FrameComponent = ({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        background-color: #f2f8fe;
        width: 19.69rem;
        height: 67.13rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 2.5rem 1.25rem 0.63rem;
        box-sizing: border-box;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.63rem;
        max-width: 100%;
        max-height: 100%;
        text-align: left;
        font-size: 0.88rem;
        color: #1c4980;
        font-family: Inter;
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 0.38rem;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            height: 2.25rem;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          `}
        >
          <div
            className={css`
              position: relative;
              line-height: 140%;
              font-weight: 500;
            `}
          >
            Menu
          </div>
          <img
            className={css`
              position: relative;
              width: 1.5rem;
              height: 1.5rem;
            `}
            alt=""
            src={close}
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            border-radius: 8px;
            background-color: #f2f8fe;
            height: 3.13rem;
            display: flex;
            flex-direction: row;
            padding: 0.63rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 0.5rem;
            `}
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
              src={dashboard}
            />
            <div
              className={css`
                position: relative;
                line-height: 140%;
                font-weight: 500;
              `}
            >
              Dashboard
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            border-radius: 8px;
            background-color: #e5f1fc;
            border: 1px solid #0073e6;
            box-sizing: border-box;
            height: 3.13rem;
            display: flex;
            flex-direction: row;
            padding: 0.63rem;
            align-items: center;
            justify-content: flex-start;
            position: relative;
            gap: 0.63rem;
            color: #0073e6;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 0.5rem;
              z-index: 0;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 1.25rem;
                height: 1.25rem;
              `}
              alt=""
              src={assesment}
            />
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
              position: absolute;
              margin: 0 !important;
              top: 0.31rem;
              left: 14.38rem;
              border-radius: 10px;
              background-color: #d63500;
              width: 0.44rem;
              height: 0.44rem;
              opacity: 0;
              z-index: 1;
            `}
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            border-radius: 8px;
            background-color: #f2f8fe;
            height: 3.13rem;
            display: flex;
            flex-direction: row;
            padding: 0.63rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 0.5rem;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 1.25rem;
                height: 1.25rem;
              `}
              alt=""
              src={library}
            />
            <div
              className={css`
                position: relative;
                line-height: 140%;
                font-weight: 500;
              `}
            >
              My Library
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          align-self: stretch;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          height: 0.06rem;
          flex-shrink: 0;
        `}
        alt=""
        src="/vector-267.svg"
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            border-radius: 8px;
            background-color: #f2f8fe;
            height: 3.13rem;
            display: flex;
            flex-direction: row;
            padding: 0.63rem;
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
              gap: 0.5rem;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 1.25rem;
                height: 1.25rem;
              `}
              alt=""
              src={roundstatus}
            />
            <div
              className={css`
                position: relative;
                line-height: 140%;
                font-weight: 500;
              `}
            >
              Round Status
            </div>
          </div>
          <div
            className={css`
              border-radius: 22px;
              background-color: #fbebea;
              border: 1px solid #d63500;
              box-sizing: border-box;
              height: 1.13rem;
              display: flex;
              flex-direction: row;
              padding: 0.38rem 0.5rem;
              align-items: center;
              justify-content: flex-start;
              font-size: 0.63rem;
              color: #d63500;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
