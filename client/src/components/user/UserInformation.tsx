import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function UserInformation() {
  // update user information
  // new data
  // userId
  // token

  // server: endpoint + methods
  // method: put
  // endpoint: http://localhost:8000/users/:userId

  type InitialValue = {
    email: string;
    password: string;
  };
  // initial value
  const initialValues: InitialValue = {
    email: "",
    password: "",
  };

  //validation
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <div>
      <h1>Update User Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const userToken = localStorage.getItem("userToken");
          axios
            .put(
              "http://localhost:8000/users/63ef35c33c6651bd0981e496",
              values,
              { headers: { Authorization: `Bearer ${userToken}` } }
            )
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
