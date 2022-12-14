import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a75wq6g', 'template_irqbs5g', form.current, 'XEJbT1MTxjZckqXBV')
            .then((result) => {
                console.log(result.text);
                toast.success('Success!!!');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className=' p-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" lg:w-[400px] lg:text-left">
                        <img className=' w-96' src="https://img.freepik.com/free-vector/chatbot-customer-service-abstract-concept_335657-3037.jpg?w=360" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <h1 className="text-5xl text-center font-bold text-white">Contact Me</h1>
                        <form ref={form} onSubmit={sendEmail} className="card-body text-black">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Name</span>
                                </label>
                                <input required name='name' type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Phone</span>
                                </label>
                                <input required name='phone' type="text" placeholder="phone" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Your Messages</span>
                                </label>
                                <textarea required name='message' className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Submit' className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;