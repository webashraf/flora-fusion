import { Button } from "@/components/ui/button";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        {/* <div className="mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
          <div className="px-4 py-3 flex justify-between">
            <div>
              <h2 className="font-bold text-[32xl]">Sign Up</h2>
              <p className="text-gray-500 text-[15xl]">It's quick and easy.</p>
            </div>
            <div className="text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <hr className="bg-gray-600" />
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="space-x-3 flex">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Surname"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="New password"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">
                Date of birth <a href=""> (?) </a>
              </div>
              <div className="mt-1 flex space-x-3"></div>
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">
                Gender <a href=""> (?) </a>
              </div>
              <div className="mt-1 flex space-x-3">
                <label
                  htmlFor="female"
                  className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <span>Female</span>
                  <input type="radio" id="female" name="gender" />
                </label>
                <label
                  htmlFor="male"
                  className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <span>Male</span>
                  <input type="radio" id="male" name="gender" />
                </label>
                <label
                  htmlFor="other"
                  className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <span>Custom</span>
                  <input type="radio" id="other" name="gender" />
                </label>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-[11xl]">
                People who use our service may have uploaded your contact
                information to Facebook.
                <a
                  href=""
                  className="hover:text-blue-900 font-medium hover:underline"
                >
                  Learn more
                </a>
                .
              </p>
              <p className="text-gray-600 mt-4 text-[11xl]">
                By clicking Sign Up, you agree to our
                <a
                  href=""
                  className="hover:text-blue-900 font-medium hover:underline"
                >
                  Terms
                </a>
                ,
                <a
                  href=""
                  className="hover:text-blue-900 font-medium hover:underline"
                >
                  Privacy Policy
                </a>
                and
                <a
                  href=""
                  className="hover:text-blue-900 font-medium hover:underline"
                >
                  Cookies Policy
                </a>
                . You may receive SMS notifications from us and can opt out at
                any time.
              </p>
            </div>
            <div className="text-center">
              <Button className="text-white font-bold px-16 py-1 rounded-md">
                Sign Up
              </Button>
            </div>
          </div>
        </div> */}
        {/* <div className="mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
          <div className="px-4 py-3 flex justify-between">
            <div>
              <h2 className="font-bold text-[32xl]">Checkout</h2>
              <p className="text-gray-500 text-[15xl]">
                Review your order and complete payment.
              </p>
            </div>

          </div>
          <hr className="bg-gray-600" />
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="space-x-3 flex">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">
                Delivery Address <a href=""> (?) </a>
              </div>
              <textarea
                placeholder="Enter your address"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">Payment Method</div>
              <div className="mt-1 flex space-x-3">
                <label
                  htmlFor="cashOnDelivery"
                  className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <span>Cash on Delivery</span>
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                  />
                </label>
              </div>
            </div>
            <div className="text-center">
              <Button className="text-white font-bold px-16 py-1 rounded-md">
                Place Order
              </Button>
            </div>
          </div>
        </div> */}

        <div className="mx-auto max-w-[432px] bg-white rounded-md shadow-lg drop-shadow-md">
          <div className="px-4 py-3 flex justify-between">
            <div>
              <h2 className="font-bold text-[32xl]">Checkout</h2>
              <p className="text-gray-500 text-[15xl]">
                Review your order and complete payment.
              </p>
            </div>
          </div>
          <hr className="bg-gray-600" />
          <div className="px-4 pt-3 pb-6 space-y-3">
            <div className="space-x-3 flex">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile number"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Optional WhatsApp number"
                className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              />
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">
                Delivery Address <a href=""> (?) </a>
              </div>
              <textarea
                placeholder="Enter your addressl Like district, upazila, union"
                className="w-full h-20 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
              ></textarea>
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">Payment Method</div>
              <div className="mt-1 flex space-x-3">
                <label
                  htmlFor="cashOnDelivery"
                  className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400"
                >
                  <span>Cash on Delivery</span>
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-[12xl]">
                Division (Bangladesh)
              </div>
              <select className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500">
                <option value="">Select division...</option>
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
              <Button className="text-white font-bold px-16 py-1 rounded-md">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="heading_8264">MASTERCARD</p>
              <svg
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff9800"
                  d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                ></path>
                <path
                  fill="#d50000"
                  d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                ></path>
                <path
                  fill="#ff3d00"
                  d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                ></path>
              </svg>
              <svg
                className="contactless"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                <image
                  id="image0"
                  width={50}
                  height={50}
                  x={0}
                  y={0}
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN               AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ               cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf               lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F               fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN               GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it               VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk               HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z               bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g               DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ               qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB               sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz               Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX               XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi               cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI               nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK               xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt               MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5               OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw               MDowMIXeN6gAAAAASUVORK5CYII="
                />
              </svg>
              <p className="number">9759 2484 5269 6576</p>
              <p className="valid_thru">VALID THRU</p>
              <p className="date_8264">1 2 / 2 4</p>
              <p className="name">BRUCE WAYNE</p>
            </div>
            <div className="flip-card-back">
              <div className="strip"></div>
              <div className="mstrip"></div>
              <div className="sstrip">
                <p className="code">***</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
