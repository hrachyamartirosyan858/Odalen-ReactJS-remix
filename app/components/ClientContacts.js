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

export default function Contacts() {
  return (
    <div className="border m-3 p-2">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <TextField label="Էլ. փոստ" type="email" id="email"></TextField>
        </FormControl>
      </Box>
      <InputMask
        className="input-mask border rounded pl-3 mt-3 hover:border-black"
        mask="🕿: +374 (99) 99-99-99"
        //   placeholder="✆: +374 (__) __-__-__"
        alwaysShowMask
      />
    </div>
  );
}
