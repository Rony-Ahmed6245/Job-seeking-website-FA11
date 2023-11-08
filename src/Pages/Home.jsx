import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import FutureJobs from "../components/FutureJobs";
import Hiring from "../components/Hiring";
import OurClient from "../components/OurClient";






const Home = () => {
    const dynamicTitle = 'Home';

    return (
        <div className="">
            {/* dynamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            {/* sublayouts */}
            <Banner></Banner>
            <FutureJobs></FutureJobs>
            <Hiring></Hiring>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;