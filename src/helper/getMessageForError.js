import { deepFind } from "./deepFind";

export const getMessageForError = (v$, key) => {
  let validateVal = deepFind(v$, key);
  // console.log(validateVal);
  if (validateVal) {
    if (validateVal.$invalid) {
      if (validateVal.$errors[0]) return validateVal.$errors[0].$message;
    }
  }
  return "";
};
