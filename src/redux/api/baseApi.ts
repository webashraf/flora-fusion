import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchItem = "", price = 1}) => {
        console.log("Parameters received in getProducts query:", { searchItem, price });
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}&price=${price}`,
        };
      },
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    updateStock: builder.mutation({
      query: () => ({
        url: "/update-tree",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = baseApi;
