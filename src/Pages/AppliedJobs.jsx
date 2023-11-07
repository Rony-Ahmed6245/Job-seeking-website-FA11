import { Helmet } from "react-helmet";


const AppliedJobs = () => {
    const dynamicTitle = 'Applied Jobs';
    return (
        <div>
            {/* dynbamic title  */}
            <Helmet>
                <title>{dynamicTitle}</title>
            </Helmet>

            appliedJobs
        </div>
    );
};

export default AppliedJobs;