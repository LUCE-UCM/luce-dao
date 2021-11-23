import React, { useState } from "react";
import styles from "../../assets/css/Header.module.css";
import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
//import InvoiceSearchDialog from "../invoice/InvoiceSearchDialog";
import { Navigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {
  const srcLUCELogo = "/images/logo-luce.png";
  const srcMetaMaskFoxIcon = "/images/metamask-fox-icon.svg";

  //let navigate = useNavigate();

  const [invoiceSearch, setInvoiceSearch] = useState(false);
  const [docNumber, setDocNumber] = useState("");
  const [invoiceInfoRedirect, setInvoiceInfoRedirect] = useState(false);

  const invoiceSearchHandler = () => {
    setInvoiceSearch(true);
  };

  const okInvoiceSearchHandler = (invoiceId) => {
    console.log("Document number: ", invoiceId);
    setInvoiceSearch(false);
    setDocNumber(invoiceId);
    setInvoiceInfoRedirect(true);
  };

  const cancelInvoiceSearchHandler = () => {
    console.log("Cancel searching proces...");
    setInvoiceSearch(false);
  };

  if (invoiceInfoRedirect) {
    //return <Redirect to={`/invoice/${docNumber}`}></Redirect>;
    //return navigate(`/invoices/${newInvoice.id}`);
    return <Navigate to="/home" />;
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <img
            src={srcLUCELogo}
            alt="LUCE"
            width="70"
            height="70"
            className={styles.logo}
          />
          <Typography className={styles.title} variant="h5" noWrap>
            LUCE
          </Typography>
          <div className={props.hideGeneralSearch ? styles.hidden : undefined}>
            <Tooltip title="Search for a record by doc number" arrow>
              <IconButton
                aria-label="search"
                color="inherit"
                style={{ marginRight: 20 }}
                onClick={invoiceSearchHandler}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </div>
          <Tooltip title="What is a wallet?" arrow>
            <Link
              color="inherit"
              href="https://ethereum.org/en/wallets/"
              target="_blank"
              style={{ marginRight: 5 }}
            >
              <HelpIcon style={{ color: "#565956", fontSize: 25 }} />
            </Link>
          </Tooltip>
          <Button
            color="secondary"
            onClick={props.clicked}
            endIcon={srcMetaMaskFoxIcon}
            variant="contained"
            disabled={props.metamaskConnected}
          >
            {props.metamaskConnected
              ? "Connected with MetaMask"
              : "Connect with MetaMask"}
          </Button>
        </Toolbar>
      </AppBar>
      {/* 
      {invoiceSearch ? (
        <InvoiceSearchDialog
          invoiceSearchCancelDialogHandler={cancelInvoiceSearchHandler}
          invoiceSearchOKDialogHandler={okInvoiceSearchHandler}
        />
      ) : null}
      */}
    </>
  );
};

export default Header;
