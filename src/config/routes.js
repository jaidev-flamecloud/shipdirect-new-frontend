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
import Verify from "../pages/auth/Verify"
import ViewLabel from "../pages/ViewLabel"
import ChangePass from "../pages/ChangePass"
import API from "../pages/API"

const routes = {
  LANDING: "/",
  HOME: "/",
  LOGIN: "/",
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
      path: "/profile",
      element: <ChangePass />,
    },
    {
      path: "/api",
      element: <API />,
    },
  ])

const AuthRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
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
