import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";

export default function MetaMaskNetworkDialog(props) {
  const [openNetworDialog, setOpenNetworkDialog] = useState(true);

  const networkDialogCloseHandler = () => {
    setOpenNetworkDialog(false);
    props.metamaskNetDialogHandler();
  };

  return (
    <>
      <Dialog
        open={openNetworDialog}
        onClose={networkDialogCloseHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          MetaMask Network Selection
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Switch to the Rinkeby Test Network in MetaMask.
            <br />
            Please, change your network in your MetaMask extension.
            <br />
            Then close this dialog in order to reload the page and try again.
            <br />
            <br />
            You're currently on: <strong>{props.currentNetwork}.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={networkDialogCloseHandler} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
