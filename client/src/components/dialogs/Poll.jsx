import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsPoll } from "../../redux/reducers/misc";
import React, { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const { isPoll } = useSelector((state) => state.misc);
  const dispatch = useDispatch();
  const [options, setOptions] = useState(new Array(1).fill(" "));
  const handleClose = () => {
    dispatch(setIsPoll(false));
  };
  const [question, setQuestion] = useState("");
  const addOption = () => {
    setOptions((prev) => [...prev, " "]);
  };

  const handleChange = (e, index) => {
    let currOption = [...options];
    currOption[index] = e.target.value;
    setOptions([...currOption]);
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isPoll}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Poll
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography>Question</Typography>
          <input
            type="text"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
          <Box>
            <div
              style={{
                dislay: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {options.map((option, index) => {
                console.log(index);
                return (
                  <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => handleChange(e, index)}
                    placeholder="option"
                  />
                );
              })}
            </div>
          </Box>

          <Button onClick={addOption}>Add</Button>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
