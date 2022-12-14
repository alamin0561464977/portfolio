import React from 'react';

const Navbar = () => {

    return (
        <div>
            <div className="navbar">
                <div className="flex-none">
                    <ul className="menu menu-horizontal bg-slate-600 mb-12 px-1">
                        <li><a href='/' className=' font-bold'>Home</a></li>
                        <li><a href='#projects' className=' font-bold'>Projects</a></li>
                        <li><a href='#skills' className=' font-bold'>Skills</a></li>
                        <li><a href='/blogs' className=' font-bold'>Blogs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;