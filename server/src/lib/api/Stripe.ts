import stripe from 'stripe';

const client = new stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: '2019-12-03'
});

export const Stripe = {
  connect: async (code: string) => {
    const response = await client.oauth.token({
      /* eslint-disable @typescript-eslint/camelcase */
      grant_type: 'authorization_code',
      code
    });

    return response;
  }
};
