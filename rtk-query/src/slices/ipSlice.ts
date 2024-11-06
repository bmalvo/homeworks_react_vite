import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IpAddress } from "../types";

export const ipApiSlice = createApi({

  reducerPath: 'ipApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.ipify.org' }),
  endpoints: (builder) => ({

    getIpAddress: builder.query<IpAddress, void>({

      query: () => '?format=json'
    })
  })
})

export const { useGetIpAddressQuery } = ipApiSlice;