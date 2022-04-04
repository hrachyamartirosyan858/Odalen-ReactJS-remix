import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
// import ListItem from '@mui/material/ListItem';
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemText from '@mui/material/ListItemText';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

// const emails = ["username@gmail.com", "user02@gmail.com"];
const fbLinks = [
  "https://www.facebook.com/odalen.restaurant",
  "https://www.facebook.com/odalen.restaurant",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <a href="https://www.facebook.com/odalen.restaurant">RESTAURANT</a>
      </DialogTitle>
      <DialogTitle>
        <a href="https://www.facebook.com/odalenbeerhouse/">KENTRON</a>
      </DialogTitle>
      {/* <div>
        {fbLinks.map((link) => {
          <a href={link} />;
        })}
      </div> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ iconSrc }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(fbLinks[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
  };

  return (
    <div className="cursor-pointer">
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      {/* <br /> */}
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button> */}
      <img src={iconSrc} width="18px" onClick={handleClickOpen} />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
