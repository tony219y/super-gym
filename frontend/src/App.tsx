import { getHelloAPI } from "./services/home.services"
import { useState } from "react";

function App() {
  const data = "API not called yet";
  const [text, setText] = useState(data);
  const handleClick = async () => {
    const  data  = await getHelloAPI();
    if (!data) {
      console.error("Failed to fetch data from API");
      return;
    }
    setText(data.message);
  }


  return (
    <>
      <div className='flex flex-col w-full h-screen items-center justify-center bg-[#2f2f2f]'>
        <h1 className="text-9xl font-bold text-white">{text}</h1>
        <div className="flex gap-4 mt-10">
          <button onClick={handleClick} className=" py-2 px-4 border bg-white rounded-2xl shadow-md shadow-black/50 hover:bg-white/50 duration-300">CALL AN API</button>
          <button onClick={()=> setText(data)} className=" py-2 px-4 border bg-white rounded-2xl shadow-md shadow-black/50 hover:bg-white/50 duration-300">Clear</button>
        </div>
      </div>
    </>
  )
}

export default App
