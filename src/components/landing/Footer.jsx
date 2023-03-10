import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../../config/axios"

const Footer = () => {
  const [contact, setContact] = useState({})

  const getContact = () => {
    api.get("/admin-settings/contact").then((res) => {
      setContact(res.data.contact)
    })
  }

  useEffect(() => {
    getContact()
  }, [])
  return (
    <>
      <section class="get-start-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="get-start-txt">
                <h2>
                  #1 Choice for the Best Label Service on <br /> the Internet
                </h2>
                <p>
                  Effortlessly create and print shipping labels from the <br />{" "}
                  comfort of your own home or office.
                </p>
                <Link to="/login">
                  Create Label <i class="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*get start section end */}

      {/*footer section start */}
      <footer class="footer_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-8 col-12">
              <div class="ftr-logo">
                <Link to="/">
                  <img
                    src="./assets/images/ftr-logo.svg"
                    alt="Logo"
                    class="img-fluid"
                  />
                </Link>
                <p>
                  With Shipdirect, get your <br /> packages delivered superfast.
                </p>

                <h6>OUR OFFICE</h6>

                <ul>
                  <li>
                    <a href="/">
                      <img
                        src="./assets/images/ftr-icon-01.svg"
                        alt="Logo"
                        class="img-fluid"
                      />{" "}
                      Rua irua, 318 - Vila Barros Guarulhos S??o Paulo -
                      07193130, BR
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="./assets/images/ftr-icon-02.svg"
                        alt="Logo"
                        class="img-fluid"
                      />{" "}
                      +55 (33) 3577-7029
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        src="./assets/images/ftr-icon-03.svg"
                        alt="Logo"
                        class="img-fluid"
                      />
                      {contact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-1 col-md-2 col-sm-3 col-6">
              <div class="ftr-links">
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
            <div class="col-lg-1 col-md-2 col-sm-3 col-6">
              <div class="ftr-links">
                <h6>PRICING</h6>
                <ul>
                  <li>
                    <a href="/#pricing-sec">USPS</a>
                  </li>
                  <li>
                    <a href="/#pricing-sec">UPS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-1 col-md-2 col-sm-3 col-6">
              <div class="ftr-links">
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
            <div class="col-lg-1 col-md-2 col-sm-3 col-6">
              <div class="ftr-links">
                <h6>MORE</h6>
                <ul>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li>
                    <a href="/#reviews-sec">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <a href={contact.discord} class="join-bttn mt-4">
                <div class="media">
                  <img
                    src="./assets/images/discord-icon.svg"
                    alt="Discord"
                    class="img-fluid"
                  />
                  <div class="media-body">
                    <h6>Join Our Discord Channel</h6>
                    <p>Click here to join our discord community</p>
                  </div>
                </div>
              </a>
              <div class="join-bttn">
                <div class="media" style={{ backgroundColor: "#0393FB" }}>
                  <img
                    src="./assets/images/chat-icon.svg"
                    alt="Discord"
                    class="img-fluid"
                  />
                  <div class="media-body">
                    <h6>Live Support</h6>
                    <p>Get instant answers to all your queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="brdr-top"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="ftr-copy">
                <p>
                  Copyright &copy; 2023 <a href="/">ShipDirect</a>. All rights
                  reserved
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="ftr-social">
                <ul>
                  <li>
                    <span>Connect with us</span>
                  </li>
                  <li>
                    <a href={contact.telegram}>
                      <i class="fa fa-paper-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a href={contact.instagram}>
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={contact.discord}>
                      <img
                        src="./assets/images/discord-icon.svg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href={contact.twitter}>
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={contact.tiktok}>
                      <img
                        src="./assets/images/tiktok.svg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
