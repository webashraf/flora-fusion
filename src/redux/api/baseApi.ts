import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["trees"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        searchItem = "",
        price = 1,
        page = 1,
        limit,
        category = "",
      }) => {
        return {
          method: "GET",
          url: `/products?searchItem=${searchItem}&price=${price}&page=${page}&limit=${limit}&categoryId=${category}`,
        };
      },
      providesTags: ["trees"],
    }),
    // getProductsByQuery: builder.query({
    //   query: ({ searchItem = "", price = 1 }) => ({
    //     method: "GET",
    //     url: `/products?searchItem=${searchItem}&price=${price}&page=1&limit=5&$`,
    //     providesTags: ["items"],
    //   }),
    // }),
    getSingleProductById: builder.query({
      query: (params) => {
        return {
          method: "GET",
          url: `/products/${params}`,
        };
      },
      providesTags: ["trees"],
    }),
    createTree: builder.mutation({
      query: (payload) => ({
        url: "/products/add-product",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["trees"],
    }),
    updateTree: builder.mutation({
      query: (payload) => ({
        url: `/products/${payload?.treeID}`,
        method: "PATCH",
        body: payload?.updatedData,
      }),
      invalidatesTags: ["trees"],
    }),
    deleteTree: builder.mutation({
      query: (params) => ({
        url: `/products/${params}`,
        method: "DELETE",
      }),
      invalidatesTags: ["trees"],
    }),
    retriveAllDeleteTrees: builder.mutation({
      query: () => ({
        url: "/products",
        method: "PUT",
      }),
      invalidatesTags: ["trees"],
    }),
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
    updateCategory: builder.mutation({
      query: (payload) => {
        return {
          url: `/categories/${payload?.categoryId}`,
          method: "PUT",
          body: payload?.updatedData,
        };
      },
    }),
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["trees"],
    }),
    payment: builder.mutation({
      query: (payload) => {
        console.log(payload);
        return {
          url: "/order/create-payment-intent",
          method: "POST",
          body: { payload },
        };
      },
      invalidatesTags: ["trees"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductByIdQuery,
  useGetCategoriesQuery,
  useUpdateTreeMutation,
  useDeleteTreeMutation,
  useRetriveAllDeleteTreesMutation,
  useCreateOrderMutation,
  usePaymentMutation,
  useCreateTreeMutation,
  useUpdateCategoryMutation,
} = baseApi;
