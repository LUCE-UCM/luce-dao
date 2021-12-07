import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import styles from "../../assets/css/NewEnrollment.module.css";

function NewEnrollment(props) {
  const [successNewEnrollment, setSuccessNewEnrollment] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [activityNumber, setActivityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [homeZip, setHomeZip] = useState("");
  const [universityZip, setUniversityZip] = useState("");
  const [loading, setLoading] = useState(false);

  const inputActivityNumberRef = useRef();
  const inputEmailRef = useRef();
  const inputAgeRef = useRef();
  const inputHomeZipRef = useRef();
  const inputUniversityZipRef = useRef();
  const generalDivRef = useRef();

  const addEnrollmentButtonHandler = () => {
    setSuccessNewEnrollment(false);
    //resetNewInvoiceFormFields();
    //inputDocNumberRef.current.focus();
    console.log("Has pulsado el botón para añadir un nuevo registro.");
  };

  const activityNumberHandler = (e) => {
    const value = e.target.value;
    setActivityNumber(value);
  };

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const ageHandler = (e) => {
    const value = e.target.value;
    setAge(value);
  };

  const genderHandler = (e) => {
    const value = e.target.value;
    setGender(value);
  };

  const homeZipHandler = (e) => {
    const value = e.target.value;
    setHomeZip(value);
  };

  const universityZipHandler = (e) => {
    const value = e.target.value;
    setUniversityZip(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("has pulsado formulario.");
  };

  return (
    <>
      <div style={{ marginTop: "30px", marginBottom: "30px", float: "right" }}>
        <Tooltip title="Registrar inscripción" arrow>
          <span>
            <Fab
              color="primary"
              aria-label="add"
              disabled={!successNewEnrollment}
              onClick={addEnrollmentButtonHandler}
            >
              <AddIcon />
            </Fab>
          </span>
        </Tooltip>
      </div>
      <Typography variant="h5" className={styles.title} noWrap>
        Registrar inscripción en actividad UCM
      </Typography>
      {!!errorMessages.metamask ? (
        <Alert variant="filled" severity="error" style={{ marginTop: "50px" }}>
          {errorMessages.metamask}
        </Alert>
      ) : (
        <form className={styles.NewEnrollment} onSubmit={onSubmit}>
          <Typography variant="h6" className={styles.title} noWrap>
            Datos de la actividad
          </Typography>
          <br />
          <div className={styles.divForm}>
            <TextField
              id="txtHomeZip"
              label="Cód. Actividad"
              placeholder="Código identificativo..."
              variant="outlined"
              style={{ marginRight: "15px" }}
              width="50ch"
              error={!!errorMessages.activityNumber}
              helperText={errorMessages.activityNumber}
              value={activityNumber}
              onChange={activityNumberHandler}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              inputRef={inputActivityNumberRef}
            />
          </div>
          <br />
          <Divider />
          <Typography variant="h6" className={styles.title} noWrap>
            Datos del estudiante
          </Typography>
          <br />
          <div className={styles.divForm}>
            <TextField
              id="txtEmail"
              label="email"
              variant="outlined"
              style={{ marginRight: "15px" }}
              type="email"
              error={!!errorMessages.email}
              helperText={errorMessages.email}
              value={email}
              onChange={emailHandler}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              inputRef={inputEmailRef}
            />
            <TextField
              id="inputAge"
              label="Edad"
              variant="outlined"
              style={{ marginRight: "20px" }}
              inputProps={{
                type: "number",
                min: 18,
                max: 99,
              }}
              error={!!errorMessages.age}
              helperText={errorMessages.age}
              value={age}
              onChange={ageHandler}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              inputRef={inputAgeRef}
            />
          </div>
          <div className={styles.divForm}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="studentGender"
                value={gender}
                onChange={genderHandler}
                row
              >
                <FormControlLabel
                  value="female"
                  control={<Radio className={styles.radio} />}
                  label="Mujer"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio className={styles.radio} />}
                  label="Hombre"
                />
                <FormControlLabel
                  value="nobinary"
                  control={<Radio className={styles.radio} />}
                  label="No binario"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio className={styles.radio} />}
                  label="Otro"
                />
              </RadioGroup>
            </FormControl>{" "}
          </div>
          <div className={styles.divForm}>
            <TextField
              id="txtHomeZip"
              label="Domicilio familiar"
              placeholder="Código postal..."
              variant="outlined"
              style={{ marginRight: "15px" }}
              width="50ch"
              error={!!errorMessages.homeZip}
              helperText={errorMessages.homeZip}
              value={homeZip}
              onChange={homeZipHandler}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              inputRef={inputHomeZipRef}
            />
            <TextField
              id="txtUniversityZip"
              label="Domicilio durante curso académico"
              placeholder="Código postal..."
              variant="outlined"
              style={{ marginRight: "15px", width: "300px" }}
              width="20ch"
              error={!!errorMessages.universityZip}
              helperText={errorMessages.universityZip}
              value={universityZip}
              onChange={universityZipHandler}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              inputRef={inputUniversityZipRef}
            />
          </div>
          <div
            className={styles.divButtonForm}
            ref={generalDivRef}
            tabIndex={-1}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={loading ? null : <SaveIcon />}
              type="submit"
              disabled={loading || successNewEnrollment}
            >
              {loading ? (
                <CircularProgress style={{ color: "white" }} size="30px" />
              ) : (
                "Guardar"
              )}
            </Button>
          </div>
          <div className={styles.spacer}> </div>
        </form>
      )}
    </>
  );
}

export default NewEnrollment;
