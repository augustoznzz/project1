// Stripe payment integration
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function createPaymentIntent(amount: number, currency: string = 'usd') {
  return await stripe.paymentIntents.create({
    amount,
    currency,
  });
}

export async function createCustomer(email: string, name?: string) {
  return await stripe.customers.create({
    email,
    name,
  });
}
