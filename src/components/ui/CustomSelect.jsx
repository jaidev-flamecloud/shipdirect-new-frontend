import { FormControl, FormLabel, MenuItem, Select } from "@mui/material"

const CustomSelect = ({ label, options, ...props }) => {
  return (
    <FormControl fullWidth>
      {label && (
        <FormLabel sx={{ fontWeight: 600, color: "#000", mb: 0.6 }}>
          {label}
        </FormLabel>
      )}
      <Select {...props} size="small">
        {options.map(({ label, value }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
