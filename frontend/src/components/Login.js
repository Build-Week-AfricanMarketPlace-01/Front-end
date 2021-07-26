import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import {reach} from 'yup'

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

    // const update=(name, value)=>{
        
    // }
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
          submitForm()
      }

      useEffect(()=>{
          schema.isValid(formValues).then(valid=>setDisabled(!valid))
      }, [schema, formValues])

      return(
          <div>
              <h1>Login</h1>

              <form onSubmit={onSubmit}>
                  <div className='errors'>
                      <div>{errors.username}</div><br/>
                      <div>{errors.password}</div><br/>
                  </div>
                <label htmlFor='username'>Username:
                  <input 
                  type='text' 
                  name='username' 
                  value={formValues.username}
                  placeholder='username'
                  onChange={onChange}/>
                </label><br/><br/>

                <label htmlFor='Password'>Password:
                  <input
                  type='password'
                  name='password'
                  value={formValues.password}
                  placeholder='password'
                  onChange={onChange}/>
                </label><br/><br/>
                  <button disabled={disabled}>Login</button>
              </form>
          </div>
      )
}