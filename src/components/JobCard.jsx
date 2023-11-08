import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobCard = ({ item }) => {
    console.log(item);
    const {_id, name, salary, category, date: currentDate, deadline, applicantNo, jobTitle, dsc, photo, banner } = item || {}
    return (
        <div>
            <div>
                {/* card */}
                <div className="border p-4 rounded hover:shadow-md transition-all">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <img className="w-[60px]" src={photo} alt="" />
                            <div>
                                <h1 className="font-bold text-xl uppercase ">{jobTitle}</h1>
                                <h1 className="text-gray-400">{name}</h1>
                                <h1 className="text-gray-400">{currentDate}</h1>
                            </div>
                        </div>
                        {/* icone */}
                        <div className="">
                            <BsHeartFill className="text-4xl p-2 rounded-full border  text-red-500"></BsHeartFill>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-sm text-gray-500">$1000-${salary}/<span className="text-sm">month</span> </h1>
                            <h1 className="text-sm  text-gray-500">Deadline:{deadline}</h1>
                            <h1 className="text-sm  text-gray-500">Applicant No: 0000{applicantNo}</h1>
                        </div>
                        <Link to={`/v1/details/${_id}`} className="py-1 px-4 rounded hover:text-white hover:bg-[#0DBC95] border transition-all text-black bg-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;