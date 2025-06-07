import { Stack, Box, Typography, IconButton } from '@mui/material';
import { Search, YouTube } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1.5}
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      bgcolor: 'rgba(18, 18, 18, 0.95)', // Slightly darker with higher transparency
      backdropFilter: 'blur(10px)', // Enhanced blur for a cleaner look
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Softer shadow for depth
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255,255,255,0.1)', // Subtle border for separation
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <YouTube sx={{ fontSize: 36, color: '#ff0000', transition: 'color 0.3s' }} />
      <Typography
        variant="h6"
        fontWeight={600}
        ml={1}
        color="text.primary"
        sx={{
          letterSpacing: '0.5px',
          '&:hover': { color: '#ff0000', transition: 'color 0.3s' },
        }}
      >
        YouTube
      </Typography>
    </Link>
    <Box sx={{ flex: 1, px: 3, display: 'flex', justifyContent: 'center' }}>
      <SearchBar sx={{ width: '100%', maxWidth: '900px' }} />
    </Box>
    <IconButton sx={{ display: { xs: 'block', sm: 'none' }, color: 'text.primary' }}>
      <Search />
    </IconButton>
  </Stack>
);

export default Navbar;