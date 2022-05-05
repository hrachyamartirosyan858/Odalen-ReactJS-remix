import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem, {
  imageListItemClasses,
} from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 900,
    },
  },
});

export default function TitlebarImageList({ itemData, title, visible }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 250,

          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(3, 1fr)",
            desktop: "repeat(4, 1fr)",
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              style={{ height: "16rem", objectFit: "contain" }}
              src={item.url}
              // src={`${item.url}?w=248&fit=crop&auto=format`}
              // srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>{item.price} ֏</span>}
              // position="below"
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </Box>
    </ThemeProvider>
  );
}
