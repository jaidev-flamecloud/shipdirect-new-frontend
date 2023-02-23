import React from "react"
import ModalContainer from "../containers/ModalContainer"
import Field from "../ui/Field"

const ConfirmRequestRefund = ({ action, loading, ...props }) => {
  return (
    <ModalContainer
      {...props}
      title="Request Refund"
      actionText={"Request"}
      action={() => action(document.getElementById("reason").value)}
      loading={loading}
    >
      <Field
        placeholder="Please enter a reason for requesting refund"
        label="Reason"
        name="reason"
        id="reason"
      />
    </ModalContainer>
  )
}

export default ConfirmRequestRefund
