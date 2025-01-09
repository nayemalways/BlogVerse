import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const ProfileIcon = () => {
    const [toggler, setToggle] = useState(false);

    const toggleProfileBar = () => {
        setToggle(!toggler);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".profile-icon-custom") && !e.target.closest(".toggler-profile")) {
                setToggle(false);
            }
        };

        // Attach the event listener
        window.addEventListener("click", handleOutsideClick);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className="h-100 d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-outline-primary">Sign Up</button>
                <button className="btn btn-outline-primary">Login</button>
                <div
                    onClick={toggleProfileBar}
                    className="profile-icon-custom position-relative"
                    title="Profile"
                >
                    <Image
                        className="w-100 rounded-circle"
                        src="public/assets/image/nayem.png"
                        rounded
                    />
                </div>

                {/* Show Profile Bar when toggler is true */}
                {toggler && (
                    <div className="toggler-profile d-flex flex-column border p-2 justify-content-center align-items-center">
                        <Link to="/profile" className="d-block text-decoration-none">
                            Profile
                        </Link>
                        <button className="btn d-block text-danger">Logout</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProfileIcon;
