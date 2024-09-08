/* eslint-disable @typescript-eslint/no-unused-vars */
import useTotalAmount from "@/hooks/useTotalAmount";
import {
  useCreateOrderMutation,
  useCreatePaymentMutation,
} from "@/redux/api/baseApi";
import { clearCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import RoundedLoad from "../customUi/RoundedLoad/RoundedLoad";

// Define the props for the component
interface StripeCheckOutFormProps {
  setPurchase: (message: string) => void;
  userInfo: {
    name: string;
    address?: Record<string, unknown>;
    email?: string;
    phone?: string;
  };
}

const StripeCheckOutForm: React.FC<StripeCheckOutFormProps> = ({
  setPurchase,
  userInfo,
}) => {
  const [error, setError] = useState<string>("");
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string>("");
  const [process, setProcess] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  const [createPayment] = useCreatePaymentMutation();
  const [createOrder] = useCreateOrderMutation();
  const amount = useTotalAmount();
  const cartDispatch = useAppDispatch();

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const res = await createPayment({ amount });
        if (res?.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        } else {
          throw new Error("Failed to retrieve client secret.");
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred.";
        toast.error(`Error: ${errorMessage}`);
      }
    };
    fetchClientSecret();
  }, [createPayment, amount, userInfo]);

  // Handle payment submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcess(true);
    setLoad(true);

    if (!stripe || !elements) {
      setError("Stripe has not loaded correctly.");
      setProcess(false);
      setLoad(false);
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      setError("Card details not found.");
      setProcess(false);
      setLoad(false);
      return;
    }

    try {
      const { error: paymentMethodError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card,
        });

      if (paymentMethodError) {
        throw new Error(paymentMethodError.message);
      }

      try {
        const res = await createOrder(userInfo);
      } catch (err) {
        console.log(err);
      }

      const { paymentIntent, error: cardConfirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              name: userInfo.name || "Anonymous",
              address: userInfo.address || {},
              email: userInfo.email || "",
              phone: userInfo.phone || "",
            },
          },
        });

      if (cardConfirmError) {
        throw new Error(cardConfirmError.message);
      }

      if (paymentIntent?.status === "succeeded") {
        cartDispatch(clearCart());

        setPurchase(
          `Order placed successfully 😊. Transaction ID: ${paymentIntent.id}`
        );
        toast.success("Payment confirmed successfully!");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "An error occurred.";
      setError(errorMessage);
      toast.error(`Payment error: ${errorMessage}`);
    } finally {
      setProcess(false);
      setLoad(false);
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
        <div className="flex justify-center items-center mt-10">
          <button
            className={`text-white font-bold px-16 rounded-md btn-2 py-2 flex gap-2 items-center ${
              !stripe || !clientSecret || process
                ? "cursor-not-allowed"
                : "hover:bg-black"
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
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default StripeCheckOutForm;
