const AddTree = () => {
  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const orderInfo = {
      name: formData.get("name") as string,
      price: formData.get("price") as string,
      stock: formData.get("stock") as string,
      // mobileNumber: formData.get("mobileNumber") as string,
      shortDescription: formData.get("shortDescription") as string,
      detailsDescription: formData.get("detailsDescription") as string,
      paymentMethod: formData.get("paymentMethod") as string,
      category: formData.get("category") as string,
      // products: cartProducts.map((product) => ({
      //   _id: product._id,
      //   name: product.name,
      //   qty: product.qty,
      //   price: product.price,
      //   category: product.category.name,
      // })),
      // totalAmount,
    };

    console.log(orderInfo);

    // try {
    //   console.log("Order placed successfully", orderInfo);

    //   const res = await updateTreeStock(orderInfo).unwrap();
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div>
      <h2 className="text-4xl pb-12">Add Products</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <div className="space-x-3 flex">
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-gray-500 text-sm font-medium"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tree name"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="price"
              className="block text-gray-500 text-sm font-medium"
            >
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block text-gray-500 text-sm font-medium"
          >
            Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="Total products"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
            required
          />
        </div>

        {/* <div>
          <label
            htmlFor="mobileNumber"
            className="block text-gray-500 text-sm font-medium"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile number"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
            required
          />
        </div> */}

        <div>
          <label
            htmlFor="shortDescription"
            className="block text-gray-500 text-sm font-medium"
          >
            Short Description
          </label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            placeholder="Optional WhatsApp number"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
          />
        </div>

        <div>
          <label
            htmlFor="detailsDescription"
            className="block text-gray-500 text-sm font-medium"
          >
            Details Description<span className="text-red-500">*</span>{" "}
            <a href="#" className="text-blue-500">
              (?)
            </a>
          </label>
          <textarea
            id="detailsDescription"
            name="detailsDescription"
            placeholder="Details description"
            className="w-full h-20 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
            required
          ></textarea>
        </div>

        {/* <div>
          <label className="block text-gray-500 text-sm font-medium">
            Payment Method <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 flex space-x-3">
            <label
              htmlFor="cashOnDelivery"
              className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
            >
              <span>Cash on Delivery</span>
              <input
                type="radio"
                defaultChecked
                id="cashOnDelivery"
                name="paymentMethod"
                value="cashOnDelivery"
                required
              />
            </label>
          </div>
        </div> */}

        <div>
          <label
            htmlFor="category"
            className="block text-gray-500 text-sm font-medium"
          >
            Category<span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
            required
          >
            <option value="">Select category...</option>
            <option value="Barishal">Barishal</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white font-bold px-16 py-2 rounded-md btn-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTree;
