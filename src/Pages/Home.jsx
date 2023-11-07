import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
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
            <Hiring></Hiring>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;