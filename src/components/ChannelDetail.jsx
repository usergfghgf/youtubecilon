import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet,statistics&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh" sx={{ bgcolor: 'background.default' }}>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, #ff0000 0%, #3f51b5 100%)',
          height: '200px',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ p: 3 }}>
          <Videos videos={videos} />
        </Box>
      </Container>
    </Box>
  );
};

export default ChannelDetail;