export const validMail = (email: string) => {
  const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email) && email.length !== 0) {
    return true;
  } else {
    return false;
  }
};

export const validPassword = (password: string) => {

  const reg =
    /^(?=.*[A-Z])(?=.*[^ ])(?=.*\d)(?!(.*(?:${["qwerty", "root", "admin", "12345", "password","Abc123"].join('|')})))[A-Za-z\d\S]{8,}$/;
  if (reg.test(password)) {
    return true;
  } else {
    return false;
  }
};
