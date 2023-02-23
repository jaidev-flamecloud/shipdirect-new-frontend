import React from "react"
import ModalContainer from "../containers/ModalContainer"

const ConfirmDuplicate = ({ action, loading, ...props }) => {
  return (
    <ModalContainer
      {...props}
      title="Confirm Duplicate Order"
      actionText={"Duplicate"}
      action={action}
      loading={loading}
    >
      Are you sure you want to duplicate this label?
    </ModalContainer>
  )
}

export default ConfirmDuplicate
