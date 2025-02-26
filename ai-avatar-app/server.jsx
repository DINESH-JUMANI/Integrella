const express = require('express');
const axios = require('axios');
const cors = require('cors');

const apiKey = '1c89c46a000242cb8ba46d8a0a6cdf20_730ee4e633d24edabbec7401533b6407_andoraitools';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/uploadImageUrl', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.lightxeditor.com/external/api/v2/uploadImageUrl',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey, // Replace with your API key
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/avatar', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.lightxeditor.com/external/api/v1/avatar',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey, // Replace with your API key
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/order-status', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.lightxeditor.com/external/api/v1/order-status',
            req.body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey, 
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});