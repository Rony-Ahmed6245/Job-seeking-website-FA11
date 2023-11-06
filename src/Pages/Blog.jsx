import blog1 from "../assets/blog8.jpg"
import blog2 from "../assets/blog5.jpg"
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";

const Blog = () => {
    return (
        <div className="max-w-screen-2xl mx-auto md:px-2">
            <div className="bg h-[300px]"></div>
            <div>

                {/* <img className="" src={blog} alt="" /> */}

                <div className="max-w-3xl  mx-auto -mt-[50px]">
                    <div className="shadow rounded bg-white p-10 text-center space-y-5">
                        <h1 className="text-md bg-green-300 text-center ">Interview</h1>
                        <h1 className="font-bold text-3xl">Starting your traveling blog with Vasco</h1>
                        <div className="flex justify-center gap-5">
                            <h1>by admin</h1>
                            <h1>Date: july 20, 2023</h1>
                        </div>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto totam voluptatum temporibus id doloribus libero sit quo recusandae assumenda voluptates in placeat dolores corporis minus, eligendi et commodi suscipit voluptas nostrum. Architecto error nemo, necessitatibus non itaque culpa, nam, dolore velit laborum nisi rerum illo. Voluptate, mollitia natus molestias, officiis excepturi ut consequuntur nisi dolores neque soluta incidunt in. Iure quae sunt dignissimos atque earum fuga dolorem sapiente eaque, aspernatur corporis totam, numquam vitae? Adipisci, veniam. Sunt, nam ipsum voluptatibus saepe quo maiores non voluptas ipsam optio necessitatibus quidem ipsa commodi laborum eveniet illum incidunt est doloribus beatae architecto delectus?
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            <img className="rounded" src={blog1} alt="" />
                            <img className="rounded" src={blog2} alt="" />

                        </div>
                        <h1 className="text-left text-2xl">How To Deal With Employee Quitting</h1>
                        <p className="text-left">Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie. Curabitur congue neque sed nisi auctor consequat. Pellentesque rhoncus tortor vitae ipsum sagittis tempor.

                            Vestibulum et pharetra arcu. In porta lobortis turpis. Ut faucibus fermentum posuere. Suspendisse potenti. Mauris a metus sed est semper vestibulum. Mauris tortor sem, consectetur vehicula vulputate id, suscipit vel leo.</p>
                        <ul className="text-left space-y-3">
                            <li>15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                            <li>15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                            <li>15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</li>
                        </ul>
                        <p className="text-left">Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie. Curabitur congue neque sed nisi auctor consequat. Pellentesque rhoncus tortor vitae ipsum sagittis tempor.

                            Vestibulum et pharetra arcu. In porta lobortis turpis. Ut faucibus fermentum posuere. Suspendisse potenti. Mauris a metus sed est semper vestibulum. Mauris tortor sem, consectetur vehicula vulputate id, suscipit vel leo.</p>

                        <div className=" md:flex justify-between">
                            <div className="md:flex  gap-3">
                                <h1 className="font-bold">Tag :</h1>
                                <h1 className="bg-green-100 px-2 py-1 rounded-full">Busness</h1>
                                <h1 className="bg-green-100 px-2 py-1 rounded-full">Success</h1>
                                <h1 className="bg-green-100 px-2 py-1 rounded-full">Writting</h1>
                            </div>
                            <div className="md:flex gap-4 justify-center items-center ">
                                <h1 className="font-bold">Share this post :</h1>
                                <BsFacebook></BsFacebook>
                                <BsPinterest></BsPinterest>
                                <BsTwitter></BsTwitter>
                            </div>
                        </div>
                        <hr />
                        <div className="md:flex justify-between py-5">
                            <p className="md:border-r-2 font-bold pr-0 md:pr-10">Where to grow your business as a photographer</p>
                            <p className="font-bold">How a visual artist redefines success in design</p>
                        </div>
                        <hr />
                        <h1 className="md:text-left font-bold">2 comments</h1>
                        <div className="flex justify-center  gap-3">
                           <FaUserLarge className="w-[50px] "></FaUserLarge>
                            <div className="text-left">
                                <h1 className="font-bold">Admin</h1>
                                <h1 className="text-sm">Date : jun 30, 2023</h1>
                                <p>Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt.</p>
                                <h2 className="text-green-600">Reply</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-center  gap-3">
                           <FaUserLarge className="w-[50px] "></FaUserLarge>
                            <div className="text-left">
                                <h1 className="font-bold">Admin</h1>
                                <h1 className="text-sm">Date : jun 30, 2023</h1>
                                <p>Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt.</p>
                                <h2 className="text-green-600">Reply</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;
