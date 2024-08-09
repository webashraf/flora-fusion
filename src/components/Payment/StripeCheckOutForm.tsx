import useTotalAmount from "@/hooks/useTotalAmount";
import { usePaymentMutation } from "@/redux/api/baseApi";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import RoundedLoad from "../customUi/RoundedLoad/RoundedLoad";

const StripeCheckOutForm = ({ setPurchase, userInfo }) => {
  console.log(userInfo);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [process, setProcess] = useState(false);
  const [load, setLoad] = useState(false);

  const [payment] = usePaymentMutation();
  const amount = useTotalAmount();
  const cartDispatch = useAppDispatch();

  useEffect(() => {
    const fetchClientSecret = async () => {
      const res = await payment( userInfo );
      setClientSecret(res.data.clientSecret);
      console.log(res);
    };
    fetchClientSecret();
  }, [payment, amount, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setProcess(true);
    setLoad(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error?.message);
    } else {
      setError("");
    }

    // Confirm Payment
    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: "Ali",
            address: {},
            email: "",
            phone: "",
          },
        },
      });
    if (cardConfirmError) {
      setProcess(false);
      setLoad(false);
      toast.error("Payment error: " + cardConfirmError?.message);
      // console.log({ cardConfirmError });
    } else if (paymentIntent.status) {
      cartDispatch(clearCart());
      setPurchase(
        ` Order placed succesfully😊. TransectionId:  ${paymentIntent.id}`
      );
      setLoad(false);
      toast.success("Payment confirm successfully");
      console.log({ paymentIntent });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div></div>
        <div className="flex justify-center items-center mt-10">
          <button
            className={`text-white font-bold px-16 rounded-md btn-2 py-2 flex gap-2 items-center ${
              !stripe || !clientSecret || process
                ? "cursor-not-allowed"
                : " hover:bg-black "
            }`}
            disabled={!stripe || !clientSecret || process}
            type="submit"
          >
            {load ? (
              <RoundedLoad />
            ) : (
              <div>
                <DollarSign size={15} />
              </div>
            )}
            Place order
          </button>
        </div>

        <p className="text-red-500">{error}</p>
        {/* <p className="text-green-700 text-center text-xs mt-2">{purchase}</p> */}
      </form>
    </div>
  );
};

export default StripeCheckOutForm;
