import { Navigate, useRoutes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import ForgotPass from "../pages/auth/ForgotPass"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ResetPass from "../pages/auth/ResetPass"
import Faqs from "../pages/Faqs"
import Pricing from "../pages/Pricing"
import AddressBook from "../pages/AddressBook"
import CsvOrders from "../pages/CsvOrders"
import Deposit from "../pages/Deposit"
import Transactions from "../pages/Transactions"
import Support from "../pages/Support"
import Referrals from "../pages/Referrals"
import AddLabel from "../pages/AddLabel"
import Labels from "../pages/Labels"
import Landing from "../pages/landing/Landing"
import LandingFaqs from "../pages/landing/LandingFaqs"
import Terms from "../pages/landing/Terms"
import NotFound from "../pages/landing/NotFound"
import Verify from "../pages/auth/Verify"
import ViewLabel from "../pages/ViewLabel"
import ChangePass from "../pages/ChangePass"

const routes = {
  LANDING: "/",
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASS: "/forgot-password",
  RESET_PASS: "/reset-password",
  FAQS: "/faqs",
  PRICING: "/pricing",
  ADDRESSES: "/address-book",
  CSV: "/csv-orders",
  DEPOSIT: "/deposit",
  TRANSACTIONS: "/transactions",
  SUPPORT: "/support",
  REFERRALS: "/referrals",
  ADD_LABEL: "/create-label",
  LABELS: "/labels",
}

const AppRoutes = () =>
  useRoutes([
    {
      path: routes.HOME,
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <Navigate to={routes.HOME} />,
    },
    {
      path: routes.FAQS,
      element: <Faqs />,
    },
    {
      path: routes.PRICING,
      element: <Pricing />,
    },
    {
      path: routes.ADDRESSES,
      element: <AddressBook />,
    },
    {
      path: routes.CSV,
      element: <CsvOrders />,
    },
    {
      path: routes.DEPOSIT,
      element: <Deposit />,
    },
    {
      path: routes.TRANSACTIONS,
      element: <Transactions />,
    },
    {
      path: routes.SUPPORT,
      element: <Support />,
    },
    {
      path: routes.REFERRALS,
      element: <Referrals />,
    },
    {
      path: routes.ADD_LABEL,
      element: <AddLabel />,
    },
    {
      path: routes.LABELS,
      element: <Labels />,
    },
    {
      path: "/labels/:id",
      element: <ViewLabel />,
    },
    {
      path: "/change-password",
      element: <ChangePass />,
    },
  ])

const AuthRoutes = () =>
  useRoutes([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/faqs",
      element: <LandingFaqs />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/verify",
      element: <Verify />,
    },
    {
      path: routes.REGISTER,
      element: <Register />,
    },
    {
      path: routes.FORGOT_PASS,
      element: <ForgotPass />,
    },
    {
      path: routes.RESET_PASS,
      element: <ResetPass />,
    },
  ])

export { AuthRoutes, AppRoutes }

export default routes
