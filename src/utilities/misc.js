import { toast } from "react-toastify"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import WarningRoundedIcon from "@mui/icons-material/WarningRounded"
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded"
import dayjs from "dayjs"

export const states = [
  {
    ID: "AK",
    Name: "Alaska",
    Country: "US",
  },
  {
    ID: "AL",
    Country: "US",
    Name: "Alabama",
  },
  {
    ID: "AR",
    Country: "US",
    Name: "Arkansas",
  },
  {
    ID: "AZ",
    Country: "US",
    Name: "Arizona",
  },
  {
    ID: "CA",
    Country: "US",
    Name: "California",
  },
  {
    ID: "CO",
    Country: "US",
    Name: "Colorado",
  },
  {
    ID: "CT",
    Country: "US",
    Name: "Connecticut",
  },
  {
    ID: "DC",
    Country: "US",
    Name: "District Of Columbia",
  },
  {
    ID: "DE",
    Country: "US",
    Name: "Delaware",
  },
  {
    ID: "FL",
    Country: "US",
    Name: "Florida",
  },
  {
    ID: "GA",
    Country: "US",
    Name: "Georgia",
  },
  {
    ID: "HI",
    Country: "US",
    Name: "Hawaii",
  },
  {
    ID: "IA",
    Country: "US",
    Name: "Iowa",
  },
  {
    ID: "ID",
    Country: "US",
    Name: "Idaho",
  },
  {
    ID: "IL",
    Country: "US",
    Name: "Illinois",
  },
  {
    ID: "IN",
    Country: "US",
    Name: "Indiana",
  },
  {
    ID: "KS",
    Country: "US",
    Name: "Kansas",
  },
  {
    ID: "KY",
    Country: "US",
    Name: "Kentucky",
  },
  {
    ID: "LA",
    Country: "US",
    Name: "Louisiana",
  },
  {
    ID: "MA",
    Country: "US",
    Name: "Massachusetts",
  },
  {
    ID: "MD",
    Country: "US",
    Name: "Maryland",
  },
  {
    ID: "ME",
    Country: "US",
    Name: "Maine",
  },
  {
    ID: "MI",
    Name: "Michigan",
    Country: "US",
  },
  {
    ID: "MN",
    Country: "US",
    Name: "Minnesota",
  },
  {
    ID: "MO",
    Country: "US",
    Name: "Missouri",
  },
  {
    ID: "MS",
    Country: "US",
    Name: "Mississippi",
  },
  {
    ID: "MT",
    Country: "US",
    Name: "Montana",
  },
  {
    ID: "NC",
    Country: "US",
    Name: "North Carolina",
  },
  {
    ID: "ND",
    Country: "US",
    Name: "North Dakota",
  },
  {
    ID: "NE",
    Country: "US",
    Name: "Nebraska",
  },
  {
    ID: "NH",
    Country: "US",
    Name: "New Hampshire",
  },
  {
    ID: "NJ",
    Country: "US",
    Name: "New Jersey",
  },
  {
    ID: "NM",
    Country: "US",
    Name: "New Mexico",
  },
  {
    ID: "NV",
    Country: "US",
    Name: "Nevada",
  },
  {
    ID: "NY",
    Country: "US",
    Name: "New York",
  },
  {
    ID: "OH",
    Name: "Ohio",
    Country: "US",
  },
  {
    ID: "OK",
    Name: "Oklahoma",
    Country: "US",
  },
  {
    ID: "OR",
    Name: "Oregon",
    Country: "US",
  },
  {
    ID: "PA",
    Name: "Pennsylvania",
    Country: "US",
  },
  {
    ID: "PR",
    Country: "US",
    Name: "Puerto Rico",
  },
  {
    ID: "RI",
    Country: "US",
    Name: "Rhode Island",
  },
  {
    ID: "SC",
    Country: "US",
    Name: "South Carolina",
  },
  {
    ID: "SD",
    Country: "US",
    Name: "South Dakota",
  },
  {
    ID: "TN",
    Country: "US",
    Name: "Tennessee",
  },
  {
    ID: "TX",
    Country: "US",
    Name: "Texas",
  },
  {
    ID: "UT",
    Country: "US",
    Name: "Utah",
  },
  {
    ID: "VA",
    Country: "US",
    Name: "Virginia",
  },
  {
    ID: "VT",
    Country: "US",
    Name: "Vermont",
  },
  {
    ID: "WA",
    Country: "US",
    Name: "Washington",
  },
  {
    ID: "WI",
    Country: "US",
    Name: "Wisconsin",
  },
  {
    ID: "WV",
    Country: "US",
    Name: "West Virginia",
  },
  {
    ID: "WY",
    Country: "US",
    Name: "Wyoming",
  },

  // write canada provinces here
  {
    ID: "AB",
    Country: "CA",
    Name: "Alberta",
  },
  {
    ID: "BC",
    Country: "CA",
    Name: "British Columbia",
  },
  {
    ID: "MB",
    Country: "CA",
    Name: "Manitoba",
  },
  {
    ID: "NB",
    Country: "CA",
    Name: "New Brunswick",
  },
  {
    ID: "NL",
    Country: "CA",
    Name: "Newfoundland and Labrador",
  },
  {
    ID: "NS",
    Country: "CA",
    Name: "Nova Scotia",
  },
  {
    ID: "NT",
    Country: "CA",
    Name: "Northwest Territories",
  },
  {
    ID: "NU",
    Country: "CA",
    Name: "Nunavut",
  },
  {
    ID: "ON",
    Country: "CA",
    Name: "Ontario",
  },
  {
    ID: "PE",
    Country: "CA",
    Name: "Prince Edward Island",
  },
  {
    ID: "QC",
    Country: "CA",
    Name: "Quebec",
  },
  {
    ID: "SK",
    Country: "CA",
    Name: "Saskatchewan",
  },
  {
    ID: "YT",
    Country: "CA",
    Name: "Yukon",
  },
]

export const copyToClipboard = (content) => {
  navigator.clipboard.writeText(content)
  toast.success("Copied to clipboard!")
}

export const statusMap = {
  cancelled: {
    text: "Cancelled",
    color: "error.main",
    icon: <CloseRoundedIcon fontSize="small" />,
  },
  close: {
    text: "Closed",
    color: "success.main",
    icon: <DoneRoundedIcon fontSize="small" />,
  },
  completed: {
    text: "Fulfilled",
    color: "success.main",
    icon: <DoneRoundedIcon fontSize="small" />,
  },
  open: {
    text: "Open",
    color: "warning.main",
    icon: <UpdateRoundedIcon fontSize="small" />,
  },
  paid: {
    text: "Fulfilled",
    color: "success.main",
    icon: <DoneRoundedIcon fontSize="small" />,
  },
  refundRequested: {
    text: <>Refund Requested</>,
    color: "warning.main",
    icon: <WarningRoundedIcon fontSize="small" />,
  },
  refundAccepted: {
    text: <>Refund Accepted</>,

    color: "success.main",
    icon: <DoneRoundedIcon fontSize="small" />,
  },
  refundRejected: {
    text: <>Refund Rejected</>,

    color: "error.main",
    icon: <CloseRoundedIcon fontSize="small" />,
  },
  pending: {
    text: "Pending",
    color: "warning.main",
    icon: <UpdateRoundedIcon fontSize="small" />,
  },
  "waiting for customer response": {
    color: "warning",
    text: "Waiting",
    icon: <WarningRoundedIcon fontSize="small" />,
  },
}

export const formatDate = (date, hideTime = false) =>
  dayjs(date).format("MMM D, YYYY" + (hideTime ? "" : " | h:mm A"))
