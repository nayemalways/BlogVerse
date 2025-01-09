import React from 'react';
import LoginComonent from '../Components/LoginComonent';

const Login = () => {
    return (
        <>
              <div className='container-fluid min-vh-100 d-flex align-items-center bg-secondary'>
                <div className="row w-100 justify-content-around">
                    <div className="col-6 col-md-4 col-lg-4 p-4 border rounded bg-white">
                        <h1 className='text-center text-primary mb-4'>Sign up</h1>
                         <LoginComonent/>
                    </div>
                </div>
             </div>
        </>
    );
};

export default Login;