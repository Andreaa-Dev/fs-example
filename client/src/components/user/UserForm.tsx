import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
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

  const navigate = useNavigate();
  return (
    <div>
      user log in with email and password
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // send user email and password to server
          // methods: post, endpoint: http://localhost:8000/users/login
          axios
            .post("http://localhost:8000/users/login", values)
            .then((response) => {
              console.log(response, "response");
              const token = response.data.token;
              // save this token to local storage
              localStorage.setItem("userToken", token);
              // navigate to the user page
              navigate("/user");
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
              <Button type="submit"> Log in</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
