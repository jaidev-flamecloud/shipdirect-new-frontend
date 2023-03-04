import React from "react"
import { Link } from "react-router-dom"
import Footer from "../../components/landing/Footer"
import Header from "../../components/landing/Header"
import { FaqContent } from "../Faqs"

const Faq = () => {
  return (
    <div>
      {/* header section @S */}
      <Header />
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
              <FaqContent />
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
      <Footer />
      {/* footer section end */}
    </div>
  )
}

export default Faq
