import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import ArrowRightIcon from '/ArrowRightIcon.svg';
import ArrowLeftIcon from '/ArrowLeftIcon.svg';

const Header = () => {
  return (
    <Grid
      container
      sx={{
        margin: '0.5rem 0.5rem 0.5rem 0',
        backgroundColor: '#121212',
        width: '99%',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        outline: '1px solid #fff',
        display: 'flex',
        alignItems: 'center',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginLeft: '16px', // Ensure left alignment with 16px space from parent
        }}
      >
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
            src={ArrowLeftIcon}
            alt="Arrow left icon"
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
            src={ArrowRightIcon}
            alt="Arrow right icon"
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
      <Grid
        sx={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginRight: '16px', // Ensure right alignment with 16px space from parent
        }}
      >
        <Button
          sx={{
            fontWeight: 'bold',
            color: '#b3b3b3',
            textTransform: 'none',
            '&:hover': {
              color: 'white',
              transform: 'scale(1.05)',
            },
          }}
        >
          S'inscrire
        </Button>
        <Button
          sx={{
            backgroundColor: 'white',
            color: '#121212',
            borderRadius: '9999px',
            textTransform: 'none',
            fontWeight: 'bold',
            height: '48px',
            padding: '8px 32px',
            '&:hover': {
              backgroundColor: 'white',
              color: '#121212',
              transform: 'scale(1.05)',
            },
          }}
        >
          Se connecter
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
