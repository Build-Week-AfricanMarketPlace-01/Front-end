import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import * as yup from 'yup'
import {reach} from 'yup'

export default function Signup () {
    const initialFormValues ={
        email: "",
        username:'',
        password:'',
        firstName:'',
        lastName:'',
    }

    const initialErrors={
      username:'',
      email: "",
      password:'',
      firstName:'',
      lastName:'',
    }


    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors]=useState(initialErrors)
    const [disabled, setDisabled]= useState(true)

    const schema=yup.object().shape({
      username: yup
      .string()
      .required('Needs username')
      .min(3, 'needs atleast 3 charcters' ),
      email: yup
      .string()
      .required('Email is required'),
      password: yup
      .string()
      .min(6, 'Password must be atleast 6 charcters')
      .required('password required'),
      firstName: yup
      .string()
      .required('Name is required')
      .min(3, 'Minimum of 3 charcters'),
      lastName:yup
      .string()
      .min(3, 'minimum of 3 charcters')
      .required('last name required')

    })

    const validate=(name,value)=>{
      reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
  }

    const onSubmit = evt => {
        evt.preventDefault()
        axios
            .post(/*Insert endpoint here*/ formValues)
            .then(res =>{
                console.log(res.data)
                setFormValues(initialFormValues)
                // how do we change URLS now?
            })
            .catch(err => {
                console.log(err)
                setFormValues(initialFormValues)
            })
    }   

    const onChange = evt => {
        const {name, value} = evt.target
        validate(name, value)
        setFormValues({...formValues, [name]: value})

    }
    useEffect(()=>{
      schema.isValid(formValues).then(valid=>setDisabled(!valid))
  }, [schema, formValues])

    return (
    <FormContainer className="signup-form">
      <h1>Sign up</h1>
      <h2>Create a Marketplace account</h2>
      <div>
        <form onSubmit={onSubmit}>
          <InputContainer>
          <div>
            <Error>{errors.username}</Error>
            <Input
              value={formValues.username}
              onChange={onChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <Error>{errors.password}</Error>
            <Input
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <Error>{errors.firstName}</Error>
            <Input
              value={formValues.firstName}
              onChange={onChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <Error>{errors.lastName}</Error>
            <Input
              value={formValues.lastName}
              onChange={onChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <Error>{errors.email}</Error>
            <Input
              value={formValues.email}
              onChange={onChange}
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <Button disabled={disabled}>Submit</Button>

        </InputContainer>
        </form>
      </div>
      
    </FormContainer>
    )
}

const FormContainer=styled.div`
border:1px solid darkgrey;
border-radius: 7px;
margin:3rem 16rem;
padding:2rem;
text-align: center;
`
const InputContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin:4rem;
`
const Input=styled.input`
border: 2px solid darkgrey;
border-radius: 4px;
font-size: 1.5em;
margin:1rem 4rem;
padding:14px;
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
const Error=styled.div`
color:red;
`