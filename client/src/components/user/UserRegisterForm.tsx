import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserRegisterForm() {
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

  const navigate = useNavigate();
  return (
    <div>
      <h1>User register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios.post("http://localhost:8000/users", values).then((response) => {
            // no need a state here (redux)
            // only a message/alert => navigate to log in
            if (response.status === 200) {
              // register success
              navigate("/login");
              return;
            } else {
              alert("error");
              // Alert - MUI
            }
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
              <Button type="submit">Register</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
