import useTotalAmount from "@/hooks/useTotalAmount";
import { usePaymentMutation } from "@/redux/api/baseApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const StripeCheckOutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  const [payment] = usePaymentMutation();

  const amount = useTotalAmount();

  useEffect(() => {
    const res = payment({ amount });
    res.then((data) => {
      console.log(data);
    });
  }, [payment, amount]);

  console.log({ clientSecret });

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    // Confirm Payment

    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: "x",
          },
        },
      });
    if (cardConfirmError) {
      console.log({ cardConfirmError });
    } else {
      console.log({ paymentIntent });
    }
  };

  return (
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

      <div className="flex justify-center items-center mt-10">
        <button
          className={` text-white font-bold px-16 py-1 rounded-md  ${
            !stripe || !clientSecret ? "bg-red-600" : "btn-2"
          }`}
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Place order
        </button>
      </div>

      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default StripeCheckOutForm;
