import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

interface Artist {
  id: number;
  name: string;
  image: string;
}

const ArtistsCards = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchArtists = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/artists/all`);
  //       setArtists(await response.json());
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Erreur pendant la récupération des artistes:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchArtists();
  // }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(24,24,24,1) 35%, rgba(51,51,51,1) 70%, rgba(85,85,85,1) 100%)',
        width: '99%',
        height: 'auto',
        outline: '1px solid #fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <Typography
          sx={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            paddingLeft: '1rem',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Artistes populaires
        </Typography>
        <Typography
          variant="body2"
          sx={{
            justifySelf: 'end',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#b3b3b3',
            marginRight: '1.5rem',
            textTransform: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Tout afficher
        </Typography>
      </Box>

      <Grid container>
        {/* {artists.map((artist) => ( */}
        <Grid
          // key={artist.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '1rem',
            outline: '1px solid #fff',
            width: '182px',
            height: '236px',
          }}
        >
          <Box
            sx={{
              width: '160px',
              height: '160px',
              outline: '1px solid #fff',
              borderRadius: '50%',
              backgroundColor: '#000', // Placeholder for artist image
            }}
          ></Box>
          <Typography>Nom de l'artiste</Typography>
          <Typography>Artiste</Typography>
        </Grid>
        {/* ))} */}
      </Grid>
    </Box>
  );
};

export default ArtistsCards;
