import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion({ title, children }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children.map((item, index) => {
              return (
                <div
                  className="flex flex-row items-center justify-start border-b-2"
                  key={index}
                >
                  <picture className="p-4 w-2/3">
                    <source srcSet={item.urlAvif} type="image/avif" />
                    <source srcSet={item.urlWebP} type="image/webp" />
                    <img width="100%" height="auto" src={item.url} alt="" />
                  </picture>
                  <div className="flex flex-col">
                    <div>{item.name}</div>
                    <div>{item.price} ֏</div>
                  </div>
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
