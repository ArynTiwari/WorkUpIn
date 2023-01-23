/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export function validateContact(values: { email: string; name: string; query: string }) {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
}

export function login_validate(values: {
  email: string;
  password: string | string[];
}) {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
}

export function registerValidate(values: {
  name: string | string[];
  email: string;
  password: string | string[];
  cpassword: string | string[];
}) {
  const errors: any = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Must be greater then 8 and less then 20 characters long!";
  } else if (values.password.includes(" ")) {
    errors.password = "Cannot contain blank spaces!";
  }

  // validate confirm password
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password Not Match...!";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }

  return errors;
}
export function validateBlogs(values: { title: string; description: string }) {
  const errors: any = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }

  return errors;
}
export function validateProjects(values: {
  title: string;
  description: string;
  amount: string;
}) {
  const errors: any = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.amount) {
    errors.price = "Required";
  }

  return errors;
}
export function validateNewUser(values: {
  firstName: string;
  lastName: string;
  password: string | string[];
  cpassword: string | string[];
  about: string;
  gender: string;
  zip: number | null | undefined;
  city: string;
  state: string;
}) {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.includes(" ", 0 - 9)) {
    errors.lastName = "Cannot contain special characters or numbers";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Password Not Match...!";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "Invalid Confirm Password";
  }
  if (!values.about) {
    errors.description = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  return errors;
}