import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ sx }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: 25,
        bgcolor: 'rgba(255,255,255,0.05)', // Subtle background for input
        border: '1px solid rgba(255,255,255,0.15)', // Clean border
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Subtle shadow
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.1)',
          borderColor: 'rgba(255,255,255,0.3)',
        },
        ...sx,
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: 'text.primary',
          fontSize: '1rem',
          '& .MuiInputBase-input': {
            '&::placeholder': {
              color: 'text.secondary',
              opacity: 0.7,
              fontStyle: 'italic',
            },
          },
        }}
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: '8px',
          color: 'text.primary',
          '&:hover': { color: '#ff0000', transition: 'color 0.3s' },
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;