export function checkTextField(fieldValue) {
  if (typeof fieldValue === undefined || fieldValue === "") {
    return false;
  }
  return true;
}

export function checkEmailField(fieldValue) {
  ///^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
  let regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(fieldValue)) {
    return false;
  }
  return true;
}

export function checkUCMEmailField(fieldValue) {
  //let regUCMEmail = /^[a-zA-Z0-9]+@+"ucm.es";
  let regEmail = /^[a-zA-Z0-9]+@ucm.es/;
  if (!regEmail.test(fieldValue)) {
    return false;
  }
  return true;
}

export function checkNumberField(fieldValue) {
  const numberValue = parseFloat(fieldValue);
  if (isNaN(numberValue)) {
    return false;
  }
  return true;
}

export function checkListField(fieldValue) {
  //Check that at least the list contains one element.
  if (typeof fieldValue === undefined || fieldValue.length === 0) {
    return false;
  } else {
    return true;
  }
}
