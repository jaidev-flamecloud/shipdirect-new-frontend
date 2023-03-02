import React from "react"
import { Link } from "react-router-dom"

const Faq = () => {
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
      {/* faq section start */}
      <section className="faq-section pa-y4">
        <div className="container">
          {/* common heading @S */}
          <div className="row">
            <div className="col-md-12">
              <div className="common-heading">
                <h6>FAQs</h6>
                <h2>
                  We've got <span>answers</span> to all your questions
                </h2>
                <p>
                  Vivamus fringilla sapien dolor, quis fringilla lectus semper
                  vel. In ut arcu <br /> facilisis, pharetra urna sit amet,
                  luctus dolor.
                </p>
              </div>
            </div>
          </div>
          {/* common heading @E */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12">
              <div className="faq-search-box">
                <img
                  src="./assets/images/search-icon.svg"
                  alt="Search Icon"
                  className="img-fluid"
                />
                <input
                  type="text"
                  placeholder="Search for your questions using a keyword or a phrase"
                  className="form-control"
                />
              </div>
              <div className="faq-ask-wrap">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In scelerisque ?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Ut at efficitur dui. Proin sollicitudin dictum dui in
                        ultrices?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Ut tempor urna non risus lacinia malesuada?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Suspendisse at imperdiet eros. In sed sagittis leo?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Praesent in molestie nibh, sed accumsan lorem?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Donec interdum ex tristique justo lacinia condimentum id
                        eu leo?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Mauris ullamcorper metus sit amet cursus sagittis. Ut
                          egestas aliquet est nec rutrum. Nullam quis porta ex.
                          Fusce tristique nisl efficitur augue pellentesque
                          tincidunt. Nam at interdum nunc, nec dictum enim.
                          Aliquam non odio faucibus, volutpat erat a, finibus
                          urna. Fusce fringilla leo eget risus ullamcorper
                          suscipit at et libero.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="faq-more">
                <p>
                  Didn’t find an answer? <a href="#">Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq section end */}
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
                    <Link to="/faq">FAQs</Link>
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

export default Faq
