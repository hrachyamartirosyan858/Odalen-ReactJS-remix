import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";

export default function TitlebarBelowImageList({ itemData, title, visible }) {
  return (
    <ImageList sx={{ width: 1, height: 1 }} cols={1}>
      {/* <div
        className={`flex flex-col md:flex-row md:flex-wrap h-full z-0
    ${
      visible
        ? "opacity-100 duration-200 ease-in-out"
        : "opacity-0 duration-100"
    }
  `}
      > */}
      {/* <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div">{title}</ListSubheader>
      </ImageListItem> */}

      {itemData.map((item, index) => (
        <div className="h-72 overflow-hidden md:h-72 md:w-96">
          <ImageListItem sx={{ height: 1 }}>
            <img
              src={item.url}
              style={{ height: "288px", objectFit: "contain" }}
              // src={`${item.url}?w=248&fit=crop&auto=format`}
              // srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>{item.price} ֏</span>}
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
        </div>
      ))}

      {/* </div> */}
    </ImageList>
  );
}
