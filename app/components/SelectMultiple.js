import * as React from "react";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags({options , label}) {
  const [completed, setCompleted] = useState(true);

  function showValue(event, arr) {
    if (arr.length >= 2) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  }

  return (
    <Stack spacing={3} sx={{ minWidth: 120 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={completed ? options : []}
        getOptionLabel={(option) => option.label}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={label} />
        )}
        noOptionsText="Առավելագույնը 2 տաք ուտեստ"
        onChange={showValue}
        //  placeholder="max 2"
      />
    </Stack>
  );
}
