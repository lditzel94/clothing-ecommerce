import React from 'react'

/** Stripe */
import StripeCheckout from 'react-stripe-checkout'

function StripeChekoutButton({ price }) {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51JT86ZEm4W5qZAZOjn6XGwfh6PufZsahm8FTaNsfHNnqGjqdmEBV4XtHqFLW0Ru11Ww4vPDSpUqzABnZZcD0lPgl004GRIUoO6'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeChekoutButton
