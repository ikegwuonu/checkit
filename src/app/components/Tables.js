"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setData } from '../store/slices/slice';
import Modal from './Modal';



const Tables = () => {
    const dispatch = useDispatch();
const reduxdata = useSelector((state) => state.table.value);
const status = useSelector((state) => state.table.status);
const [currentPage,setCurrentPage]=useState(1);
const totalPage=4;
const [isModalOpen, setModalOpen] = useState(false);
const [isEdit,setIsEdit]=useState(true);
const [myStatus, setMyStatus] = useState("");
const [type, setType] = useState("");
const [id, setId] = useState("");



 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/capsules/');
        const data = await response.json();
        console.log(data);
        dispatch(setData(data)); // Save data to Redux store
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData on component mount
  }, [dispatch]);
  let tableData=reduxdata;
const moveTo =(ind)=>{
    
    var max=5*ind;
    var min=max-5;
    tableData.slice(0,5);
};
const next=()=>{
    setCurrentPage((currentPage+1)%totalPage);
};
const prev=()=>{
    setCurrentPage((currentPage-1+totalPage)%totalPage);
};
// const edit=(id,status,type)=>{
//    return <Modal id={id} status={status} type={type}/>
// }
const edit=(id,status,type)=>{
    setMyStatus(status);
    setType(type);
    setModalOpen(true);
};
  return (
    <aside className="container  mx-auto">
         {isModalOpen && <div className='absolute top-0 w-full w-screen h-screen bg-gray-400 flex justify-center'><Modal id={id} setId={setId} myStatus={myStatus} setMyStatus={setMyStatus} type={type} setType={setType} /></div>}
     
    <div className="sm:flex sm:items-center sm:justify-between">
        <div>
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Capsules</h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span>
            </div>

        </div>

        <div className="flex items-center mt-4 gap-x-3">
            

            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add Capsule</span>
            </button>
        </div>
    </div>

    <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                View all
            </button>

            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Monitored
            </button>

            <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Unmonitored
            </button>
        </div>
        

        <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input type="text" placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>
    </div>

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-3 focus:outline-none">
                                        <span>Capsule id</span>

                                    
                                    </button>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Status
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Original launch date
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">type</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">No of missions </th>

                                  <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Edit
                                </th>
                                 <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            
                            {status===true?
                            (
                                tableData?.map((item,i)=>(

                                
                                <tr key={i}>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">{item.capsule_serial}</h2>
                                        
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        {item.status}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 className="text-gray-700 dark:text-gray-200">{item.original_launch}</h4>
                                        
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                     
                                        <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs  ">{item.type}</p>
                                    </div>
                                </td>

                                <td className="px-2 py-4 text-sm whitespace-nowrap">
                                    
                                      {item.missions.length}
                                    
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button onClick={()=>edit(item.id,item.status,item.type)} className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        Edit
                                    </button>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                        Delete
                                    </button>
                                </td>
                              
                                </tr>
                                
                                ))
                        ):<></>}

                            
                        </tbody>
                    </table>
                   
                </div>
                <div className="items-center my-12  hidden md:flex gap-x-3">
                

            <a href="#" className={`px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===1 &&' bg-blue-500 :text-gray-300'}`}>1</a>
            <a href="#" className={`px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===2 &&' bg-blue-500 :text-gray-300'}`}>2</a>
            <a href="#" className={`px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===3 &&' bg-blue-500 :text-gray-300'}`}>3</a>
            <a href="#" className={`px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===4 &&' bg-blue-500 :text-gray-300'}`}>4</a>
            
        </div>
            </div>
        </div>
    </div>

    <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-gray-500 dark:text-gray-400">
            Page <span className="font-medium text-gray-700 dark:text-gray-100">1 of 10</span> 
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </a>

            <a href="#" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
    </div>
</aside>
  )
}

export default Tables



