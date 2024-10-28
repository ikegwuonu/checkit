
"use client"
import Image from "next/image";

import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Tables from "./components/Tables";
import { Provider } from "react-redux";
import store from "./store/store";


export default function Home() {
  return (
    <Provider store={store}>
    <main className="flex w-full">
      <aside className=" flex flex-col items-center h-screen mt-4 px-4 border-r-2  border-r-gray-200">
        <Image alt="icon" width={50} height={50} src="file.svg" className='py-6'/>
        <Image src="Avatar.svg" className="py-4" width={50} height={50} alt="icon"/>
        <Image src="information.svg" className="py-4" width={50} height={50} alt="icon"/>
        
        
      </aside>
  <section className="w-full">
  <Navbar/>
  <Cards/>
  <Tables/>
  </section>
    </main>
    </Provider>
  );
}
