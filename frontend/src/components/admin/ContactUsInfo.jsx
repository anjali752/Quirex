import React, {useEffect,useState} from 'react'
import Navbar from '../landingPage/Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'
const ContactUsInfo = () => {
const [list,setList]=useState([])
useEffect(()=>{
  fetchData();

},[])
const fetchData=async()=>{
  const response=await axios.post('http://localhost:9000/api/contact-us-list');
  if(response?.data?.code==200){
    setList(response?.data?.data)
  }
};
const show=(data)=>{
  Swal.fire({
    title:"Message",
    text:data,
    icon:"information"
  })
}
  return (
    <>
     <Navbar/>
     <div className="row">
      <h1 className='text-danger text-center'>Contact List</h1>
     <div className="col-sm-1"></div>
     <div className="col-sm-10">
     <table className='table'>
      <thead className='table table-dark'>
        <tr>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact No.</th>
          <th>Subject</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item,index)=>{
          return(<>
          <tr>
             <td>{index+1}</td>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.phone}</td>
          <td>{item?.subject}</td>
          <td onClick={()=>show(item?.message)}>{item?.message?.slice(0,30)}....</td>
          </tr>
          </>)
        })
        }
      </tbody>
     </table>
      {list?.length == 0 && <p className='text-center'>No Record Found!</p>}
     </div>
     <div className='col-sm-1'></div>
     </div>
    </>
  )
}

export default ContactUsInfo
