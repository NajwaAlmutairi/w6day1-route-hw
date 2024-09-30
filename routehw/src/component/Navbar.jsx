import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>

            <div className=' absolute bottom-0 flex w-full justify-center items-center flex-wrap gap-2 py-4  border-t-2 border-gray-300 bg-[rgba(255,255,255,0.5)] '>
                <div className="w-36 h-[10vh] flex justify-center items-center text-2xl bg-[#0a1814] border-none text-white hover:bg-white hover:text-black hover:border-black max-sm:text-xl">
                    <Link to="/">Abu Dhabi</Link>
                </div>
                <div className=" w-36 h-[10vh] flex justify-center items-center text-2xl bg-[#0a1814] border-none text-white hover:bg-white hover:text-black hover:border-black max-sm:text-xl ">
                    <Link to="/riyadh">Riyadh</Link>
                </div>
                <div className="w-36 h-[10vh] flex justify-center items-center text-2xl bg-[#0a1814] border-none text-white hover:bg-white hover:text-black hover:border-black max-sm:text-xl ">
                    <Link to="/london">London</Link>
                </div>
                <div className=" w-36 h-[10vh] flex justify-center items-center text-2xl bg-[#0a1814] border-none text-white hover:bg-white hover:text-black hover:border-black max-sm:text-xl">
                    <Link to="/paris">Paris</Link>
                </div>
                <div className="w-36 h-[10vh] flex justify-center items-center text-2xl bg-[#0a1814] border-none text-white hover:bg-white hover:text-black hover:border-black max-sm:text-xl ">
                    <Link to="/rome">Rome</Link>
                </div>
            </div>

        </>
    )
}

export default Navbar