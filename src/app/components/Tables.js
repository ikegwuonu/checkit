"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleted, setData } from '../store/slices/slice';
import Modal from './Modal';
import Filter from './Filter';
import Add from './Add';



const Tables = () => {
    const dispatch = useDispatch();
const reduxData = useSelector((state) => state.table.value);
const status = useSelector((state) => state.table.status);
const [currentPage,setCurrentPage]=useState(1);
const totalPage=4;
const [isModalOpen, setModalOpen] = useState(false);

const [myStatus, setMyStatus] = useState("");
const [type, setType] = useState("");
const [id, setId] = useState("");
const [addOpen, setAddOpen] = useState(false);
const [tableData,setTableData]=useState(reduxData);
const [loading,setLoading]=useState(true);


 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/capsules/');
        const data = await response.json();
        //console.log(data);
        setTableData(data.slice(0,5));
        dispatch(setData(data)); // Save data to Redux store
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call fetchData on component mount
  }, [dispatch]);
  
const moveTo =(ind)=>{
    setCurrentPage(ind);    
    var max=5*ind;
    var min=max-5;
    setTableData(reduxData.slice(min,max));
};
const next = () => {
    const newPage = currentPage < totalPage ? currentPage + 1 : 1;
    setCurrentPage(newPage);
    setTableData(reduxData.slice((newPage - 1) * 5, newPage * 5));
};

const prev = () => {
    const newPage = currentPage > 1 ? currentPage - 1 : totalPage;
    setCurrentPage(newPage);
    setTableData(reduxData.slice((newPage - 1) * 5, newPage * 5));
};

// const edit=(id,status,type)=>{
//    return <Modal id={id} status={status} type={type}/>
// }
const edit=(id,status,type)=>{
    setMyStatus(status);
    setType(type);
    setId(id);
    setModalOpen(true);
};
const search = (params) => {
    const filteredData = reduxData.filter((item) =>
        item.capsule_serial.toUpperCase().includes(params.toUpperCase())
    );
    setTableData(filteredData);
};

const deleteCapsule=(params)=>{
    dispatch(deleted(params));
    
    setTableData(reduxData.slice((currentPage - 1) * 5, currentPage * 5));
    alert(params  + ' has been deleted');
};
const retired='bg-gray-300';
const destroyed='bg-red-300';
const active='bg-green-300'
const statusColor={
    active:'bg-green 300'
};
  return (
    <section className=' p-4 md:p-0'>
        {loading? (
            <p className='text-center text-gray-600'>loading...</p>
        ):(
            <>
            <aside className="overflow-y-hidden container  mx-auto">
         {isModalOpen && <div className='z-20 fixed top-0 left-0  w-screen h-screen bg-gray-400 bg-opacity-80  flex justify-center'><Modal id={id} setId={setId} myStatus={myStatus} setMyStatus={setMyStatus} type={type} setType={setType} setModalOpen={setModalOpen} setTableData={setTableData} currentPage={currentPage}/></div>}
         {addOpen && <div className='z-20  fixed top-0 left-0  w-screen h-screen bg-gray-200 bg-opacity-80 flex justify-center'><Add setAddOpen={setAddOpen} setTableData={setTableData} currentPage={currentPage}/></div>}
     
    <div className="sm:flex sm:items-center sm:justify-between">
        <div>
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Capsules</h2>

                <span className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-blue-400"> {reduxData?.length} capsules</span>
            </div>

        </div>

        <div className="flex items-center mt-4 gap-x-3">
            

            <button onClick={()=>setAddOpen(true)} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-gray-100 transition-colors duration-200 bg-gray-600 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-300 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add Capsule</span>
            </button>
        </div>
    </div>

    <div className="mt-6 md:flex md:items-center md:justify-between">
    <div className='flex items-center gap-6'>
    <Filter name='status' one="active" two='unknown' three='retired' setTableData={setTableData}/>
    <Filter name='type' one="Dragon 1.0" two='Dragon 1.1' three='Dragon 2.0' setTableData={setTableData}/>
    </div>
        
        

        <div className="relative flex items-center mt-4 md:mt-0">
            <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>

            <input onChange={(e)=>search(e.target.value)} type="text" placeholder="Search capsule id" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-blue-300 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
        </div>
    </div>

    <div className="flex flex-col mt-6">
        <div className=" overflow-x-auto  lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="rounded-sm min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
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
                                     Launch date
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Type</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Missions </th>

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
                                    <div className={`${item.status==='active'?'bg-green-300 text-green-600':''}
                                    ${item.status==='retired'?'bg-gray-300 text-gray-600':''}
                                    ${item.status==='destroyed'?'bg-red-300 text-red-600':''}
                                    ${item.status==='unknown'?'bg-orange-300 text-orange-600':''}
                                    inline px-3 py-1 text-sm font-normal rounded-full gap-x-2  dark:bg-gray-800`}>
                                        {item.status}
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 className="text-gray-700 dark:text-gray-200">{new Date(item.original_launch).toDateString()}</h4>
                                        
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                     
                                        <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs  ">{item.type}</p>
                                    </div>
                                </td>

                                <td className="px-2 py-4 text-sm whitespace-nowrap">
                                    
                                      {item.missions?.length}
                                    
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button onClick={()=>edit(item.capsule_serial,item.status,item.type)} className="px-3 py-3 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-blue-100">
                                        Edit
                                    </button>
                                </td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <button onClick={()=>deleteCapsule(item.capsule_serial)} className="px-3 py-3 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-red-300">
                                        Delete
                                    </button>
                                </td>
                              
                                </tr>
                                
                                ))
                        ):<></>}

                            
                        </tbody>
                    </table>
                   
                </div>
                <div className="items-center my-12  hidden sm:flex gap-x-3">
                
                <p onClick={prev}  className="cursor-pointer flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>

                <span>
                    previous
                </span>
            </p>

            <p  onClick={()=>moveTo(1)} className={`cursor-pointer px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===1 &&' bg-gray-600 :text-gray-300'}`}>1</p>
            <p  onClick={()=>moveTo(2)} className={`cursor-pointer px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===2 &&' bg-gray-600 :text-gray-100'}`}>2</p>
            <p onClick={()=>moveTo(3)} className={`cursor-pointer px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===3 &&' bg-gray-600 :text-gray-100'}`}>3</p>
            <p onClick={()=>moveTo(4)} className={`cursor-pointer px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${currentPage===4 &&' bg-gray-500 :text-gray-100'}`}>4</p>
            <p onClick={next} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <span>
                    Next
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </p>
        </div>
            </div>
        </div>
    </div>

   
</aside>
            </>
        )}
    </section>
  )
}

export default Tables



