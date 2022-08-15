import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { printHttpError, printPanel } from './printHttpError';

const baseUrl: string = process.env.BASE_API_URL as string;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    return headers;
  },
});

// https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery
export const fetchWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> = await baseQuery(
    args,
    api,
    extraOptions,
  );

  const { data, error, meta } = result;

  const { request } = meta as FetchBaseQueryMeta;
  const url: string = request.url;

  if (error) {
    const { status } = error as FetchBaseQueryError;
    printHttpError(Number(status), url);
  }

  if (data) {
    const { code } = data as { code: number; message?: string; data?: any };

    if (code !== 1) {
      printPanel({ method: request.method, url: request.url });
    }
  }

  return result;
};
