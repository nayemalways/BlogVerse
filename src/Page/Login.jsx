import React from 'react';
import LoginComonent from '../Components/LoginComonent';
import Layout from '../Layout/Layout';

const Login = () => {
    return (
        <Layout>
              <div className='container min-vh-100 d-flex align-items-center pt-5'>
                <div className="row w-100 h-50 justify-content-around">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 bg-white">
                        <div className='w-100'>
                            <img className='img-fluid' src="public\assets\image\Login-Registraion\Login.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 align-content-center">
                        <div>
                            <LoginComonent/>
                        </div>
                    </div>
                </div>
             </div>
        </Layout>
    );
};

export default Login;