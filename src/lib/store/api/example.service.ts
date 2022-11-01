import { createApi } from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from './axios.base';

const api = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'exampleApi',
  endpoints(build) {
    return {
      getUserList: build.query<Record<string, string>[], void>({
        query: () => ({
          url: 'api/example',
          method: 'get',
        }),
        keepUnusedDataFor: 10,
      }),
    };
  },
});

export const { useGetUserListQuery } = api;

export default api;
