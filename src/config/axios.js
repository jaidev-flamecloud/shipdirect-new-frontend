import axios from "axios"
import env from "./env"

const api = axios.create({
  baseURL: env.BASE_API_URL + "/api/v1",
})

api.interceptors.request.use(
  (conf) => {
    const token = localStorage.getItem("token")
    if (token) conf.headers.Authorization = `Bearer ${token}`
    return conf
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // toast.error(error.response.data.message || "Something went wrong")
    return Promise.reject(error)
  }
)

export default api
