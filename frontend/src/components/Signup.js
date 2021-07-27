import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Signup () {
    const initialFormValues ={
        email: "",
        username:'',
        password:'',
        firstName:'',
        lastName:'',
    }


    const [formValues, setFormValues] = useState(initialFormValues);


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
        setFormValues({...formValues, [name]: value})

    }


    return (
    <div className="signup-form">
      <h1>Sign up</h1>
      <h2>Create a Marketplace account</h2>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              value={formValues.username}
              onChange={onChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <input
              value={formValues.firstName}
              onChange={onChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              value={formValues.lastName}
              onChange={onChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              value={formValues.email}
              onChange={onChange}
              name="email"
              type="text"
              placeholder="email"
            />
          </div>

          <button>Submit</button>

        </form>
      </div>
    </div>
    )
}