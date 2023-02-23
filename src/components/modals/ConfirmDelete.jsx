import ModalContainer from "../containers/ModalContainer"

const ConfirmDelete = ({ action, loading, ...props }) => {
  return (
    <ModalContainer
      {...props}
      title="Delete Address"
      actionText={"Delete"}
      action={action}
      loading={loading}
    >
      Are you sure you want to delete this address?
    </ModalContainer>
  )
}

export default ConfirmDelete
