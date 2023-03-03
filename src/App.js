import { createContext, useContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AppLayout from "./components/containers/AppLayout"
import LoadingContainer from "./components/containers/LoadingContainer"
import ThemeWrapper from "./components/containers/ThemeWrapper"
import api from "./config/axios"
import { AppRoutes, AuthRoutes } from "./config/routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ScrollToTop from "./utilities/ScrollToTop"

const UserContext = createContext({ user: null, setUser: () => {} })

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const refresh = () =>
    api.get("/auth/access").then((res) => {
      setUser(res.data)
      localStorage.setItem("ref-token", res.data.referralToken)
      localStorage.setItem("api-key", res.data.api_key)
    })

  const verifyUser = () => {
    setLoading(true)
    refresh().finally(() => setLoading(false))
  }

  useEffect(() => {
    verifyUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeWrapper>
      <LoadingContainer loading={loading} full>
        <UserContext.Provider value={{ user, setUser, refresh }}>
          <Router>
            <ScrollToTop />
            {user ? (
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="*" element={<AppRoutes />} />
                </Route>
              </Routes>
            ) : (
              <Routes>
                <Route path="*" element={<AuthRoutes />} />
              </Routes>
            )}
          </Router>
        </UserContext.Provider>
      </LoadingContainer>
      <ToastContainer
        position="top-center"
        hideProgressBar
        draggable={false}
        theme="colored"
      />
    </ThemeWrapper>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}

export { useUserContext }

export default App
