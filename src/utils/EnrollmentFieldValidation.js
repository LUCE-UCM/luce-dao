export function checkTextField(fieldValue) {
  if (typeof fieldValue === undefined || fieldValue === "") {
    return false;
  }
  return true;
}

export function checkEmailField(fieldValue) {
  let regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regEmail.test(fieldValue)) {
    return false;
  }
  return true;
}
