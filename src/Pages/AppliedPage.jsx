import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";


const AppliedPage = () => {
    const { user,  } = useContext(AuthContext)
    // console.log(user.email, user.displayName);

    const handelApplyJobs = async (e) => {
        e.preventDefault();
        // form.reset();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const currentDate = new Date().toDateString();
    
        const formAppliedData = { name, email, resume, currentDate };
        console.log(formAppliedData);
       
        // if (new Date() > new Date(applicationDate)) {
        //     alert('Date is over. You cannot apply for this job.');
        // } else {
        //     alert('Success');
        //     // Add your logic to submit the form or fetch data here
        // }


        fetch("https://job-protal-server.vercel.app/v1/appliedJobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formAppliedData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Wow! Applied successfully .',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to add the jobs.',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while adding the jobs.',
                });
            });
        form.reset();
    };


    return (
        <div className="max-w-xl mx-auto px-3">
            <div className="w-full  rounded design mt-10   ">
                <form onSubmit={handelApplyJobs} className="">
                    {/* part1 */}
                        {/* job applicent  no  */}
                        <h1 className="text-xl bg-[#0DBC95] text-white p-4 text-center font-semibold">Applied Jobs</h1>
                        <div className="form-control p-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="name" placeholder="Name" defaultValue={user.displayName} className="py-2 p-2 rounded design outline-none" required />
                        </div>
                        {/* job title */}
                        <div className="form-control p-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" defaultValue={user.email} className="py-2 p-2 rounded design outline-none" required />
                        </div>
                        {/* part2 */}

                        {/* user name  */}
                        <div className="form-control p-4">
                            <label className="label">
                                <span className="label-text">Resume link</span>
                            </label>
                            <input name="resume" type="text" placeholder="Resume URL" className="py-2 p-2 rounded design outline-none" required />
                        </div>
                        <div className="form-control  p-4">
                            <button className="bg-[#0DBC95] py-2 outline-none rounded text-white uppercase">Submit Application</button>
                        </div>

                

                </form>
            </div>
        </div>
    );
};

export default AppliedPage;