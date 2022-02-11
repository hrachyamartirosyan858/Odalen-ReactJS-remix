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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={num}
          label={label}
          onChange={handleChange}
        >
          {options.map((item) => {
            return <MenuItem value={item.value}>{item.option}</MenuItem>;
          })}
          {/* <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
