import { Stack, Button } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction={{ xs: 'row', md: 'column' }}
    sx={{
      overflowY: { xs: 'auto', md: 'auto' }, // Scroll horizontally on mobile, vertically on desktop
      overflowX: { xs: 'auto', md: 'hidden' },
      height: { xs: 'auto', md: '100%' },
      bgcolor: 'background.paper',
      p: 1,
      flexWrap: { xs: 'nowrap', md: 'wrap' }, // Prevent wrapping on mobile
      whiteSpace: { xs: 'nowrap', md: 'normal' }, // Prevent text wrapping on mobile
    }}
  >
    {categories.map((category) => (
      <Button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        sx={{
          justifyContent: 'flex-start',
          color: selectedCategory === category.name ? '#ff0000' : 'text.primary',
          bgcolor: selectedCategory === category.name ? 'action.selected' : 'transparent',
          borderRadius: 2,
          mb: { xs: 0, md: 1 },
          mr: { xs: 1, md: 0 },
          textTransform: 'capitalize',
          minWidth: 'fit-content', // Ensure buttons don't shrink too much on mobile
        }}
        startIcon={<category.icon />}
      >
        {category.name}
      </Button>
    ))}
  </Stack>
);

export default Sidebar;