import { useState } from 'react';
import { Button, Container, Box, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertImage = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Convert base64 data to remove the prefix
      const base64Data = selectedImage.split(',')[1];

      // Send the image to the backend server
      const response = await axios.post(
        'http://localhost:5000/process-image',
        {
          imageBase64: base64Data,
        }
      );

      // Check if the response contains the processed image URL
      if (response.data && response.data.url) {
        setProcessedImage(response.data.url);
      } else {
        setError('Failed to process image. No URL returned.');
      }
    } catch (err) {
      setError('Error processing image. Please try again.');
      console.error('API Error:', err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="upload-image"
          type="file"
          onChange={handleImageUpload}
        />
        <label htmlFor="upload-image">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>

        {selectedImage && (
          <Button
            variant="contained"
            color="secondary"
            sx={{ ml: 2 }}
            onClick={convertImage}
            disabled={loading}
          >
            Convert to Avatar
          </Button>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        {selectedImage && (
          <Box>
            <h3>Original Image</h3>
            <img
              src={selectedImage}
              alt="Original"
              style={{ maxWidth: '300px', maxHeight: '300px' }}
            />
          </Box>
        )}

        {loading && <CircularProgress sx={{ alignSelf: 'center' }} />}

        {processedImage && (
          <Box>
            <h3>Processed Avatar</h3>
            <img
              src={processedImage}
              alt="Processed"
              style={{ maxWidth: '300px', maxHeight: '300px' }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;