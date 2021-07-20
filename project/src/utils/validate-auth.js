export const validateAuth = ({password, email}) => {
  let errorsCount = 0;
  const regularExpessionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (password.replace(/\s/g, '').length === 0) {
    errorsCount += 1;
  }
  if (!regularExpessionEmail.test(String(email).toLowerCase())) {
    errorsCount += 1;
  }

  return (errorsCount === 0);
};
