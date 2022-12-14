import React from 'react';
import p_1_img_1 from '../../images/p1img1.png';
import p_1_img_2 from '../../images/p1img2.png';
import p_1_img_3 from '../../images/p1img3.png';
import p_2_img_1 from '../../images/p2img1.png';
import p_2_img_2 from '../../images/p2img2.png';
import p_2_img_3 from '../../images/p2img3.png';
import p_3_img_1 from '../../images/p3img1.png';
import p_3_img_2 from '../../images/p3img2.png';
import p_3_img_3 from '../../images/p3img3.png';

const Projects = () => {
    return (
        <div id='projects' className=' p-10'>
            <h1 className=' text-4xl my-8'>Projects</h1>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div className="carousel-item">
                                <img src={p_1_img_1} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_1_img_2} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_1_img_3} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl py-5 font-bold">Laptop Resale Market</h1>
                            <h1 className="text-lg font-bold ">Technologies:</h1>
                            <p className="">React , React Router, Firebase, Mongo DB, Node.js, Express.js, Tailwind CSS, Tostifoy, React icon, JWT</p>
                            <h1 className="text-lg font-bold ">Features:</h1>
                            <ul className="steps steps-vertical">
                                <li data-content="●" className="step">Users can login/signup using their email and password or google, Order Product, see my Orders end delete
                                    Order, Blogs</li>
                                <li data-content="●" className="step">User create a seller account, Seller: Add Product, see my product, show advertisement end delete Product</li>
                                <li data-content="●" className="step">ADMIN: see All Buyers, All Seller, Make Admin, see All reported Products, delete reported Product, delete
                                    seller end delete Buyer</li>
                                <li data-content="●" className="step">Mobile and desktop responsive</li>
                            </ul>
                            <p className=' text-xl font-bold'>
                                <a href="https://laptop-resale-market.web.app/" className=' text-green-500 underline'>Website</a> ||
                                <a href="https://github.com/alamin0561464977/laptop-resale-market-clint" className=' text-green-500 underline'> Clint Site </a> ||
                                <a href="https://github.com/alamin0561464977/laptop-resale-market-server" className=' text-green-500 underline'> Server Site </a> </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div className="carousel-item">
                                <img src={p_2_img_1} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_2_img_2} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_2_img_3} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl py-5 font-bold">The Magic Hour
                                Photographer</h1>
                            <h1 className="text-lg font-bold ">Technologies:</h1>
                            <p className="">React , React Router, Firebase, Mongo DB, Node.js, Express.js, Tailwind CSS, React Photo viewer</p>
                            <h1 className="text-lg font-bold ">Features:</h1>
                            <ul className="steps steps-vertical">
                                <li data-content="●" className="step">Users can login/signup using their email and password or google, see Service, add Service, Blogs</li>
                                <li data-content="●" className="step">User see service details, user can service Review, user see my Review, Update Review end delete Review</li>
                                <li data-content="●" className="step">Mobile and desktop responsive</li>
                            </ul>
                            <p className=' text-xl font-bold'>
                                <a href="https://photographer-37446.web.app/" className=' text-green-500 underline'>Website</a> ||
                                <a href="https://github.com/alamin0561464977/photographer-clint" className=' text-green-500 underline'> Clint Site </a> ||
                                <a href="https://github.com/alamin0561464977/photographer-server" className=' text-green-500 underline'> Server Site </a> </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div className="carousel-item">
                                <img src={p_3_img_1} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_3_img_2} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                            <div className="carousel-item">
                                <img src={p_3_img_3} className="rounded-box h-[500px] w-[400px]" alt='' />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl py-5 font-bold">We will Learn Programming</h1>
                            <h1 className="text-lg font-bold ">Technologies:</h1>
                            <p className="">React , React Router, Firebase, Node.js, Express.js, Tailwind CSS, API data, React PDF</p>
                            <h1 className="text-lg font-bold ">Features:</h1>
                            <ul className="steps steps-vertical">
                                <li data-content="●" className="step">Users can login/signup using their email and password or google</li>
                                <li data-content="●" className="step">6 courses, course details, Download PDF, Parses course, Blogs</li>
                                <li data-content="●" className="step">Mobile and desktop responsive</li>
                            </ul>
                            <p className=' text-xl font-bold'>
                                <a href="https://learn-programming-2b194.web.app/courses" className=' text-green-500 underline'>Website</a> ||
                                <a href="https://github.com/alamin0561464977/learn-programming-client" className=' text-green-500 underline'> Clint Site </a> ||
                                <a href="https://github.com/alamin0561464977/learn-programming-server" className=' text-green-500 underline'> Server Site </a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;