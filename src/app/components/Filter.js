"use client"

import { throwIfDisallowedDynamic } from "next/dist/server/app-render/dynamic-rendering";
import { useState } from "react"
import { useSelector } from "react-redux";

const Filter = ({name,one,two,three,setTableData}) => {
  const reduxData=useSelector((state)=>state.table.value);
  const [status,setStatus]=useState(false);
  const filter=(param)=>{
    if(name==='status'){
      setTableData(reduxData.filter((item)=>item.status===param));
    }
    else if(name==='type'){
      setTableData(reduxData.filter((item)=>item.type===param));
    }
  };
  return (
    <div className="relative">
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">


    <button onClick={()=>setStatus((prev)=>!prev)} className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
    <p 
      href="#"
      className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      {name}
    </p>
      <span className="sr-only">Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>

  {status && (
    <div
    className="absolute end-0 z-10 mt-2 w-40 rounded-md border border-gray-100 bg-white shadow-lg"
    role="menu"
  >
    <div className="p-2">
      <p  onClick={() => filter(one)}
        
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        {one}
      </p>

      <p
         onClick={() => filter(throwIfDisallowedDynamic)}
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        {two}
      </p>

      <p
         onClick={() => filter(three)}
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        {three}
      </p>
    </div>
    </div>
  )}
  
</div>
  )}

export default Filter