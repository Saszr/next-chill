import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchWithIntercept } from './intercept/fetchIntercept';

export const baseApi = createApi({
  baseQuery: fetchWithIntercept,
  reducerPath: 'baseApi',
  // keepUnusedDataFor: 2 * 60,
  // refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});
