import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate("/");
    }
  };
  return (
    <Form className="d-flex" onSubmit={submitHandler}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setKeyword(e.target.value)}
        name="q"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2 btttttn">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
