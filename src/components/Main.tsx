import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ArtistsCards from './Artists';
import AlbumsCards from './Albums';

const Main = () => {
  return (
    <Grid container>
      <ArtistsCards />
      <AlbumsCards />
    </Grid>
  );
};

export default Main;
