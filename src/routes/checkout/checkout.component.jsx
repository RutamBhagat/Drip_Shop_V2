import React, { useRef, useState } from "react";
import CheckoutCartItem from "./checkoutCartItem.component";
import { useDispatch, useSelector } from "react-redux";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import Warning from "./checkoutForm/warning/warning.component";
import Shipping from "./checkoutForm/shipping/shipping.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { emptyItemsInCart } from "../../store/cart/cart.action";

const Checkout = () => {
  const dispatch = useDispatch()
  const cartLength = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentFormRef = useRef();
  const summeryRef = useRef();

  const togglePaymentForm = () => {
    paymentFormRef.current.classList.toggle("hidden");
    summeryRef.current.classList.toggle("lg:grid-cols-3");
  };

  const handleFake = () => {
    alert(
      "Use card: 4000003560000008, exp date: any future date, cvc: any 3 digit number"
    );
  };

  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: cartTotal * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        dispatch(emptyItemsInCart)
      }
    }
  };

  return (
    <div className="pt-24">
      <div ref={summeryRef} className="grid min-h-screen">
        <div className="col-span-1 mx-3 bg-white sm:mx-12 lg:order-2 lg:mx-0">
          <h1 className="border-b-2 py-6 px-8 text-xl text-gray-600">
            Order Summary
          </h1>
          <div className="flex max-h-[450px] flex-col items-center overflow-y-scroll border-b">
            {cartLength ? (
              cartItems.map((cartItem) => {
                return (
                  <CheckoutCartItem key={Math.random()} cartItem={cartItem} />
                );
              })
            ) : (
              <div className="py-20 lg:py-44">
                <EmptyCart />
              </div>
            )}
          </div>
          <div className="mx-auto max-w-5xl border-b px-8">
            <div className="flex justify-between py-4 text-gray-600">
              <span>Subtotal</span>
              <span className="text-xl font-semibold text-amber-900">
                ₹{cartTotal}
              </span>
            </div>
            <div className="flex justify-between py-4 text-gray-600">
              <span>Shipping</span>
              <span className="text-xl font-semibold text-amber-900">Free</span>
            </div>
          </div>
          <div className="mx-auto flex max-w-5xl justify-between px-8 py-8 text-xl font-semibold text-gray-600">
            <span>Total</span>
            <span className="text-xl">₹{cartTotal}</span>
          </div>
          {cartTotal ? (
            <div className="flex items-center justify-center p-5">
              <button
                onClick={togglePaymentForm}
                className="w-2/3 max-w-2xl rounded-full bg-amber-600 px-4 py-3 text-center text-xl font-semibold text-white transition-colors focus:outline-none focus:ring md:w-1/3 lg:w-2/3"
              >
                Proceed To Pay
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* PAYMENT_FORM */}
        <form
          onSubmit={paymentHandler}
          action=""
          ref={paymentFormRef}
          className="col-span-1 hidden space-y-8 bg-gray-800 px-3 sm:px-12 lg:col-span-2"
        >
          <Warning />

          {/* SHIPPING  */}
          <Shipping />

          {/* BILLING  */}
          <div className="rounded-lg">
            <section>
              <div className="my-2 flex justify-between ">
                <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-300">
                  Payment Information
                </h2>
                <button
                  type="button"
                  onClick={handleFake}
                  className="ml-auto rounded-lg bg-gray-300 px-3 text-gray-600"
                >
                  Use test card 💳
                </button>
              </div>
              <div className="flex justify-center rounded bg-white p-3">
                <div className="w-full max-w-2xl p-3">
                  <div className="pb-3 text-gray-800">Card Details</div>
                  <CardElement />
                </div>
              </div>
            </section>
          </div>
          <button
            type="submit"
            className={`submit-button w-full rounded-full bg-amber-600 px-4 py-3 text-xl font-semibold text-white transition-colors focus:outline-none focus:ring ${
              isProcessingPayment ? "hidden" : ""
            }`}
          >
            Pay ₹{cartTotal}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
