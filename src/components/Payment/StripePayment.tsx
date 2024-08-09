import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckOutForm from "./StripeCheckOutForm";

// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const StripePayment = ({ userInfo, setPurchase }) => {
  console.log(userInfo);

  return (
    <Elements stripe={stripePromise}>
      <StripeCheckOutForm setPurchase={setPurchase} />
    </Elements>
  );
};

export default StripePayment;
