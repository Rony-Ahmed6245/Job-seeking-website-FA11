import { Helmet } from "react-helmet";


const MyJobs = () => {
    const dynamicTitle = 'My Jobs';
    return (
        <div>
            {/* dynamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>
            myJobs
        </div>
    );
};

export default MyJobs;