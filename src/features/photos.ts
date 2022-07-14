import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const photoApi = createApi({
    reducerPath:'photoApi',
    baseQuery:fetchBaseQuery({baseUrl:'/.netlify/functions/hi'}),
    endpoints:(builder) => ({
        getPhotobyId:builder.query<string, string>({
            query:(id) => `${id}`,
        })
    })
})


export const {useGetPhotobyIdQuery}  = photoApi
