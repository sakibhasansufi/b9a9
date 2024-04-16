import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineBriefcase } from "react-icons/hi";

const Career = () => {
    const jobData = useLoaderData();
    console.log(jobData)
    return (
        <div>
            {
                jobData.map(job => <div key={jobData.id} className="md:max-w-7xl md:mx-auto mb-5 ">
                    <div className=" bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title font-poppins"><HiOutlineBriefcase /> {job.job_title}</h2>
                            <p>{job.job_description}</p>
                            <h3 className="text-slate-700">{job.job_status}</h3>
                            <h4 className="text-xl font-medium">Vacancy : {job.vacancy}</h4>
                            <div className="card-actions ">
                                <button   className="btn btn-primary"><Link to='/signup'>Apply Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Career;