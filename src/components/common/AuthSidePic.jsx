import {
  Avatar,
  Box,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material"

const AuthSidePic = ({ isLogin }) => {
  return (
    <Grid
      item
      xs={7.5}
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
            isLogin ? "login" : "register"
          }_image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <Box sx={{ background: "rgba(0,0,0,0.3)" }}>
          <Container sx={{ position: "relative" }}>
            <img
              src={`/assets/images/logo-faded.svg`}
              alt="logo"
              style={{
                width: "8rem",
                position: "absolute",
                top: "1rem",
                left: "1rem",
              }}
            />
            <Stack
              direction={"column-reverse"}
              justifyContent="space-between"
              alignItems="center"
              p={3}
              sx={{ minHeight: "96vh" }}
            >
              <div>
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  spacing={2}
                  alignItems="center"
                  mb={1}
                >
                  <div>
                    <Typography variant="h6" color="white">
                      I can say hands down The BEST Label Providers
                    </Typography>
                  </div>
                  <Rating value={5} sx={{ color: "primary.main" }} />
                </Stack>
                <Typography variant="body1" color="white" mb={1}>
                  Labels were instant and support were attentive to any of my
                  questions or concerns. Morbi in nisl rutrum nun fermentum vene
                  eu in purus. Pellentesque dapibus ut lacus vitae finibus. Duis
                  mattis lacus at consequat volutpat. Curabitur finibus ipsum id
                  feugiat porta.
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Avatar
                    src="./assets/images/avatar-01.png"
                    sx={{ width: "2rem", height: "2rem" }}
                  />
                  <div>
                    <Typography variant="h6" color="white">
                      Maduro#5604
                    </Typography>
                  </div>
                </Stack>
              </div>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Grid>
  )
}

export default AuthSidePic
