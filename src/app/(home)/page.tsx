// src/app/(home)/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = { title: 'Domov | ZoskaSnap'}

export default function Home() {
  return (
    <Typography variant="h5" gutterBottom>
      Domovska stranka
    </Typography>
  );
}