const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Proxy endpoint
app.post('/process-image', async (req, res) => {
    try {
        const { imageBase64 } = req.body;

        // Log the request payload
        console.log('Request Payload:', {
            enhancements: ['denoise', 'deblur', 'light'],
            url: `data:image/jpeg;base64,${imageBase64}`,
            width: 500,
        });

        const response = await axios.post(
            'https://deep-image.ai/rest_api/process_result',
            {
                enhancements: ['denoise', 'deblur', 'light'],
                url: `data:image/jpeg;base64,${imageBase64}`,
                width: 500,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': '9aababa0-f469-11ef-ad03-1d3fb4c19141', // Your API key
                },
            }
        );

        // Log the API response
        console.log('API Response:', response.data);

        res.json(response.data);
    } catch (error) {
        // Log the full error
        console.error('Backend Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to process image', details: error.response ? error.response.data : error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});