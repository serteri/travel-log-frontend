
import React, {useState , useEffect} from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";

import axios from 'axios';
import './Register.css'
export function RegisterPage(){
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://trevel-logapp-0ef19dc2f4ae.herokuapp.com';
    const[firstName,setFirstName]= useState('')
    const[lastName,setLastName]= useState('')
    const[email,setEmail]= useState('')
    const[address,setAddress]= useState('')
    const[phoneNumber,setPhoneNumber]= useState('')
    const[password,setPassword]= useState('')
    const[firstNameIsValid,setFirstNameIsValid]= useState(true)
    const[lastNameIsValid,setLastNameIsValid]= useState(true)
    const[emailIsValid,setEmailIsValid]= useState(true)
    const[passwordIsValid,setPasswordIsValid]= useState(true)
    const[phoneNumberIsValid,setPhoneNumberIsValid]= useState(true)
    const[error,setError]= useState('')
    const[message,setMessage]= useState('')
    const [formIsValid, setFormIsValid] = useState(false);
    const[formSubmit,setFormSubmit]= useState(true)

    const navigate = useNavigate();

    const navigateToLogin = ()=>{
        //navigate to /login
        navigate('/login');

    }
    useEffect(() => {
        const checking= setTimeout(()=>{
    firstNameValidation();
    lastNameValidation();

    passwordValidation()

        },1000)
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && firstNameIsValid && lastNameIsValid && passwordIsValid && phoneNumberIsValid);
            setPhoneNumberIsValid(phoneNumberIsValid)
        }, 2000);

        return () => {

            clearTimeout(identifier);
            clearTimeout(checking);
        };
    }, [firstName,lastName,email, address, phoneNumber, password, error,emailIsValid,firstNameIsValid,lastNameIsValid,passwordIsValid,phoneNumberIsValid,message]);
    const nameChangeHandler = (event) => {

        setFirstName(event.target.value);
    };

    const firstNameValidation = ()=>{
        setFirstNameIsValid(!/\d/.test(firstName))
    }
    const surnameChangeHandler = (event) => {

        setLastName(event.target.value);

    };
    const lastNameValidation = ()=>{
        setLastNameIsValid(!/\d/.test(lastName))
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);

    };

    const phoneChangeHandler = (event) => {
        setPhoneNumber(event.target.value);
        setPhoneNumberIsValid(!isNaN(event.target.value))
    };

    const addressChangeHandler = (event) => {
        setAddress(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const passwordValidation = ()=>{

        setPasswordIsValid(password.trim().length>6)
        if (password.trim().length ===0 ){
            setPasswordIsValid(true)
        }
    }
    const resetForm = (e) => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('')
        setAddress('')
    }
    const postData = async ()=>{

        const postData = {
            firstName:firstName,
            lastName:lastName,
            email:email,
            phoneNumber:phoneNumber,
            password:password,
            address:address
        }
        await axios.post(`${backendUrl}/register-us`,postData).then(
            response => {setMessage('Successfully Registered!');setFormSubmit(true) ;navigateToLogin()}).catch(error=>{setError('Some error occurred')})

    }


    const registerForm =(e) => {
        e.preventDefault();
        postData();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('')
        setAddress('')
    }

    return(

        <div className="form-element">

                <form action='https://trevel-logapp-0ef19dc2f4ae.herokuapp.com/register-us' className="login-form" onSubmit={registerForm}>

                    <fieldset name="Register">
                        <legend className='register'>Register</legend>
                    <div className="form_elements">
                        <label htmlFor="Name" className='labels'>First Name:</label>
                        <input className="inputs" id="Name" type="text" placeholder="First Name" name="firstName"
                               value={firstName} onChange={nameChangeHandler}  required/>
                    </div>
                        <p className={firstNameIsValid ? "valid" : "invalid"}>Please enter valid name</p>
                    <div className="form_elements">
                        <label htmlFor="Surname" className='labels'>Last Name:</label>
                        <input className="inputs" id="Surname" type="text" placeholder="Last name" name="lastName"
                               value={lastName} onChange={surnameChangeHandler}  required/>
                    </div>
                        <p className={lastNameIsValid ? "valid" : "invalid"}>Please enter valid last name</p>
                    <div className="form_elements">
                        <label htmlFor="email" className='labels'>Email:</label>
                        <input className="inputs" id="email" type="email" placeholder="Email" name="email"
                               value={email} onChange={emailChangeHandler}  required/>
                    </div>
                        <p className={emailIsValid ? "valid" : "invalid"}>Please enter valid email</p>
                    <div className="form_elements">
                        <label htmlFor="phonenumber" className='labels'>Phone Number:</label>
                        <input className="inputs" id="phonenumber" type="tel" placeholder="Starts with 00" name="phoneNumber"
                               value={phoneNumber} onChange={phoneChangeHandler}  required/>
                    </div>
                        <p className={phoneNumberIsValid ? "valid" : "invalid"}>Please enter valid phone number</p>
                    <div className="form_elements">
                        <label htmlFor="address" className='labels'>Address: </label>
                        <input className="inputs-address" id="address" type="text" placeholder="address" name="address"
                               value={address} onChange={addressChangeHandler}  required/>
                    </div>
                    <div className="form_elements">
                        <label htmlFor="password" className='labels'>Password: </label>
                        <input className="inputs" id="password" type="password" placeholder="password" name="password"
                               value={password} onChange={passwordChangeHandler} />
                    </div>
                        <p className={passwordIsValid ? "valid" : "invalid"}>Please enter longer password</p>
                    <div className="buttons">
                        <button type="button" className="button-submit" >Register</button>
                        <button type="reset" onClick={resetForm} className='button-reset'>Reset</button>

                    </div>
                    <p className={formSubmit ? "valid" : "invalid"}>Registration Successful</p>
                    </fieldset>
                </form>


        </div>


    )

}