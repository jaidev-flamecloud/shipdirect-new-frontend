import {
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material"
import { useState } from "react"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

const Field = ({ label, ...props }) => {
  return (
    <FormControl fullWidth>
      {label && (
        <FormLabel sx={{ fontWeight: 600, color: "#000", mb: 0.6 }}>
          {label}
        </FormLabel>
      )}
      <TextField {...props} size="small" />
    </FormControl>
  )
}

const PasswordField = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl>
      <FormLabel sx={{ fontWeight: 600, color: "#000", mb: 0.6 }}>
        {label}
      </FormLabel>
      <TextField
        size="small"
        type={showPassword ? "text" : "password"}
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}
export { PasswordField }

export default Field
