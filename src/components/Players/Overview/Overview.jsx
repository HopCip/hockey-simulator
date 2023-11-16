import OverviewLayout from './OverviewLayout';
import { Box, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          marginY: '1.5em',
          paddingBottom: '1.5em',
        }}
      >
        <Box
          sx={{
            background: '#1976D2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: '2em',
          }}
        >
          <Typography variant="h4" color={'white'}>
            Prehľad
          </Typography>
        </Box>
        <OverviewLayout></OverviewLayout>
      </Box>
    </Box>
  );
};

export default Overview;
