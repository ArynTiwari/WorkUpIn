const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
export function validateContact(values: { email: string; name: string; query: string }) {
  const errors: {
    email?: string,
    name?: string,
    query?: string
  } = {};
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
  const errors: {
    email?: string;
    password?: string | string[];
  } = {};

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
  const errors: {
    name?: string | string[];
    email?: string;
    password?: string | string[];
    cpassword?: string | string[];
  } = {};

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
  const errors: {
    title?: string,
    description?: string
  } = {};
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
  const errors: {
    title?: string;
    description?: string;
    amount?: string;
  } = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.amount) {
    errors.amount = "Required";
  }

  return errors;
}
export function validateNewUser(values: {
  firstName: string;
  lastName: string;
  password: string | string[];
  cpassword: string | string[];
  role: string,
  about: string;
  gender: string;
  zip: number | null | undefined;
  city: string;
  state: string;
}) {
  const errors: {
    firstName?: string;
    lastName?: string;
    password?: string;
    cpassword?: string;
    role?: string;
    about?: string;
    gender?: string;
    zip?: string;
    city?: string;
    state?: string;
  } = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.includes(" ", 0 - 9)) {
    errors.lastName = 'Space or Number found!';
  } else if (specialCharacters.test(values.firstName)) {
    errors.firstName = "Special characters found!";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  else if (values.lastName.includes(" ", 0 - 9)) {
    errors.lastName = 'Space or Number found!';
  } else if (specialCharacters.test(values.lastName)) {
    errors.lastName = "Special characters found!";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Too Short!";
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
  if (!values.role) {
    errors.role = "Required";
  }
  if (!values.about) {
    errors.about = "Required";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  if (!values.zip) {
    errors.zip = "Required";
  }else if (values.zip <7) {
    errors.zip = "Invalid!";
  }
   else if (isNaN(values.zip)) {
    errors.zip = "Must be a number";
  }
  if (!values.city) {
    errors.city = "Required";
  }
  if (!values.state) {
    errors.state = "Required";
  }


  return errors;
}