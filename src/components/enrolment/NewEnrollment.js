import React, { useState, useRef, useEffect } from "react";
import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import styles from "../../assets/css/NewEnrollment.module.css";
import { faculties, studies, courses } from "../../utils/enrollmentconfig";

function NewEnrollment(props) {
  const [successNewEnrollment, setSuccessNewEnrollment] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [activityNumber, setActivityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [homeZip, setHomeZip] = useState("");
  const [universityZip, setUniversityZip] = useState("");
  const [ucmAssociation, setUCMAssociation] = useState(false);
  const [currentFaculty, setCurrentFaculty] = useState("faculty00");
  const [currentStudy, setCurrentStudy] = useState("study00");
  const [currentCourse, setCurrentCourse] = useState("course00");

  const [otherAssociation, setOtherAssociation] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputActivityNumberRef = useRef();
  const inputEmailRef = useRef();
  const inputAgeRef = useRef();
  const inputHomeZipRef = useRef();
  const inputUniversityZipRef = useRef();
  const inputFacultyRef = useRef();
  const inputStudyRef = useRef();
  const inputCourseRef = useRef();
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

  const facultySelectHandler = (e) => {
    //Reset the errors.
    setErrorMessages({});
    if (e.target.value !== "faculty00") {
      setCurrentFaculty(e.target.value);
      setCurrentStudy("study00");
    }
  };

  const studySelectHandler = (e) => {
    setErrorMessages({});
    if (e.target.value !== "study00") {
      setCurrentStudy(e.target.value);
      setCurrentCourse("course00");
    }
  };

  const courseSelectHandler = (e) => {
    setErrorMessages({});
    if (e.target.value !== "course00") {
      setCurrentCourse(e.target.value);
    }
  };

  const handleUCMAssocChange = (e) => {
    const isChecked = e.target.checked;
    setUCMAssociation(isChecked);
  };

  const handleOtherAssocChange = (e) => {
    const isChecked = e.target.checked;
    setOtherAssociation(isChecked);
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
              id="selectFaculty"
              select
              label="Facultad"
              variant="outlined"
              style={{ marginRight: "15px" }}
              value={currentFaculty}
              onChange={facultySelectHandler}
              error={!!errorMessages.faculty}
              helperText={errorMessages.faculty}
              inputRef={inputFacultyRef}
            >
              <MenuItem key="faculty00" value="faculty00">
                Seleccionar una Facultad...
              </MenuItem>
              {faculties.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="selectStudy"
              select
              label="Estudios"
              variant="outlined"
              value={currentStudy}
              onChange={studySelectHandler}
              disabled={currentFaculty === "faculty00"}
              style={{ marginRight: "15px" }}
              error={!!errorMessages.study}
              helperText={errorMessages.study}
              inputRef={inputStudyRef}
            >
              <MenuItem key="study00" value="study00">
                Seleccionar estudios...
              </MenuItem>
              {studies.map((option) =>
                option.faculty === currentFaculty ? (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    data-name={option.name}
                  >
                    {option.name}
                  </MenuItem>
                ) : null
              )}
            </TextField>
            <TextField
              id="selectCourse"
              select
              label="Curso"
              variant="outlined"
              disabled={
                currentFaculty === "faculty00" || currentStudy === "study00"
              }
              value={currentCourse}
              onChange={courseSelectHandler}
              error={!!errorMessages.course}
              helperText={errorMessages.course}
              inputRef={inputCourseRef}
            >
              <MenuItem key="course00" value="course00">
                Seleccionar curso...
              </MenuItem>
              {courses.map((option) =>
                option.study === currentStudy ? (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ) : null
              )}
            </TextField>
          </div>
          <div className={styles.divForm}>
            <TextField
              id="txtHomeZip"
              label="Domicilio familiar"
              placeholder="Código postal..."
              variant="outlined"
              /** Equivalent to className = {styles.textField} **/
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
              style={{ width: "300px" }}
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
          <div className={styles.divForm}>
            <FormLabel component="legend">Pertenencia a asociaciones</FormLabel>{" "}
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ucmAssociation}
                    onChange={handleUCMAssocChange}
                    inputProps={{ "aria-label": "controlled" }}
                    className={styles.checkbox}
                  />
                }
                label="UCM"
                style={{ marginRight: "15px" }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={otherAssociation}
                    onChange={handleOtherAssocChange}
                    inputProps={{ "aria-label": "controlled" }}
                    className={styles.checkbox}
                  />
                }
                label="Externas a UCM"
              />
            </FormGroup>{" "}
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