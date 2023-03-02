import React from "react"
import { Link } from "react-router-dom"

const Terms = () => {
  return (
    <div>
      {/* header section @S */}
      <header className="header-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="header-menu-wrap">
                <ul>
                  <li>
                    <a href="index.html#pricing-sec">Pricing</a>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/terms">Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-5">
              <div className="header-logo">
                <Link to="/">
                  <img
                    src="./assets/images/logo.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-7">
              <div className="header-bttn">
                <form className="d-flex">
                  <Link to="/login">Log In</Link>
                  <Link to="/register">
                    Get Started <i className="fa fa-angle-right" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header section @E */}
      {/* tos section start */}
      <section className="tos-section pa-y4">
        <div className="container">
          {/* common heading start */}
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h6>TOS</h6>
                <h2>Terms of Service</h2>
                <p>Last Updated : February 14, 2023</p>
              </div>
            </div>
          </div>
          {/* common heading end */}
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-10">
              <div className="tos-main-box">
                <p>
                  Welcome to www.lorem-ipsum.info. This site is provided as a
                  service to our visitors and may be used for informational
                  purposes only. Because the Terms and Conditions contain legal
                  obligations, please read them carefully.
                </p>
                <h5>Heading 1</h5>
                <p>
                  This Site may contain links to other independent third-party
                  Web sites ("Linked Sites”). These Linked Sites are provided
                  solely as a convenience to our visitors. Such Linked Sites are
                  not under our control, and we are not responsible for and does
                  not endorse the content of such Linked Sites, including any
                  information or materials contained on such Linked Sites. You
                  will need to make your own independent judgment regarding your
                  interaction with these Linked Sites.
                </p>
                <h5>Bullet Points like this</h5>
                <ul>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        This Site and all its Contents are intended solely for
                        personal, non-commercial use.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        Except as expressly provided, nothing within the Site
                        shall be construed as conferring any license under our
                        or any third party's intellectual property rights,
                        whether by estoppel, implication, waiver, or otherwise.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        Without limiting the generality of the foregoing, you
                        acknowledge and agree that all content available through
                        and used to operate the Site and its services is
                        protected by copyright, trademark, patent, or other
                        proprietary rights.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        You agree not to: (a) modify, alter, or deface any of
                        the trademarks, service marks, trade dress (collectively
                        "Trademarks") or other intellectual property made
                        available by us in connection with the Site; (b) hold
                        yourself out as in any way sponsored by, affiliated
                        with, or endorsed by us, or any of our affiliates or
                        service providers; (c) use any of the.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        Trademarks or other content accessible through the Site
                        for any purpose other than the purpose for which we have
                        made it available to you; (d) defame or disparage us,
                        our Trademarks, or any
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <i className="fa fa-circle" />
                      <div className="media-body">
                        Aspect of the Site; and (e) adapt, translate, modify,
                        decompile, disassemble, or reverse engineer the Site or
                        any software or programs used in connection with it or
                        its products and services.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tos section end */}
      {/* get start section start */}
      <section className="get-start-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="get-start-txt">
                <h2>
                  #1 Choice for the Best Label Service on <br /> the Internet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eu <br /> imperdiet augue. Nullam ultrices, metus in euismod
                  facilisis,
                </p>
                <Link to="/register">
                  Create Label <i className="fa fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get start section end */}
      {/* footer section start */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-8 col-12">
              <div className="ftr-logo">
                <Link to="/">
                  <img
                    src="./assets/images/ftr-logo.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </Link>
                <p>
                  With Shipdirect, get your <br /> packages delivered superfast.
                </p>
                <h6>OUR OFFICE</h6>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/ftr-icon-01.svg"
                        alt="Logo"
                        className="img-fluid"
                      />{" "}
                      Rua irua, 318 - Vila Barros Guarulhos São Paulo -
                      07193130, BR
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/ftr-icon-02.svg"
                        alt="Logo"
                        className="img-fluid"
                      />{" "}
                      +55 (33) 3577-7029
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/ftr-icon-03.svg"
                        alt="Logo"
                        className="img-fluid"
                      />
                      support@shipdirect.io
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-3 col-6">
              <div className="ftr-links">
                <h6>ACCOUNT</h6>
                <ul>
                  <li>
                    <Link to="/register">Get Started</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-3 col-6">
              <div className="ftr-links">
                <h6>PRICING</h6>
                <ul>
                  <li>
                    <a href="#">USPS</a>
                  </li>
                  <li>
                    <a href="#">UPS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-3 col-6">
              <div className="ftr-links">
                <h6>LEGAL</h6>
                <ul>
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/terms">Privacy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-3 col-6">
              <div className="ftr-links">
                <h6>MORE</h6>
                <ul>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="join-bttn mt-4">
                <div className="media">
                  <img
                    src="./assets/images/discord-icon.svg"
                    alt="Discord"
                    className="img-fluid"
                  />
                  <div className="media-body">
                    <h6>Join Our Discord Channel</h6>
                    <p>Click here to join our discord community</p>
                  </div>
                </div>
              </div>
              <div className="join-bttn">
                <div className="media" style={{ backgroundColor: "#0393FB" }}>
                  <img
                    src="./assets/images/chat-icon.svg"
                    alt="Discord"
                    className="img-fluid"
                  />
                  <div className="media-body">
                    <h6>Live Support</h6>
                    <p>Get instant answers to all your queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="brdr-top" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="ftr-copy">
                <p>
                  Copyright © 2023 <a href="#">ShipDirect</a>. All rights
                  reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ftr-social">
                <ul>
                  <li>
                    <span>Connect with us</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-paper-plane" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/discord-icon.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/tiktok.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section end */}
    </div>
  )
}

export default Terms
