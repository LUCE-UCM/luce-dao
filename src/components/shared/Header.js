import React from "react";
import styles from "../../assets/css/Header.module.css";
import {
  Avatar,
  AppBar,
  Toolbar,
  Link,
  Typography,
  Tooltip,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import Button from "@mui/material/Button";

const Header = (props) => {
  const srcLUCELogo = "/images/logo-luce.png";
  const srcMetaMaskFoxIcon = "/images/metamask-fox-icon.svg";
  const metamaskConnectionHandler = async () => {
    console.log("Has pulsado el botón MetaMask");
  };

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
          <Tooltip title="¿Qué es MetaMask?" arrow>
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
            onClick={metamaskConnectionHandler}
            endIcon={<Avatar alt="MetaMask" src={srcMetaMaskFoxIcon}></Avatar>}
            variant="contained"
            disabled={props.metamaskConnected}
          >
            {props.metamaskConnected
              ? "Sesión con MetaMask iniciada"
              : "Conectar con MetaMask"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
