import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Image, DropdownButton} from 'react-bootstrap';
import ProfileIcon from './ProfileIcon';

const AppNav = () => {

  

    return (
         <div className="navbar__custom__style bg-body-tertiary">
            <div className='container-fluid '>
            <div className="row ">

                {/* Social media side */}
                <div className="col-md-4">
                    <div className="h-100 justify-content-center align-items-center d-flex gap-4 ms-md-5">
                        <Link to="/dashboard">
                            <i className="fa-brands fa-twitter text-dark" title='Twitter'></i>
                        </Link>
                        <Link to="/dashboard">
                            <i className="fa-brands fa-linkedin-in text-dark" title='LinkedIn'></i>                       
                        </Link>
                        <Link to="/dashboard">
                            <i className="fa-brands fa-instagram text-dark" title='Instagram'></i>                       
                        </Link>
                        <Link to="/dashboard">
                        <i className="fa-brands fa-facebook-f text-dark" title='Facebook'></i>                       
                        </Link>
                    </div>
                </div>

                {/* Logo side  */}
                <div className="col-md-4 m-auto ">
                    <div className='h-100 d-flex justify-content-center align-items-center '>
                        <Link className='text-center' to='/'>
                            <img className='w-50 h-100' src="assets\image\Logo.png" alt="Logo" />
                        </Link>
                    </div>
                </div>

                {/* Profile and Login Sign up side  */}
                <div className="col-md-4 ">
                    <ProfileIcon/>
                </div>


            </div>
         </div>
         </div>
    );
};

export default AppNav;