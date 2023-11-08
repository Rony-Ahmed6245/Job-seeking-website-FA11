import hiring from "../assets/h31.png"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";

import 'aos/dist/aos.css'

const Hiring = () => {
    // aos animation 
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div  className="max-w-screen-xl	 mx-auto md:px-2 py-10">
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
                <div  className="space-y-5 p-2 text-gray-500 font-medium">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">Your end-to-end
                       <span className="text-[#0DBC95]"> hiring</span> platform</h1>
                    <p>Manage the entire recruitment lifecycle with all the features in each of the products above, fully integrated and all in one place.</p>
                    <div className="flex gap-10 md:flex-row">
                        <div className="space-y-3">
                            <p className="flex gap-2 justify-start items-center"><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> Filtering</p>
                            <p className="flex gap-2 justify-start items-center"><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> Screening</p>
                            <p className="flex gap-2 justify-start items-center"><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> Pre-Screening</p>
                        </div>
                        <div className="space-y-3">
                            <p className="flex gap-2 justify-start items-center " ><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> Scheduling</p>
                            <p className="flex gap-2 justify-start items-center " ><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> Interviewing</p>
                            <p className="flex gap-2 justify-start items-center " ><BsFillCheckCircleFill className="text-[#0DBC95]"></BsFillCheckCircleFill> References</p>
                        </div>
                    </div>
                </div>
                <img   src={hiring} alt="" />
            </div>
        </div>
    );
};

export default Hiring;