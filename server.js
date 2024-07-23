const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const stripe = new Stripe('your-stripe-secret-key'); // Replace with your Stripe secret key

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let requests = [];
let events = [];

// API endpoints for needs and events
app.post('/api/needs', (req, res) => {
  requests.push(req.body.request);
  res.status(201).send({ message: 'Request added' });
});

app.post('/api/events', (req, res) => {
  events.push(req.body);
  res.status(201).send({ message: 'Event added' });
});

app.get('/api/needs', (req, res) => {
  res.send(requests);
});

app.get('/api/events', (req, res) => {
  res.send(events);
});

// API endpoint for Stripe payments
app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const line_items = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Amount in cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:8080/success', // Redirect after successful payment
    cancel_url: 'http://localhost:8080/cancel', // Redirect if payment fails
  });

  res.json({ id: session.id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
