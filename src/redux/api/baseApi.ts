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
          providesTags: ["items"],
        };
      },
    }),
    getProductsByQuery: builder.query({
      query: ({ searchItem = "", price = 1 }) => ({
        method: "GET",
        url: `/products?searchItem=${searchItem}&price=${price}&page=1&limit=5`,
        providesTags: ["items"],
      }),
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
    createTree: builder.mutation({
      query: (payload) => ({
        url: "/products/add-product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["items"],
    }),
    updateTree: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload?.treeID}`,
        method: "PATCH",
        body: payload?.updatedData,
      }),
      invalidatesTags: ["items"],
    }),
    deleteTree: builder.mutation({
      query: (params) => ({
        url: `/products/${params}`,
        method: "DELETE",
      }),
      invalidatesTags: ["items"],
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
        providesTags: ["items"],
      }),
    }),
    updateCategory: builder.mutation({
      query: (payload) => {
        console.log("🚀 ~ payload:", payload);

        return {
          url: `/categories/${payload?.categoryId}`,
          method: "PUT",
          body: payload?.updatedData,
        };
      },
      invalidatesTags: ["items"],
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["items"],
    }),
    payment: builder.mutation({
      query: (price) => {
        console.log("BaseAPi", price);

        return {
          url: "/order/create-payment-intent",
          method: "POST",
          body: { price },
        };
      },
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
  usePaymentMutation,
  useCreateTreeMutation,
  useUpdateTreeMutation,
  useDeleteTreeMutation,
  useUpdateCategoryMutation,
} = baseApi;
