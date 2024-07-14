import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["cart", "products", "categories"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchItem = "", price = 1, page = 1, limit }) => {
        console.log("Parameters received in getProducts query:", {
          searchItem,
          price,
          page,
          limit,
        });
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}&price=${price}&page=${page}&limit=${limit}`,
          invalidatesTags: ["products"],
        };
      },
    }),
    getProductsByQuery: builder.query({
      query: ({ searchItem = "", price = 1 }) => {
        console.log("Parameters received in getProducts query:", {
          searchItem,
          price,
        });
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}&price=${price}&page=1&limit=5`,
          invalidatesTags: ["products"],
        };
      },
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        invalidatesTags: ["categories"],
      }),
    }),
    updateTreeStock: builder.mutation({
      query: (orderInfo) => ({
        url: "/create-order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["cart", "products", "categories"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByQueryQuery,
  useGetCategoriesQuery,
  useUpdateTreeStockMutation,
} = baseApi;
