import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewUser } from "../action/actions";

const FormAddNew = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAddNewUser = async (e) => {
    e.preventDefault();
    const userRequest = {
      username: name,
      email: email,
      password: password,
    };
    dispatch(createNewUser(userRequest));
  };

  return (
    <>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="UserName"
            />
          </Form.Group>
          <Button
            onClick={(e) => handleAddNewUser(e)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAddNew;
