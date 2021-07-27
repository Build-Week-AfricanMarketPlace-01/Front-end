import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import {reach} from 'yup'

const initialFormValues={
    name:'',
    place:'',
    price:'',
    description:'',
    category:'',
}

const initialErrors={
    name:'',
    place:'',
    price:'',
    description:'',
    category:'',
}

export default function AddItems(){
    const [formValues, setFormValues]=useState(initialFormValues)
    const [errors, setErrors]=useState(initialErrors)
    const [disabled, setDisabled]= useState(true)

    const schema=yup.object().shape({
        name: yup
        .string()
        .required('Enter your name')
        .min(3, 'Must have minimum of 3 characters'),
        place: yup
        .string()
        .required('Select a location'),
        price: yup
        .number()
        .required('Price is needed'),
        description: yup
        .string()
        .required('Add description to item'),
        category: yup
        .string()
        .required('Add a category'),
        
    })

    const validate=(name,value)=>{
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
            username: formValues.name.trim(),
            place: formValues.place,
            price: formValues.price,
            description: formValues.description,
            category: formValues.category,
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
            <form onSubmit={onSubmit}>
                <h1>Add an Item</h1>
                <input 
                type='text' 
                name='name' 
                placeholder='Name'
                onChange={onChange}
                value={formValues.name}
                />
                <select name='place' onChange={onChange} value={formValues.place}>
                    <option value=''>--Select Location--</option>
                    <option value='Busia'>Busia</option>
                    <option value='Malaba'>Malaba</option>
                    <option value='Taveta'>Taveta</option>
                    <option value='Katuna'>Katuna</option>
                    <option value='Loitokitok'>Loitokitok</option>
                    <option value='Mutukula'>Mutukula</option>
                    <option value='Namanga'>Namanga</option>
                    <option value='Sirare'>Sirare</option>
                </select>

                <input
                type='number'
                name='price'
                placeholder='Price'
                onChange={onChange}
                value={formValues.price}
                />

                <input
                type='text'
                name='description'
                placeholder='Description'
                onChange={onChange}
                value={formValues.description}
                />

                <input
                type='text'
                name='category'
                placeholder='Category'
                onChange={onChange}
                value={formValues.category}
                />

                <button disabled={disabled}>Add Item</button>
            </form>
        </div>
    )
}