import {
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import PageContainer from "../components/containers/PageContainer"
import Field from "../components/ui/Field"
import Section from "../components/ui/Section"
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"
import CustomSelect from "../components/ui/CustomSelect"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../config/axios"
import { toast } from "react-toastify"
import { states } from "../utilities/misc"
import Loader from "../components/ui/Loader"
import OptionCard from "../components/common/OptionCard"
import { Autocomplete, LoadScript } from "@react-google-maps/api"
import { useRef } from "react"
import { useUserContext } from "../App"

const pricingItems = ["ups", "usps", "fedex"]

const PriceButton = ({ finalPrice, originalPrice, activeType }) => (
  <Button variant="contained">
    <Stack direction="row" spacing={1} alignItems="center">
      <AttachMoneyRoundedIcon />
      <span>Price:</span>
      {!!finalPrice && (
        <s
          style={{
            fontSize: 10,
            opacity: 0.5,
          }}
        >
          $ {originalPrice || 0}
        </s>
      )}
      {activeType?.discount && finalPrice && (
        <Chip
          label={`-${activeType?.discount}%`}
          color="success"
          size="small"
          sx={{ color: "#fff" }}
        />
      )}{" "}
      <span style={{ fontSize: 18 }}>
        {" "}
        {activeType?.discount > 0 ? `$${finalPrice}` : "NA"}
      </span>
    </Stack>
  </Button>
)

const AddressForm = ({
  sender,
  address,
  addresses,
  setAddress,
  data,
  setData,
  activeType,
  cityStateLookup,
  saveAddressCheck,
  setSaveAddressCheck,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  // for google autofill
  const [showAutocomplete, setShowAutocomplete] = useState(true)
  const inputRef = useRef()
  const handlePlaceChanged = () => {
    const place = inputRef.current.getPlace()
    if (place) {
      let city = ""
      let state = ""
      let zip = ""

      place?.address_components?.forEach((p) => {
        if (p?.types[0] === "locality") city = p?.short_name || ""
        if (p?.types[0] === "administrative_area_level_1")
          state = p?.short_name || ""
        if (p?.types[0] === "postal_code") zip = p?.short_name || ""
      })

      setData({
        ...data,
        street: place.formatted_address.split(",")[0],
        street2:
          place.formatted_address.split(",").length > 4
            ? place.formatted_address.split(",")[1]
            : "",
        city,
        state,
        zip,
      })
    }
  }
  return (
    <Section
      title={
        <>
          {sender ? "Sender’s Details" : "Recipient’s Details"}
          {collapsed && (
            <Typography
              display={"inline-block"}
              color="text.secondary"
              sx={{ ml: 2 }}
            >
              {["Name", "City", "State", "Zip"].map((info, i) =>
                data[info.toLowerCase()] ? (
                  data[info.toLowerCase()] + (i !== 3 ? ", " : "")
                ) : (
                  <Typography display={"inline"} color="error.main">
                    {info} missing{i !== 3 ? ", " : ""}
                  </Typography>
                )
              )}
            </Typography>
          )}
        </>
      }
      end={
        <IconButton type="button" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <KeyboardArrowDownRoundedIcon />
          ) : (
            <KeyboardArrowUpRoundedIcon />
          )}
        </IconButton>
      }
      mb0
      sx={{ mb: 2 }}
    >
      {!collapsed && (
        <Grid container mt={2} spacing={2}>
          <Grid item xs={12}>
            <CustomSelect
              label="Address Book Address"
              value={address._id}
              onChange={(e) => {
                setAddress(addresses.find((a) => a._id === e.target.value))
              }}
              options={addresses.map((address) => ({
                label: address.name,
                value: address._id,
              }))}
            />
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <CustomSelect
                  label="Country*"
                  disabled
                  required
                  name={(sender ? "from" : "to") + "Country"}
                  value={
                    activeType?.uid === "ups_standard" ||
                    activeType?.uid === "ups_express" ||
                    activeType?.uid === "ups_express_saver" ||
                    activeType?.uid === "ups_express_early" ||
                    activeType?.uid === "ups_expedited"
                      ? "CA"
                      : "US"
                  }
                  options={[
                    {
                      label: "Canada",
                      value: "CA",
                    },
                    {
                      label: "United States",
                      value: "US",
                    },
                  ]}
                />

                {showAutocomplete ? (
                  <Autocomplete
                    onLoad={(ref) => (inputRef.current = ref)}
                    onPlaceChanged={handlePlaceChanged}
                    restrictions={{ country: "us" }}
                  >
                    <Field
                      label="Address 1*"
                      placeholder="Enter Address 1"
                      value={data.street}
                      onChange={(e) =>
                        setData({
                          ...data,
                          street: e.target.value,
                        })
                      }
                      required
                    />
                  </Autocomplete>
                ) : (
                  <Field
                    label="Address 1*"
                    placeholder="Enter Address 1"
                    value={data.street}
                    onChange={(e) =>
                      setData({
                        ...data,
                        street: e.target.value,
                      })
                    }
                    required
                  />
                )}

                <Field
                  label="Address 2 (Optional)"
                  placeholder="Enter Address 2"
                  value={data.street2}
                  onChange={(e) => {
                    setData({
                      ...data,
                      street2: e.target.value,
                    })
                  }}
                />
                <Field
                  label="City*"
                  placeholder="Enter City"
                  required
                  value={data.city}
                  onChange={(e) => {
                    setData({
                      ...data,
                      city: e.target.value,
                    })
                  }}
                />
                <Field
                  label="Zipcode*"
                  placeholder="Enter Zipcode"
                  required
                  value={data.zip}
                  onChange={(e) => {
                    setData({
                      ...data,
                      zip: e.target.value,
                    })
                    cityStateLookup(e.target.value, sender ? "from" : "to")
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={2}>
                <Field
                  label="Contact Name*"
                  placeholder="Enter contact name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  required
                />
                <Field
                  label="Company Name (Optional)"
                  placeholder="Enter Company name"
                  value={data.company}
                  onChange={(e) => {
                    setData({
                      ...data,
                      company: e.target.value,
                    })
                  }}
                />
                <Field
                  label="Phone*"
                  placeholder="Enter phone number"
                  value={data.phone}
                  onChange={(e) => {
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }}
                  required
                />

                <CustomSelect
                  label="State*"
                  value={data?.state || ""}
                  onChange={(e) => {
                    setData({
                      ...data,
                      state: e.target.value,
                    })
                  }}
                  options={states
                    .filter((state) => state.Country === "US")
                    .map((state) => ({
                      label: state.Name,
                      value: state.ID,
                    }))}
                  required
                />
                <Stack>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={showAutocomplete}
                        onClick={() => setShowAutocomplete(!showAutocomplete)}
                      />
                    }
                    label={"Autocomplete"}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={saveAddressCheck}
                        onClick={() => setSaveAddressCheck(!saveAddressCheck)}
                      />
                    }
                    label="Save address to Address Book"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Section>
  )
}

const AddLabel = () => {
  const [selectedCourier, setSelectedCourier] = useState(pricingItems[0])
  const navigate = useNavigate()
  const [addresses, setAddresses] = useState([])
  const [address, setAddress] = useState({})
  const [address1, setAddress1] = useState({})
  const [isDisabled, setIsDisabled] = useState(false)
  const [finalPrice, setFinalPrice] = useState(0)
  const [Type_id, setType_id] = useState("")
  const [Weight, setWeight] = useState(0)
  const [types, setTypes] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const signatureRequired = false
  const scheduleEnabled = false
  // eslint-disable-next-line no-unused-vars
  const [customItems, setCustomItems] = useState([
    {
      name: "",
      price: 0,
      quantity: 0,
    },
  ])
  const [originalPrice, setOriginalPrice] = useState(0)
  const [activeType, setActiveType] = useState({})
  const [From, setFrom] = useState({
    name: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    company: "",
    country: "US",
  })
  const [To, setTo] = useState({
    name: "",
    street: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    company: "",
    country: "US",
  })

  const getAddresses = async () => {
    await api
      .get("/address/readAll")
      .then((res) => {
        setAddresses(res.data.addresses)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const readLabelTypes = async () => {
    await api
      .get("/labeltype/read")
      .then((res) => {
        setTypes(res.data.labelTypes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAddresses()
    readLabelTypes()
  }, [])

  useEffect(() => {
    const discountedPrice = activeType.discount / 100
    const negativeDiscount = 1 - discountedPrice
    const newPrice = finalPrice / negativeDiscount
    setOriginalPrice(parseInt(newPrice))
  }, [setFinalPrice, finalPrice, activeType])

  useEffect(() => {
    setFrom({
      name: address.name,
      street: address.street,
      street2: address.street2,
      city: address.city,
      state: address.state,
      zip: address.zip,
      company: address.company,
      country: "US",
      phone: address.phone,
    })
  }, [address])
  useEffect(() => {
    setTo({
      name: address1.name,
      street: address1.street,
      street2: address1.street2,
      city: address1.city,
      state: address1.state,
      zip: address1.zip,
      company: address1.company,
      country: "US",
      phone: address1.phone,
    })
  }, [address1])

  useEffect(() => {
    // find the type of label and max weight
    const getPrice = async () => {
      const data = {
        Type: Type_id,
        Weight,
      }

      await api
        .post("/order/price", data)
        .then((res) => {
          setFinalPrice(res.data.price)
        })
        .catch((err) => {
          console.log(err)
          setFinalPrice(0)
        })
    }

    getPrice()
  }, [Type_id, Weight])

  // on change custom items
  useEffect(() => {
    // add all customItems price
    let totalPrice = 0
    // eslint-disable-next-line no-unused-vars
    let totalQuant = 0
    customItems.forEach((item) => {
      totalPrice += parseInt(item.price)
      totalQuant += parseInt(item.quantity)
    })

    setTotalPrice(totalPrice)
  }, [customItems])

  const { refresh } = useUserContext()

  const createOrder = async (e) => {
    e.preventDefault()
    setIsDisabled(true)

    const data = {
      price: finalPrice,
      Type: e.target.type.value,
      Weight: e.target.Weight.value,
      ToName: To.name,
      ToStreet: To.street,
      ToStreet2: To.street2 || "",
      ToCity: To.city,
      ToState: To.state,
      ToZip: To.zip,
      ToCompany: To.company || "",
      ToCountry: e.target.toCountry.value,
      FromName: From.name,
      FromStreet: From.street,
      FromStreet2: From.street2 || "",
      FromCity: From.city,
      FromState: From.state,
      FromZip: From.zip,
      FromCompany: From.company || "",
      FromCountry: e.target.fromCountry.value,
      height: e.target?.height?.value || 0,
      width: e.target?.width?.value || 0,
      length: e.target?.length?.value || 0,
      description: e.target.description?.value || "",
      FromPhone: From.phone,
      ToPhone: To.phone,

      // fedex int
      CustomsItems: customItems,
      CustomsPrice: totalPrice,
      ScheduleDate: e.target.scheduleDate?.value || "",
      SignatureRequired: signatureRequired,
      ScheduleEnabled: scheduleEnabled,
      Class: e.target.class?.value || "",
    }

    await api
      .post("/order/create", data)
      .then((res) => {
        toast.success("Order created successfully")
        refresh()
        if (saveFromAddress) saveToAddressBook(From)
        if (saveToAddress) saveToAddressBook(To)
        setIsDisabled(false)
        navigate("/labels/" + res.data?.order?._id + "?new=true")
      })
      .catch((err) => {
        console.log(err)
        toast.error(err.response.data.message)
        setIsDisabled(false)
      })
  }

  const theme = useTheme()

  //code for state city auto fill from zip
  const cityStateLookup = async (zip, type = "from") => {
    if (zip.length !== 5) return

    await api
      .post("/order/city-state", { zip: zip.replaceAll("-", "") })
      .then((res) => {
        if (res.data) {
          const { city, state, zip } = res.data
          if (type === "from")
            setFrom({
              ...From,
              city,
              state,
              zip,
            })
          else
            setTo({
              ...To,
              city,
              state,
              zip,
            })
        }
      })
      .catch((err) => console.log(err))
  }

  // code for save address
  const [saveFromAddress, setSaveFromAddress] = useState(false)
  const [saveToAddress, setSaveToAddress] = useState(false)

  const saveToAddressBook = async (data) => {
    const { company: _, ...body } = data
    await api
      .post("/address/create", body)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message))
  }

  return (
    <PageContainer
      title="Create Label"
      desc="Add the required details and get your label instantly"
      end={
        <PriceButton
          finalPrice={finalPrice}
          originalPrice={originalPrice}
          activeType={activeType}
        />
      }
    >
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <form onSubmit={createOrder}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Section sx={{ mb: 2 }}>
                <FormControl>
                  <FormLabel sx={{ mb: 2 }}>Select Courier</FormLabel>
                  <Grid container gap={2} mb={2}>
                    {pricingItems.map((p) => (
                      <OptionCard
                        imgSrc={
                          "/assets/images/" +
                          p +
                          (theme.palette.mode === "dark" ? "2" : "") +
                          ".svg"
                        }
                        name={p}
                        active={selectedCourier === p}
                        activate={() => setSelectedCourier(p)}
                      />
                    ))}
                  </Grid>
                </FormControl>
              </Section>
              <AddressForm
                sender
                address={address}
                addresses={addresses}
                setAddress={setAddress}
                data={From}
                setData={setFrom}
                activeType={activeType}
                cityStateLookup={cityStateLookup}
                saveAddressCheck={saveFromAddress}
                setSaveAddressCheck={setSaveFromAddress}
              />
              <AddressForm
                address={address1}
                addresses={addresses}
                setAddress={setAddress1}
                data={To}
                setData={setTo}
                activeType={activeType}
                cityStateLookup={cityStateLookup}
                saveAddressCheck={saveToAddress}
                setSaveAddressCheck={setSaveToAddress}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Section title="Label details" sx={{ mb: 2 }}>
                <CustomSelect
                  sx={{ mb: 2 }}
                  label="Choose carrier"
                  name="type"
                  onChange={(e) => {
                    setType_id(e.target.value)
                    setActiveType(
                      types.find((type) => {
                        return type._id === e.target.value
                      })
                    )
                  }}
                  options={types
                    .filter((type) =>
                      type.name.toLowerCase().includes(selectedCourier)
                    )
                    .map((type) => ({
                      label: type.name,
                      value: type._id,
                    }))}
                />
                <Field
                  label="Weight*"
                  name="Weight"
                  placeholder={`Package Weight${
                    activeType?.maxWeight
                      ? " (" +
                        activeType?.maxWeight +
                        (activeType?.uid?.includes("first_class")
                          ? " Oz"
                          : " Lbs") +
                        " Max)"
                      : ""
                  }*`}
                  type="number"
                  min={0}
                  max={activeType?.maxWeight || ""}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Section>
              <Section title="Package Details" sx={{ mb: 2 }}>
                <Stack spacing={2}>
                  <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 500, mb: 0.6 }}>
                      Dimensions*
                    </FormLabel>
                    <Stack direction="row" spacing={2}>
                      <Field placeholder="L" type="number" name="length" />
                      <Field placeholder="W" type="number" name="width" />
                      <Field placeholder="H" type="number" name="height" />
                    </Stack>
                  </FormControl>

                  <Field
                    label="Description (Optional)"
                    placeholder="Enter description"
                    name="description"
                    required
                    multiline
                    rows={4}
                  />
                </Stack>
              </Section>

              <Stack
                justifyContent="space-between"
                alignItems={"center"}
                spacing={2}
              >
                {/* <PriceButton
                  finalPrice={finalPrice}
                  originalPrice={originalPrice}
                  activeType={activeType}
                />{" "} */}
                <Button
                  fullWidth
                  disabled={!finalPrice || isDisabled}
                  type="submit"
                  variant="contained"
                  sx={{ px: 5 }}
                  size="large"
                >
                  {isDisabled ? (
                    <Loader />
                  ) : (
                    "Create Label | $" + finalPrice.toFixed(2)
                  )}
                </Button>
                <Typography variant="body2" color="text.secondary">
                  Your purchase would be deducted from your Balance.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </LoadScript>
    </PageContainer>
  )
}

export default AddLabel
