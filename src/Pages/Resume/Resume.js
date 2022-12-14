import React from 'react';
import resume from '../../images/resume.png';
import Navbar from '../Shear/Navbar';

const Resume = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className=' mx-auto pt-12' src={resume} alt="" />
        </div>
    );
};

export default Resume;