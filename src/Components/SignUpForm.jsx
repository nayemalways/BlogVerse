import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
 import { Link, useNavigate } from 'react-router-dom';

import { getBase64 } from '../Helper/helper';
import { ApiRequest } from '../apiRequest/api.js';


const SignUpForm = () => {

    // Navigation to page usign react useNavigate Hook
    const navigate = useNavigate();

    // Form controll with formik
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            img:  ""
        },


        // Form validation using Yup packages
        validationSchema: Yup.object({
            firstName:  Yup.string().min(2, "First name must have at least 2 characters").required("First name is required"),
            lastName: Yup.string().min(2, "Last name must have at least 2 characters").required("Last name is required"),
            email: Yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,"Invalid email address").required("Email is required"),
            password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Weak password").required("Password is required"),
            phone: Yup.string().min(11, "Phone number at least 11 digit").required("Number is required")
        }),


        // Form on submit
        onSubmit: async (values) => {
            const result = await ApiRequest("POST", "/register", values);
            result ? navigate('/login') : navigate('/Register'); 
        }
    })



        // Convert image to Base64 and set in Formik's `img` field
    const handleProfileImg = (e) => {
        const imgFile = e.target.files[0];
        if (imgFile) {
            getBase64(imgFile, (base64) => {
                formik.setFieldValue("img", base64); // Dynamically update the `img` field
            });
        }
    };

    

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='border rounded rounded-4 p-5 bg-warning bg-opacity-10'>
                <h1 className='text-center text-primary mb-4 fw-bold'>Registration</h1>
                <div className="row">
                        <div className="mb-3 col-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input 
                            onChange={formik.handleChange} 
                            value={formik.values.firstName} 
                            type="text" 
                            className="form-control"
                            name='firstName' 
                            id="firstName"  
                            placeholder='Enter your first name'/>
                            {formik.touched.firstName && formik.errors.firstName && <span style={{color: "red"}}>{formik.errors.firstName}</span>}
                        </div>
                            <div className="mb-3 col-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input 
                            onChange={formik.handleChange} 
                            value={formik.values.lastName} 
                            type="text" 
                            className="form-control"
                            name='lastName' 
                            id="lastName" 
                            placeholder='Enter your last name'/>
                            {formik.touched.lastName && formik.errors.lastName && <span style={{color: "red"}}>{formik.errors.lastName}</span>}
                        </div>

                        <div className="mb-3 col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                            onChange={formik.handleChange} 
                            value={formik.values.email} 
                            type="email" 
                            className="form-control"
                            name='email' 
                            id="email" 
                            placeholder='Enter your email'/>
                            {formik.touched.email && formik.errors.email && <span style={{color: "red"}}>{formik.errors.email}</span>}
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                            onChange={formik.handleChange} 
                            value={formik.values.password} 
                            type="password" 
                            className="form-control"
                            name='password' 
                            id="password" 
                            placeholder='Enter your password'/>
                            {formik.touched.password && formik.errors.password && <span style={{color: "red"}}>{formik.errors.password}</span>}
                        </div>

                        <div className="mb-3 col-6">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input 
                            onChange={formik.handleChange} 
                            value={formik.values.phone} 
                            type="text" 
                            className="form-control" 
                            name='phone'
                            id="phone" 
                            placeholder='Enter phone number'/>
                            {formik.touched.phone && formik.errors.phone && <span style={{color: "red"}}>{formik.errors.phone}</span>}
                        </div>

                        <div className="mb-3 col-6">
                            <label htmlFor="img" className="form-label">Profile Image</label>
                            <input 
                            onChange={handleProfileImg} 
                            
                            type="file" 
                            className="form-control" 
                            name='img' 
                            id="img" 
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <Link to='/login'>Already have an account?</Link>
                        </div>
                        
                </div>
            
                {/* Button  */}
            <button className="btn btn-primary col-12" type="submit">Submit</button>
                 
        </form>
        </>
      
    );
};

export default SignUpForm;