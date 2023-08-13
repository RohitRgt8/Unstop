import { useState, useCallback } from "react";
import Popup from "../Popup/Popup";
import PortalPopup from "../Popup/PortalPopup";
import dashboard from "../image/dashboard.png";
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
import "./navbar.css";
import "../assets/App.css";
import IPhone13Mini7 from "../Mobile/IPhone13Mini7";
import { Link } from "react-router-dom";
// import Mobile from "./Mobile";

const Home = () => {
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const onFrameContainer3Click = useCallback(() => {
    setShowMobile(true);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  return (
    <>
      <div className="frame-root">
        <div className="frame-child" />
        <div className="frame-parent8">
          <div className="frame-wrapper5">
            <div className="frame-parent9">
              <div className="assessment-parent">
                <div className="assessment">Assessment</div>
                <img className="frame-item" alt="" src={add} />
                <div className="frame-wrapper6">
                  <div className="my-assessments-wrapper">
                    <div className="my-assessments">My Assessments</div>
                  </div>
                </div>
              </div>
              <div
                className="mobile-screen-share-wrapper"
                onClick={onFrameContainer3Click}
              >
                <Link to="/mobile">
                  <img
                    className="mobile-screen-share-icon"
                    alt=""
                    src={mobile}
                  />
                </Link>
                {/* <img
                  className="mobile-screen-share-icon"
                  alt=""
                  src={mobile}
                /> */}
              </div>
              {/* {showMobile && <IPhone13Mini7 />} */}
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="frame-wrapper8">
              <div className="frame-parent10">
                <div className="assessments-overview-parent">
                  <div className="assessments-overview">
                    Assessments Overview
                  </div>
                  <div className="frame-parent11">
                    <div className="total-assessment-parent">
                      <div className="assessment">Total Assessment</div>
                      <div className="frame-parent12">
                        <img
                          className="frame-inner"
                          alt=""
                          src={bars}
                        />
                        <b className="b">34</b>
                      </div>
                    </div>
                    <img className="vector-icon" alt="" src={candidate} />
                    <div className="candidates-parent">
                      <div className="assessment">Candidates</div>
                      <div className="frame-parent13">
                        <img
                          className="frame-inner"
                          alt=""
                          src={candidate}
                        />
                        <div className="frame-parent14">
                          <div className="parent">
                            <b className="b">11,145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Total Candidate</div>
                        </div>
                        <img
                          className="frame-child1"
                          alt=""
                          src="/vector-250.svg"
                        />
                        <div className="frame-parent14">
                          <div className="parent">
                            <b className="b">1,14</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Who Attamped</div>
                        </div>
                      </div>
                    </div>
                    <img className="vector-icon" alt="" src={source} />
                    <div className="candidates-source-parent">
                      <div className="assessment">Candidates Source</div>
                      <div className="frame-parent13">
                        <img
                          className="frame-inner"
                          alt=""
                          src={source}
                        />
                        <div className="frame-parent14">
                          <div className="parent">
                            <b className="b">11,000</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">E-mail</div>
                        </div>
                        <img
                          className="frame-child1"
                          alt=""
                          src="/vector-2501.svg"
                        />
                        <div className="frame-parent14">
                          <div className="parent">
                            <b className="b">145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Social Share</div>
                        </div>
                        <img
                          className="frame-child1"
                          alt=""
                          src="/vector-2511.svg"
                        />
                        <div className="frame-parent14">
                          <div className="parent">
                            <b className="b">145</b>
                            <div className="div">+89</div>
                          </div>
                          <div className="total-candidate">Unique Link</div>
                        </div>
                      </div>
                    </div>
                    <img className="vector-icon" alt="" src={link} />
                    <div className="total-purpose-parent">
                      <div className="assessment">Total Purpose</div>
                      <div className="frame-parent12">
                        <img
                          className="frame-inner"
                          alt=""
                          src={link}
                        />
                        <b className="b">11</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="assessments-overview-parent">
                  <div className="my-assessment-parent">
                    <div className="assessments-overview">My Assessment</div>
                    <div className="frame-wrapper9">
                      <div className="frame-child8" />
                    </div>
                  </div>
                  <div className="frame-parent22">
                    <div className="frame-parent23">
                      <div className="frame-parent24" onClick={openFrame2}>
                        <div className="frame-parent25">
                          <div className="add-wrapper">
                            <img className="add-icon" alt="" src={add} />
                          </div>
                          <div className="new-assessment">New Assessment</div>
                        </div>
                        <div className="from-here-you">
                          From here you can add questions of multiple types like
                          MCQs, subjective (text or paragraph)!
                        </div>
                        <img
                          className="vector-icon1"
                          alt=""
                          src={add}
                        />
                      </div>
                      <div className="frame-parent26">
                        <div className="frame-parent27">
                          <div className="frame-parent28">
                            <img
                              className="frame-child9"
                              alt=""
                              src={math}
                            />
                            <div className="math-assessment-parent">
                              <div className="assessments-overview">
                                Math Assessment
                              </div>
                              <div className="job-parent">
                                <div className="job">Job</div>
                                <img
                                  className="frame-child10"
                                  alt=""
                                  src={math}
                                />
                                <div className="calendar-today-parent">
                                  <img
                                    className="calendar-today-icon"
                                    alt=""
                                    src={date}
                                  />
                                  <div className="new-assessment">
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dot-wrapper">
                            <img className="dot-icon" alt="" src={dots} />
                          </div>
                        </div>
                        <img
                          className="frame-child11"
                          alt=""
                          src={math}
                        />
                        <div className="frame-parent29">
                          <div className="frame-parent30">
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Duration</div>
                            </div>
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Questions</div>
                            </div>
                          </div>
                          <div className="frame-parent31">
                            <div className="link-parent">
                              <img
                                className="link-icon"
                                alt=""
                                src={share}
                              />
                              <div className="assessments-overview">Share</div>
                            </div>
                            <div className="frame-wrapper10">
                              <div className="lp-wrapper">
                                <b className="lp">LP</b>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-child12" />
                      </div>
                      <div className="frame-parent26">
                        <div className="frame-parent27">
                          <div className="frame-parent28">
                            <img
                              className="frame-child9"
                              alt=""
                              src={math}
                            />
                            <div className="math-assessment-parent">
                              <div className="assessments-overview">
                                Math Assessment
                              </div>
                              <div className="job-parent">
                                <div className="job">Job</div>
                                <img
                                  className="frame-child10"
                                  alt=""
                                  src="/vector-3331.svg"
                                />
                                <div className="calendar-today-parent">
                                  <img
                                    className="calendar-today-icon"
                                    alt=""
                                    src={date}
                                  />
                                  <div className="new-assessment">
                                    20 Apr 2023
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dot-wrapper">
                            <img
                              className="dot-icon"
                              alt=""
                              src={dots}
                            />
                          </div>
                        </div>
                        <img
                          className="frame-child11"
                          alt=""
                          src="/vector-3321.svg"
                        />
                        <div className="frame-parent29">
                          <div className="frame-parent30">
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Duration</div>
                            </div>
                            <div className="parent3">
                              <div className="assessment">00</div>
                              <div className="duration">Questions</div>
                            </div>
                          </div>
                          <div className="frame-parent31">
                            <div className="link-parent">
                              <img
                                className="link-icon"
                                alt=""
                                src={share}
                              />
                              <div className="assessments-overview">Share</div>
                            </div>
                            <div className="frame-wrapper10">
                              <div className="frame-parent38">
                                <div className="lp-wrapper">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-frame">
                                  <b className="lp">LP</b>
                                </div>
                                <div className="lp-wrapper1">
                                  <b className="lp">LP</b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="frame-child12" />
                      </div>
                    </div>
                    <div className="frame-child17" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper12">
          <div className="frame-parent39">
            <div className="frame-parent40">
              <div className="dashboard-parent">
                <img className="dashboard-icon" alt="" src={dashboard} />
                <div className="dashboard">Dashboard</div>
                <div className="rectangle-div" />
              </div>
              <div className="note-alt-parent">
                <img className="note-alt-icon" alt="" src={assesment} />
                <div className="dashboard">Assessment</div>
                <div className="rectangle-div" />
              </div>
              <div className="quiz-parent">
                <img className="dot-icon" alt="" src={library} />
                <div className="assessments-overview">My Library</div>
              </div>
              <div className="frame-child19" />
              <div className="frame-child19" />
              <div className="frame-child19" />
              <div className="bill-and-plan-line-wrapper">
                <div className="link-icon" />
              </div>
            </div>
            <div className="vector-parent">
              <img className="frame-child22" alt="" src={roundstatus} />
              <div className="frame-parent41">
                <div className="admin-wrapper">
                  <div className="new-assessment">Admin</div>
                </div>
                <div className="admin-meds-parent">
                  <img className="dot-icon" alt="" src={roundstatus} />
                  <div className="assessments-overview">
                    <p className="round">Round</p>
                    <p className="round">Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <Popup onClose={closeFrame2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
