import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <form className='border rounded rounded-4 p-5 bg-warning bg-opacity-10'>
            <h1 className='text-center text-primary mb-4'>Registration</h1>
            <div className="row">
                    <div className="mb-3 col-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName"  placeholder='Enter your first name'/>
                    </div>
                        <div className="mb-3 col-6">
                        <label htmlFor="firstName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder='Enter your last name'/>
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter your email'/>
                    </div>
                    <div className="mb-3 col-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='Enter your password'/>
                    </div>

                    <div className="mb-3 col-6">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder='Enter phone number'/>
                    </div>

                    <div className="mb-3 col-6">
                        <label htmlFor="profileImg" className="form-label">Profile Image</label>
                        <input type="file" className="form-control" id="profileImg" placeholder='Please provide a valid image link'/>
                    </div>
                    <div className="mb-3 col-6">
                         <Link to='/login'>Already have an account?</Link>
                    </div>
                    
            </div>
         
            {/* Button  */}
            <button className="btn btn-primary col-12" type="button">Button</button>
                 
        </form>
      
    );
};

export default SignUpForm;