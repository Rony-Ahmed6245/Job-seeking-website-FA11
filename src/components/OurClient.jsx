import img from "../assets/3054596.jpg"
import { BsFillStarFill } from "react-icons/bs";

const OurClient = () => {
    return (
        <div className="space-y-3 py-5 max-w-screen-xl	 mx-auto md:px-2">
            <h1 className="text-center md:text-4xl text-3xl font-bold">What our clients are saying</h1>
            <p  className="text-center ">Showing companies based on reviews and recent job openings</p>

            <div className="grid grid-cols-1 md:grid-cols-3 pt-8 gap-4">
                <div className="p-4 shadow hover:shadow-xl rounded bg-white space-y-3  transition-all">
                <p className="text-justify text-gray-400"> <span className="text-5xl text-[#0DBC95] font-bold">“</span> "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.”</p>
                    <div className="flex justify-start items-center gap-5">
                        <img className="w-[50px] border rounded-full" src={img} alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Jone dea</h1>
                            <h1 className="text-md font-medium">Hardware Engineer</h1>
                            <p className="flex gap-1 text-orange-400">
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 shadow rounded bg-white space-y-3 hover:shadow-xl transition-all">
                <p className="text-justify text-gray-400"> <span className="text-5xl text-[#0DBC95] font-bold">“</span> Begin by ensuring that you fully understand the client's request. Ask for detailed information, including the type of content or services they need, their specific requirements, deadlines, and any other relevant details.</p>
                    <div className="flex justify-start items-center gap-5">
                        <img className="w-[50px] border rounded-full" src={img} alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Rupom Sha</h1>
                            <h1 className="text-md font-medium">QA Tester</h1>
                            <p className="flex gap-1 text-orange-400">
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 shadow rounded bg-white space-y-3 hover:shadow-xl transition-all">
                <p className="text-justify text-gray-400 "> <span className="text-5xl text-[#0DBC95] font-bold">“</span> Discuss the terms of the engagement, including pricing, payment terms, milestones, and any contractual agreements. It's crucial to have a clear understanding of expectations and ensure both parties are in agreement.</p>
                    <div className="flex justify-start items-center gap-5">
                        <img className="w-[50px] border rounded-full" src={img} alt="" />
                        <div>
                            <h1 className="text-lg font-bold">Blajim konkeo</h1>
                            <h1 className="text-md font-medium">Computer system operator</h1>
                            <p className="flex gap-1 text-orange-400">
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                                <BsFillStarFill></BsFillStarFill>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;