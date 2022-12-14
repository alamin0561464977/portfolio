import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from '../../images/alamin-bg-remove.png';
import Navbar from '../Shear/Navbar';


const TopBanner = () => {
    return (
        <div className="hero min-h-screen text-white" style={{ backgroundImage: `url("http://24.media.tumblr.com/2157bb201b8f13db970a39af62b92f88/tumblr_n52b2hmsH11shpedgo1_500.gif")` }}>
            <div className="hero-overlay">
                <Navbar></Navbar>
            </div>
            <div className="hero-content text-neutral-content">
                <div className=' grid grid-cols- md:grid-cols-2 lg:grid-cols-2 gap-8 content-center items-center'>
                    <div>
                        <img className=' w-[400px] h-full mt-12' src={img} alt="" />
                    </div>
                    <div className=' '>
                        <h1 className='font-bold text-4xl mb-8'><samp className='  text-5xl'>Hello!</samp><br />
                            My Name is Al Amin</h1>
                        <p className=' font-bold text-xl '>I'm a Font end web Developer</p>
                        <div className=' my-6'>
                            <Link to='/resume'>
                                <button className="btn btn-secondary mr-4 hover:border-t-fuchsia-400 w-32">Resume</button>
                            </Link>
                            <Link to="#contactMe">
                                <button className="btn btn-outline btn-accent">Contact Me</button>
                            </Link>
                        </div>
                        <div className=' flex gap-4'>
                            <a
                                href="https://github.com/alamin0561464977"
                            ><FaGithub className=' text-4xl hover:text-slate-500' /></a>
                            <a href="https://www.linkedin.com/in/al-amin-b0034b234/">
                                <FaLinkedinIn className=' text-4xl hover:text-slate-500' /></a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100082330179416">
                                <FaFacebook className=' text-4xl hover:text-slate-500' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopBanner;