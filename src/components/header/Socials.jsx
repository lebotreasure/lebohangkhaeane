import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
    return (
        <div className='header_socials'>
            <a href='linkedin.com/in/lebohang-khaeane-03a388192' target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href='https://github.com/lebotreasure' target="_blank" rel='noreferrer'><FaGithub /></a>
        </div>
    )
}

export default Socials