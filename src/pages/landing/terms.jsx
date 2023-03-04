import dayjs from "dayjs"
import React, { useEffect, useState } from "react"

import Footer from "../../components/landing/Footer"
import Header from "../../components/landing/Header"
import api from "../../config/axios"

const Terms = () => {
  const [terms, setTerms] = useState({})
  const [loading, setLoading] = useState(true)

  const readFaq = async () => {
    setLoading(true)
    await api
      .get("/admin-settings/tos")
      .then((res) => setTerms(res.data.termsOfService))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readFaq()
  }, [])
  return (
    <div>
      {/* header section @S */}
      <Header />
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
                <p>
                  Last Updated :{" "}
                  {dayjs(terms?.updatedAt).format("MMM DD, YYYY")}
                </p>
              </div>
            </div>
          </div>
          {/* common heading end */}
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-10">
              <div className="tos-main-box">
                {terms?.tos}
                {/* <p>
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
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tos section end */}
      <Footer />
      {/* footer section end */}
    </div>
  )
}

export default Terms
