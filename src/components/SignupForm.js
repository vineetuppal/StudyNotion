import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
            firstName:"" ,lastName:"",email:"",password:"",confirmPassword:""
        })
    
    const [showPassword, setShowPassword] =useState(false);
    const [accountType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords Do Not Match.");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created.");
        const accountData ={
            ...formData
        };
        console.log("Printing Account Info:-");
        console.log(accountData);
        navigate("/dashboard");

    }
  return (
    <div>
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student")}>Student</button>
        <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("instructor")}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
      <div className='flex justify-between mt-[10px]'>
            <label className='mt-[20px]'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" required name="firstName" placeholder='Enter First Name' onChange={changeHandler} value={formData.firstName}/>
            </label>
            <label className='mt-[20px]'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="text" required name="lastName" placeholder='Enter Last Name' onChange={changeHandler} value={formData.lastName}/>
            </label>
      </div>
      <div className='mt-[20px]'>
        <label className='w-full mt-[20px]'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type="email" required name="email" placeholder='Enter Email Address' onChange={changeHandler} value={formData.email}/>
        </label>
      </div>

      <div className='w-full flex justify-between mt-[20px]'>
            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword ? ("text") : ("password")} required name="password" placeholder='Enter Password' onChange={changeHandler} value={formData.password}/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
            </label>

            <label className='relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPassword ? ("text") : ("password")} required name="confirmPassword" placeholder='Confirm Password' onChange={changeHandler} value={formData.confirmPassword}/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                </span>
            </label>

      </div>
        
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>
            Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
