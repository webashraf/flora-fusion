import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["items"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ searchItem = "", price = 1, page = 1, limit }) => {
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}&price=${price}&page=${page}&limit=${limit}`,
          providesTags: ["products"],
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
          providesTags: ["items"],
        };
      },
    }),
    getSingleProductById: builder.query({
      query: (params) => {
        console.log(params);
        return {
          method: "GET",
          url: `/products/${params}`,
          providesTags: ["items"],
        };
      },
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        providesTags: ["items"],
      }),
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/create-order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["items"],
    }),
    createTree: builder.mutation({
      query: (payload) => ({
        url: "/products/add-product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["items"],
    }),
    updateTree: builder.mutation({
      query: (payload) => {
        console.log("🚀 ~ treeId:", payload);

        return {
          url: `/products/${payload?.treeID}`,
          method: "PATCH",
          body: payload?.updatedData,
        };
      },
    }),
    deleteTree: builder.mutation({
      query: (params) => ({
        url: `/products/${params}`,
        method: "DELETE",
      }),
      invalidatesTags: ["items"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByQueryQuery,
  useGetSingleProductByIdQuery,
  useGetCategoriesQuery,
  useCreateOrderMutation,
  useCreateTreeMutation,
  useUpdateTreeMutation,
  useDeleteTreeMutation,
} = baseApi;
