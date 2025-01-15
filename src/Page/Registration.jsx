import React from 'react';
import SignUpForm from '../Components/SignUpForm';
import Layout from '../Layout/Layout';



const Registration = () => {
    return (
        <Layout>
             <div className='container min-vh-100 d-flex align-items-center pt-5'>
                <div className="row w-100 justify-content-around">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 ">
                        <div className='w-100 h-100 d-flex flex-column justify-content-center'>
                             <img className='w-100 ' src="../../public/assets/image/Login-Registraion/Registration.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-4 align-content-center">
                        <div>
                            <SignUpForm/>
                        </div>
                    </div>
                </div>
             </div>
        </Layout>
    );
};

export default Registration;