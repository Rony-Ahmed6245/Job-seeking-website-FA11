import phone from "../../assets/phone.svg"

const Footer = () => {

    return (
        <div className=" bg-black mt-12 text-white">
            <footer className="footer px-2 py-4 max-w-7xl m-auto  text-base-content">
                <nav className="font-medium text-gray-600 space-y-4">
                    <div className="flex gap-2 text-white">
                        <img src={phone} alt="" />
                        <div>
                            <h1>
                                Need help? 24/7 <br />
                                001-1234-8888
                            </h1>
                            
                        </div>
                    </div>
                    <p className="text-white">
                                Job Searching Just Got Easy. <br /> Use Jobtex to run a hiring site and <br /> earn money in the process!
                                118 E 128th St, <br /> East Chicago, IN 46312, US</p>

                    <div>
                        <input className="border-green-500 border-2 px-4 py-1 outline-none" placeholder="Enter your Email" type="text" />
                        <button className="border-green-500 border-2 px-4 py-1 outline-none hover:bg-green-600 transition-all delay-75 bg-green-500 text-white">Send</button>
                    </div>
                </nav>
                <nav className="">
                    <header className="text-2xl underline text-green-500">Quick Links</header>
                    <a className="link link-hover text-white">Job Packages</a>
                    <a className="link link-hover text-white">Post New Job</a>
                    <a className="link link-hover text-white">Jobs Listing</a>
                    <a className="link link-hover text-white">Candidates</a>
                    <a className="link link-hover text-white">Employers</a>
                    <a className="link link-hover text-white" >Terms of Use</a>

                </nav>
                <nav className="">
                    <header className="underline text-2xl text-green-500">For Candidates</header>
                    <a className="link link-hover text-white">User Dashboard</a>
                    <a className="link link-hover text-white">CV Packages</a>
                    <a className="link link-hover text-white">Candidate Grid</a>
                    <a className="link link-hover text-white">Candidate Lists</a>
                    <a className="link link-hover text-white">Messages</a>
                    <a className="link link-hover text-white" >Jobs Featured</a>

                </nav>
                <nav className="">
                    <header className=" underline text-2xl text-green-500">For Employers</header>
                    <a className="link link-hover text-white">Post New Job</a>
                    <a className="link link-hover text-white">Jobs Listing</a>
                    <a className="link link-hover text-white">Employers List</a>
                    <a className="link link-hover text-white">Job Packages</a>
                    <a className="link link-hover text-white">About Us</a>
                    <a className="link link-hover text-white" >Terms of use</a>

                </nav>

            </footer>
            <footer className="footer px-10 py-4 border-t bg-green-100 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">

                    <p>@2023 Jobtex. All Rights Reserved.</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="">Terms Of Services </a>|
                        <a href="">Privacy Policy</a>|
                        <a href=""> Cookie Policy</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;