import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function UserInformation() {
  type InitialValue = {
    email: string;
    password: string;
  };
  const initialValues: InitialValue = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const userInformation = useSelector(
    (state: RootState) => state.users.userInformation
  );
  console.log(userInformation, "user");

  return (
    <div>
      <h1> User information</h1>
      <p>Email:{userInformation.email}</p>
      <p>First name: {userInformation.firstName}</p>
      <h1>Update User Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const userToken = localStorage.getItem("userToken");
          axios
            .put(`http://localhost:8000/users/${userInformation._id}`, values, {
              headers: { Authorization: `Bearer ${userToken}` },
            })
            .then((response) => {
              console.log(response, "new information");
            });
        }}
      >
        {({ errors, touched, handleChange, values }) => {
          return (
            <Form>
              <TextField
                name="email"
                label="email"
                required
                onChange={handleChange}
              ></TextField>
              {errors.email && touched.email ? <p> {errors.email}</p> : null}
              <TextField
                name="password"
                label="password"
                type="password"
                required
                onChange={handleChange}
              ></TextField>
              {errors.password && touched.password ? (
                <p> {errors.password}</p>
              ) : null}
              <Button type="submit"> Update</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
