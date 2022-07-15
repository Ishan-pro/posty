import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';


interface RegisterUserDto {
    username:string,
    email:string,
    password:string,
    name:string,
}

interface GetUser {
    accesstoken:string,
    refreshtoken:string
}

export const userApi = createApi({
    reducerPath:"users",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:8000/users/"}),
    endpoints:(builder) => ({
        registerUser: builder.mutation<GetUser, RegisterUserDto>({
            query:(user) => ({
                url:"",
                method:"POST",
                body:user
            })
        })
    })
})