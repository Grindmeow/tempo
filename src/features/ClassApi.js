import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './constant'

export const ClassApi = createApi({
  reducerPath: 'CreateApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['classes'],
  endpoints: (builder) => ({

    getClasses: builder.query({
      query: (query) => ({
        url: '/api/classes',
      }),
      providesTags: ['classes']
    }),

  })
});

export const { useGetClassesQuery } = ClassApi;