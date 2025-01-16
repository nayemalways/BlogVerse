import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { ApiRequest } from '../apiRequest/api.js';
 

const LoginComonent = () => {

    // Navgation to go another page
    const navigate = useNavigate();
    
    // Form handle using Formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        onSubmit: async (values) => {
            const result = await ApiRequest("POST", "/login", values);
            if(result) {
                navigate('/');
            }
            
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className='border rounded rounded-4 p-5 bg-warning bg-opacity-10'>
            <h1 className='text-center text-primary mb-4'>Login</h1>
            <div className="row">
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
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            onChange={formik.handleChange} 
                            value={formik.values.password} 
                            name='password' 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder='Enter your password'/>
                    </div>

                    <div className='pb-3 d-flex justify-content-between'>
                        <Link to='/register'>Don't have an account?</Link>
                        <Link to='/find-account'>Forget password?</Link>
                    </div>          
            </div>
         
            {/* Button  */}
            <button className="btn btn-primary col-12" type="submit">Button</button>
                 
        </form>
    );
};

export default LoginComonent;