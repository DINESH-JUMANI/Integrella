import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

function ImageUpload({ setAvatarUrl }) {
    const [image, setImage] = useState(null);
    const [styles, setStyles] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [submissionId, setSubmissionId] = useState(null);
    const apiKey = 'NclRD3XbfA3fEdluOueR41tDWpM6tlkN4XtjYPGn';

    useEffect(() => {
        const fetchStyles = async () => {
            try {
                const response = await axios.get('https://api.deeparteffects.com/v1/noauth/styles', {
                    headers: {
                        'x-api-key': apiKey, // Replace with your API key
                    },
                });
                setStyles(response.data.styles);
            } catch (error) {
                console.error('Error fetching styles:', error);
            }
        };
        fetchStyles();
    }, []);

    // Handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Convert image to avatar using DeepArt.io API
    const convertToAvatar = async () => {
        if (!image || !selectedStyle) {
            alert('Please select an image and a style.');
            return;
        }

        const base64Image = image.split(',')[1]; // Remove the data URL prefix

        try {
            const response = await axios.post(
                'https://api.deeparteffects.com/v1/noauth/upload',
                {
                    styleId: selectedStyle,
                    imageBase64Encoded: base64Image,
                    imageSize: 512, // Optional
                    optimizeForPrint: false, // Optional
                    useOriginalColors: false, // Optional
                },
                {
                    headers: {
                        'x-api-key': apiKey, // Replace with your API key
                        'Content-Type': 'application/json',
                    },
                }
            );
            setSubmissionId(response.data.submissionId);
            checkSubmissionStatus(response.data.submissionId);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    // Check submission status and retrieve the result
    const checkSubmissionStatus = async (submissionId) => {
        try {
            const interval = setInterval(async () => {
                const response = await axios.get(
                    `https://api.deeparteffects.com/v1/noauth/result?submissionId=${submissionId}`,
                    {
                        headers: {
                            'x-api-key': apiKey, // Replace with your API key
                        },
                    }
                );
                if (response.data.status === 'finished') {
                    clearInterval(interval);
                    setAvatarUrl(response.data.url);
                } else if (response.data.status === 'error') {
                    clearInterval(interval);
                    console.error('Error processing image:', response.data);
                }
            }, 5000); // Check every 5 seconds
        } catch (error) {
            console.error('Error checking submission status:', error);
        }
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Upload an image from your gallery or take a photo:
            </Typography>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="upload-button"
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="upload-button">
                <Button variant="contained" component="span">
                    Upload Image
                </Button>
            </label>

            {image && (
                <Box mt={2}>
                    <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                </Box>
            )}

            <FormControl fullWidth margin="normal">
                <InputLabel>Select Style</InputLabel>
                <Select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
                    {styles.map((style) => (
                        <MenuItem key={style.id} value={style.id}>
                            {style.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button variant="contained" color="primary" onClick={convertToAvatar} disabled={!image || !selectedStyle}>
                Convert to Avatar
            </Button>
        </Box>
    );
}

export default ImageUpload;