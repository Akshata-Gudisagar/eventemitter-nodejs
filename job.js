const jobData = [
    {
        id:1,
        jobTitle:"Ui/Ux"
    },
    {
        id:2,
        jobTitle:"AWS"
    },
    {
        id:3,
        jobTitle:"DataScience"
    }
]
module.exports.getAllJob = () =>{
    return jobData

}
module.exports.getJob = (id) => {
    let job = jobData
.find((job) => {
        return job.id == id
    })
    return job
}