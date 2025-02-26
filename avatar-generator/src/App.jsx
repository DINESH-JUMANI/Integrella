import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import AvatarDisplay from './components/AvatarDisplay';
import { Container, Typography } from '@mui/material';

function App() {
  const [avatarUrl, setAvatarUrl] = useState(null);

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        AI Avatar Generator
      </Typography>
      <ImageUpload setAvatarUrl={setAvatarUrl} />
      {avatarUrl && <AvatarDisplay avatarUrl={avatarUrl} />}
    </Container>
  );
}

export default App;