import {
  Button,
  Divider,
  Grid,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import CustomTable from "../components/ui/CustomTable"
import Loader from "../components/ui/Loader"
import Section from "../components/ui/Section"
import api from "../config/axios"
import env from "../config/env"
import NorthEastIcon from "@mui/icons-material/NorthEast"
import { copyToClipboard } from "../utilities/misc"

const labelStatusData = [
  {
    code: 0,
    status: "New",
  },
  {
    code: 1,
    status: "Working",
  },
  {
    code: 2,
    status: "Done",
  },
  {
    code: 3,
    status: "Error",
  },
  {
    code: 4,
    status: "Canceled",
  },
  {
    code: 5,
    status: "Refunded",
  },
]

const API = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem("api-key"))
  const [rLoading, setRLoading] = useState(false)
  const [types, setTypes] = useState([])

  const renewKey = async () => {
    setRLoading(true)
    await api
      .get("/auth/renew")
      .then((res) => {
        localStorage.setItem("api-key", res.data.apiKey)
        setApiKey(res.data.apiKey)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setRLoading(false))
  }

  const readLabelTypes = async () => {
    await axios
      .get(env.BASE_API_URL + "/api/v2/order/readLabels", {
        headers: {
          "x-api-key": apiKey,
        },
      })
      .then((res) => {
        setTypes(res.data.labels)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    readLabelTypes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <PageContainer title="API" desc="Information about ShipDirect Public API">
      <Stack spacing={2}>
        <ApiSection title="Authorization">
          <CustomTable fields={["Key", "Value", "Add to"]} w="30rem">
            <TableRow>
              <TableCell>x-api-key</TableCell>
              <TableCell sx={{ color: "primary.main" }}>
                <Button onClick={() => copyToClipboard(apiKey)}>
                  {apiKey} <NorthEastIcon sx={{ fontSize: 12 }} />{" "}
                </Button>
              </TableCell>
              <TableCell>Header</TableCell>
            </TableRow>
          </CustomTable>
          <div>
            <Button onClick={renewKey} variant="outlined">
              {rLoading ? <Loader /> : "Renew"}
            </Button>
          </div>
        </ApiSection>
        <ApiSection title="Label types">
          <Grid container spacing={2}>
            {types?.map((type) => (
              <Grid item xs={6} lg={4}>
                <Section title={type?.name} sx={{ height: "100%" }}>
                  <Stack gap={1}>
                    <div>
                      <span className="text-muted">ID: </span>
                      <span> {type?.id}</span>
                    </div>
                    <div>
                      <span className="text-muted">Max Weight: </span>
                      <span>
                        {type?.maxWeight}{" "}
                        {type?.name?.includes("First Class") ? "Oz" : "lbs"}
                      </span>
                    </div>
                    <span className="text-muted">Prices: </span>
                  </Stack>

                  <div className="px-3 d-flex flex-column gap-1 mt-1">
                    {type?.normalPrices?.map((price) => (
                      <Stack
                        direction="horizontal"
                        className="justify-content-between"
                      >
                        <span>
                          {" "}
                          {price.fromWeight} - {price.toWeight}{" "}
                          {type?.name?.includes("First-Class") ? "Oz" : "lbs"}
                        </span>
                        <span className="fw-bold">
                          ${price.price.toFixed(2)}
                        </span>
                      </Stack>
                    ))}
                  </div>
                </Section>
              </Grid>
            ))}
          </Grid>
        </ApiSection>
        <ApiSection title="Label Status">
          <CustomTable fields={["Code", "Status"]} w="13rem">
            {labelStatusData.map((l) => (
              <TableRow>
                <TableCell sx={{ color: "primary.main" }}>{l.code}</TableCell>
                <TableCell>{l.status}</TableCell>
              </TableRow>
            ))}
          </CustomTable>
        </ApiSection>
        <ApiSection title="Label Order Object">
          <CodeBlock>
            {` {
    ID: '00000000-0000-0000-0000-000000000000',
    User: '00000000-0000-0000-0000-000000000000',
    Type: '00000000-0000-0000-0000-000000000000',
    Cancellable: false,
    Date: 0,
    DateFormatted: '01/01/1970',
    Downloadable: true,
    Duplicatable: true,
    FromCity: '',
    FromCompany: '',
    FromCountry: '',
    FromFormatted: '',
    FromName: '',
    FromPhone: '',
    FromState: '',
    FromStreet: '',
    FromStreet2: '',
    FromZip: '',
    Modified: 0,
    ModifiedFormatted: '01/01/1970 00:00',
    Notes: '',
    Price: 0,
    PriceFormatted: '$0.00',
    Refundable: true,
    Status: 2,
    StatusName: 'Done',
    ToCity: '',
    ToCompany: '',
    ToCountry: '',
    ToFormatted: '',
    ToName: '',
    ToPhone: '',
    ToState: '',
    ToStreet: '',
    ToStreet2: '',
    ToZip: '',
    TrackLink: '',
    Trackable: false,
    TypeName: 'USPS Priority',
    Username: '',
    Weight: 0,
    WeightFormatted: '0 lb',
    Added: 0,
    AddedFormatted: '01/01/1970 00:00'
  }`}
          </CodeBlock>
        </ApiSection>
        <ApiSection title="Order Config">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://api.shipdirect.io/api/v2/order/config`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Response 200">
            <CodeBlock>
              {`  {
	"Success": true,
	"Error": "",
	"Data": {
		"Types": [
			{
				"ID": "00000000-0000-0000-0000-000000000000",
				"Name": "",
				"International": false,
				"Prices": [
					{
						"From": 0,
						"To": 0,
						"Price": 0.00,
						"ID": "00000000-0000-0000-0000-000000000000",
						"FromFormatted": "0 lb",
						"ToFormatted": "0 lb",
						"PriceFormatted": "$0.00"
					},
					...
				],
				"Enabled": false,
				"MaxWeight": "0",
				"MaxWeightFormatted": "0 lb"
			},
		],
		"Countries": [
			{
				"ID": "US",
				"Name": "United States"
			},
			...
		],
		"States": [
			{
				"ID": "CA",
				"Name": "California"
			},
			...
		],
		"TodayDate": "1970-01-01"
	}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection>
        <ApiSection title="Create Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: POST
 URL: https://api.shipdirect.io/api/v2/order/createOrder`}
            </CodeBlock>
          </SubSection>
          <ParameterTable
            values={[
              ["GUID", "Type", "Type ID (from given list)"],
              ["Float", "Weight", "Pacakge weight"],
              [
                "String",
                "FromCountry",
                "Sender country (Two-Letter Country Code)",
              ],
              ["String", "FromName", "Sender name"],
              ["String", "FromCompany", "Sender company (optional)"],
              ["String", "FromStreet", "Sender street address"],
              ["String", "FromStreet2", "Sender secondary address (optional)"],
              ["String", "FromCity", "Sender city"],
              ["String", "FromState", "Sender state (two letter state code)"],
              ["String", "FromZip", "Sender ZIP code"],
              [
                "String",
                "ToCountry",
                "Receiver country (Two-Letter Country Code)",
              ],
              ["String", "ToName", "Receiver name"],
              ["String", "ToCompany", "Receiver company (optional)"],
              ["String", "ToStreet", "Receiver street address"],
              ["String", "ToStreet2", "Receiver secondary address (optional)"],
              ["String", "ToCity", "Receiver city"],
              ["String", "ToState", "Receiver state (two letter state code)"],
              ["String", "ToZip", "Receiver ZIP code"],
            ]}
          />
          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Order": [
            [Order object here]
        ]
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 400">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "[Error message here]",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection>
        {/* <ApiSection title="Multi Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: POST
 URL: https://app.shipdirect.io/api/v2/order-multi`}
            </CodeBlock>
          </SubSection>
          <ParameterTable
            values={[
              ["GUID", "Type", "Type ID (from given list)"],
              ["Float", "Weight", "Pacakge weight"],
              [
                "String",
                "FromCountry",
                "Sender country (Two-Letter Country Code)",
              ],
              ["String", "FromName", "Sender name"],
              ["String", "FromCompany", "Sender company (optional)"],
              ["String", "FromStreet", "Sender street address"],
              ["String", "FromStreet2", "Sender secondary address (optional)"],
              ["String", "FromCity", "Sender city"],
              ["String", "FromState", "Sender state (two letter state code)"],
              ["String", "FromZip", "Sender ZIP code"],
              [
                "String",
                "ToCountry",
                "Receiver country (Two-Letter Country Code)",
              ],
              ["String", "ToName", "Receiver name"],
              ["String", "ToCompany", "Receiver company (optional)"],
              ["String", "ToStreet", "Receiver street address"],
              ["String", "ToStreet2", "Receiver secondary address (optional)"],
              ["String", "ToCity", "Receiver city"],
              ["String", "ToState", "Receiver state (two letter state code)"],
              ["String", "ToZip", "Receiver ZIP code"],
              ["Array", "Tos", "List of receivers"],
            ]}
          />
          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Order": [
            [Order object here],
            [Order object here],
            [Order object here],
            ...
        ]
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 400">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "[Error message here]",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection> */}
        {/* <ApiSection title="CSV Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: POST
 URL: https://app.shipdirect.io/api/v2/order-csv`}
            </CodeBlock>
          </SubSection>
          <ParameterTable
            values={[
              ["GUID", "Type", "Type ID (from given list)"],
              ["Float", "Weight", "Pacakge weight"],
              [
                "String",
                "FromCountry",
                "Sender country (Two-Letter Country Code)",
              ],
              ["String", "FromName", "Sender name"],
              ["String", "FromCompany", "Sender company (optional)"],
              ["String", "FromStreet", "Sender street address"],
              ["String", "FromStreet2", "Sender secondary address (optional)"],
              ["String", "FromCity", "Sender city"],
              ["String", "FromState", "Sender state (two letter state code)"],
              ["String", "FromZip", "Sender ZIP code"],

              [
                "Array",
                "Tos",
                "CSV formatted list of recievers in format The CSV should be delimited with comma (,) and the following headers Country,Name,Company,Street1,Street2,City,State,Zip",
              ],
            ]}
          />
          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Order": [
            [Order object here],
            [Order object here],
            [Order object here],
            ...
        ]
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 400">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "[Error message here]",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection> */}
        <ApiSection title="Order Info">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://app.shipdirect.io/api/v2/order/readorder/ORDER_ID`}
            </CodeBlock>
          </SubSection>

          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Order": [Order object here]
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 400">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Order does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection>
        <ApiSection title="Orders History">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://api.shipdirect.io/api/v2/order/readOrders`}
            </CodeBlock>
          </SubSection>
          <ParameterTable
            values={[
              ["Int", "Page", "Pagination page (optional)"],
              [
                "String",
                "Search Query",
                "Search orders by username, email, from, to, ID (optional)",
              ],
            ]}
          />

          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Orders": [
			[Order object here]
			[Order object here]
			...
		],
		"Pagination": {
			"CurrentPage": 1,
			"TotalPages": 2,
			"PerPage": 20,
			"NextPage": 2,
			"PreviousPage": 1,
			"CanNext": true,
			"CanPrevious": false
		}
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 400">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Page does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection>
        {/* <ApiSection title="Cancel Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://app.shipdirect.io/api/order/ORDER_ID/cancel`}
            </CodeBlock>
          </SubSection>

          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": "Successfully cancelled order"
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 404">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Order does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection> */}
        {/* <ApiSection title="Delete Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://app.shipdirect.io/api/order/ORDER_ID/delete`}
            </CodeBlock>
          </SubSection>

          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": "Successfully deleted order"
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 404">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Order does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection> */}
        {/* <ApiSection title="Duplicate Order">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://app.shipdirect.io/api/order/ORDER_ID/duplicate`}
            </CodeBlock>
          </SubSection>

          <SubSection title="Success Response 200">
            <CodeBlock>
              {`{
	"Success": true,
	"Error": "",
	"Data": {
		"Order": [Order object here]
	}
}`}
            </CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 404">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Order does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection> */}
        <ApiSection title="Download Order File">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: GET
 URL: https://api.shipdirect.io/api/v2/order/download/ORDER_ID`}
            </CodeBlock>
          </SubSection>

          <SubSection title="Success Response 200">
            <CodeBlock>{`The raw PDF file is returned`}</CodeBlock>
          </SubSection>
          <SubSection title="Fail Response 404">
            <CodeBlock>
              {`{
	"Success": false,
	"Error": "Order does not exist",
	"Data": {}
}`}
            </CodeBlock>
          </SubSection>
        </ApiSection>
        {/* <ApiSection title="Bulk Download">
          <SubSection title="Request">
            <CodeBlock>
              {` Method: POST
 URL: https://app.shipdirect.io/api/orders-bulk-download`}
            </CodeBlock>
          </SubSection>
          <ParameterTable
            values={[
              ["Array", "IDs", "Array of order IDs to download in bulk"],
            ]}
          />

          <SubSection title="Success Response 200">
            <CodeBlock>{`The raw PDF file is returned`}</CodeBlock>
          </SubSection>
        </ApiSection> */}
      </Stack>
    </PageContainer>
  )
}

const ApiSection = ({ title, children }) => (
  <Stack spacing={2}>
    <Typography variant="h6" fontWeight={500}>
      {title}
    </Typography>
    {children}
    <Divider sx={{ bgcolor: "rgba(0,0,0,0.2)" }} />
  </Stack>
)

const SubSection = ({ title, children }) => (
  <Stack spacing={1}>
    <Typography color="text.secondary" fontWeight={500}>
      {title}
    </Typography>
    {children}
  </Stack>
)

const CodeBlock = ({ children }) => (
  <Section sx={{ overflowX: "auto" }}>
    <pre>{children}</pre>
  </Section>
)

const ParameterTable = ({ values }) => (
  <SubSection title="Body">
    <CustomTable fields={["Type", "Parameter", "Description"]}>
      {values.map((v) => (
        <TableRow>
          <TableCell>{v[0]}</TableCell>
          <TableCell sx={{ color: "primary.main" }}>{v[1]}</TableCell>
          <TableCell>{v[2]}</TableCell>
        </TableRow>
      ))}
    </CustomTable>
  </SubSection>
)

export default API
