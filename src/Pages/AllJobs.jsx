import { useLoaderData } from "react-router-dom";
import JobTable from "../components/JobTable";


const AllJobs = () => {
    const data = useLoaderData();
    console.log(data);


    return (
        <div className="max-w-screen-6xl mx-auto md:px-2 ">
            <div className="md:flex md:justify-between md:items-center justify-center items-center">
                <h1 className="text-2xl  font-bold my-10">All Posted jobs: {data.length}</h1>
                <div>
                    <button className="border-gray-500 border-2 px-4 py-1 outline-none hover:bg-gray-600 transition-all delay-75 bg-gray-500 text-white">Search Job</button>
                    <input className="border-gray-500 border-2 px-4 py-1 outline-none" placeholder="Job Title Here" type="text" />
                </div>
            </div>
            {/* tabular form  */}
            <div className="overflow-x-auto">
                <table className="table professional-table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-md">Company Logo</th>
                            <th className="font-bold text-md">Job Posted Name</th>
                            <th className="font-bold text-md">Job Title</th>
                            <th className="font-bold text-md">Job Posted Date</th>
                            <th className="font-bold text-md">Applicant Deadline</th>
                            <th className="font-bold text-md">Salary Range</th>
                            <th className="font-bold text-md"></th>
                        </tr>
                    </thead>
                    {
                        data.map(job => (
                            <JobTable key={job._id} job={job}></JobTable>
                        ))
                    }
                </table>
            </div>





        </div>
    );
};

export default AllJobs;