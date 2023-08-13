import React from 'react'
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
import { css } from "@emotion/css";

const Assesment = () => {
  return (
    <div
                    className={css`
                      align-self: stretch;
                      border-radius: 12px;
                      background-color: #fff;
                      border: 1px solid #dadce0;
                      overflow: hidden;
                      display: flex;
                      flex-direction: column;
                      padding: 0.88rem;
                      align-items: flex-start;
                      justify-content: flex-start;
                      gap: 0.63rem;
                    `}
                  >
                    <div
                      className={css`
                        align-self: stretch;
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
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
                        <img
                          className={css`
                            position: relative;
                            border-radius: 12px;
                            width: 3.13rem;
                            height: 3.13rem;
                            overflow: hidden;
                            flex-shrink: 0;
                          `}
                          alt=""
                          src={math}
                        />
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                            gap: 0.13rem;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-weight: 600;
                            `}
                          >
                            Math Assessment
                          </div>
                          <div
                            className={css`
                              display: flex;
                              flex-direction: row;
                              align-items: center;
                              justify-content: flex-start;
                              gap: 0.31rem;
                              text-align: left;
                              font-size: 0.75rem;
                            `}
                          >
                            <div
                              className={css`
                                position: relative;
                                line-height: 140%;
                                font-weight: 500;
                                display: inline-block;
                                width: 1.63rem;
                                flex-shrink: 0;
                              `}
                            >
                              Job
                            </div>
                            <img
                              className={css`
                                position: relative;
                                width: 0.06rem;
                                height: 1rem;
                              `}
                              alt=""
                              src={assesment}
                            />
                            <div
                              className={css`
                                height: 1.38rem;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: flex-start;
                                text-align: center;
                                color: #8da4bf;
                              `}
                            >
                              <div
                                className={css`
                                  display: flex;
                                  flex-direction: row;
                                  align-items: center;
                                  justify-content: flex-start;
                                  gap: 0.38rem;
                                `}
                              >
                                <img
                                  className={css`
                                    position: relative;
                                    width: 0.75rem;
                                    height: 0.75rem;
                                  `}
                                  alt=""
                                  src={date}
                                />
                                <div
                                  className={css`
                                    position: relative;
                                    font-weight: 500;
                                  `}
                                >
                                  20 Apr 23
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={css`
                          border-radius: 40px;
                          background-color: #fff;
                          width: 1.5rem;
                          height: 1.5rem;
                          display: flex;
                          flex-direction: row;
                          padding: 0.25rem 0.5rem;
                          box-sizing: border-box;
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
                          src={dots}
                        />
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
                      src="/vector-332.svg"
                    />
                    <div
                      className={css`
                        align-self: stretch;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 0.75rem;
                      `}
                    >
                      <div
                        className={css`
                          display: flex;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 0.63rem;
                        `}
                      >
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                            gap: 0.06rem;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-weight: 600;
                            `}
                          >
                            00
                          </div>
                          <div
                            className={css`
                              position: relative;
                              font-size: 0.63rem;
                              line-height: 140%;
                              font-weight: 500;
                              text-align: left;
                            `}
                          >
                            Duration
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                            gap: 0.06rem;
                          `}
                        >
                          <div
                            className={css`
                              position: relative;
                              font-weight: 600;
                            `}
                          >
                            00
                          </div>
                          <div
                            className={css`
                              position: relative;
                              font-size: 0.63rem;
                              line-height: 140%;
                              font-weight: 500;
                              text-align: left;
                            `}
                          >
                            Questions
                          </div>
                        </div>
                      </div>
                      <div
                        className={css`
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                          gap: 0.63rem;
                          text-align: left;
                        `}
                      >
                        <div
                          className={css`
                            border-radius: 50px;
                            background-color: #fff;
                            border: 1px solid #1c4980;
                            box-sizing: border-box;
                            height: 1.88rem;
                            overflow: hidden;
                            display: flex;
                            flex-direction: row;
                            padding: 0.13rem 0.5rem 0.13rem 0.38rem;
                            align-items: center;
                            justify-content: center;
                            gap: 0.25rem;
                          `}
                        >
                          <img
                            className={css`
                              position: relative;
                              width: 1rem;
                              height: 1rem;
                              overflow: hidden;
                              flex-shrink: 0;
                            `}
                            alt=""
                            src={share}
                          />
                          <div
                            className={css`
                              position: relative;
                              line-height: 140%;
                              font-weight: 500;
                            `}
                          >
                            Share
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: flex-start;
                            text-align: center;
                            color: #fff;
                          `}
                        >
                          <div
                            className={css`
                              border-radius: 32.73px;
                              background-color: #6548ee;
                              border: 1px solid #fff;
                              box-sizing: border-box;
                              width: 1.88rem;
                              height: 1.88rem;
                              overflow: hidden;
                              flex-shrink: 0;
                              display: flex;
                              flex-direction: column;
                              padding: 0.31rem 0.38rem;
                              align-items: center;
                              justify-content: center;
                            `}
                          >
                            <b
                              className={css`
                                position: relative;
                              `}
                            >
                              LP
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default Assesment