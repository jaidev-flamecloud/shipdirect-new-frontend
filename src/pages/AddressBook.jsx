import { Button, IconButton, TableCell, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import CustomTable from "../components/ui/CustomTable"
import EditRoundedIcon from "@mui/icons-material/EditRounded"
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded"
import AddAddress from "../components/modals/AddAddress"
import api from "../config/axios"
import { toast } from "react-toastify"
import ConfirmDelete from "../components/modals/ConfirmDelete"

const AddressBook = () => {
  const [addModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [addresses, setAddresses] = useState([])
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [address, setAddress] = useState({})
  const [edit, setEdit] = useState(false)

  const closeModal = () => {
    setAddress({})
    setAddModal(false)
  }

  const closeDeleteModal = () => {
    setAddress({})
    setDeleteModal(false)
  }

  const getAddresses = async () => {
    setLoading(true)
    await api
      .get("/address/readAll")
      .then((res) => {
        setAddresses(res.data.addresses)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  const deleteAddress = async () => {
    setDeleteLoading(true)

    await api
      .delete("/address/delete/" + address._id)
      .then((res) => {
        setDeleteLoading(false)
        toast.success(res.data.message)
        setDeleteModal(false)
        getAddresses()
      })
      .catch((err) => {
        setDeleteLoading(false)
        toast.error(err.response.data.message)
      })
  }

  useEffect(() => {
    getAddresses()
  }, [])
  return (
    <PageContainer
      title="Address Book"
      desc="Manage all your saved address and add new address for quicker checkouts"
      end={
        <Button
          onClick={() => {
            setAddModal(true)
            setAddress({})
            setEdit(false)
          }}
          variant="contained"
        >
          Add New Address
        </Button>
      }
    >
      <CustomTable
        fields={[
          "# ",
          "COUNTRY",
          "NAME",
          "PHONE",
          "STREET",
          "STREET 2",
          "CITY",
          "STATE",
          "ZIP",
          "ACTION",
        ]}
        loading={loading}
      >
        {addresses.map((address, i) => (
          <TableRow>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{address.country}</TableCell>
            <TableCell>{address.name}</TableCell>
            <TableCell>{address.phone}</TableCell>
            <TableCell>{address.street}</TableCell>
            <TableCell>{address.street2}</TableCell>
            <TableCell>{address.city}</TableCell>
            <TableCell sx={{ color: "success.main" }}>
              {address.state}
            </TableCell>
            <TableCell sx={{ color: "success.main" }}>{address.zip}</TableCell>
            <TableCell>
              <IconButton
                onClick={() => {
                  setAddress(address)
                  setAddModal(true)
                  setEdit(true)
                }}
                color="primary"
              >
                <EditRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => {
                  setAddress(address)
                  setDeleteModal(true)
                }}
                color="error"
              >
                <DeleteRoundedIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </CustomTable>
      <AddAddress
        open={addModal}
        onClose={closeModal}
        address={address}
        edit={edit}
        refresh={getAddresses}
      />
      <ConfirmDelete
        open={deleteModal}
        onClose={closeDeleteModal}
        action={deleteAddress}
        loading={deleteLoading}
      />
    </PageContainer>
  )
}

export default AddressBook
