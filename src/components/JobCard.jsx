

const JobCard = ({ item }) => {
    console.log(item);
    const  { name, salary, category, date: currentDate, deadline, applicantNo, jobTitle, dsc, photo, banner }= item || {}
    return (
        <div>
            <div>
                {/* card */}
                <div className="card mt-10 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;