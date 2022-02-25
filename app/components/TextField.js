import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { minWidth: 120 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth>
        <TextField
        sx={{ textOverflow: 'ellipsis' ,  height: 300 }}
          id="outlined-required"
          label="Նշումներ"
          defaultValue=""
        
        />

      </FormControl>
    </Box>
  );
}
