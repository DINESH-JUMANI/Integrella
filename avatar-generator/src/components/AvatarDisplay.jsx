import React from 'react';
import { Box, Typography } from '@mui/material';

function AvatarDisplay({ avatarUrl }) {
    return (
        <Box mt={4}>
            <Typography variant="h6" gutterBottom>
                Your AI Generated Avatar:
            </Typography>
            {avatarUrl && <img src={avatarUrl} alt="AI Generated Avatar" style={{ maxWidth: '100%' }} />}
        </Box>
    );
}

export default AvatarDisplay;