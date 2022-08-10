import "./Register.css"

import { useState } from 'react'
import { FormInput } from "../FormInput/FormInput"
import { Link } from "react-router-dom"

export const Register = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        birthday: '',
        password: '',
        confirmPassword:'',
    })
    const inputs = [
        {
            id: 1,
            name:"username",
            type: 'text',
            placeholder: 'johnny1990',
            label: 'Username:',
            errorMessage:"Username should be 3-16 characters and shoudn't include any special characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name:"email",
            type: 'email',
            placeholder: 'johnny90@example.com',
            label: 'Email:',
            errorMessage:"It should be a valid e-mail address!",
            required: true,
        },
        {
            id: 3,
            name:"birthday",
            type: 'date',
            placeholder: 'Birthday',
            label: 'Birthday:',
        },
        {
            id: 4,
            name:"password",
            type: 'password',
            placeholder: '********',
            label: 'Password:',
            errorMessage:"Password should be 6-20 characters!",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 5,
            name:"confirmPassword",
            type: 'password',
            placeholder: '********',
            label: 'Confirm Password:',
            errorMessage:"Passwords don't match",
            pattern: values.password,
            required: true,
        },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="auth-data">
                <h1 className="auth-h1">Register</h1>
                {inputs.map((input) => (
                    <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[input.name]}
                    onChange={onChange}/>
                ))}
                                <Link to="/login" className='auth-redirect'>
                Redirect to login</Link>
                <button className="submit-button">Register</button>
            </form>
        </div>
    )
}