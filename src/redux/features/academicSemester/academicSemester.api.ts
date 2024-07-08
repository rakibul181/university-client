import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getALlSemester:builder.query({
            query:() => ({
                url:'/academic-semesters',
                method:'GET',
                
            })
        })
    })
})

export const {useGetALlSemesterQuery}= academicSemesterApi 