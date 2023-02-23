import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ColorModeToggle from "../../components/common/ColorModeToggle"
import { Link } from "react-router-dom"
import routes from "../../config/routes"
import { testimonials } from "../../pages/landing/Landing"

const AuthSidePic = ({ loginBtn }) => {
  return (
    <Grid
      item
      xs={7}
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
        height: "100vh",
        p: "2vh",
      }}
    >
      <Box
        sx={{
          background: `url('/assets/images/${
            loginBtn ? "register" : "login"
          }_img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box sx={{ background: "rgba(0,0,0,0.3)" }}>
          <Container maxWidth="sm">
            <Stack
              direction={"column-reverse"}
              justifyContent="space-between"
              alignItems="center"
              pt={3}
              pb={6}
              sx={{ minHeight: "96vh" }}
            >
              <div>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems="center"
                >
                  <div>
                    <Typography variant="h6" color="white">
                      {testimonials[0].name}
                    </Typography>
                  </div>
                  <Rating value={5} />
                </Stack>
                <Typography variant="body1" color="white" mb={1}>
                  {testimonials[0].msg}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar>S</Avatar>
                  <div>
                    <Typography variant="h6" color="white">
                      {testimonials[0].name}
                    </Typography>
                  </div>
                </Stack>
              </div>
              {loginBtn && (
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography color="white">
                    Already Have an account?
                  </Typography>
                  <Link to={routes.LOGIN}>
                    <Button variant="contained">
                      Log In <ArrowForwardRoundedIcon fontSize="small" />
                    </Button>
                  </Link>

                  <ColorModeToggle />
                </Stack>
              )}
            </Stack>
          </Container>
        </Box>
      </Box>
    </Grid>
  )
}

export default AuthSidePic
