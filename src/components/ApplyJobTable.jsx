import { Link } from "react-router-dom";

const ApplyJobTable = ({applyUser}) => {
    console.log(applyUser);
    const  { name, email, resume, currentDate } = applyUser || {}


    return (
        <tbody>
        {/* row 1 */}
        <tr className="">
            <td >{name}</td>
            <td>{email}</td>
            <td>{currentDate}</td>
            <td className="text-center">
                <Link
                 className="py-1 px-4 rounded-full transition-all hover:bg-white hover:text-black bg-[#0DBE96] text-white">Cancel</Link>
            </td>
        </tr>
    </tbody>
    );
};

export default ApplyJobTable;