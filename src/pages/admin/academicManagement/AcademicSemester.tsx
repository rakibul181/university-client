import { useGetALlSemesterQuery } from "../../../redux/features/academicSemester/academicSemester.api";

 

const AcademicSemester = () => {
    const {data} = useGetALlSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
           <h1>Academic semester</h1> 
        </div>
    );
};

export default AcademicSemester;