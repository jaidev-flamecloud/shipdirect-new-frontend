import { IconButton } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Link as Link2 } from "react-scroll"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <header class="header-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-4 col-12">
            <div class="header-menu-wrap">
              <ul className="d-none d-lg-flex">
                <li>
                  <Link2
                    to="pricing-sec"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    Pricing
                  </Link2>
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
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setMenu(true)}
          size="small"
          sx={{
            mr: 1,
            display: { xs: "flex", sm: "none" },
            bgcolor: "#fff",
            border: "1px solid #e0e0e0",
          }}
        >
          <ChevronRightRoundedIcon />
        </IconButton>
      </div>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMenu(false)
          }
        }}
        style={{
          height: "100vh",
          overflow: "auto",
          position: "fixed",
          width: "100vw",
          top: 0,
          left: menu ? 0 : "-100vw",
          transitionDuration: "0.6s",
          zIndex: 9999,
        }}
        className="d-flex d-lg-none"
      >
        <div
          style={{
            height: "100vh",
            overflow: "auto",
            width: "17rem",
          }}
          className="shadow-lg bg-white d-flex d-lg-none p-4 fs-5 fw-semibold"
        >
          <ul className="d-flex flex-column gap-3">
            <li>
              <Link2
                onClick={() => setMenu(false)}
                to="pricing-sec"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Pricing
              </Link2>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/faq">FAQs</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/terms">Terms</Link>
            </li>
            <li onClick={() => setMenu(false)}>
              <Link to="/terms">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
