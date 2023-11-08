
import { Link } from "react-router-dom";

const CategoryBtn = ({ menuItems, filterItem, filteredJobs }) => {
    return (
        <div>
            <div className="md:flex gap-10 justify-between items-center my-14">
                <h1 className="text-2xl text-[#0DBC95] font-bold">Category Jobs: {filteredJobs.length}</h1>
                <div className="md:flex gap-4">
                    <button onClick={() => filterItem("All")} className="btn bg-[#0DBC95] text-white rounded">
                        All
                    </button>
                    {menuItems?.map((val) => (
                        <Link
                            className="py-2 px-4 bg-white shadow text-black btn rounded "
                            onClick={() => filterItem(val)} key={val}>
                            {val}
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default CategoryBtn;
