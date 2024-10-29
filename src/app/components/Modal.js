"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../store/slices/slice";

const Modal = ({id,setId,myStatus,setMyStatus,type,setType,setModalOpen,setTableData,currentPage}) => {
    const reduxData = useSelector((state) => state.table.value);
    const dispatch = useDispatch();
    
    const handleSubmit=(e)=>{
        console.log(55);
        e.preventDefault();
        dispatch(edit([id,myStatus,type]));
        var max=5*currentPage;
    var min=max-5;
    setTableData(reduxData.slice(min,max));
    setModalOpen(false);
        
    };
  return (
    
    <div  className="bg-red-500 opacity-100">
    

    <div 
        className="fixed  inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div className="flex  items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg justify-between flex font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        <span>Edit Capsule</span>
                        <span className="cursor-pointer " onClick={()=>setModalOpen(false)}>X</span>
                    </h3>
                    

                    <form className="mt-4" onSubmit={handleSubmit} action="#">
                        

                        <label className="block mt-3" for="email">
                            <p className="text-sm text-gray-700 dark:text-gray-200">Capsule id</p>
                            <span className="text-red-400">(Cannot be chamged!)</span>
                            <input  type="text" placeholder="capsule id" value={id} readOnly  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" >
                            <p className="text-sm text-gray-700 dark:text-gray-200">Capsule status</p>
                            <input type="text" onChange={(e)=>setMyStatus(e.target.value)} value={myStatus}  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" for="email">
                        <p className="text-sm text-gray-700 dark:text-gray-200">Capsule type</p>
                            <input value={type} onChange={(e)=>setType(e.target.value)} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        


                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                           

                            <button type="button" onClick={handleSubmit} className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
  )
}

export default Modal