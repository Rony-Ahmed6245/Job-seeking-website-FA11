import { useLoaderData, useParams } from "react-router-dom";


const JobDetail = () => {
    const data = useLoaderData();
    console.log(data);

    const { id } = useParams()
    console.log(id);


    const job = data.find((item) => item._id === id);
    console.log(job);
    const { name, salary, category, date: currentDate, deadline, applicantNo, jobTitle, dsc, photo , banner} = job || {}



    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default JobDetail;