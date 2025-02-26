import React, { useState } from 'react';
import { Button, Container, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [image, setImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const LIGHTX_API_KEY = '1c89c46a000242cb8ba46d8a0a6cdf20_730ee4e633d24edabbec7401533b6407_andoraitools';
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 2097152) { 
      setImage(file);
      setError(null);
    } else {
      setError('Image size must be less than 2MB');
    }
  };

  const generateAvatar = async () => {
    if (!image) {
      setError('Please upload an image first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Step 1: Upload image to get URL
      const uploadResponse = await axios.post(
        `${CORS_PROXY}https://api.lightxeditor.com/external/api/v2/uploadImageUrl`,
        {
          uploadType: 'imageUrl',
          size: image.size,
          contentType: image.type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': LIGHTX_API_KEY,
          },
        }
      );

      console.log('Upload Response:', uploadResponse.data);

      const { uploadImage } = uploadResponse.data.body;

      // Step 2: Upload the image binary data
      const putResponse = await axios.put(uploadImage, image, {
        headers: {
          'Content-Type': image.type,
        },
      });

      console.log('PUT Response:', putResponse.status);

      // Step 3: Generate avatar
      const avatarResponse = await axios.post(
        `${CORS_PROXY}https://api.lightxeditor.com/external/api/v1/avatar`,
        {
          imageUrl: uploadImage,
          styleImageUrl: '', // Optional: Add a style image URL if needed
          textPrompt: 'Generate a cool avatar', // Optional: Add a text prompt
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': LIGHTX_API_KEY,
          },
        }
      );

      console.log('Avatar Response:', avatarResponse.data);

      const { orderId } = avatarResponse.data.body;

      // Step 4: Check status until avatar is generated
      let statusResponse;
      let retries = 0;
      while (retries < 5) {
        statusResponse = await axios.post(
          `${CORS_PROXY}https://api.lightxeditor.com/external/api/v1/order-status`,
          {
            orderId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': LIGHTX_API_KEY,
            },
          }
        );

        console.log('Status Response:', statusResponse.data);

        if (statusResponse.data.body.status === 'active') {
          setAvatarUrl(statusResponse.data.body.output);
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds
        retries++;
      }

      if (retries >= 5) {
        setError('Failed to generate avatar. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while generating the avatar.');
      console.error('Error:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AI Avatar Generator
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        id="upload-button"
      />
      <label htmlFor="upload-button">
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>
      {image && (
        <Box mt={2}>
          <Typography variant="body1">Selected Image: {image.name}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={generateAvatar}
            disabled={loading}
            style={{ marginTop: '10px' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Generate Avatar'}
          </Button>
        </Box>
      )}
      {error && (
        <Typography color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}
      {avatarUrl && (
        <Box mt={2}>
          <Typography variant="h6">Your AI Avatar:</Typography>
          <img src={avatarUrl} alt="AI Avatar" style={{ maxWidth: '100%', marginTop: '10px' }} />
        </Box>
      )}
    </Container>
  );
};

export default App;