import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Navbar from './Navbar';
import axios from 'axios';
import Swal from 'sweetalert2';

const schema = yup
  .object()
  .shape({
    name:yup.string().required(),
    email: yup.string().required().email(),
    phone:yup.string().required(),
    password: yup.string().required().min(5).max(20),
    address: yup.string().required(),
     profile:yup.mixed().required(),
    //  .test("fileType","unsupported file formate",(value)=>value? value.size<=2*1024*1024:false)
    //  .test("fileType","unsupported file format",(value)=>value?["application/pdf","image/jpeg","image/jpg","image/png"].includes(value.type):false),
  })
const UserRegister = () => {
   const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
   }) 
   const handleRegister=async(data)=>{

     try {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('password', data.password);
    formData.append('address', data.address);
    formData.append('profile', data.profile[0]); 

    const response = await axios.post('http://localhost:9000/api/user-register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
if (response.status === 200) {
      Swal.fire({
        title: "Registration Successful",
        text: response?.data?.message,
        icon: "success"
      });
     
    }
  } catch (error) {
    console.error('Registration error:', error);
    Swal.fire({
       title: "Registration Failed",
        text: response?.data?.message,
        icon: "error"

    });
  }
};

  return (
    <> 
      <Navbar/>
      <div className="container my-5">
        <h2 className="text-center">Register Here</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit((d)=>handleRegister(d))}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Your Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="text" {...register('name')} className="form-control" placeholder="Enter your name" />
                    </div>
                    {errors?.name && <p className='text-danger'>{errors?.name?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaEnvelope /></span>
                      <input type="email" {...register('email')} className="form-control" placeholder="Enter your email" />
                    </div>
                    {errors?.email && <p className='text-danger'>{errors?.email?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text"><IoMdCall /></span>
                      <input type="text" {...register("phone")} className="form-control" placeholder="Enter phone number" />
                    </div>
                    {errors?.phone && <p className='text-danger'>{errors?.phone?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaKey /></span>
                      <input type="password" {...register('password')} className="form-control" placeholder=" Enter your Password" />
                    </div>
                    {errors?.password && <p className='text-danger'>{errors?.password?.message}</p>}
                  </div>
         <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaUser /></span>
                      <input type="address" {...register("address")} className="form-control" placeholder="Enter your Address" />
                    </div>
                    {errors?.address && <p className='text-danger'>{errors?.address?.message}</p>}
                  </div>
                 

                  
                  <div className="col-md-6">
                    <label className="form-label">Profile</label>
                    <div className="input-group">
                      <span className="input-group-text"><MdAddPhotoAlternate /></span>
                      <input type="file" {...register("profile")} className="form-control" />
                    </div>
                    {errors?.profile && <p className='text-danger'>{errors?.profile?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn  px-5 btn-login">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserRegister