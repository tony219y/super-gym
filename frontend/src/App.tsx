import { getHelloAPI } from "./services/home.services"

function App() {
  const handleClick = async () => {
    const  data  = await getHelloAPI();
    console.log(data);
  }
  return (
    <>
      <div className='flex flex-col w-full h-screen items-center justify-center bg-[#2f2f2f]'>
        <h1 className="text-9xl font-bold text-white">Hello World!</h1>
        <button onClick={handleClick} className=" p-4 border bg-white rounded-2xl shadow-md shadow-black/50 hover:bg-white/50 duration-300">CALL AN API</button>
      </div>
    </>
  )
}

export default App
