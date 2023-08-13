import { css } from "@emotion/css";
import drop from "../image/drop.png";
import close from "../image/close.png";
import redclose from "../image/redclose.png";

const FrameComponent1 = ({ onClose }) => {
  return (
    <div
      className={css`
        position: relative;
        box-shadow: 0px -5px 19px rgba(0, 0, 0, 0.09);
        width: 23.44rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        font-size: 0.88rem;
        color: #1c4980;
        font-family: Inter;
      `}
    >
      <div
        className={css`
          align-self: stretch;
          border-radius: 12px 12px 0px 0px;
          background-color: #fff;
          border-bottom: 1px solid #dadce0;
          box-sizing: border-box;
          height: 3.75rem;
          display: flex;
          flex-direction: column;
          padding: 0rem 0.94rem;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <div
            className={css`
              width: 10.94rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 600;
              `}
            >
              Sub-Section Details
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                border-radius: 60px;
                background-color: #0073e6;
                width: 2.5rem;
                height: 2.5rem;
                display: flex;
                flex-direction: row;
                padding: 0.63rem;
                box-sizing: border-box;
                align-items: center;
                justify-content: center;
                opacity: 0;
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
                src="/check.svg"
              />
            </div>
            <div
              className={css`
                border-radius: 60px;
                background-color: #fbebea;
                width: 2.5rem;
                height: 2.5rem;
                display: flex;
                flex-direction: row;
                padding: 0.63rem;
                box-sizing: border-box;
                align-items: center;
                justify-content: center;
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 1.88rem;
                  height: 1.88rem;
                `}
                alt=""
                src={redclose}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          background-color: #fff;
          height: 32.31rem;
          overflow-y: auto;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          padding: 1rem 0.94rem;
          box-sizing: border-box;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1.25rem;
          font-size: 0.75rem;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.63rem;
          `}
        >
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
                position: relative;
                font-weight: 500;
              `}
            >
              Name of assessment
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #dadce0;
              box-sizing: border-box;
              height: 3.13rem;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: row;
              padding: 0.94rem;
              align-items: center;
              justify-content: flex-start;
              color: #8da4bf;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Type Here
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.63rem;
          `}
        >
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
                position: relative;
                font-weight: 500;
              `}
            >
              Purpose of the test is
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #dadce0;
              box-sizing: border-box;
              height: 3.13rem;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: row;
              padding: 0.94rem;
              align-items: center;
              justify-content: space-between;
              color: #8da4bf;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Select
            </div>
            <img
              className={css`
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src={drop}
            />
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.63rem;
          `}
        >
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
                position: relative;
                font-weight: 500;
              `}
            >
              Description
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #dadce0;
              box-sizing: border-box;
              height: 3.13rem;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: row;
              padding: 0.94rem;
              align-items: center;
              justify-content: space-between;
              color: #8da4bf;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              Select
            </div>
            <img
              className={css`
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src={drop}
            />
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.63rem;
          `}
        >
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
                position: relative;
                font-weight: 500;
              `}
            >
              Skills
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              text-align: left;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                border-radius: 8px 8px 0px 0px;
                border: 1px solid #dde5ea;
                display: flex;
                flex-direction: column;
                padding: 1rem;
                align-items: flex-start;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 0.63rem;
                `}
              >
                <div
                  className={css`
                    border-radius: 22px;
                    background-color: #ddedff;
                    display: flex;
                    flex-direction: row;
                    padding: 0.38rem 0.5rem 0.38rem 0.63rem;
                    align-items: center;
                    justify-content: flex-end;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-start;
                      gap: 0.31rem;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                      `}
                    >
                      UI/UX and Design
                    </div>
                    <img
                      className={css`
                        position: relative;
                        border-radius: 15px;
                        width: 1.13rem;
                        height: 1.13rem;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                      src={close}
                    />
                  </div>
                </div>
                <div
                  className={css`
                    border-radius: 22px;
                    background-color: #ddedff;
                    display: flex;
                    flex-direction: row;
                    padding: 0.38rem 0.5rem 0.38rem 0.63rem;
                    align-items: center;
                    justify-content: flex-end;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-start;
                      gap: 0.31rem;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                      `}
                    >
                      Web Development
                    </div>
                    <img
                      className={css`
                        position: relative;
                        border-radius: 15px;
                        width: 1.13rem;
                        height: 1.13rem;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                      src={close}
                    />
                  </div>
                </div>
                <div
                  className={css`
                    border-radius: 22px;
                    background-color: #ddedff;
                    display: flex;
                    flex-direction: row;
                    padding: 0.38rem 0.5rem 0.38rem 0.63rem;
                    align-items: center;
                    justify-content: flex-end;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-start;
                      gap: 0.31rem;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                      `}
                    >
                      UI/UX and Design
                    </div>
                    <img
                      className={css`
                        position: relative;
                        border-radius: 15px;
                        width: 1.13rem;
                        height: 1.13rem;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                      src={close}
                    />
                  </div>
                </div>
                <div
                  className={css`
                    border-radius: 22px;
                    background-color: #ddedff;
                    display: flex;
                    flex-direction: row;
                    padding: 0.38rem 0.5rem 0.38rem 0.63rem;
                    align-items: center;
                    justify-content: flex-end;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-start;
                      gap: 0.31rem;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                      `}
                    >
                      No of Question
                    </div>
                    <img
                      className={css`
                        position: relative;
                        border-radius: 15px;
                        width: 1.13rem;
                        height: 1.13rem;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                      src={close}
                    />
                  </div>
                </div>
                <div
                  className={css`
                    border-radius: 22px;
                    background-color: #ddedff;
                    display: flex;
                    flex-direction: row;
                    padding: 0.38rem 0.5rem 0.38rem 0.63rem;
                    align-items: center;
                    justify-content: flex-end;
                  `}
                >
                  <div
                    className={css`
                      display: flex;
                      flex-direction: row;
                      align-items: center;
                      justify-content: flex-start;
                      gap: 0.31rem;
                    `}
                  >
                    <div
                      className={css`
                        position: relative;
                        font-weight: 500;
                      `}
                    >
                      Web Development
                    </div>
                    <img
                      className={css`
                        position: relative;
                        border-radius: 15px;
                        width: 1.13rem;
                        height: 1.13rem;
                        overflow: hidden;
                        flex-shrink: 0;
                      `}
                      alt=""
                      src={close}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                border-radius: 0px 0px 8px 8px;
                border: 1px solid #dde5ea;
                box-sizing: border-box;
                height: 3.13rem;
                display: flex;
                flex-direction: column;
                padding: 1rem;
                align-items: flex-start;
                justify-content: flex-start;
                margin-top: -0.06rem;
                text-align: center;
                color: #8da4bf;
              `}
            >
              <div
                className={css`
                  position: relative;
                  font-weight: 500;
                `}
              >
                Type here
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 0.63rem;
          `}
        >
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
                position: relative;
                font-weight: 500;
              `}
            >
              Duration of assessment
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: 8px;
              background-color: #fff;
              border: 1px solid #dadce0;
              box-sizing: border-box;
              height: 3.13rem;
              overflow: hidden;
              flex-shrink: 0;
              display: flex;
              flex-direction: row;
              padding: 0.94rem;
              align-items: center;
              justify-content: space-between;
              color: #8da4bf;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              HH:MM:SS
            </div>
            <img
              className={css`
                position: relative;
                width: 1.5rem;
                height: 1.5rem;
                overflow: hidden;
                flex-shrink: 0;
                opacity: 0;
              `}
              alt=""
              src="/keyboard-arrow-down2.svg"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          background-color: #fff;
          border-top: 1px solid #dadce0;
          box-sizing: border-box;
          height: 3.75rem;
          display: flex;
          flex-direction: column;
          padding: 0.44rem 1rem;
          align-items: flex-start;
          justify-content: center;
          text-align: left;
          color: #fff;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            border-radius: 8px;
            background-color: #0073e6;
            height: 2.5rem;
            display: flex;
            flex-direction: row;
            padding: 0.63rem 1.88rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
          `}
        >
          <div
            className={css`
              position: relative;
              font-weight: 600;
            `}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
