import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

//Using Hooks.
export default function EnrollmentUCMAssociations(props) {
  return props.ucmAssociations.map((ucmAssociation, index) => {
    return (
      <Button
        variant="contained"
        style={{
          marginRight: "10px",
          marginBottom: "5px",
          textTransform: "none",
          backgroundColor: "#e8e8e9",
        }}
        startIcon={props.canDelete ? <DeleteIcon /> : null}
        key={ucmAssociation.id}
        onClick={props.canDelete ? () => props.clicked(index) : null}
      >
        {ucmAssociation.name}
      </Button>
    );
  });
}
