import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Loader from "../ui/Loader"

export default function ModalContainer({
  title,
  action = () => {},
  actionText = "Submit",
  cancelText = "Cancel",
  loading,
  children,
  hideActions,
  ...props
}) {
  return (
    <Dialog {...props} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {!hideActions && (
        <DialogActions>
          <Button sx={{ px: 3 }} color="inherit" onClick={props.onClose}>
            {cancelText}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              action()
            }}
            autoFocus
            sx={{ px: 3 }}
          >
            {loading ? <Loader /> : actionText}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}
