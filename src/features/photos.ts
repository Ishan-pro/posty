import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface Photos {
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}

export const photoApi = createApi({
    reducerPath:'photoApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/photos/'}),
    endpoints:(builder) => ({
        getPhotobyId:builder.query<Photos, number>({
            query:(id) => `${id}`,
        })
    })
})


export const {useGetPhotobyIdQuery}  = photoApi
