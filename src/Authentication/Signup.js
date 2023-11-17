import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Container } from "react-bootstrap";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Container style={{ width: "520px" }}>
        <div className="p-4 box">
          <h2 className=" text-center mb-4">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="height: 1000px" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                style={{ height: "50px", width: "100%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className=" h-500 mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ height: "50px", width: "100%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account?{" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Log In
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Signup;
