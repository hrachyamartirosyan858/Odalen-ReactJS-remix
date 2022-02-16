import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({options, label}) {
  const [num, setNum] = React.useState("");

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={num}
          label={label}
          onChange={handleChange}
          required
        >
          {options.map((item) => {
            return <MenuItem value={item.value}>{item.option}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
