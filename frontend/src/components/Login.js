import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import {reach} from 'yup'
import styled from "styled-components";
import { useHistory } from 'react-router';
import axios from 'axios';

const initialFormValues={
    username:'',
    password:'',
}

const initialErrors={
    username:'',
    password:'',
}

export default function Login(props){
    const [formValues, setFormValues]= useState(initialFormValues)
    const [errors, setErrors]= useState(initialErrors)
    const [disabled, setDisabled]= useState(true)

    const {push} = useHistory();

    const createHandler = () =>{
        push('/register')
    }

    const schema=yup.object().shape({
        username: yup
        .string()
        .required('must have username')
        .min(4, 'must have minimum of 4 characters'),
        password: yup
        .string()
        .required('must have a password')
        .min(6, 'must have minimum of 6 charcters')
    })

    const validate = (name, value) => {
        reach(schema, name)
          .validate(value)
          .then(() => setErrors({ ...errors, [name]: '' }))
          .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
      }

      const onChange=(evt)=>{
          const {name, value}= evt.target
          validate(name, value)
          setFormValues({...formValues, [name]:value})
      }

      const submitForm=()=>{
          const newData={
              username: formValues.username.trim(),
              password: formValues.password,
          }
          setFormValues(initialFormValues)
      }
      const onSubmit=(evt)=>{
          evt.preventDefault()

          axios
          .post('https://build-week-africanmarketplace1.herokuapp.com/api/users/login', formValues)
          .then(res =>{
              console.log(res)
              localStorage.setItem('token', res.data.token)
              push('/additems')
          })
          .catch(err =>{
              console.log(err)
          })

          submitForm()
      }

      useEffect(()=>{
          schema.isValid(formValues).then(valid=>setDisabled(!valid))
      }, [schema, formValues])

      return(
        <FormContainer>
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
            <InputContianer>
            <ErrorsContainer>
                {errors.username}
              </ErrorsContainer>
          <label htmlFor='username'>
            <Input 
            type='text' 
            name='username' 
            value={formValues.username}
            placeholder='Username'
            onChange={onChange}/>
          </label>
          <ErrorsContainer>
              {errors.password}
          </ErrorsContainer>
          <label htmlFor='Password'>
            <Input
            type='password'
            name='password'
            value={formValues.password}
            placeholder='Password'
            onChange={onChange}/>
          </label>
          </InputContianer>
          <ButtonContaitner>
            <Button disabled={disabled}>Login</Button>

            <Button onClick={createHandler}>Create new account?</Button>
            </ButtonContaitner>
        </form>
    </FormContainer>
      )
}

const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  }

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  }

const FormContainer=styled.div`
border: 1px solid darkgrey;
  border-radius: 5px;
  box-shadow: 1px 1px 1px darkgray;
  color: #0e2923;
  margin: 2rem auto 0 auto;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  @media ${device.mobileS} {
    width: 70%;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 40%;
  }
  @media ${device.desktopL} {
    width: 30%;
  }
`

const InputContianer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 1rem;
`
const Input = styled.input`
  border: 2px solid darkgrey;
  border-radius: 3px;
  font-size: 1em;
  margin: 1rem 0;
  padding: 14px;
`
const ButtonContaitner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
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
`
const ErrorsContainer = styled.div`
  color: red;
  text-align: left;
`