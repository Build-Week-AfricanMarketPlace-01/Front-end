import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { reach } from "yup";
import styled from "styled-components";
import axios from "axios";

const initialFormValues = {
  name: "",
  place: "",
  price: "",
  description: "",
  category: "",
};

const initialErrors = {
  name: "",
  place: "",
  price: "",
  description: "",
  category: "",
};

export default function AddItems(props) {
  //added props
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Enter your name")
      .min(3, "Must have minimum of 3 characters"),
    place: yup.string().required("Select a location"),
    price: yup.number().required("Price is needed"),
    description: yup.string().required("Add description to item"),
    category: yup.string().required("Add a category"),
  });

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const submitForm = () => {
    const newData = {
      username: formValues.name.trim(),
      place: formValues.place,
      price: formValues.price,
      description: formValues.description,
      category: formValues.category,
    };
    setFormValues(initialFormValues);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [schema, formValues]);

  return (
    <FormContainer>
      <H1>ADD AN ITEM</H1>
      <form onSubmit={onSubmit}>
        <InputContainer>
          <Errors>{errors.name}</Errors>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
            value={formValues.name}
          />
          <Errors>{errors.place}</Errors>
          <Select name="place" onChange={onChange} value={formValues.place}>
            <option value="">--Select Location--</option>
            <option value="Busia">Busia</option>
            <option value="Malaba">Malaba</option>
            <option value="Taveta">Taveta</option>
            <option value="Katuna">Katuna</option>
            <option value="Loitokitok">Loitokitok</option>
            <option value="Mutukula">Mutukula</option>
            <option value="Namanga">Namanga</option>
            <option value="Sirare">Sirare</option>
          </Select>

          <Errors>{errors.price}</Errors>
          <Input
            type="number"
            name="price"
            placeholder="Price"
            onChange={onChange}
            value={formValues.price}
            min="1"
            style={{ backgroundColor: "rgba(144,144,144,0.25)" }}
          />

          <Errors>{errors.description}</Errors>
          <Input
            type="text"
            name="description"
            placeholder="Description"
            onChange={onChange}
            value={formValues.description}
          />

          <Errors>{errors.category}</Errors>
          <Input
            type="text"
            name="category"
            placeholder="Category"
            onChange={onChange}
            value={formValues.category}
          />
        </InputContainer>
        <Button disabled={disabled}>Add Item</Button>
      </form>
    </FormContainer>
  );
}

const H1 = styled.h1`
  font-size: 2em;
`;
const FormContainer = styled.div`
  border: 1px solid darkgrey;
  border-radius: 7px;
  margin: 1.5rem 16rem;
  padding: 2rem;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem;
`;

const Input = styled.input`
  border: 2px solid darkgrey;
  border-radius: 4px;
  font-size: 1.5em;
  margin: 1rem 4rem;
  padding: 14px;
`;

const Select = styled.select`
  border: 2px solid darkgrey;
  border-radius: 4px;
  font-size: 1.5em;
  margin: 1rem 4rem;
  padding: 14px;
`;

const Button = styled.button`
  background-color: #ed4933;
  border: 0;
  border-radius: 5px;
  color: white;
  height: 3rem;
  letter-spacing: 0.175em;
  line-height: 3rem;
  margin: 1rem auto;
  padding: 0 2rem;
  text-decoration: none;
  text-transform: uppercase;
  width: 30%;
  &:disabled {
    color: black;
    background-color: white;
    border: 2px solid black;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
    transition: all 0.5s ease-out;
  }
`;

const Errors = styled.div`
  color: red;
`;
