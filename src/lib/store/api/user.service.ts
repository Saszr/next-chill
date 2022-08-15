import { baseApi } from './base.service';
// import { setUserList } from '../slice/user.slice';

export interface DataCase {
  code: number;
  data?: Record<string, any>[];
  msg?: string;
}

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserList: builder.query<DataCase, void>({
      query: () => '/api/users',
      keepUnusedDataFor: 10,
      // async onQueryStarted(id, { dispatch, queryFulfilled }) {
      //   console.log('starting!');
      //   try {
      //     const { data } = await queryFulfilled;
      //     // dispatch(setUserList(data.data));
      //   } catch (err) {
      //     console.log('error... ', err);
      //   }
      // },
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: '/api/users/authenticate',
        method: 'post',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserListQuery, useLazyGetUserListQuery, useSignInMutation } = api;

export default api;
