import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Logo from '/logo.svg';

const Sidebar = () => {
  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: '#121212',
        fontFamily: 'FranieVariableTest-Regular, sans-serif',
        width: '100%',
        height: '180px',
        padding: '0.5rem',
        gap: '0.5rem',
        marginBottom: '0.5rem',
        color: 'white',
        display: 'flex',
        outline: '1px solid #fff',
        borderRadius: '8px',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '0.75rem',
          paddingLeft: '2rem',
        }}
      >
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              padding: '2px',
              cursor: 'pointer',
              marginTop: '1rem',
              width: '2rem',
              filter:
                'invert(99%) sepia(98%) saturate(399%) hue-rotate(254deg) brightness(120%) contrast(100%)',
              outline: '2px solid black',
              borderRadius: '20%',
            }}
          />{' '}
          <Typography
            sx={{
              paddingLeft: '0.75rem',
              marginTop: '11px',
              color: 'white',
              fontFamily: 'FranieVariableTest-Regular, sans-serif',
              fontWeight: 700,
              lineHeight: 1.5,
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          >
            Lissen
          </Typography>
        </a>
      </Grid>

      <Grid
        sx={{
          color: '#b3b3b3',
          width: '270px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '0.75rem',
          paddingLeft: '2rem',
          '&:hover': {
            color: 'white',
            '& .MuiSvgIcon-root, & .MuiTypography-root': {
              color: 'white',
            },
          },
        }}
      >
        <HomeOutlinedIcon sx={{ width: '1.5rem', color: 'inherit' }} />
        <Typography
          sx={{
            color: 'inherit',
            fontFamily: 'FranieVariableTest-Regular, sans-serif',
            fontWeight: 700,
            lineHeight: 1.5,
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          Accueil
        </Typography>
      </Grid>

      <Grid
        sx={{
          color: '#b3b3b3',
          width: '270px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '0.75rem',
          paddingLeft: '2rem',
          '&:hover': {
            color: 'white',
            '& .MuiSvgIcon-root, & .MuiTypography-root': {
              color: 'white',
            },
          },
        }}
      >
        <SearchRoundedIcon sx={{ width: '1.5rem', color: 'inherit' }} />
        <Typography
          sx={{
            color: 'inherit',
            fontFamily: 'FranieVariableTest-Regular, sans-serif',
            fontWeight: 700,
            lineHeight: 1.5,
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          Rechercher
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
