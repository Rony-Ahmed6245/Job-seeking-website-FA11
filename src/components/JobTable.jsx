

const JobTable = ({ job }) => {
    const { name, salary, category, date:currentDate, deadline, applicantNo, jobTitle, dsc, photo } = job || {}
    console.log(job);
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
                <th className="text-center">
                    <button className="btn btn-ghost btn-xs">Details</button>
                </th>
            </tr>
        </tbody>
    );
};

export default JobTable;