import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function TitlebarBelowImageList({ itemData, title, visible }) {
  return (
    <div
      className={`h-full z-0
    ${
      visible
        ? "opacity-100 duration-200 ease-in-out"
        : "opacity-0 duration-100"
    }
  `}
    >
      <ImageListItem key="Subheader" cols={1}>
        <ListSubheader component="div">{title}</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem>
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
      ))}
    </div>
  );
}
