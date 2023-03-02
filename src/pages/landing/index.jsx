import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div>
      {/* header section @S  */}
      <header class="header-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-4 col-12">
              <div class="header-menu-wrap">
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
            <div class="col-lg-4 col-md-4 col-5">
              <div class="header-logo">
                <Link to="/">
                  <img
                    src="./assets/images/logo.svg"
                    alt="Logo"
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-7">
              <div class="header-bttn">
                <form class="d-flex">
                  <Link to="/login">Log In</Link>
                  <Link to="/register">
                    Get Started <i class="fa fa-angle-right"></i>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*header section @E */}

      {/*notify section @S */}
      <div class="notify-section">
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
      </div>
      {/*notify section @E */}

      {/*hero section @S */}
      <section class="hero-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-10 col-12">
              <div class="hero-txt-wrap">
                <h6>
                  <i class="fa fa-star"></i> Welcome to CheapLabels
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
                  src="./assets/images/step-img.png"
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

                <div class="media active">
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
                <div class="media">
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
                <div class="media">
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
                          src="./assets/images/dashb-g.svg"
                          alt="Dashboard"
                          class="img-fluid"
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
                  <h3 class="mt-4">Quick Deposits will go here....</h3>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabindex="0"
                >
                  <h3 class="mt-4">View Billing History will go here....</h3>
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

                <h5>Vestibulum ante ipsum primis in faucibus</h5>
                <p>
                  Curabitur tincidunt posuere nisl. Vestibulum quis tortor vitae
                  nibh aliquet aliquet. Morbi sodales ante vitae augue blandit
                  viverra. Quisque laoreet feugiat commodo.
                </p>

                <ul>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Get Priority &amp; Express Shipping
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Sed lacinia dictum tortor eu mattis
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Etiam vulputate neque sit amet tincidunt condimentum
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Fusce hendrerit dictum velit at lacinia{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Duis finibus massa vel tristique euismod{" "}
                  </li>
                  <li>
                    <img
                      src="./assets/images/check-icon.svg"
                      alt="Logo"
                      class="img-fluid"
                    />{" "}
                    Maecenas sed purus ultrices metus vestibulum tempus.{" "}
                  </li>
                </ul>

                <button type="button" class="btn btn-get-start">
                  Get Started Today <i class="fa fa-angle-right"></i>
                </button>
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
                    src="./assets/images/courier-icon-02.svg"
                    alt="a"
                    class="img-fluid"
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
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10 col-12">
              <div class="faq-ask-wrap">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSix">
                      <button
                        class="accordion-button collapsed"
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
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
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
                  <h5>Aliquam maximus turpis</h5>
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
                  <h5>Aliquam maximus turpis</h5>
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
          </div>
        </div>
      </section>
      {/*customer feedback start */}

      {/*get start section start */}
      <section class="get-start-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="get-start-txt">
                <h2>
                  #1 Choice for the Best Label Service on <br /> the Internet
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eu <br /> imperdiet augue. Nullam ultrices, metus in euismod
                  facilisis,
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
                    <a href="#">
                      <img
                        src="./assets/images/ftr-icon-01.svg"
                        alt="Logo"
                        class="img-fluid"
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
                        class="img-fluid"
                      />{" "}
                      +55 (33) 3577-7029
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/ftr-icon-03.svg"
                        alt="Logo"
                        class="img-fluid"
                      />
                      support@shipdirect.io
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
                    <a href="#">USPS</a>
                  </li>
                  <li>
                    <a href="#">UPS</a>
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
                    <Link to="/">Reviews</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="join-bttn mt-4">
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
              </div>
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
                  Copyright &copy; 2023 <a href="#">ShipDirect</a>. All rights
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
                    <a href="#">
                      <i class="fa fa-paper-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="./assets/images/discord-icon.svg"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
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
      {/*footer section end */}
    </div>
  )
}

export default Landing
