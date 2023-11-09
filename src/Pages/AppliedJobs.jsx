import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import ApplyJobTable from "../components/ApplyJobTable";


const AppliedJobs = () => {
    const dynamicTitle = 'Applied Jobs';
    const data = useLoaderData()
    // console.log(data);
    // const {name, email, resume, currentDate } = data || {}


    return (
        <div className=" max-w-screen-6xl mx-auto md:px-2 px-3">
            {/* dynbamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            <h1 className="text-xl text-[#0DBC95] mt-10">Total Apply jobs: {data.length}</h1>

            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table professional-table">
                    <thead>
                        <tr className="">
                            <th className="font-bold text-md">Name</th>
                            <th className="font-bold text-md">Email</th>
                            <th className="font-bold text-md">Date</th>
                            <th className="font-bold text-md"></th>
                        </tr>
                    </thead>



                    {data.length === 0 ? (
                        <div>
                            <h1 className="text-center text-2xl">Applied job not found</h1>
                        </div>
                    ) : <>
                        {
                            data?.map(applyUser => (
                                <ApplyJobTable
                                    key={applyUser._id}
                                    applyUser={applyUser}
                                ></ApplyJobTable>
                            ))
                        }

                    </>}

                  


                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;