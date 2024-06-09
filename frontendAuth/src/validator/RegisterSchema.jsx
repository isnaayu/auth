import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: yup.string().required("Name is required"),
  mobilePhone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
});

export default RegisterSchema;
