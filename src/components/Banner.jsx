import banner1 from '../assets/slider4.png'
import { BsFillSendFill } from "react-icons/bs";

const Banner = () => {
    return (
        <div className="bg-[#123841] h-4/5 py-12">
            <div className="max-w-7xl mx-auto px-3">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center'>
                    <div className='space-y-5'>
                        <h1 className='lg:text-7xl md:text-4xl text-3xl font-bold text-center md:text-left text-white'>Find The Job That
                            Fits Your Life</h1>
                        <p className='text-white text-center md:text-left'>Resume-Library is a true performance-based job board. Enjoy custom  hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
                        <div className='flex rounded-full '>
                            <input className='md:py-4 py-2 px-4 md:pr-36 lg:pr-60 pr-12 rounded-l-md outline-none' placeholder='Job Title' type="text" />
                            <div className=' bg-[#0DBC95]  hover:drop-shadow-2xl  shadow-white text-white md:py-4 py-2 outline-none px-4 rounded-r-md flex justify-center items-center' type="button" ><BsFillSendFill className=' text-[20px]'></BsFillSendFill></div>
                        </div>
                        <div className='md:flex'>
                            <div className='flex gap-3 '>
                                <h1 className='text-white'>Designer </h1>
                                <h1 className='text-white'>Developer </h1>
                                <h1 className='text-white'>Tester </h1>
                            </div>
                            <div className='flex gap-3'>
                                <h1 className='text-white'>Writing </h1>
                                <h1 className='text-white'>Project </h1>
                                <h1 className='text-white'>Manager</h1>
                            </div>
                        </div>
                    </div>
                    <img className='' src={banner1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;