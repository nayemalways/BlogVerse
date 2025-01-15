import React from 'react';
import { Link } from 'react-router-dom';

const LoginComonent = () => {
    return (
        <form className='border rounded rounded-4 p-5 bg-warning bg-opacity-10'>
            <h1 className='text-center text-primary mb-4'>Login</h1>
            <div className="row">
                    <div className="mb-3 col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter your email'/>
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='Enter your password'/>
                    </div>
                    <div className='pb-3 d-flex justify-content-between'>
                        <Link to='/register'>Don't have an account?</Link>
                        <Link to='/find-account'>Forget password?</Link>
                    </div>          
            </div>
         
            {/* Button  */}
            <button className="btn btn-primary col-12" type="button">Button</button>
                 
        </form>
    );
};

export default LoginComonent;