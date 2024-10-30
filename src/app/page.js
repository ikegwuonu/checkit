
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
    <main className="flex w-full overflow-x-hidden">
      <aside className=" hidden  md:flex flex-col items-center h-screen mt-4 px-4 border-r-2  border-r-gray-200">
       
        <Image src="document.svg" className="py-4" width={35} height={35} alt="icon"/>
        <Image src="calendat.svg" className="py-4" width={35} height={35} alt="icon"/>
       
        <Image src="Avatar.svg" className="py-4" width={35} height={35} alt="icon"/>
        <Image src="chat.svg" className="py-4" width={35} height={35} alt="icon"/>
        <Image src="information.svg" className="py-4" width={35} height={35} alt="icon"/>
        
        
      </aside>
  <section className="w-full ">
  <Navbar/>
  <Cards/>
  <Tables/>
  </section>
    </main>
    </Provider>
  );
}
