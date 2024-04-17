import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Helmet } from "react-helmet-async";

const Career = () => {
    const jobData = useLoaderData();
    console.log(jobData)
    return (
        <div>
            <Helmet>
                <title>Alps Home | Career</title>
            </Helmet>
            <h3 className="text-center text-green-500 mb-5 font-extrabold font-poppins text-2xl mt-4">Available Jobs</h3>
            {
                jobData.map(job => <div key={jobData.id} className="md:max-w-7xl md:mx-auto mb-5 ">

                    <div className=" bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <div className="grid md:grid-cols-2">
                                <div className="flex gap-2 items-center">
                               
                                    <h2 className="card-title font-poppins "><HiOutlineBriefcase /> {job.job_title} </h2>
                                </div>

                                 {/* <p className="text-blue-600">Applied: {job.applied}</p> */}
                            </div>

                            <p>{job.job_description}</p>
                            <h3 className="text-slate-700">{job.job_status}</h3>
                            <h4 className="text-xl font-medium">Vacancy : {job.vacancy}</h4>
                            <div className="card-actions ">
                                <button className="btn btn-primary"><Link to='/signup'>Apply Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Career;