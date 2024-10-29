"use client"

import { useDispatch, useSelector, useStore } from "react-redux";
import { add } from "../store/slices/slice";
import { useState } from "react";

const Add = ({setAddOpen}) => {
    const reduxData=useSelector((state)=>state.table.value);
    const dispatch = useDispatch();
    const [id,setId]=useState("");
    const [myStatus,setMyStatus]=useState("");
    const [type,setType]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(add([id,myStatus,type]));
        setAddOpen(false);

    };
  return (
    
    <div  className="bg-gray-300 bg-opacity-80">
    

    <div 
        className="fixed inset-0 z-10 overflow-y-auto" 
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
    >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                    <h3 className="text-lg justify-between flex font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        <span>Add Capsule</span>
                        <span className="cursor-pointer " onClick={()=>setAddOpen(false)}>X</span>
                    </h3>
                    

                    <form className="mt-4" onSubmit={handleSubmit} action="#">
                        

                        <label className="block mt-3" for="email">
                            <p className="text-sm text-gray-700 dark:text-gray-200">Capsule id</p>
                            <span className="text-red-400">(Cannot be changed!)</span>
                            <input  type="text" placeholder="capsule id" value={id} onChange={(e)=>setId(e.target.value)} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" >
                            <p className="text-sm text-gray-700 dark:text-gray-200">Capsule status</p>
                            <input type="text" onChange={(e)=>setMyStatus(e.target.value)} value={myStatus}  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label className="block mt-3" for="email">
                        <p className="text-sm text-gray-700 dark:text-gray-200">Capsule type</p>
                            <input value={type} onClick={(e)=>setType(e.target.value)} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        


                        <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                           

                            <button type="submit" onClick={handleSubmit} className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
</div>
  )
}

export default Add