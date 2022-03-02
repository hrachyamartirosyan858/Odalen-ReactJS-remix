import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonSubmit({ value, type }) {
  const [buttonVerson, setButtonVerson] = useState("outlined");
  return (
    <div className="flex flex-row justify-center p-2">
      <Stack spacing={2} sx={{ minWidth: 300 }}>
        <Button
          sx={{ fontWeight: "bold", fontSize: 18 }}
          onMouseOver={() => setButtonVerson("contained")}
          onMouseLeave={() => setButtonVerson("outlined")}
          variant={buttonVerson}
          type={type}
        >
          {value}
        </Button>
      </Stack>
    </div>
  );
}
