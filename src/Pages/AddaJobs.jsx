
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import job from "../assets/sss.svg"





const handleJobsData = async (e) => {
    e.preventDefault();
    // form.reset();
    const form = e.target;
    const applicantNo = form.applicant.value;
    const jobTitle = form.title.value;
    const dsc = form.dsc.value;
    const photo = form.photo.value;
    const banner = form.banner.value;
    const name = form.name.value;
    const salary = form.salary.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const currentDate = new Date().toDateString();

    const formData = { name, salary, category, date: currentDate, deadline, applicantNo, jobTitle, dsc, photo, banner };
    console.log(formData);
    fetch("https://job-protal-server.vercel.app/v1/job", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Wow! Jobs successfully added.',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to add the product.',
                });
            }
        })
        .catch((error) => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the product.',
            });
        });
    form.reset();
};


const AddaJobs = () => {
    const dynamicTitle = 'Add A Job';







    return (
        <div className="max-w-7xl mx-auto px-3">
            {/* dynamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            {/* <div className="bg h-[300px]"></div> */}
            <h1 className="text-4xl text-center text-[#0DBC95] mb-10 font-bold mt-4">Add A New Job</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <img src={job} alt="" />
                <div className="max-w-3xl  p-6 ">

                    <form onSubmit={handleJobsData} className="space-y-2">

                        {/* part1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* job applicent  no  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Applicant No</span>
                                </label>
                                <input name="applicant" type="number" placeholder="Applicant No" className="py-2 p-2 rounded design outline-none" required />
                            </div>
                            {/* job title */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input name="title" type="text" placeholder="Job title" className="py-2 p-2 rounded design outline-none" required />
                            </div>
                        </div>

                        {/* part2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* user name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Posted name</span>
                                </label>
                                <input name="name" type="text" placeholder="Job posted name" className="py-2 p-2 rounded design outline-none" required />
                            </div>
                            {/* salary rangy */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Salary Range</span>
                                </label>

                                <input type="number" name="salary" min="2000" max="100000" step="1000" placeholder="salary" className="py-2 p-2 rounded design outline-none" required />

                                {/* <input type="number" name="salary" placeholder="salary" className="py-2 p-2 rounded design outline-none" required /> */}
                            </div>
                        </div>




                        {/* part3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Copmany logo</span>
                                </label>
                                <input type="text" name="photo" placeholder="PhotoURL" className="py-2 p-2 rounded design outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Banner</span>
                                </label>
                                <input type="text" name="banner" placeholder="PhotoURL" className="py-2 p-2 rounded design outline-none" required />
                            </div>

                            {/* application date  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Application Deadline</span>
                                </label>
                                <input
                                    name="deadline"
                                    type="date"
                                    className="py-2 p-2 rounded design outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* category  */}
                        <div className="form-control">
                            <label >Select job category:</label>
                            <select className="design rounded py-2" name="category" id="mySelect">
                                <option value="Remote">Remote</option>
                                <option value="On-site">On site</option>
                                <option value="Part-time">Part Time</option>
                                <option value="Hybrid">Hybird</option>
                            </select>
                        </div>
                        {/* Des */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea className="design rounded outline-none" name="dsc" id="" cols="5" rows="5"></textarea>
                        </div>
                        {/* submitt  */}
                        <div className="form-control mt-6">
                            <button className="bg-[#0DBC95] py-2 outline-none rounded text-white">Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddaJobs;