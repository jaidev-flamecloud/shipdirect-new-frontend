import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaqContent } from "../Faqs"
import Header from "../../components/landing/Header"
import Footer from "../../components/landing/Footer"

const Landing = () => {
  const [step, setStep] = useState(1)
  return (
    <div>
      {/* header section @S  */}
      <Header />
      {/*header section @E */}

      {/*notify section @S */}
      {/* <div class="notify-section">
        <p>
          <img
            src="./assets/images/notify-icon.svg"
            alt="Notify_icon"
            class="img-fluid"
          />{" "}
          Announcement : Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. In scelerisque, diam id placerat condimentum, lorem sapien
          finibus est, non fringilla ante ex sed enim.{" "}
          <a
            href="#"
            onclick="this.parentElement.parentElement.style.display = 'none';"
          >
            <img
              src="./assets/images/close-icon.svg"
              alt="close_icon"
              class="img-fluid"
            />
          </a>
        </p>
      </div> */}
      {/*notify section @E */}

      {/*hero section @S */}
      <section class="hero-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-10 col-12">
              <div class="hero-txt-wrap">
                <h6>
                  <i class="fa fa-star"></i> Welcome to ShipDirect
                </h6>
                <h1>
                  Get the Best Shipping Labels at a{" "}
                  <img
                    src="./assets/images/hafl.svg"
                    alt="Half"
                    class="img-fluid"
                  />{" "}
                  <span>Fraction</span> of the Cost
                </h1>
                <p>
                  It’s about time you stop paying for overpriced shipping. We{" "}
                  <br /> have the best and most affordable prepaid shipping
                  labels.
                </p>
                <div class="hero_btn">
                  <button type="button" class="btn btn-label">
                    Create Label <i class="fa fa-angle-right"></i>
                  </button>
                  <button type="button" class="btn btn-learn">
                    Learn More <i class="fa fa-angle-down"></i>
                  </button>
                </div>
              </div>
              <div class="hero-bottom">
                <h6>WE WORK ALONGSIDE</h6>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/courier-icon-01.svg"
                        alt="a"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/courier-icon-02.svg"
                        alt="a"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/courier-icon-03.svg"
                        alt="a"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*hero section @E */}

      {/*banner section @S */}
      <section class="banner-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-head">
                <h6>THE NUMBERS SAY IT ALL</h6>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="row ">
                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                  <div class="banner-box">
                    <h6>
                      <img
                        src="./assets/images/banner-icon-01.svg"
                        alt="Banner"
                        class="img-fluid"
                      />{" "}
                      LABELS CREATED
                    </h6>
                    <h4>130,000+</h4>
                  </div>
                </div>
                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                  <div class="banner-box">
                    <h6>
                      <img
                        src="./assets/images/banner-icon-02.svg"
                        alt="Banner"
                        class="img-fluid"
                      />{" "}
                      POSITIVE REVIEWS
                    </h6>
                    <h4>1000+</h4>
                  </div>
                </div>
                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                  <div class="banner-box">
                    <h6>
                      <img
                        src="./assets/images/banner-icon-03.svg"
                        alt="Banner"
                        class="img-fluid"
                      />{" "}
                      HAPPY CUSTOMERS
                    </h6>
                    <h4>20,000+</h4>
                  </div>
                </div>
                <div class="col-6 col-sm-4 col-md-3 col-lg-3">
                  <div class="banner-box">
                    <h6>
                      <img
                        src="./assets/images/banner-icon-04.svg"
                        alt="Banner"
                        class="img-fluid"
                      />{" "}
                      SUCCESSFUL ORDERS
                    </h6>
                    <h4>100,000+</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*banner section @E */}

      {/*step section @S */}
      <section class="step-section pa-y4">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-5">
              <div class="step-img">
                <img
                  src={`./assets/images/steps/${step}.png`}
                  alt="Step Images"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="step-txt-box">
                <h6>JUST 3 EASY STEPS</h6>
                <h2>
                  Get your Label in <span>1-2-3</span>{" "}
                </h2>

                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setStep(1)}
                  class={`media ${step === 1 ? "active" : ""}`}
                >
                  <img
                    src="./assets/images/label-icon-01.svg"
                    alt="Step Images"
                    class="img-fluid"
                  />
                  <div class="media-body">
                    <h5>Select a Label</h5>
                    <p>Select the labels of your choice from our shop.</p>
                  </div>
                  <img
                    src="./assets/images/01.svg"
                    alt="Step Images"
                    class="img-fluid me-0"
                  />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setStep(2)}
                  class={`media ${step === 2 ? "active" : ""}`}
                >
                  <img
                    src="./assets/images/label-icon-02.svg"
                    alt="Step Images"
                    class="img-fluid"
                  />
                  <div class="media-body">
                    <h5>Get Access</h5>
                    <p>Get an instant access to your labels.</p>
                  </div>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setStep(3)}
                  class={`media ${step === 3 ? "active" : ""}`}
                >
                  <img
                    src="./assets/images/label-icon-03.svg"
                    alt="Step Images"
                    class="img-fluid"
                  />
                  <div class="media-body">
                    <h5>Ship your Order</h5>
                    <p>Ship the order with your preffered service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*step section @E */}

      {/*all tools section @S */}
      <section class="alltools-section pa-y4">
        <div class="container">
          {/*common heading @S */}
          <div class="row">
            <div class="col-12">
              <div class="common-heading">
                <h6>POWERPACKED WITH FEATURES</h6>
                <h2>
                  All the Tools you need, in <span>One Place</span>
                </h2>
              </div>
            </div>
          </div>
          {/*common heading @E */}
          <div class="row">
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-01.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Blazing Fast</h4>
                <p>
                  We offer the best range of labels which are delivered very
                  fast, without any hassles.
                </p>
              </div>
            </div>
            {/*item @E */}
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-02.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Order In Bulk</h4>
                <p>
                  with Shipdirect you can order labels in bulk without any
                  problems or cooldowns.
                </p>
              </div>
            </div>
            {/*item @E */}
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-01.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Get Flat Discounts</h4>
                <p>
                  Become a member of Shipdirect and get exclusive site-only
                  discounts on labels
                </p>
              </div>
            </div>
            {/*item @E */}
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-04.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Easy Payments</h4>
                <p>
                  We have the most convenient and easy to use payment methods.
                </p>
              </div>
            </div>
            {/*item @E */}
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-05.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Affordable Pricing</h4>
                <p>
                  One of the best pricing for labels, starting from as low as
                  $4.00.
                </p>
              </div>
            </div>
            {/*item @E */}
            {/*item @S */}
            <div class="col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="all-tools-box">
                <div class="tools-icon">
                  <img
                    src="./assets/images/tools-icon-06.svg"
                    alt="tools-icon-01"
                    class="img-fluid"
                  />
                </div>
                <h4>Premium Labels</h4>
                <p>
                  We offer premium labels for the elite customers, who just want
                  the best.
                </p>
              </div>
            </div>
            {/*item @E */}
          </div>
        </div>
      </section>
      {/*all tools section @E */}

      {/*dashboard section @S */}
      <section class="dashboard-section pa-y4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="common-heading">
                <h6>OUR DASHBOARD</h6>
                <h2>
                  A <span>Dashboard</span> with everything you’ll ever need
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="dahboard-tab-head">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <img
                        src="./assets/images/dash-icon-01.svg"
                        alt="Dashboard icon"
                        class="img-fluid"
                      />{" "}
                      Place Bulk Orders
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <img
                        src="./assets/images/dash-icon-02.svg"
                        alt="Dashboard icon"
                        class="img-fluid"
                      />
                      Quick Deposits
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <img
                        src="./assets/images/dash-icon-03.svg"
                        alt="Dashboard icon"
                        class="img-fluid"
                      />
                      View Billing History
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="dashboard-preview">
                        <h5>Place Bulk Orders on our Dashboard using CSV</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec in consequat ante. Nulla tellus nisi,
                          eleifend et placerat ac, fermentum ut mi. Nunc et ex
                          vulputate, varius dolor in, molestie ipsum. Nam porta
                          eget velit at ultricies. Vestibulum rhoncus massa sit
                          amet libero ultrices, id pharetra odio mattis.
                        </p>
                        <img
                          src="./assets/images/dashboard/1.png"
                          alt="Dashboard"
                          class="img-fluid"
                          style={{
                            borderRadius: "10px",
                            border: "1px solid #e0e0e0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="dashboard-preview">
                        <img
                          src="./assets/images/dashboard/2.png"
                          alt="Dashboard"
                          class="img-fluid"
                          style={{
                            borderRadius: "10px",
                            border: "1px solid #e0e0e0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabindex="0"
                >
                  <div class="row">
                    <div class="col-12">
                      <div class="dashboard-preview">
                        <img
                          src="./assets/images/dashboard/3.png"
                          alt="Dashboard"
                          class="img-fluid"
                          style={{
                            borderRadius: "10px",
                            border: "1px solid #e0e0e0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*dashboard section @E */}

      {/*artical section @S */}
      <section class="artical-section pa-y4">
        <div class="container">
          <div class="row justify-content-end">
            <div class="col-lg-5 col-md-6 col-sm-10 col-12">
              <div class="artical-box-wrap">
                <img
                  src="./assets/images/logo.svg"
                  alt="Logo"
                  class="img-fluid"
                />

                <h5>Simplify Your Shipping Process Today</h5>
                <p>
                  Shipping made easy! Our shipping label website provides a
                  simple solution to your shipping needs. Say goodbye to long
                  lines and complicated forms, hello to hassle-free shipping.
                </p>

                <ul>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Get Priority and Express Shipping
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Streamline your shipping process
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Print Shipping labels from anywhere
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Choose from a variety of Shipping Carrier{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Easily Track your Packages{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Save time with our powerful API integration{" "}
                  </li>
                </ul>
                <Link to="/register">
                  <button type="button" class="btn btn-get-start">
                    Get Started Today <i class="fa fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*artical section @E */}

      {/*pricing section @S */}
      <section class="pricing-section pa-y4" id="pricing-sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="common-heading">
                <h6>PRICING</h6>
                <h2>
                  Affordable Pricing for <span>Everyone</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-5">
              <div class="pricing-box-wrap">
                <a href="#">
                  <img
                    src="./assets/images/courier-icon-01.svg"
                    alt="a"
                    class="img-fluid"
                    style={{ height: "2.5rem" }}
                  />
                </a>
                <div class="row">
                  <div class="col-6">
                    <div class="price-header">
                      <span>FOR REGULARS</span>
                      <p>FROM</p>
                      <h4>
                        <sup>$</sup> 4.99
                      </h4>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="price-header premium">
                      <span>
                        {" "}
                        <img
                          src="./assets/images/premium-icon.svg"
                          alt="a"
                          class="img-fluid"
                        />{" "}
                        FOR PREMIUM
                      </span>
                      <p>FROM</p>
                      <h4>
                        <sup>$</sup> 3.99
                      </h4>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-plan">
                  Choose Plan
                </button>
                <h6>WHAT’S INCLUDED:</h6>

                <ul>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Priority & Express Shipping
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Instant Labels{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    24/7 Customer Support{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Instant Labels{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Priority & Express Shipping{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Instant Labels{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    24/7 Customer Support{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="pricing-box-wrap">
                <a href="#">
                  <img
                    src="./assets/images/courier-icon-03.svg"
                    alt="a"
                    class="img-fluid"
                    style={{ height: "2.5rem" }}
                  />
                </a>
                <div class="row">
                  <div class="col-6">
                    <div class="price-header">
                      <span>FOR REGULARS</span>
                      <p>FROM</p>
                      <h4>
                        <sup>$</sup> 14.99
                      </h4>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="price-header premium">
                      <span>
                        {" "}
                        <img
                          src="./assets/images/premium-icon.svg"
                          alt="a"
                          class="img-fluid"
                        />{" "}
                        FOR PREMIUM
                      </span>
                      <p>FROM</p>
                      <h4>
                        <sup>$</sup> 9.99
                      </h4>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-plan">
                  Choose Plan
                </button>
                <h6>WHAT’S INCLUDED:</h6>

                <ul>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    UPS Ground Labels
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Over 50 US States{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Ranging from 1 to 150 Lbs{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Full Assistance start to finish{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Priority & Express Shipping{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    Get Instant Labels{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="a"
                      class="img-fluid"
                    />{" "}
                    24/7 Customer Support{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="price-more">
                <h5>We Accept</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/option-01.svg"
                        alt="1"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/option-02.svg"
                        alt="1"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/option-03.svg"
                        alt="1"
                        class="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*pricing section @E */}

      {/*faq section start */}
      <section class="faq-section pa-y4">
        <div class="container">
          {/*common heading @S */}
          <div class="row">
            <div class="col-md-12">
              <div class="common-heading">
                <h6>FAQs</h6>
                <h2>
                  We've got <span>answers</span> to all your questions
                </h2>
              </div>
            </div>
          </div>
          {/*common heading @E */}
          <FaqContent />
          <div class="row">
            <div class="col-12">
              <div class="faq-more">
                <Link to="/faq">
                  Read all Answers <i class="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*faq section end */}

      {/*customer feedback start */}
      <section class="customer-feedback pa-y4">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="common-heading">
                <h6>REVIEWS</h6>
                <h2>
                  Label Provider that Everyone <span>Loves</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-8">
              <div class="feedback-wrap">
                <div class="d-flex">
                  <h5>I can say hands down The BEST Label Providers</h5>
                  <ul>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Labels were instant and support were attentive to any of my
                  questions or concerns. Morbi in nisl rutrum nun fermentum vene
                  eu in purus. Pellentesque dapibus ut lacus vitae finibus. Duis
                  mattis lacus at consequat volutpat. Curabitur finibus ipsum id
                  feugiat porta.
                </p>
                <h4>
                  <img
                    src="./assets/images/avatar-01.png"
                    alt="Avatar"
                    class="img-fluid"
                  />{" "}
                  Maduro#5604
                </h4>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-5 col-lg-4">
              <div class="feedback-wrap">
                <div class="d-flex">
                  <h5>Trustworthy</h5>
                  <ul>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Trustworthy, we have dealt with over $80,000 together. Use
                  this service.
                </p>
                <h4>
                  <img
                    src="./assets/images/avatar-02.png"
                    alt="Avatar"
                    class="img-fluid"
                  />{" "}
                  souljah#0475
                </h4>
              </div>
            </div>
            <div class="col-md-5 col-lg-4">
              <div class="feedback-wrap">
                <div class="d-flex">
                  <h5>Easy and Smooth</h5>
                  <ul>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                    <li>
                      <i class="fa fa-star"></i>
                    </li>
                  </ul>
                </div>
                <p>
                  Easy and smooth transactions all around. Getting labels
                  instantly is amazing
                </p>
                <h4>
                  <img
                    src="./assets/images/avatar-02.png"
                    alt="Avatar"
                    class="img-fluid"
                  />{" "}
                  souljah#0475
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*customer feedback start */}

      <Footer />
    </div>
  )
}

export default Landing
