import { apiSlice } from "../../app/api/apiSlice";


// create user api slice
export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/user",
            providesTags: (result, error, args) => {
                return [
                    { type: "User", id: "LIST" },
                    result.user.map(item => ({
                        type: "User",
                        id: item.id
                    }))
                ] 
            },
            keepUnusedDataFor: 60,
            validateStatus: (response, result) => {
                return response.status == 200
            }
        }),
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
            providesTags: (result, error, args) => {
                return [{type: "User", id: args}]
            },
            keepUnusedDataFor: 60,
            validateStatus: (response, result) => {
                return response.status == 200
            }
        })
    })
}); 


export const { useGetUsersQuery, useGetUserByIdQuery } = userApiSlice;