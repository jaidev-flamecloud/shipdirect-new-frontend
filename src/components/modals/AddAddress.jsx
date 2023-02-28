import { Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import ModalContainer from "../containers/ModalContainer"
import Field from "../ui/Field"
import CustomSelect from "../ui/CustomSelect"
import api from "../../config/axios"
import { toast } from "react-toastify"
import { states } from "../../utilities/misc"

const AddAddress = ({ address, edit, refresh, ...props }) => {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      name: address.name,
      country: address.country,
      phone: address.phone,
      street: address.street,
      street2: address.street2,
      zip: address.zip,
      city: address.city,
      state: address.state,
    })
  }, [address])

  const createAddress = async (e) => {
    setLoader(true)

    await api
      .post("/address/create", data)
      .then((res) => {
        setLoader(false)
        toast.success(res.data.message)
        refresh()
        props.onClose()
      })
      .catch((err) => {
        setLoader(false)
        toast.error(err.response.data.message)
      })
  }

  const updateAddress = async (e) => {
    setLoader(true)

    await api
      .put("/address/update/" + address._id, data)
      .then((res) => {
        setLoader(false)
        toast.success(res.data.message)
        refresh()
        props.onClose()
      })
      .catch((err) => {
        setLoader(false)
        toast.error(err.response.data.message)
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }
  return (
    <ModalContainer
      {...props}
      title="Enter Address Details"
      actionText={edit ? "Edit Address" : "Add New Address"}
      action={edit ? updateAddress : createAddress}
      loading={loader}
    >
      <Stack spacing={2}>
        <CustomSelect
          name="country"
          label="Select Country*"
          value={data.country}
          onChange={handleChange}
          options={[
            {
              label: "United States",
              value: "US",
            },
            {
              label: "Canada",
              value: "CA",
            },
          ]}
          required
        />
        <Field
          name="name"
          label="Enter Name* "
          placeholder="Your Name here"
          value={data.name}
          onChange={handleChange}
          required
        />
        <Field
          name="company"
          label="Enter Company Name"
          placeholder="Company name here"
        />
        <Field
          name="phone"
          label="Enter Phone*"
          placeholder="Phone Number here"
          value={data.phone}
          onChange={handleChange}
          required
        />
        <Field
          name="street"
          label="Address Line 1*"
          placeholder="Address Line 1 here"
          value={data.street}
          onChange={handleChange}
          required
        />
        <Field
          name="street2"
          label="Address Line 2"
          placeholder="Address Line 2 here"
          value={data.street2}
          onChange={handleChange}
        />
        <Field
          label="Zipcode*"
          placeholder="None"
          name="zip"
          value={data.zip}
          onChange={handleChange}
          required
        />
        <Field
          label="City*"
          placeholder="None"
          name="city"
          value={data.city}
          onChange={handleChange}
          required
        />
        <CustomSelect
          label="Select State*"
          name="state"
          onChange={handleChange}
          options={states.map((state) => ({
            value: state.ID,
            label: state.Name,
          }))}
          required
        />
      </Stack>
    </ModalContainer>
  )
}

export default AddAddress
