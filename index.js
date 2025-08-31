const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    const event = req.body;
    console.log('Received Stripe event:', event);
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
