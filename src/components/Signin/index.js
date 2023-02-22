import React from 'react'
import { Container, Text,Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon 
        } from './SigninElements'
//import firebase
import { collection, addDoc } from "firebase/firestore";
import db from './Firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    // Initialize Firebase
const firebaseConfig = {
    // your firebase config here
  };


    const handleSubmit =async  (event) => {
        if (submitted) {
            
        } else {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        console.log('Form Data:', formData)
        console.log('Name:', name);
        console.log('Email:', email);
        const docRef = await addDoc(collection(db, "users"), {
            _name: name,
            _email: email
          });
        setSubmitted(true);}
      };

  return (
    <>
        {/* <Container> */}
            
            <FormWrap id='wrap'>
                <FormContent>
                <Form onSubmit={handleSubmit} id='form'>
                {submitted ? <><FormH1>Thank you for registering your interest!</FormH1></>
                : <> <FormH1>Be notified when we launch</FormH1>
                <FormLabel htmlFor='name'>Name</FormLabel>
                    <FormInput type='string' name='name' required />
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email' name='email' required />
                    <FormButton type='submit'>Continue</FormButton> </>}
                    
                </Form>
                </FormContent>
            </FormWrap>
        {/* </Container> */}
    </>
  )
}

export default Signin
