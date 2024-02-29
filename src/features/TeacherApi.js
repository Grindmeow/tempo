import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './constant'

export const TeacherApi = createApi({
  reducerPath: 'TeacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['teacher'],
  endpoints: (builder) => ({
    getTeacher: builder.query({
      query: (id) => ({
        url: `/api/teacher/${id}`
      }),
      providesTags: ['teacher']
    })
  })
})

export const { useGetTeacherQuery } = TeacherApi;