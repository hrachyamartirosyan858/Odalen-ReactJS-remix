import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputMask from "react-input-mask";
import { Input } from "@mui/material";

export default function Example() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <TextField type="tel"></TextField> */}
        <div>
          <InputMask
            styles={{ outline: "rgb(19, 114, 209)" }}
            label="example"
            mask="✆: +374 (99) 99-99-99"
            className="border-2 border-slate-300 rounded pl-3 mb-6"
            //   placeholder="✆: +374 (__) __-__-__"
            maskChar=" "
            alwaysShowMask
          />
        </div>
        {/* <Input type="tel" label="example" pattern="[0-9]*"/> */}
      </FormControl>
    </Box>
  );
}
