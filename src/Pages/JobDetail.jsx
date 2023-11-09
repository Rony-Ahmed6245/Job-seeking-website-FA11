import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import banne from "../assets/banner-detail.jpg"
// import logo from "../assets/e3.png"

const JobDetail = () => {
    const dynamicTitle = 'Job Details';
    const data = useLoaderData();
    // console.log(data);

    const { id } = useParams()
    // console.log(id);


    const job = data.find((item) => item._id === id);
    // console.log(job);
    const {_id, name, salary, category, date: currentDate, deadline, applicantNo, jobTitle, dsc, photo, banner } = job || {}



    return (
        <div className="max-w-7xl mx-auto px-3">
            {/* dynamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            <div>
                <img className="w-full " src={banner} alt="" />
            </div>
            {/* main part  */}
            <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
                <div className="md:col-span-3 p-4">
                    <div className="md:flex justify-between items-center py-4">
                        <div className="flex justify-center items-center gap-4 ">
                            <img className="w-[100px]" src={photo} alt="" />
                            <div className="space-y-2">
                                <h1 className="text-2xl font-semibold">{jobTitle}</h1>
                                <h1 className="text-[15px] font-semibold"> {currentDate}</h1>
                                <h1>Posted by {name}</h1>
                            </div>
                        </div>
                        <div className="text-end space-y-2">
                            <Link to={`/v1/applied/${_id}`} className="bg-[#14A077] py-2 px-14 rounded font-semibold text-white">Apply Now</Link>
                            <h1 className="text-black font-bold"> <span className="text-red-400 py-1 px-3 rounded-md">Deadline Date:</span> {deadline} </h1>
                            <h1 className="text-[15px] font-semibold">$1000 - ${salary}/month </h1>
                        </div>
                    </div>


                    {/* job des */}
                    <hr />
                    <h1 className="text-2xl font-semibold mt-5">Job Description</h1>
                    <p className="text-justify">{dsc}</p>
                </div>
                <div className="md:col-span-2 mt-8 rounded border bg-[#F5F5F5] p-10 space-y-2">
                    <h1 className="text-2xl font-semibold mt-5">Job Information</h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Applicant No: 0000{applicantNo} </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Date Posted: {currentDate} </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Category: {category} </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Offered Salary: $1000 - ${salary} </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Expiration Date: {deadline} </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Experience: 1 Year </h1>
                    <hr />
                    <h1 className="text-md font-medium text-gray-500">Qualification: Certificate </h1>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;