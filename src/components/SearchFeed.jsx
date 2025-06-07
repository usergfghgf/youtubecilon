import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, bgcolor: 'background.default', p: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="text.primary">
        Search Results for: <span style={{ color: '#ff0000' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;