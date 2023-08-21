/* eslint-disable @next/next/no-img-element */
import Container from '@/components/globalComponents/Container'
import BackButton from '@/components/pwa/BackButton'
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-number-input'
import { toast } from 'react-hot-toast';
import { RxPencil2 } from 'react-icons/rx';
import { CiUser } from 'react-icons/ci';
import Loading from '@/components/globalComponents/Loading';

import AxiosInstance from '@/helper/AxiosInstance';
import { UserData } from '@/context/userContext';
import { AiOutlineMail } from 'react-icons/ai';

function UserProfile() {

    const [userLoading, setUserLoading] = useState(false);

    const {data, setUserData } = useContext(UserData);

    const { register, setValue, getValues , handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        full_name: data?.full_name,
        phone: data?.phone,
        email: data?.email,
        },
    });
    const onSubmit = data => {
        setUserLoading(true)
        AxiosInstance.patch("me/", data)
        .then((res)=>{
            if(res.data.message == "User updated successfully") {
                // console.log(res.data.user)
                setUserData(res.data.user)
                toast.success("User updated successfully")
                setShowModalProfile(false)
            }
        
        }).catch((err)=> console.log(err) )
        .finally(()=> setUserLoading(false))

    };

    const [firstNameEditeOrNo, setFirstNameEditeOrNo] = useState(true)
    const [emailInput , setEmailInput] = useState(true)
    const [phoneNumberEditeOrNo, setPhoneNumberEditeOrNo] = useState(true)









    return (
        <div>
            <BackButton />

            <Container className=" overflow-y-auto flex flex-col gap-y-3 mt-32">
                <div className='bg-white h-fit p-2'>
                    <div className='flex items-center justify-center w-28 m-auto pb-3'>
                        <img className='w-full h-full' src='./pro.jpg' alt='Air conditioner taxi Taxi a saint genis pouilly Taxigex Cab gez' />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>        
                        {/* First Name  */}
                        <div className="h-[48px] border-[1px] mb-4 border-borderInput rounded-[10px] overflow-hidden relative">
                            <div className="flex items-center py-[12px] px-[14px]">
                                <span className=" text-main">
                                    <CiUser />
                                </span>
                                <input
                                    disabled={firstNameEditeOrNo}
                                    {...register("full_name", { required: true})}
                                    placeholder='Name'
                                    className="w-full test h-full text-[12px] border-none focus:ring-0 outline-none pl-[10px]"
                                />
                            </div>
                            <span onClick={() => setFirstNameEditeOrNo(prev => !prev)} className="absolute top-3 right-5 cursor-pointer hover:text-main duration-300"> <RxPencil2 size={firstNameEditeOrNo ? 20 : 17} /> </span>
                        </div>
                    

                        {/* Phone number  */}
                        <div className="h-[48px] border-[1px] mb-4 border-borderInput rounded-[10px] overflow-hidden relative">
                            <div className="flex items-center py-[12px] px-[14px]">
                                <PhoneInput
                                    disabled={phoneNumberEditeOrNo}
                                    defaultCountry={"FR"}
                                    onChange={(e) => setValue('phone', e)}
                                    value={getValues("phone")}
                                    className="input-phone-number text-[13px]"
                                />
                            </div>
                            <span onClick={() => setPhoneNumberEditeOrNo(prev => !prev)} className="absolute top-3 right-5 cursor-pointer hover:text-main duration-300"> <RxPencil2 size={phoneNumberEditeOrNo ? 20 : 17} /> </span>
                        </div>
                        
                        {/* First Name  */}
                        <div className="h-[48px] border-[1px] mb-4 border-borderInput rounded-[10px] overflow-hidden relative">
                            <div className="flex items-center py-[12px] px-[14px]">
                                <span className=" text-main">
                                    <AiOutlineMail />
                                </span>
                                <input
                                    disabled={emailInput}
                                    {...register("email", { required: true})}
                                    placeholder='Email'
                                    className="w-full test h-full text-[12px] border-none focus:ring-0 outline-none pl-[10px]"
                                />
                            </div>
                            <span onClick={() => setEmailInput(prev => !prev)} className="absolute top-3 right-5 cursor-pointer hover:text-main duration-300"> <RxPencil2 size={emailInput ? 20 : 17} /> </span>
                        </div>
                        
                        
                        <div className="w-[100%] px-4 h-[40px] sm:h-[48px] my-2 sm:my-4">
                        <button type='submit' className="text-white bg-[#02bf02] duration-200 rounded-[10px] w-full h-full">
                            {userLoading ? <Loading width="27px" height="27px" /> :"Update"}
                        </button>
                        </div>
                    </form>
                </div>

            
            </Container>

        </div>
    )
}

export default UserProfile