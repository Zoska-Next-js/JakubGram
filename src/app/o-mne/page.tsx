// src/app/o-mne/page.tsx

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const metadata = { title: 'O mne | ZoskaSnap'}

export default function About() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        O mne stranka
      </Typography>
    </Container>
  );
}