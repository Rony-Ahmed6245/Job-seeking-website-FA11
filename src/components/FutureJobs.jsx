import { useState, useEffect } from "react";
import CategoryBtn from "./CategoryBtn";
import JobCard from "./JobCard";

const FutureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [menuItems, setMenuItems] = useState([]);


    // Load data 
    useEffect(() => {
        fetch("https://job-protal-server.vercel.app/v1/jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setFilteredJobs(data); // Initialize filteredJobs with all jobs
                // Assuming data is an array of jobs with a 'category' property.
                const categories = [...new Set(data.map(val => val.category))];
                setMenuItems(categories);
            });
    }, []);

    const filterItem = (cat) => {
      

        if (cat === "All") {
            setFilteredJobs(jobs); // Reset to show all jobs
        } else {
            const newItem = jobs.filter((newval) => newval.category === cat);
            setFilteredJobs(newItem);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-3">
            <div>
                  <h1 className="mt-10 text-3xl text-center  font-bold">Our Future jobs</h1>
                  <p className="text-center text-gray-400">
                  Resume-Library is a true performance-based job board. Enjoy custom hiring products and access <br /> to up to 10,000 new resume registrations daily,  with no subscriptions or user licences.
                  </p>
                {/* Category buttons */}
                <CategoryBtn
                    menuItems={menuItems}
                    filterItem={filterItem}
                    filteredJobs={filteredJobs}
                ></CategoryBtn>
                {/* Jobs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredJobs?.map(item => (
                        <JobCard
                            key={item._id}
                            item={item}
                        ></JobCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FutureJobs;
