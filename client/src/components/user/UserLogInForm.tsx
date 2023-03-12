import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../redux/slices/users";

export default function UserLogInForm() {
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
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User log in</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:8000/users/login", values)
            .then((response) => {
              const token = response.data.token;
              localStorage.setItem("userToken", token);
              dispatch(userActions.getUserInformation(response.data.userData));
              // dispatch get user by Id
              if (response.status === 200) {
                navigate("/user");
                return;
              } else {
                alert("error");
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
              <Button type="submit"> Log in</Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
