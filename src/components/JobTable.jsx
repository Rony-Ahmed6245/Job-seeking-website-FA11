import { Link } from "react-router-dom";


const JobTable = ({ job }) => {
    const {_id, name, salary, category, date:currentDate, deadline, applicantNo, jobTitle, dsc, photo } = job || {}
    // console.log(job);
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td >{name}</td>
                <td>{jobTitle}</td>
                <td>{currentDate}</td>
                <td>{deadline}</td>
                <td>$1000-{salary}</td>
                <td className="text-center">
                    <Link to={`/v1/details/${_id}`} className="py-1 px-4 rounded-full  bg-[#0DBE96] text-white">Details</Link>
                </td>
            </tr>
        </tbody>
    );
};

export default JobTable;