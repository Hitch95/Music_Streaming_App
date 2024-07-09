import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import LibraryIcon from '/Library.svg';
import AddIcon from '/AdditionIcon.svg';

const Library = () => {
  return (
    <Box
      sx={{
        margin: '0.5rem',
        width: '294px',
        height: '100%',
        color: '#b3b3b3',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          color: 'white',
          '& .library-icon': {
            filter:
              'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
          },
        },
        outline: '1px solid #fff',
        borderRadius: '8px',
      }}
    >
      <Grid
        container
        sx={{
          width: '294px',
          height: '56px',
          color: '#b3b3b3',
          backgroundColor: '#121212',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            color: 'white',
            '& .library-icon': {
              filter:
                'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
            },
          },
        }}
      >
        <Grid
          container
          sx={{
            width: '262px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Grid
            component="img"
            src={LibraryIcon}
            alt="library icon"
            className="library-icon"
            sx={{
              padding: '2px',
              cursor: 'pointer',
              width: '24px',
              filter:
                'invert(71%) sepia(0%) saturate(4716%) hue-rotate(22deg) brightness(101%) contrast(100%)',
            }}
          />
          <Grid
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              marginLeft: '0.75rem',
            }}
          >
            <Typography
              sx={{
                cursor: 'pointer',
                color: 'inherit',
                fontFamily: 'FranieVariableTest-Regular, sans-serif',
                fontWeight: 700,
                lineHeight: 1.5,
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
              }}
            >
              Bibliothèque
            </Typography>
          </Grid>
          <Grid>
            <Button
              sx={{
                minWidth: '32px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                '&:hover': {
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Grid
                component="img"
                src={AddIcon}
                alt="plus icon"
                sx={{
                  color: '#b3b3b3',
                  width: '1rem',
                  filter:
                    'invert(71%) sepia(0%) saturate(4716%) hue-rotate(22deg) brightness(101%) contrast(100%)',
                  '&:hover': {
                    filter:
                      'invert(99%) sepia(98%) saturate(399%) hue-rotate(254deg) brightness(120%) contrast(100%)',
                  },
                }}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: '278px',
          height: '140px',
          margin: '16px 20px',
          color: 'white',
          backgroundColor: '#252425',
          borderRadius: '8px',
          gap: '16px',
          padding: '16px 20px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Créez votre première playlist
        </Typography>
        <Typography variant="body2">
          C'est simple, nous allons vous aider
        </Typography>
        <Button
          sx={{
            backgroundColor: 'white',
            color: '#121212',
            borderRadius: '9999px',
            textTransform: 'none',
            fontWeight: 'bold',
            height: '32px',
            padding: '0 16px',
            '&:hover': {
              backgroundColor: 'white',
              color: '#121212',
              scale: '1.05',
            },
          }}
        >
          Créer une playlist
        </Button>
      </Grid>
    </Box>
  );
};

export default Library;
