/* eslint-disable @typescript-eslint/no-explicit-any */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import StripeCheckOutForm from "./StripeCheckOutForm";

// TODO: Add publishable key
const stripePromise: Promise<Stripe | null> = loadStripe(
  import.meta.env.VITE_PAYMENT_PK
);

type TStripePaymentProps = {
  userInfo: any;
  setPurchase: (value: string) => void;
};

const StripePayment: React.FC<TStripePaymentProps> = ({
  userInfo,
  setPurchase,
}) => {

  return (
    <Elements stripe={stripePromise}>
      <StripeCheckOutForm userInfo={userInfo} setPurchase={setPurchase} />
    </Elements>
  );
};

export default StripePayment;
