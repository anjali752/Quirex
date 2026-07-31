import Navbar from '../landingPage/Navbar';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required().min(10),
  subject: yup.string().required().min(2).max(200),
  message: yup.string().required().min(2).max(1000)
});

const ContactUs = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const contactUser = async (data) => {

    const response = await axios.post('http://localhost:9000/api/contact-us', data);
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Contact Us",
        text: response?.data?.message,
        icon: "success"
      })
      navigate('/')
      reset()
    }
    else {
      Swal.fire({
        title: "Contact Us",
        text: response?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className='form-box'>
              <form onSubmit={handleSubmit((d) => contactUser(d))}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" className="form-control" placeholder="Enter your name" {...register('name')} />
                    </div>
                    {errors.name && <p className="text-danger">{errors?.name?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" className="form-control" placeholder="Enter your email" {...register('email')} />
                    </div>
                    {errors.email && <p className="text-danger">{errors?.email?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="text" className="form-control" placeholder="Enter phone number" {...register('phone')} />
                    </div>
                    {errors.phone && <p className="text-danger">{errors?.phone?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Subject</label>
                    <div className="input-group">
                      <span className="input-group-text"><i className="fa-solid fa-pencil"></i></span>
                      <input type="text" className="form-control" placeholder="Subject" {...register('subject')} />
                    </div>
                    {errors.subject && <p className='text-danger'>{errors?.subject?.message}</p>}
                  </div>

                  <div className="col-md-12 contactMessage">
                    <label className="form-label">Message</label>
                    <div className="input-group">
                      <textarea class="form-control" aria-label="With textarea" {...register('message')}></textarea>
                    </div>
                    {errors.message && <p className='text-danger'>{errors?.message?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary px-5">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;