// src/app/not-found.tsx

import Typography from '@mui/material/Typography';

export const metadata = { title: 'Nenajdene | ZoskaSnap'}

export default function NotFound() {
  return (
    <Typography variant="h5" gutterBottom>
      Stranka neexistuje
    </Typography>
  );
}

