import React from "react"
import ModalContainer from "../containers/ModalContainer"

const ConfirmUpgrade = ({ action, loading, ...props }) => {
  return (
    <ModalContainer
      {...props}
      title="Upgrade to Premium"
      actionText={"Upgrade"}
      action={action}
      loading={loading}
    >
      Are you sure you want to upgrade to PREMIUM?
    </ModalContainer>
  )
}

export default ConfirmUpgrade
